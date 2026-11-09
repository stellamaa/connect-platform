import type { Metadata } from "next";
import { BetweenSessions } from "@/components/today/between-sessions";

export const metadata: Metadata = {
  title: "Today",
};

export default function TodayPage() {
  return <BetweenSessions />;
}
