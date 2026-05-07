import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { PortfolioFilter } from "@/components/portfolio-filter"
import { TestimonialsSection } from "@/components/testimonials"

export const metadata = {
  title: "Portfolio - Folio",
  description: "Explore our portfolio of successful projects spanning branding, web design, development, and more.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Work
            </p>
            <h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Projects that speak for themselves
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A curated selection of our finest work, showcasing our expertise in 
              design, development, and digital strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <Section>
        <PortfolioFilter showAll />
      </Section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Let&apos;s discuss how we can help bring your ideas to life.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
