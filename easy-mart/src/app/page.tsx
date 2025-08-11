"use client";

import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { PlatformLogos } from "@/components/landing/PlatformLogos";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { TeamSection } from "@/components/landing/TeamSection";
import { RatingsSection } from "@/components/landing/RatingsSection";
import { CallToActionSection } from "@/components/landing/CallToActionSection";

export default function HomePage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <PlatformLogos />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <RatingsSection />
      <TeamSection />
      <CallToActionSection />
    </main>
  );
}
