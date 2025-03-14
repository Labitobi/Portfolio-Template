"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  distance?: number
  direction?: "up" | "down" | "left" | "right"
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  distance = 50,
  direction = "up",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active")
            }, delay)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay])

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`
      case "down":
        return `translateY(-${distance}px)`
      case "left":
        return `translateX(${distance}px)`
      case "right":
        return `translateX(-${distance}px)`
      default:
        return `translateY(${distance}px)`
    }
  }

  return (
    <div
      ref={sectionRef}
      className={`reveal ${className}`}
      style={{
        transform: getTransform(),
      }}
    >
      {children}
    </div>
  )
}

