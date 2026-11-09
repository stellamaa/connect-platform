import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";
import { brand } from "@/constants/brand";

export const metadata: Metadata = {
  title: {
    absolute: `${brand.name} — ${brand.tagline}`,
  },
  description: brand.description,
};

export default function HomePage() {
  return <LandingPage />;
}
