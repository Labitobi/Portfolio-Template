import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle } from "lucide-react"
import { AnimatedSection } from "./animations/animated-section"

export function About() {
  const services = [
    {
      title: "Frontend Development",
      tags: ["UI/UX Design", "Design to Code"],
      description:
        "I work with HTML/CSS, React, Next.js and other modern frameworks to build responsive, accessible websites.",
      image: "images/frontend.png",
    },
    {
      title: "Digital Art & Design",
      tags: ["Illustrations", "AI Experiments"],
      description:
        "I use Adobe Photoshop, Fresco and Blender to create illustrations and 3D renders for my clients and stocks.",
      image: "images/design.png",
    },
    {
      title: "SEO & Digital Marketing",
      tags: ["Social Media", "Analytics"],
      description:
        "Social media content plans, media monitoring, email and text messaging and search engine optimization.",
      image: "images/seo.png",
    },
    {
      title: "Brand Identity",
      tags: ["Logo Design", "Style Guides"],
      description: "I help my clients to develop a personality and brand voice, design the brand look and logo.",
      image: "images/brand.png",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <AnimatedSection direction="left" className="flex justify-center lg:justify-start">
            <div className="relative max-w-sm">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.png?height=800&width=600"
                  alt="John Doe"
                  width={600}
                  height={800}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-primary text-primary-foreground rounded-xl shadow-lg p-3 sm:p-4 animate-bounce-slow">
                <p className="text-xl sm:text-3xl font-bold">2+</p>
                <p className="text-xs sm:text-sm">Years Experience</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left">
            <div className="flex items-center gap-2 text-sm font-medium text-primary justify-center lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" className="h-3 w-3 fill-current">
                <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
              </svg>
              <span>About Me</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Turning complex problems into simple design solutions
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground">
              I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? I
              almost think I can remember feeling a little different. But if I'm not the same, the next question is 'Who
              in the world am I?' Ah, that's the great puzzle!
            </p>

            <p className="text-base sm:text-lg text-muted-foreground">
              Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be
              otherwise than what it might appear to others that what you were or might have been was not otherwise than
              what you had been would have appeared to them to be otherwise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-2 text-left">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">User-Centered Design</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Creating experiences that people love</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-left">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Responsive Development</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Websites that work on any device</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-left">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Creative Solutions</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Innovative approaches to problems</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-left">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Performance Optimization</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Fast, efficient digital experiences</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="gap-2 rounded-xl bg-primary hover:bg-primary/90 shadow-md">
                <Link href="/john-doe-cv.pdf" download>
                  <span>Download CV</span>
                  <Download className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline" className="gap-2 rounded-xl">
                <Link href="#contact">
                  <span>Contact Me</span>
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Services */}
        <div className="mt-16 md:mt-24">
          <AnimatedSection className="text-center mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Services I Offer</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              I provide comprehensive design and development services to help businesses establish their online
              presence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <Card className="h-full border shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold">{service.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="rounded-full text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-all duration-500 hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

