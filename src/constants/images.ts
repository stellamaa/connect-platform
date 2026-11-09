import type { GalleryImage } from "@/types/platform";

export const images: readonly GalleryImage[] = [
  {
    id: "img_window",
    kind: "image",
    slug: "window-light",
    title: "Window light",
    summary: "A still for late afternoon, when the room goes gold and then grey.",
    tags: ["evening", "still"],
    assignedClientIds: ["client_jonah"],
    updatedLabel: "6 Mar",
    caption:
      "Look at this for one minute before Arrival breath. Let the light be the first thing, not the day.",
    wash: "#e7d7c1",
    field: "#c9844a",
  },
  {
    id: "img_dusk",
    kind: "image",
    slug: "dusk-on-the-landing",
    title: "Dusk on the landing",
    summary: "A darker still for the walk between one room and the next.",
    tags: ["evening", "unfinished"],
    assignedClientIds: ["client_priya"],
    updatedLabel: "18 Feb",
    caption:
      "A landing is a place you pause without having to decide which room you are going to.",
    wash: "#d5d0e2",
    field: "#3d4a73",
  },
  {
    id: "img_cup",
    kind: "image",
    slug: "a-cup-left-to-cool",
    title: "A cup left to cool",
    summary: "An ordinary object, used as a way back into the room you are in.",
    tags: ["still", "body"],
    assignedClientIds: ["client_jonah", "client_priya", "client_luis"],
    updatedLabel: "9 Mar",
    caption:
      "After any practice, find one object nearby and name it. This is the reminder, not a picture you have to study.",
    wash: "#efe6d6",
    field: "#8c5a45",
  },
  {
    id: "img_corridor",
    kind: "image",
    slug: "night-corridor",
    title: "Night corridor",
    summary: "A dim still for the last minutes before the lights go down.",
    tags: ["sleep", "evening"],
    assignedClientIds: ["client_luis"],
    updatedLabel: "27 Feb",
    caption:
      "Use this as the visual for the single light you leave on. Then turn the brighter ones off.",
    wash: "#d9e2e4",
    field: "#1e3a3f",
  },
];
