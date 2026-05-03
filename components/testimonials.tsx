"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

const testimonials = [
  {
    quote: "Working with this team has been transformative for our brand. Their attention to detail and creative vision exceeded our expectations at every turn.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "The level of professionalism and creativity brought to our project was exceptional. They truly understood our vision and brought it to life beautifully.",
    author: "Michael Torres",
    role: "Founder, Startup Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "An incredible partner for any digital project. Their strategic approach combined with flawless execution delivered results beyond our expectations.",
    author: "Emily Watson",
    role: "Marketing Director, Bloom Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <Section className="bg-muted/30">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Content */}
        <div>
          <Reveal>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Testimonials
            </span>
          </Reveal>
          <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
            What clients say
          </AnimatedHeading>

          {/* Quote */}
          <div className="mt-12 relative">
            <Quote className="absolute -top-2 -left-2 h-12 w-12 text-accent/20" />
            
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn(
                  "relative pl-8 text-xl md:text-2xl leading-relaxed text-foreground/90"
                )}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                &ldquo;{activeTestimonial.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8 pl-8 flex items-center gap-4"
            >
              <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-background">
                <Image
                  src={activeTestimonial.image}
                  alt={activeTestimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">{activeTestimonial.author}</p>
                <p className="text-sm text-muted-foreground">{activeTestimonial.role}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pl-8 flex items-center gap-4">
            <button
              onClick={goToPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goToNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="ml-4 text-sm text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Right: Large Image or Decorative Element */}
        <Reveal direction="right" delay={0.2}>
          <div className="relative aspect-square max-w-lg mx-auto lg:ml-auto">
            {/* Decorative circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-border" />
              <div className="absolute w-[85%] h-[85%] rounded-full border border-border" />
              <div className="absolute w-[70%] h-[70%] rounded-full border border-border" />
            </div>
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl md:text-9xl font-medium text-foreground/10" style={{ fontFamily: 'var(--font-display)' }}>
                  {testimonials.length}
                </span>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mt-2">
                  Happy Clients
                </p>
              </div>
            </div>

            {/* Floating avatars */}
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={cn(
                  "absolute h-16 w-16 rounded-full overflow-hidden ring-4 ring-background transition-all duration-500",
                  index === 0 && "top-0 left-1/2 -translate-x-1/2",
                  index === 1 && "bottom-8 left-8",
                  index === 2 && "bottom-8 right-8",
                  activeIndex === index ? "scale-125 ring-accent" : "opacity-50"
                )}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
