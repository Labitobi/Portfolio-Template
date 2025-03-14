"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Dribbble, DribbbleIcon as Behance, Instagram, Twitch, PinIcon as Pinterest, Send } from "lucide-react"
import { AnimatedSection } from "./animations/animated-section"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    if (formError) {
      setFormError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormError(error instanceof Error ? error.message : "Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 border-t">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col gap-2 mb-8 md:mb-12 text-center">
          <div className="flex items-center gap-2 text-sm font-medium text-primary justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" className="h-3 w-3 fill-current">
              <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z" />
            </svg>
            <span>Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Let's make something awesome together!
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-2">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </AnimatedSection>

        {/* Contact Form */}
        <AnimatedSection className="max-w-3xl mx-auto mb-8 md:mb-16">
          {isSubmitted ? (
            <div className="text-center p-4 sm:p-6 md:p-8 bg-secondary rounded-xl animate-scaleIn">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <path d="M9 9h.01" />
                  <path d="M15 9h.01" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Done!</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Thanks for your message. I'll get back as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {formError && (
                <div className="p-3 sm:p-4 bg-destructive/10 text-destructive rounded-xl text-xs sm:text-sm">
                  {formError}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-input h-10 sm:h-12 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formState.company}
                    onChange={handleChange}
                    className="rounded-xl border-input h-10 sm:h-12 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-input h-10 sm:h-12 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-input h-10 sm:h-12 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="A Few Words*"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[100px] sm:min-h-[120px] rounded-xl border-input text-sm"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="gap-2 rounded-xl bg-primary hover:bg-primary/90 transition-all shadow-md hover:shadow-lg w-full sm:w-auto text-sm sm:text-base"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                <Send className={`h-4 w-4 ${isSubmitting ? "animate-pulse" : ""}`} />
              </Button>
            </form>
          )}
        </AnimatedSection>

        {/* Social Media */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-16">
          {[
            { name: "Dribbble", icon: <Dribbble /> },
            { name: "Behance", icon: <Behance /> },
            { name: "Instagram", icon: <Instagram /> },
            { name: "Twitch", icon: <Twitch /> },
            { name: "Pinterest", icon: <Pinterest /> },
          ].map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 100}>
              <Card className="airbnb-card border shadow-sm hover-scale">
                <CardContent className="p-3 sm:p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-primary mb-2 transition-transform duration-300 hover:scale-110">{item.icon}</div>
                  <Link
                    href={`https://${item.name.toLowerCase()}.com/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Teaser */}
        <AnimatedSection className="text-center mb-8 md:mb-16">
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Want to know more about me, tell me about your project or just to say hello?{" "}
            <Link href="mailto:hello@johndoe.com" className="text-primary font-medium hover:underline">
              Drop me a line
            </Link>{" "}
            and I'll get back as soon as possible.
          </p>
        </AnimatedSection>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              title: "Location",
              value: "Carlifonia, USA",
              href: "https://www.google.com/maps/place/California,+USA/@37.1514612,-124.5948433,6z/data=!3m1!4b1!4m6!3m5!1s0x808fb9fe5f285e3d:0x8b5109a227086f55!8m2!3d36.778261!4d-119.4179324!16zL20vMDFuN3E?entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoASAFQAw%3D%3D",
            },
            {
              title: "Phone",
              value: "+555-555-5555",
              href: "tel:+5555555555",
            },
            {
              title: "Email",
              value: "hello@johndoe.com",
              href: "mailto:hello@johndoe.com",
            },
          ].map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100} className="text-center">
              <p className="text-sm font-medium mb-2">{item.title}</p>
              <Link
                href={item.href}
                target={item.title === "Location" ? "_blank" : undefined}
                rel={item.title === "Location" ? "noopener noreferrer" : undefined}
                className="text-primary font-medium hover:underline text-sm sm:text-base"
              >
                {item.value}
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

