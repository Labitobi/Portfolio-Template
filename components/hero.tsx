import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Mail, Github, Linkedin, Twitter } from "lucide-react"
import { StaggerContainer } from "./animations/stagger-container"

export function Hero() {
  return (
    <section id="home" className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />   
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start gap-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" className="h-3 w-3 fill-current">
                <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
              </svg>
              <span>UI/UX Designer & Frontend Developer</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              I'm John Doe
              <span className="block text-primary">Software Developer</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-md">
              Creating beautiful, functional digital experiences that help businesses connect with their audience and
              achieve their goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="gap-2 rounded-xl bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
              >
                <Link href="#portfolio">
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 rounded-xl hover:bg-secondary transition-all w-full sm:w-auto"
              >
                <Link href="/john-doe-cv.pdf" target="_blank" download>
                  <span>Download CV</span>
                  <Download className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
              <Link
                href="mailto:hello@johndoe.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-background shadow-xl">
              <Image
                src="placeholder.png"
                alt="John Doe"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Stats cards - hidden on very small screens */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-background rounded-xl shadow-lg p-3 sm:p-4 animate-bounce-slow hidden xs:block">
              <p className="text-xl sm:text-3xl font-bold text-primary">40+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
            </div>

            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-background rounded-xl shadow-lg p-3 sm:p-4 animate-bounce-slow animation-delay-500 hidden xs:block">
              <p className="text-xl sm:text-3xl font-bold text-primary">50+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

