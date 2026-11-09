import type { Meditation } from "@/types/platform";

export const meditations: readonly Meditation[] = [
  {
    id: "med_arrival",
    kind: "meditation",
    slug: "arrival-breath",
    title: "Arrival breath",
    summary:
      "Eight quiet minutes for the moment the week starts to crowd the chest.",
    tags: ["breath", "evening"],
    assignedClientIds: ["client_jonah"],
    updatedLabel: "12 Mar",
    durationMinutes: 8,
    intention: "Arrive before you try to fix the evening.",
    guidance: [
      "Sit somewhere you can feel the chair. Let the eyes rest. You do not need a special posture, only a place you can stay for eight minutes.",
      "Notice the next breath out. Follow it a little further than you usually do, then let the in-breath come back on its own. Do that again. Nothing is being improved.",
      "If the mind brings the week with it, let the week sit beside you rather than in front of you. The breath is the thing you are with. When the timer ends, open the eyes and name one ordinary object in the room.",
    ],
  },
  {
    id: "med_exhale",
    kind: "meditation",
    slug: "the-long-exhale",
    title: "The long exhale",
    summary:
      "A slower body scan for the days when the session made sense and the body did not get the message.",
    tags: ["body", "midweek"],
    assignedClientIds: ["client_jonah", "client_priya"],
    updatedLabel: "4 Mar",
    durationMinutes: 14,
    intention: "Give the torso time to hear what the mind already understood.",
    guidance: [
      "Lie down if you can. If you cannot, sit with both feet on the floor. Start at the jaw. Unclench it only as much as it is willing.",
      "Move your attention down the throat, the chest, the belly. At each place, breathe out and stay for two breaths. You are not looking for a feeling. You are letting the place know you stopped.",
      "At the hands, turn the palms up if that is easy. Stay there until the timer closes. Sit up slowly. The point of this practice is the slowness, not a result.",
    ],
  },
  {
    id: "med_evening",
    kind: "meditation",
    slug: "evening-lights-down",
    title: "Evening lights down",
    summary:
      "Eleven minutes for the hour before sleep, when the day is still switched on.",
    tags: ["sleep", "evening"],
    assignedClientIds: ["client_luis"],
    updatedLabel: "28 Feb",
    durationMinutes: 11,
    intention: "Dim the day without demanding that sleep arrive.",
    guidance: [
      "Lower one light in the room you are actually in. Sit on the edge of the bed or a chair, not under the covers yet.",
      "Name three things the day already finished. They can be small: a meal, a reply, a door you closed. Let each one be complete.",
      "Then follow ten breaths with a longer out-breath. If sleep is not here at the end, that is still a completed practice. Get into bed without opening anything new.",
    ],
  },
];
