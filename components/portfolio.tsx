import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animations/animated-section"
import { ExternalLink, Github } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Isometric House",
      image: "images/isometrichouse.png",
      tags: ["Illustrations", "3D Render"],
      description: "A detailed 3D isometric house design created for a real estate visualization project.",
      demoUrl: "https://example.com/project1",
      githubUrl: "https://github.com/johndoe/project1",
      featured: true,
    },
    {
      id: 2,
      title: "Dashboard Template",
      image: "images/dashboard.png",
      tags: ["UI Design", "Figma"],
      description: "A modern dashboard template designed for analytics platforms with dark and light mode support.",
      demoUrl: "https://example.com/project2",
      githubUrl: "https://github.com/johndoe/project2",
      featured: true,
    },
    {
      id: 3,
      title: "Notification Icon",
      image: "images/notification-icon.png",
      tags: ["Illustrations", "3D Render"],
      description: "A custom notification icon set designed for a mobile application with animated states.",
      demoUrl: "https://example.com/project3",
      githubUrl: "https://github.com/johndoe/project3",
      featured: false,
    },
    {
      id: 4,
      title: "Smart Penguin",
      image: "images/smart-penguin.png",
      tags: ["Illustrations", "AI Experiment"],
      description: "An AI-generated penguin character designed for an educational platform for children.",
      demoUrl: "https://example.com/project4",
      githubUrl: "https://github.com/johndoe/project4",
      featured: true,
    },
    {
      id: 5,
      title: "E-commerce App",
      image: "images/ecommerce.png",
      tags: ["UI Design", "React Native"],
      description: "A complete e-commerce mobile app design with shopping cart, checkout, and payment integration.",
      demoUrl: "https://example.com/project5",
      githubUrl: "https://github.com/johndoe/project5",
      featured: true,
    },
    {
      id: 6,
      title: "Travel Blog",
      image: "images/travel-blog.png",
      tags: ["Web Design", "WordPress"],
      description: "A responsive travel blog design with custom post types and interactive map integration.",
      demoUrl: "https://example.com/project6",
      githubUrl: "https://github.com/johndoe/project6",
      featured: false,
    },
    {
      id: 7,
      title: "Portfolio Website",
      image: "images/portfolio.png",
      tags: ["Web Design", "React"],
      description: "A personal portfolio website showcasing various projects and skills.",
      demoUrl: "https://example.com/project7",
      githubUrl: "https://github.com/johndoe/project7",
      featured: false,
    },
  ]

  // Filter featured projects
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="portfolio" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col gap-2 mb-8 md:mb-12 text-center">
          <div className="flex items-center gap-2 text-sm font-medium text-primary justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" className="h-3 w-3 fill-current">
              <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
            </svg>
            <span>Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            A selection of my recent work across various design disciplines and technologies.
          </p>
        </AnimatedSection>

        {/* Featured Projects - Larger display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 mb-12 md:mb-16">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 150} className="h-full">
              <Card className="h-full overflow-hidden border-0 shadow-lg group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                      <Button asChild size="sm" variant="secondary" className="rounded-full text-xs sm:text-sm">
                        <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-full bg-background/20 backdrop-blur-sm text-xs sm:text-sm"
                      >
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="rounded-full text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Projects - Smaller display */}
        <h3 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8 text-center">Other Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {otherProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100} className="h-full">
              <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-lg transition-all group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="rounded-full text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 sm:mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="ghost" className="h-7 sm:h-8 px-2 sm:px-3 text-xs">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="h-7 sm:h-8 px-2 sm:px-3 text-xs">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

