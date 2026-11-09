import { AudienceSplit } from "@/components/landing/audience-split";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";

export function LandingPage() {
  return (
    <main id="main">
      <Hero />
      <FeatureGrid />
      <HowItWorks />
      <AudienceSplit />
    </main>
  );
}
