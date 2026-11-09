import type { Metadata } from "next";
import { PracticeOverview } from "@/components/dashboard/practice-overview";

export const metadata: Metadata = {
  title: "Practice",
};

export default function DashboardPage() {
  return <PracticeOverview />;
}
