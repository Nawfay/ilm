import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@components/button"

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(typeof window !== "undefined" && localStorage.getItem("theme") === "light" ? "light" : "dark")

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
