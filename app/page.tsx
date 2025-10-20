import { HeroSection } from "@/components/sections/hero-section"
import { About } from "@/components/sections/about-section"
import { Services } from "@/components/sections/services-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { BlogSection } from "@/components/sections/blog-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { MouseGlow } from "@/components/ui-library/effects/mouse-glow"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Enhanced global cursor effect with subtle red glow */}
      <MouseGlow
        color="rgba(220, 38, 38, 0.12)"
        size={600}
        blur={150}
        opacity={0.6}
        followSpeed={0.05}
        pulseEffect={true}
        pulseSpeed={4}
        pulseScale={1.05}
      />

      <HeroSection />
      <About />
      <Services />
      <PricingSection />
      <CtaSection />
      <ContactSection />
      {/* <TestimonialsSection />
      <BlogSection />
      <FaqSection /> */}
    </main>
  )
}
