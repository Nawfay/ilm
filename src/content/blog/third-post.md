---
title: 'Third post'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 22 2022'
heroImage: '../../assets/blog-placeholder-2.jpg'
---

# Dimmcie 
(*/ˈdɪm.tʃi/*) (dimm chi)
_Minecraft Server on Demand_

Dimmcie is software that dynamically starts your Minecraft server when there is player activity and shuts it down when idle. This helps reduce power consumption and saves CPU resources.

---

### How Does It Work?

Dimmcie runs a placeholder server. When a player joins, the placeholder server checks the player against the whitelist. If the player is allowed, Dimmcie spins up the main Minecraft server (hosted in a Docker container). Every few minutes (defined by an environment variable), it checks server activity; if the server is empty, Dimmcie shuts it down.

---

## Dimmcie Deployment

To deploy Dimmcie, you will need two services defined in a Docker Compose file.

### Environment Variables

```yml
environment:
  - PORT=25569               
  - SERVERSHUTDOWNLIMIT=60000
  - CONTAINERNAME=minecraft-server
  - PATHTOWHITELIST=/whitelist.json
  - CRON=*/1 * * * *
```

- **PORT**: The port the Minecraft server will use. Do **not** use the default port 25565, because the Gate proxy listens on that port.  
- **SERVERSHUTDOWNLIMIT**: How long (in milliseconds) to wait before shutting down the server when it is empty.  
- **CONTAINERNAME**: The name of the container running the Minecraft server (refer to unimc-docker).  
- **PATHTOWHITELIST**: The file path to the whitelist.  
- **CRON**: How often Dimmcie checks the server status (in CRON format). See this [cron generator](https://crontab.cronhub.io/) for help.

---

## Gate Proxy Lite Deployment

Below is a sample configuration for the Gate proxy. For a more extensive example, see the Gate documentation.  

When configuring the backend servers, ensure the first address is for the main Minecraft server, and the second address **must** be `localhost:25567` (the placeholder server).

```yml
config:
  bind: 0.0.0.0:25565
  lite:
    enabled: true
    routes:
      # Match the virtual host address to the backend server.
      - host: localhost
        # The backend servers to connect to if matched.
        backend: [localhost:25569, localhost:25567]
        cachePingTTL: -1
        
        fallback:
          motd: |
            §cServer is offline.
            §fCheck back later or contact admin
          version:
            name: '§cSomething went wrong'
            protocol: -1
```

---

## Docker Compose Example

```yml
services:
  dimmcie:
    image: dimmcie
    container_name: dimmcie
    network_mode: host
    working_dir: /app
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - DIR-TO-MC/whitelist.json:/whitelist.json
    environment:
      - PORT=25569
      - SERVERSHUTDOWNLIMIT=60000
      - CONTAINERNAME=minecraft-server
      - PATHTOWHITELIST=/whitelist.json
      - CRON=*/1 * * * *

  proxy:
    image: ghcr.io/minekube/gate:latest
    container_name: minecraft-proxy
    restart: unless-stopped
    network_mode: host
    volumes:
      - DIR-TO-CONFIG/config.yml:/config.yml
```

---

## Images

### Server Sleep Page  
![Sleep page](https://imgur.com/HoabsMy.png)

### Server Wake Page  
![Wake page](https://imgur.com/2fCVG8g.png)