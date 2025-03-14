"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, MessageSquare, Home, Grid, User, FileText, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Check if dark mode is enabled in localStorage or system preference on mount
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)

    if (isDark) {
      document.documentElement.classList.add("dark")
      setIsDarkMode(true)
    }
  }, [])

  // Update localStorage when dark mode changes
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }, [isDarkMode])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { href: "#home", label: "Home", icon: <Home className="h-4 w-4" /> },
    { href: "#portfolio", label: "Portfolio", icon: <Grid className="h-4 w-4" /> },
    { href: "#skills", label: "Skills", icon: <FileText className="h-4 w-4" /> },
    { href: "#about", label: "About", icon: <User className="h-4 w-4" /> },
    { href: "#resume", label: "Resume", icon: <FileText className="h-4 w-4" /> },
    { href: "#contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-primary/10">
            <svg
              id="logo-88"
              width="100%"
              height="100%"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255L22.2222 32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067L22.2222 9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z"
                fill="hsl(355, 90%, 54%)"
              ></path>
            </svg>
          </div>
          <span className="font-bold text-lg">John Doe</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 transition-transform duration-300 rotate-0 hover:rotate-90" />
            ) : (
              <Moon className="h-5 w-5 transition-transform duration-300 rotate-0 hover:-rotate-90" />
            )}
          </Button>

          <Button
            asChild
            variant="default"
            className="hidden md:flex rounded-xl bg-primary hover:bg-primary/90"
          >
            <Link
              href="mailto:hello@johndoe.com"
              className="flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <MessageSquare className="h-4 w-4" />
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border border-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 85 85"
                        className="h-full w-full text-primary"
                        fill="currentColor"
                      >
                        <path d="M51,0H34C15.2,0,0,15.2,0,34v17c0,14.3,8.9,26.6,21.4,31.6c0,0,0,0,0,0l0,0C25.3,84.1,29.5,85,34,85h17c6,0,11.7-1.6,16.6-4.3c0.1-0.1,0.2-0.1,0.3-0.2C78.1,74.6,85,63.6,85,51V34C85,15.2,69.8,0,51,0z M83,51c0,10.7-5.3,20.2-13.4,26v-2.5v-3.9h3.9v-3.9h-3.9v-3.9h3.9v-3.9h-3.9H67v-3.9V51h-3.9v3.9v3.9h2.6v3.9v3.9v3.9h-3.9h-3.9v3.9h3.9h3.9v3.9v1C61.3,81.7,56.3,83,51,83H34c-4.5,0-8.7-0.9-12.6-2.6v-2v-3.9h3.9h3.9v-3.9h-3.9h-3.9v-3.9v-3.9v-3.9H24v-3.9V51h-3.9v3.9v3.9h-2.6h-3.9v3.9h3.9v3.9h-3.9v3.9h3.9v3.9v3.9C8.2,72.8,2,62.6,2,51V34C2,16.4,16.4,2,34,2h17c17.6,0,32,14.4,32,32V51z M50.1,54.9H54v3.9v3.9h-3.9v-3.9V54.9z M33.1,54.9H37v3.9v3.9h-3.9v-3.9V54.9z M27.9,51H24v-3.9v-3.9v-3.9h3.9v3.9v3.9V51z M31.8,39.3h-3.9v-3.9h3.9V39.3z M31.8,43.2v-3.9h3.9v3.9H31.8z M63.1,47.1V51h-3.9v-3.9v-3.9v-3.9h3.9v3.9V47.1z M35.7,47.1v-3.9h3.9h3.9h3.9h3.9v3.9h-3.9h-3.9h-3.9H35.7z M59.2,39.3h-3.9v-3.9h3.9V39.3z M55.3,43.2h-3.9v-3.9h3.9V43.2z" />
                      </svg>
                    </div>
                    <span className="font-medium">John Doe</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full"
                  >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>

                <nav className="flex-1 p-4">
                  <ul className="space-y-4">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors"
                        >
                          <span className="text-primary">{link.icon}</span>
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="p-4 border-t">
                  <Button
                    asChild
                    className="w-full rounded-xl bg-primary hover:bg-primary/90"
                  >
                    <Link
                      href="mailto:hello@johndoe.com"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Let's Talk</span>
                      <MessageSquare className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

