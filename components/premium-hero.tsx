'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { MagneticButton, CircleButton } from './magnetic-button';
import Link from 'next/link';

// Floating badge component
const FloatingBadge = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm"
    >
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </div>
      <span className="text-sm font-medium text-foreground/90">Available for work</span>
    </motion.div>
  );
};

// Animated gradient blob
const GradientBlob = () => {
  return (
    <motion.div
      className="absolute w-96 h-96 rounded-full mix-blend-screen filter blur-3xl"
      animate={{
        x: [0, 100, -50, 0],
        y: [0, 50, 100, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      style={{
        background: 'linear-gradient(135deg, #68CCFF 0%, #FF69B4 50%, #FFD700 100%)',
        opacity: 0.05,
      }}
    />
  );
};

// Floating skill badges
interface SkillBadgeProps {
  text: string;
  icon: React.ReactNode;
  delay: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

const FloatingSkillBadge = ({ text, icon, delay, position }: SkillBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="absolute hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/50 shadow-lg"
      style={position}
    >
      <div className="text-accent">{icon}</div>
      <span className="text-xs font-medium text-foreground">{text}</span>
    </motion.div>
  );
};

export function PremiumHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
      {/* Background animated blobs */}
      <GradientBlob />
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full mix-blend-screen filter blur-3xl"
        animate={{
          x: [-50, 50, -30, 0],
          y: [50, -50, 30, 0],
          scale: [0.9, 1.1, 1, 0.9],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: 0.03,
        }}
      />

      {/* Content container */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <FloatingBadge delay={0.2} />
        </motion.div>

        {/* Main heading with asymmetric layout */}
        <div className="relative mb-12">
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] text-balance">
              <motion.span
                className="block bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Creative
              </motion.span>
              <motion.span
                className="block text-foreground mt-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Developer
              </motion.span>
            </h1>
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-12 leading-relaxed"
        >
          I craft exceptional digital experiences through code and design. Specializing in modern web development, 
          interactive design, and building products that people love to use.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
        >
          <Link href="#work">
            <MagneticButton variant="primary" size="lg">
              View My Work
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </Link>
          <Link href="#contact">
            <MagneticButton variant="outline" size="lg">
              Let&apos;s Connect
            </MagneticButton>
          </Link>
        </motion.div>

        {/* Stats section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/30"
        >
          <div>
            <p className="text-3xl md:text-4xl font-bold text-accent">50+</p>
            <p className="text-sm md:text-base text-foreground/60 mt-2">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-accent">30+</p>
            <p className="text-sm md:text-base text-foreground/60 mt-2">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-accent">5+</p>
            <p className="text-sm md:text-base text-foreground/60 mt-2">Years Experience</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating skill badges */}
      <FloatingSkillBadge
        text="React"
        icon={<Zap className="w-4 h-4" />}
        delay={1}
        position={{ top: '20%', right: '10%' }}
      />
      <FloatingSkillBadge
        text="Next.js"
        icon={<Zap className="w-4 h-4" />}
        delay={1.2}
        position={{ top: '60%', left: '5%' }}
      />
      <FloatingSkillBadge
        text="Web Design"
        icon={<Zap className="w-4 h-4" />}
        delay={1.4}
        position={{ bottom: '15%', right: '8%' }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-foreground/50 uppercase tracking-widest">Scroll to explore</span>
          <svg className="w-5 h-5 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
