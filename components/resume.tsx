import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animations/animated-section"

export function Resume() {
  const education = [
    {
      period: "2015 - 2016",
      title: "Drawing Concentration",
      institution: "New York Academy of Art",
      description: "Intensive drawing courses that present the fundamental principles of drawing.",
    },
    {
      period: "2019 - 2021",
      title: "UI/UX Design Specialization",
      institution: "California Institute of Arts",
      description: "Research, design, and prototype effective, visually-driven websites and apps.",
    },
    {
      period: "2022",
      title: "UI/UX Designer",
      institution: "Coursera",
      description: "This cource is about how to complete the design process from beginning to end.",
    },
  ]

  const experience = [
    {
      period: "2018 - 2019",
      title: "Illustrator",
      company: "Creative Mind",
      description: "I created original images for a range of digital and printed products.",
    },
    {
      period: "2019 - 2021",
      title: "Graphic Designer",
      company: "Moon Light",
      description: "My job was to create adverts, branding, signage and other media products.",
    },
    {
      period: "2021 - now",
      title: "UI/UX Designer",
      company: "Moon Light",
      description: "I am actively involved in creating user interfaces for mobile apps and websites.",
    },
  ]

  const tools = [
    { name: "Photoshop", icon: "/Icons/Adobe Photoshop.svg" },
    { name: "Figma", icon: "/Icons/Figma.svg" },
    { name: "Illustrator", icon: "/Icons/Adobe Illustrator.svg" },
    { name: "Sketch", icon: "/Icons/Sketch.svg" },
    { name: "Blender", icon: "/Icons/Blender.svg" },
    { name: "HTML5", icon: "/Icons/HTML5.svg" },
    { name: "CSS3", icon: "/Icons/CSS3.svg" },
    { name: "Notion", icon: "/Icons/Notion.svg" },
  ]

  const testimonials = [
    {
      name: "Alex Tomato",
      position: "Brand Manager in Instant Design",
      avatar: "/images/client2.png",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Dolore magna aliquam.",
    },
    {
      name: "Jenny Pineapple",
      position: "SEO in Creative People",
      avatar: "/images/client1.png",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud. Dolore magna aliquam.",
    },
  ]

  return (
    <section id="resume" className="py-16 md:py-20 border-t">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col gap-2 mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" className="h-3 w-3 fill-current">
              <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
            </svg>
            <span>Resume</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Education and practical experience
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-8 md:mb-12">
            Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be
            otherwise than what it might appear to others that what you were or
            <Link href="#0" className="text-primary hover:underline mx-1">
              might have been
            </Link>
            was not otherwise than what you had been would have appeared to them to be otherwise.
          </p>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection className="mb-12 md:mb-16" direction="left">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">My education</h3>
          <div className="space-y-6 md:space-y-8">
            {education.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 hover:bg-muted/20 p-3 md:p-4 rounded-xl transition-colors"
              >
                <div className="md:col-span-2">
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <div className="md:col-span-5">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm">
                    Course by{" "}
                    <Link href="#0" className="text-primary font-medium hover:underline" target="_blank">
                      {item.institution}
                    </Link>
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection className="mb-12 md:mb-16" direction="left">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Work experience</h3>
          <div className="space-y-6 md:space-y-8">
            {experience.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 hover:bg-muted/20 p-3 md:p-4 rounded-xl transition-colors"
              >
                <div className="md:col-span-2">
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <div className="md:col-span-5">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm">
                    in the{" "}
                    <Link href="#0" className="text-primary font-medium hover:underline" target="_blank">
                      {item.company}
                    </Link>{" "}
                    agency
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tools */}
        <AnimatedSection className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">My favourite tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 md:gap-4">
            {tools.map((tool, index) => (
              <Card key={index} className="border shadow-sm rounded-xl hover-scale">
                <CardContent className="p-3 md:p-4 flex flex-col items-center justify-center text-center">
                  <div className="relative h-10 w-10 md:h-12 md:w-12 mb-2">
                    <Image src={tool.icon || "/placeholder.svg"} alt={tool.name} fill className="object-contain" />
                  </div>
                  <p className="text-xs md:text-sm font-medium">{tool.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <div>
          <AnimatedSection className="flex flex-col gap-2 mb-6 md:mb-8">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" className="h-3 w-3 fill-current">
                <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
              </svg>
              <span>Testimonials</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Clients say about me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="airbnb-card border shadow-md">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative h-14 w-14 md:h-16 md:w-16 overflow-hidden rounded-full border border-primary/10">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position.split(" in ")[0]} in{" "}
                          <Link href="#0" className="text-primary font-medium hover:underline" target="_blank">
                            {testimonial.position.split(" in ")[1]}
                          </Link>
                        </p>
                        <div className="flex text-yellow-500 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{testimonial.text}</p>
                    <Link
                      href="#0"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Project Page
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
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

