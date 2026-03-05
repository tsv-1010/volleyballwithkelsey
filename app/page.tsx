import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BioSection } from "@/components/bio-section"
import { SkillsTicker } from "@/components/skills-ticker"
import { PricingSection } from "@/components/pricing-section"
import { SuccessPathSection } from "@/components/success-path-section"
import { LocationSection } from "@/components/location-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"
import { StickyBookingBar, DesktopQuickContact } from "@/components/sticky-booking-bar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BioSection />
      <SkillsTicker />
      <PricingSection />
      <SuccessPathSection />
      <LocationSection />
      <BookingForm />
      <SkillsTicker />
      <Footer />
      
      {/* Floating Contact Elements */}
      <StickyBookingBar />
      <DesktopQuickContact />
    </main>
  )
}
