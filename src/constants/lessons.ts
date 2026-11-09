import type { Lesson } from "@/types/platform";

export const lessons: readonly Lesson[] = [
  {
    id: "lesson_settling",
    kind: "learning",
    slug: "what-settling-can-mean",
    title: "What settling can mean",
    summary:
      "A plain note on the word we use in the room, so it does not turn into a test you pass or fail.",
    tags: ["body", "reflection"],
    assignedClientIds: ["client_jonah", "client_priya"],
    updatedLabel: "8 Mar",
    readingMinutes: 6,
    sections: [
      {
        heading: "Settling is not the same as feeling fine",
        paragraphs: [
          "In session, settling means the body has a little more room than it did at the door. It does not mean the week is solved, and it does not mean you feel calm on command.",
          "If you leave a practice and still feel stirred, the practice can still have worked. Room is the aim. A blank mind is not.",
        ],
      },
      {
        heading: "Why the between-session piece is short",
        paragraphs: [
          "A long exercise is easy to postpone. The materials in your tray are meant to be small enough to start on an ordinary evening, when you would otherwise open something else.",
          "Repeat the short one you can actually begin. We can lengthen it in the room if it earns that.",
        ],
      },
      {
        heading: "What to notice afterwards",
        paragraphs: [
          "After a practice, name one concrete thing: warmer hands, a slower out-breath, the same tightness as before, an urge to get up. Any of those is information.",
          "Bring that sentence to the next session. You do not need a conclusion.",
        ],
      },
    ],
  },
  {
    id: "lesson_sleep",
    kind: "learning",
    slug: "the-hour-before-sleep",
    title: "The hour before sleep",
    summary:
      "How we are treating the last hour of the night: as a closing, not as another chance to catch up.",
    tags: ["sleep", "evening"],
    assignedClientIds: ["client_luis"],
    updatedLabel: "1 Mar",
    readingMinutes: 5,
    sections: [
      {
        heading: "Sleep is not a task you complete",
        paragraphs: [
          "The practice is to make the hour quieter. Whether sleep arrives is not the grade. Chasing sleep usually turns the light back up.",
          "Evening lights down is here for that hour. Use it once, sitting up, before you get into bed.",
        ],
      },
      {
        heading: "Close one thing",
        paragraphs: [
          "Pick a single ending: the laptop, the extra tab, the light by the door. One ending is enough. A redesigned life is not the assignment.",
          "If the mind keeps a list, write the list on paper and leave the paper outside the bed. The list can exist without being worked.",
        ],
      },
    ],
  },
  {
    id: "lesson_unfinished",
    kind: "learning",
    slug: "staying-with-something-unfinished",
    title: "Staying with something unfinished",
    summary:
      "A note on keeping company with an open thread, without forcing it shut for the sake of relief.",
    tags: ["unfinished", "reflection"],
    assignedClientIds: ["client_priya"],
    updatedLabel: "20 Feb",
    readingMinutes: 7,
    sections: [
      {
        heading: "Unfinished is a state, not a failure",
        paragraphs: [
          "Some things stay open because they are not ready to close, not because you have neglected them. The work in session is to stay near that fact without rushing a verdict.",
          "The letter you do not send is a place to put words that do not have to land anywhere yet.",
        ],
      },
      {
        heading: "A limit that keeps the week kinder",
        paragraphs: [
          "Give the unfinished thing a container: ten minutes with the prompt, then a return to the room you are in. An open-ended evening with it is usually too much.",
          "If the container is too small or too sharp, say so next session. We will change the container, not ask you to tolerate more.",
        ],
      },
    ],
  },
];
