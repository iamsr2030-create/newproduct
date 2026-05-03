"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight, ArrowRight } from "lucide-react"

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  icon?: "arrow" | "arrow-up" | "none"
  onClick?: () => void
}

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary",
  size = "md",
  icon = "arrow",
  onClick,
}: MagneticButtonProps) {
  const buttonRef = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = (e.clientX - centerX) * 0.15
    const y = (e.clientY - centerY) * 0.15
    
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    {
      "h-9 px-5 text-sm rounded-full": size === "sm",
      "h-11 px-7 text-sm rounded-full": size === "md",
      "h-14 px-10 text-base rounded-full": size === "lg",
    },
    {
      "bg-foreground text-background hover:bg-foreground/90": variant === "primary",
      "bg-muted text-foreground hover:bg-muted/80": variant === "secondary",
      "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background": variant === "outline",
      "text-foreground hover:bg-muted": variant === "ghost",
    },
    className
  )

  const iconElement = icon === "arrow-up" ? (
    <ArrowUpRight className={cn("transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5", {
      "h-3.5 w-3.5": size === "sm",
      "h-4 w-4": size === "md",
      "h-5 w-5": size === "lg",
    })} />
  ) : icon === "arrow" ? (
    <ArrowRight className={cn("transition-transform duration-300 group-hover:translate-x-1", {
      "h-3.5 w-3.5": size === "sm",
      "h-4 w-4": size === "md",
      "h-5 w-5": size === "lg",
    })} />
  ) : null

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(baseStyles, "group cursor-pointer")}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <span className="relative z-10">{children}</span>
      {iconElement}
      
      {/* Hover background effect */}
      <span className="absolute inset-0 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}

// Circle button for scroll indicators or CTAs
interface CircleButtonProps {
  children?: React.ReactNode
  href?: string
  className?: string
  size?: "sm" | "md" | "lg"
  onClick?: () => void
}

export function CircleButton({
  children,
  href,
  className,
  size = "md",
  onClick,
}: CircleButtonProps) {
  const buttonRef = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const x = (e.clientX - centerX) * 0.2
    const y = (e.clientY - centerY) * 0.2
    
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16",
    lg: "h-20 w-20",
  }

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "relative flex items-center justify-center rounded-full border-2 border-foreground text-foreground cursor-pointer",
        "transition-all duration-300 hover:bg-foreground hover:text-background group",
        sizeClasses[size],
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children || <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
