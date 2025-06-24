import { Github, Linkedin, Twitter } from "lucide-react"
import { RiBlueskyLine } from "react-icons/ri";
import { Button } from "./button"


interface HeaderProps {
  siteTitle: string;
}

export function Header({ siteTitle }: HeaderProps) {
  return (
    <header className="border-b ">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-4xl">
        <h1 className="text-lg font-medium">{siteTitle}</h1>
        <div className="flex items-center gap-2">
          {/* <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/nawaf-ahmed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://bsky.app/profile/nawfay.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
              <RiBlueskyLine className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Nawfay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
          </Button> */}

          <span className="p-2">
            <a href="">
                <h3>writing</h3>
            </a>
          </span>
          <span className="p-2">
            <a href="">
                <h3>philosophy</h3>
            </a>
          </span>
          <span className="p-2">
            <a href="">
                <h3>pokemon</h3>
            </a>
          </span>



          
        </div>
      </div>
    </header>
  )
}

