"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "@/components/animated-text"
import { cn } from "@/lib/utils"

const posts = [
  {
    id: 1,
    title: "The Future of Web Design: Trends to Watch in 2026",
    excerpt: "Exploring the emerging design patterns and technologies shaping the future of digital experiences.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
    date: "Mar 15, 2026",
    category: "Design",
    href: "/blog/future-of-web-design",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Accessible Web Applications",
    excerpt: "A comprehensive guide to creating inclusive digital products that work for everyone.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop",
    date: "Mar 10, 2026",
    category: "Development",
    href: "/blog/accessible-web-applications",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "The Art of Minimalist Design",
    excerpt: "How simplicity and restraint can lead to more impactful and memorable user experiences.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
    date: "Mar 5, 2026",
    category: "Design",
    href: "/blog/minimalist-design",
    readTime: "4 min read",
  },
]

export function BlogPreview() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
          },
        },
      }}
    >
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          className="group h-full"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <Link href={post.href} className="flex flex-col h-full">
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs font-medium bg-background/90 backdrop-blur-sm rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Arrow indicator */}
                <div className={cn(
                  "absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500",
                  "opacity-0 scale-75 -rotate-45 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
                )}>
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <time>{post.date}</time>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                {/* Read more link */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground">
                  <span className="line-reveal">Read Article</span>
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </motion.article>
      ))}
    </motion.div>
  )
}
