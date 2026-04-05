'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const FloatingCard = ({ delay, position }: { delay: number; position: 'left' | 'right' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${
        position === 'left' ? 'left-0 top-1/3' : 'right-0 bottom-1/4'
      }`}
    >
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay }}
        className="relative"
      >
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6 w-64 shadow-2xl">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {position === 'left' ? 'Performance' : 'Growth'}
              </p>
              <h3 className="text-2xl font-bold mt-2">
                {position === 'left' ? '98%' : '+320%'}
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-accent to-accent/50" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {position === 'left'
              ? 'Faster load times with optimized delivery'
              : 'Increase in conversion rates'}
          </p>
          <div className="mt-4 h-20 bg-muted/30 rounded-lg flex items-end justify-around p-2">
            {[40, 60, 45, 80, 55].map((height, i) => (
              <motion.div
                key={i}
                animate={{ height: [height, height + 10, height] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                className="w-1 bg-gradient-to-t from-accent to-accent/30 rounded-full"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const GradientBlob = ({ position, delay }: { position: 'top-left' | 'bottom-right'; delay: number }) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 6, repeat: Infinity, delay }}
      className={`absolute pointer-events-none ${
        position === 'top-left' ? '-top-40 -left-40' : '-bottom-40 -right-40'
      }`}
    >
      <div className="w-96 h-96 bg-gradient-to-br from-accent via-accent/50 to-transparent rounded-full blur-3xl" />
    </motion.div>
  )
}

export function PremiumHero() {
  const scrollRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section ref={scrollRef} className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Animated Gradient Blobs */}
      <GradientBlob position="top-left" delay={0} />
      <GradientBlob position="bottom-right" delay={1} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[calc(100vh-120px)]"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="text-sm font-medium text-accent">Available for projects</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="block">Transform your</span>
                <span className="block">
                  <span className="relative inline-block">
                    <span className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/60 to-transparent opacity-30 blur-lg" />
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
                      digital vision
                    </span>
                  </span>
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
                Cutting-edge design and development solutions that elevate your brand and drive measurable results.
              </motion.p>
            </div>

            {/* Trust Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 max-w-sm">
              <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-4">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-xs text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div className="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-4">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-xs text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-background font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold hover:bg-foreground/5 transition-all duration-300 group">
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Demo</span>
              </button>
            </motion.div>
          </div>

          {/* Right Visual - Floating Cards */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-full"
            style={{ y }}
          >
            <FloatingCard delay={0.2} position="left" />
            <FloatingCard delay={0.4} position="right" />

            {/* Center Visual Element */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
                <div className="absolute inset-4 rounded-full border-2 border-accent/20" />
                <div className="absolute inset-8 rounded-full border-2 border-accent/10" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent to-accent/60 shadow-2xl flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-white text-4xl font-bold"
                    >
                      ✨
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-8 text-accent" fill="none" viewBox="0 0 24 32">
            <motion.path
              d="M12 5v14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <path d="M7 20l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
