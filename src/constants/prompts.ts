import type { WritingPrompt } from "@/types/platform";

export const prompts: readonly WritingPrompt[] = [
  {
    id: "prompt_stayed",
    kind: "prompt",
    slug: "what-stayed-with-you",
    title: "What stayed with you",
    summary:
      "A short return to the last session, aimed at the detail that lingered rather than the whole story.",
    tags: ["reflection", "session"],
    assignedClientIds: ["client_jonah", "client_priya"],
    updatedLabel: "11 Mar",
    invitation:
      "Write for ten minutes. You do not have to be clear. You do have to be specific.",
    questions: [
      "What sentence, sensation, or image from the last session is still here?",
      "Where in the week did it show up, even briefly?",
      "What would you want to bring back into the room next time?",
    ],
  },
  {
    id: "prompt_hour",
    kind: "prompt",
    slug: "the-hour-before-bed",
    title: "The hour before bed",
    summary:
      "A look at the last hour of the night, without turning it into a plan to be perfect.",
    tags: ["sleep", "evening"],
    assignedClientIds: ["client_luis"],
    updatedLabel: "2 Mar",
    invitation:
      "Describe last night’s last hour as if you were telling it to someone who will not advise you.",
    questions: [
      "What was still on when you wished it was off?",
      "What did you reach for when you were tired of being awake?",
      "Name one thing that could close, not improve, tomorrow night.",
    ],
  },
  {
    id: "prompt_letter",
    kind: "prompt",
    slug: "a-letter-you-do-not-send",
    title: "A letter you do not send",
    summary:
      "A page addressed to something unfinished. It stays in the tray. It is not for sending.",
    tags: ["unfinished", "reflection"],
    assignedClientIds: ["client_priya"],
    updatedLabel: "19 Feb",
    invitation:
      "Begin with “I am writing to the part of this that is still open.” Stop when you have said the true thing once.",
    questions: [
      "What are you not asking this letter to fix?",
      "What tone do you want in the room when you read a line of it aloud?",
      "Is there one sentence you want Mara to hear next time?",
    ],
  },
];
