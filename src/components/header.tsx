import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@components/button"
import { HEADER_LINKS } from "@consts"
import { ThemeToggle } from "@components/theme/theme-toggle"

interface HeaderProps {
  siteTitle: string
}

export function Header({ siteTitle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 max-w-4xl items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-lg ">{siteTitle}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
          {HEADER_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="hover:text-primary transition-colors">
              {label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium">
            {HEADER_LINKS.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setIsMenuOpen(false)} className="hover:text-primary">
                {label}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      )}

   
    </header>
  )
}
