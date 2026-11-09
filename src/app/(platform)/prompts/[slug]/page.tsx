import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PromptDetail } from "@/components/prompts/prompt-detail";
import { prompts } from "@/constants/prompts";
import { getPrompt } from "@/lib/catalog";

export function generateStaticParams() {
  return prompts.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPrompt(slug);
  return { title: prompt?.title ?? "Prompt" };
}

export default async function PromptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prompt = getPrompt(slug);
  if (!prompt) notFound();
  return <PromptDetail prompt={prompt} />;
}
