import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowDown, Briefcase, Code, Palette, Users, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { PortfolioFilter } from "@/components/portfolio-filter"
import { TestimonialsSection } from "@/components/testimonials"
import { BlogPreview } from "@/components/blog-preview"
import { StatsSection } from "@/components/stats"
import { MagneticButton, CircleButton } from "@/components/magnetic-button"
import { AnimatedHeading, Reveal } from "@/components/animated-text"
import { MarqueeSection } from "@/components/marquee"
import { PremiumHero } from "@/components/premium-hero"

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description: "Creating memorable brand identities that resonate with your audience and stand the test of time.",
    number: "01",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, responsive, and accessible websites using modern technologies and best practices.",
    number: "02",
  },
  {
    icon: Briefcase,
    title: "Digital Strategy",
    description: "Developing comprehensive digital strategies that drive growth and maximize your online presence.",
    number: "03",
  },
  {
    icon: Users,
    title: "UI/UX Design",
    description: "Designing intuitive user experiences that delight users and achieve business objectives.",
    number: "04",
  },
]

const clients = [
  "Google", "Apple", "Microsoft", "Amazon", "Meta", "Netflix", "Spotify", "Airbnb"
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="transparent" />
      
      {/* Premium Hero Section */}
      <PremiumHero />

      {/* Clients Marquee */}
      <MarqueeSection clients={clients} />

      {/* Stats */}
      <StatsSection />

      {/* Services Section */}
      <Section className="bg-muted/30 relative overflow-hidden">
        {/* Transition Element */}
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start relative">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Services
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Expertise that delivers results
            </AnimatedHeading>
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                I combine strategy, design, and technology to help brands create 
                meaningful connections with their audience.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <MagneticButton href="/services" variant="outline" icon="arrow">
                  All Services
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* Right: Services Grid - Asymmetrical Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.1}>
                <div className={`group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-500 hover:shadow-xl hover:translate-y-[-8px] ${
                  index % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-4xl md:text-5xl font-light text-muted-foreground/30 transition-colors group-hover:text-accent/50" style={{ fontFamily: 'var(--font-display)' }}>
                        {service.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="hidden sm:flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 items-center justify-center rounded-full border border-border group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Portfolio
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Selected work
            </AnimatedHeading>
          </div>
          <Reveal delay={0.2}>
            <MagneticButton href="/portfolio" variant="outline" icon="arrow">
              View All
            </MagneticButton>
          </Reveal>
        </div>
        <PortfolioFilter />
      </Section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Preview */}
      <Section className="bg-muted/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Insights
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Latest articles
            </AnimatedHeading>
          </div>
          <Reveal delay={0.2}>
            <MagneticButton href="/blog" variant="outline" icon="arrow">
              All Articles
            </MagneticButton>
          </Reveal>
        </div>
        <BlogPreview />
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <AnimatedHeading as="h2" className="text-4xl md:text-6xl lg:text-7xl font-medium text-background">
            <span className="block">Have a project</span>
            <span className="block mt-2">
              in <span className="italic">mind?</span>
            </span>
          </AnimatedHeading>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-background/70 max-w-xl mx-auto">
              Let&apos;s collaborate and create something extraordinary together.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 px-10 py-5 text-lg font-medium text-foreground bg-background rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Start a Conversation
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
