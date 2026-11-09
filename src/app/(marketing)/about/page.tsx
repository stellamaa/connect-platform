import type { Metadata } from "next";
import { AboutBuild } from "@/components/landing/about-build";

export const metadata: Metadata = {
  title: "About this build",
  description:
    "What the Connect foundation includes, and which pieces are left as later seams.",
};

export default function AboutPage() {
  return <AboutBuild />;
}
