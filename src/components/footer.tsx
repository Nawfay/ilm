import { RiBlueskyLine } from "react-icons/ri";
import { Button } from "./button";
import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p> 🫎 moose -
            <i> ottawa, toronto</i>
          </p>
          <p>2025 • Nawaf Ahmed</p>
          <span>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://bsky.app/profile/nawfay.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky">
                <RiBlueskyLine className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Nawfay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </span>
        </div>
      </div>
    </footer>
  )
}
