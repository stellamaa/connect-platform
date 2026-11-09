import type { Metadata } from "next";
import { PromptLibrary } from "@/components/prompts/prompt-library";

export const metadata: Metadata = {
  title: "Prompts",
};

export default function PromptsPage() {
  return <PromptLibrary />;
}
