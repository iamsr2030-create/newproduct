import { cn } from "@/lib/utils"
import { Reveal, AnimatedHeading } from "@/components/animated-text"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
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
