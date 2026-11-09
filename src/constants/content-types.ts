import type { ContentTypeId } from "@/types/platform";

export type ContentType = {
  id: ContentTypeId;
  label: string;
  eyebrow: string;
  description: string;
};

export const contentTypes: readonly ContentType[] = [
  {
    id: "meditation",
    label: "Guided meditations",
    eyebrow: "Listen",
    description:
      "Short practices a client can return to when the session is over and the body has not caught up.",
  },
  {
    id: "prompt",
    label: "Writing prompts",
    eyebrow: "Write",
    description:
      "Questions that keep a thread of reflection going, without asking anyone to face a blank page.",
  },
  {
    id: "learning",
    label: "Learning materials",
    eyebrow: "Read",
    description:
      "Plain-language notes on the ideas you already use in the room, written to be reread later.",
  },
  {
    id: "image",
    label: "Images",
    eyebrow: "See",
    description:
      "Visual anchors — a colour, a still, a place — left as something to come back to.",
  },
  {
    id: "community",
    label: "Circle",
    eyebrow: "Stay",
    description:
      "A small chat for the people you actually work with. Not a public feed.",
  },
];
