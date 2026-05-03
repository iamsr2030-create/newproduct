'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"
import { Reveal, AnimatedHeading } from "@/components/animated-text"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  parallax?: boolean
  parallaxSpeed?: number
}

export function Section({ 
  children, 
  className, 
  id,
  parallax = false,
  parallaxSpeed = 0.5 
}: SectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40])

  return (
    <motion.section
      ref={ref}
      id={id}
      className={cn("py-20 md:py-32", className)}
      style={parallax ? { opacity, y } : {}}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </motion.section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  label?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({
  title,
  subtitle,
  label,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {label && (
        <Reveal>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            {label}
          </span>
        </Reveal>
      )}
      <AnimatedHeading
        as="h2"
        className="mt-4 text-4xl md:text-5xl font-medium"
        delay={0.1}
      >
        {title}
      </AnimatedHeading>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
