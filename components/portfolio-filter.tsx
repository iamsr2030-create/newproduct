"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/animated-text"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["All", "Branding", "Web Design", "Development", "UI/UX"]

const projects = [
  {
    id: 1,
    title: "Minimalist Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop",
    href: "/portfolio/1",
    year: "2024",
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    href: "/portfolio/2",
    year: "2024",
  },
  {
    id: 3,
    title: "Mobile App Interface",
    category: "Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    href: "/portfolio/3",
    year: "2023",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    href: "/portfolio/4",
    year: "2023",
  },
  {
    id: 5,
    title: "Corporate Website Redesign",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    href: "/portfolio/5",
    year: "2023",
  },
  {
    id: 6,
    title: "Visual Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    href: "/portfolio/6",
    year: "2022",
  },
]

interface PortfolioFilterProps {
  showAll?: boolean
}

export function PortfolioFilter({ showAll = false }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [hoveredProject, setHoveredProject] = React.useState<number | null>(null)

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <div className="space-y-16">
      {/* Premium Filter Section */}
      <Reveal>
        <div className="flex flex-col items-center gap-8">
          {/* Filter Label */}
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
              Filter Work
            </p>
            <h3 className="text-2xl font-bold">Select Category</h3>
          </div>

          {/* Animated Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden",
                  activeCategory === category
                    ? "bg-accent text-background shadow-lg shadow-accent/50"
                    : "bg-muted/50 text-foreground hover:bg-muted hover:shadow-md"
                )}
              >
                {/* Animated underline for active */}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute inset-0 bg-accent/20 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {category}
                  {activeCategory === category && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </motion.span>
                  )}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Advanced Projects Grid with Smooth Transitions */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
        >
          {displayedProjects.map((project, index) => {
            const isLarge = index === 0 || index === 4
            
            return (
              <motion.div
                key={`${activeCategory}-${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut"
                }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl h-full cursor-pointer",
                  isLarge && "md:col-span-2 md:row-span-2"
                )}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link href={project.href} className="block h-full">
                  {/* Image Container */}
                  <div className={cn(
                    "relative w-full overflow-hidden bg-muted",
                    isLarge ? "aspect-square" : "aspect-[4/3]"
                  )}>
                    {/* Image with sophisticated zoom effect */}
                    <motion.div
                      className="relative w-full h-full"
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
                      />
                    </motion.div>

                    {/* Multi-layered overlay system */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30"
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0.5
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Rich gradient overlay for depth */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0.6
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Accent glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5"
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Content Section - Enhanced Typography */}
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-end p-8 md:p-10"
                      animate={{
                        opacity: 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Category Badge */}
                      <motion.div
                        className="mb-4 inline-flex items-center gap-2 w-fit"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 4,
                          opacity: hoveredProject === project.id ? 1 : 0.7
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="h-1 w-6 rounded-full bg-accent" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          {project.category}
                        </span>
                      </motion.div>

                      {/* Project Title */}
                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 2
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>

                      {/* Meta Information */}
                      <motion.div
                        className="flex items-center justify-between text-sm text-foreground/70"
                        animate={{
                          y: hoveredProject === project.id ? 0 : 2,
                          opacity: hoveredProject === project.id ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <span>{project.year}</span>
                        <span>View Project</span>
                      </motion.div>
                    </motion.div>

                    {/* Floating Action Button - Premium Style */}
                    <motion.div
                      className="absolute top-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-xl"
                      animate={{
                        scale: hoveredProject === project.id ? 1 : 0.8,
                        opacity: hoveredProject === project.id ? 1 : 0.6,
                        y: hoveredProject === project.id ? 0 : 4
                      }}
                      transition={{
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUpRight className="h-6 w-6" />
                    </motion.div>

                    {/* Border accent on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-accent"
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {!showAll && filteredProjects.length > 6 && (
        <Reveal>
          <div className="text-center pt-8">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium border-2 border-foreground rounded-full transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      )}
    </div>
  )
}
