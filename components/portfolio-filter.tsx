"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/animated-text"

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
    <div className="space-y-12">
      {/* Filter Buttons */}
      <Reveal>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.1}>
            <Link
              href={project.href}
              className="group relative block"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={cn(
                    "object-cover transition-all duration-700",
                    hoveredProject === project.id ? "scale-110" : "scale-100"
                  )}
                />
                
                {/* Overlay */}
                <div className={cn(
                  "absolute inset-0 bg-foreground/0 transition-colors duration-500",
                  hoveredProject === project.id && "bg-foreground/20"
                )} />
                
                {/* View Button */}
                <div className={cn(
                  "absolute top-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500",
                  hoveredProject === project.id 
                    ? "opacity-100 scale-100 rotate-0" 
                    : "opacity-0 scale-75 -rotate-45"
                )}>
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {project.year}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

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
