"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Grid, User, FileText, Mail, MessageSquare } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden rounded-full">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
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
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="rounded-full">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#home"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors"
                >
                  <Home className="h-5 w-5 text-primary" />
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors"
                >
                  <Grid className="h-5 w-5 text-primary" />
                  <span className="font-medium">Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors"
                >
                  <User className="h-5 w-5 text-primary" />
                  <span className="font-medium">About Me</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#resume"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors"
                >
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="font-medium">Resume</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="p-4 border-t">
            <Button asChild className="w-full rounded-xl bg-primary hover:bg-primary/90">
              <Link href="mailto:hello@johndoe.com" className="flex items-center justify-center gap-2">
                <span>Let's Talk</span>
                <MessageSquare className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

