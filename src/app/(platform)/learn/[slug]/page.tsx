import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonReader } from "@/components/learn/lesson-reader";
import { lessons } from "@/constants/lessons";
import { getLesson } from "@/lib/catalog";

export function generateStaticParams() {
  return lessons.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  return { title: lesson?.title ?? "Learning" };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();
  return <LessonReader lesson={lesson} />;
}
