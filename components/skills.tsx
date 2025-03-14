import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./animations/animated-section"
import { Code, PaintBucket, Figma, Smartphone, LineChart, Lightbulb, Layers, Palette } from "lucide-react"

export function Skills() {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      description: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS",
      level: 90,
    },
    {
      name: "UI/UX Design",
      icon: <PaintBucket className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      description: "User research, wireframing, prototyping, usability testing",
      level: 85,
    },
    {
      name: "Design Tools",
      icon: <Figma className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      description: "Figma, Adobe XD, Photoshop, Illustrator, Sketch",
      level: 80,
    },
    {
      name: "Responsive Design",
      icon: <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      description: "Mobile-first approach, cross-browser compatibility",
      level: 95,
    },
    {
      name: "Analytics",
      icon: <LineChart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      description: "Google Analytics, Hotjar, user behavior analysis",
      level: 75,
    },
    {
      name: "Creative Thinking",
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      description: "Problem-solving, innovation, design thinking",
      level: 90,
    },
    {
      name: "3D Design",
      icon: <Layers className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      description: "Blender, Three.js, WebGL, 3D modeling",
      level: 70,
    },
    {
      name: "Color Theory",
      icon: <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />,
      description: "Color psychology, accessibility, brand identity",
      level: 85,
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col gap-2 mb-8 md:mb-12 text-center">
          <div className="flex items-center gap-2 text-sm font-medium text-primary justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" className="h-3 w-3 fill-current">
              <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
            </svg>
            <span>My Skills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Expertise & Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            I've developed a diverse set of skills throughout my career, allowing me to create comprehensive digital
            solutions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} delay={index * 100} className="h-full">
              <Card className="h-full hover:shadow-md transition-all border-0 shadow-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">{skill.description}</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                    />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                    <span>Beginner</span>
                    <span>Expert</span>
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

