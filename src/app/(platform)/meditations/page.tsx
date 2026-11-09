import type { Metadata } from "next";
import { MeditationLibrary } from "@/components/meditations/meditation-library";

export const metadata: Metadata = {
  title: "Meditations",
};

export default function MeditationsPage() {
  return <MeditationLibrary />;
}
