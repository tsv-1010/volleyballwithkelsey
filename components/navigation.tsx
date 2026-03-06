"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Volleyball } from "lucide-react"
import { useTheme } from "@/lib/theme-context"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "About", id: "about" },
    { label: "Training", id: "pricing" },
    { label: "Process", id: "success-path" },
    { label: "Location", id: "location" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-stone-900/95 backdrop-blur-md shadow-sm border-b border-stone-200/50 dark:border-stone-700/50" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
              isScrolled 
                ? "bg-[#185FAD]" 
                : "bg-white/20 backdrop-blur-sm"
            }`}>
              <Volleyball className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col items-start">
              <span className={`font-medium text-lg leading-tight tracking-tight font-[family-name:var(--font-playfair)] transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}>
                Volleyball
              </span>
              <span className={`text-xs font-medium leading-tight transition-colors ${
                isScrolled ? "text-[#185FAD]" : "text-white/80"
              }`}>
                with Kelsey
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[14px] font-medium transition-colors hover:text-[#185FAD] ${
                  isScrolled ? "text-foreground/80" : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? "text-foreground/60 hover:bg-stone-100 dark:hover:bg-stone-800" 
                  : "text-white/60 hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )
              ) : (
                <div className="h-4 w-4" />
              )}
            </button>

            {/* CTA Button */}
            <Button
              variant="outline"
              onClick={() => scrollToSection("booking")}
              className={`font-medium ${
                isScrolled 
                  ? "border-[#185FAD] text-[#185FAD] hover:bg-[#185FAD] hover:text-white" 
                  : "border-white text-white hover:bg-white hover:text-[#185FAD]"
              }`}
            >
              Book Training
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isScrolled ? "text-foreground/60" : "text-white/60"}`}
              aria-label="Toggle theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )
              ) : (
                <div className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? "text-foreground" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-stone-900 border-t border-stone-200 dark:border-stone-700">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-[14px] font-medium text-foreground/80 hover:text-[#185FAD] border-b border-stone-100 dark:border-stone-800"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection("booking")}
                className="w-full border-[#185FAD] text-[#185FAD] hover:bg-[#185FAD] hover:text-white font-medium py-6"
              >
                Book Training
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
