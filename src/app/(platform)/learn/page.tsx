import type { Metadata } from "next";
import { LessonLibrary } from "@/components/learn/lesson-library";

export const metadata: Metadata = {
  title: "Learning",
};

export default function LearnPage() {
  return <LessonLibrary />;
}
