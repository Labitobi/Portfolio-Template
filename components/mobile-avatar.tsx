import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Dribbble, DribbbleIcon as Behance, Twitch, PinIcon as Pinterest } from "lucide-react"

export function MobileAvatar() {
  return (
    <div className="lg:hidden border-b py-6 px-4">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-primary/10">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="John Doe"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-muted-foreground">UI/UX designer and frontend developer</p>
            <p className="text-xs text-muted-foreground">Odesa, Ukraine</p>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <Link
              href="https://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Dribbble className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Behance className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.twitch.tv/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Twitch className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Pinterest className="h-4 w-4" />
            </Link>
          </div>

          <Button asChild className="w-full max-w-xs rounded-xl bg-primary hover:bg-primary/90">
            <Link href="#contact">Let's Work Together!</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

