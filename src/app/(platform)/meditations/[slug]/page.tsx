import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MeditationPlayer } from "@/components/meditations/meditation-player";
import { meditations } from "@/constants/meditations";
import { getMeditation } from "@/lib/catalog";

export function generateStaticParams() {
  return meditations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meditation = getMeditation(slug);
  return { title: meditation?.title ?? "Meditation" };
}

export default async function MeditationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meditation = getMeditation(slug);
  if (!meditation) notFound();
  return <MeditationPlayer meditation={meditation} />;
}
