import type React from "react"
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
}

export function StaggerContainer({ children, className = "" }: StaggerContainerProps) {
  return <div className={`stagger-animation ${className}`}>{children}</div>
}

