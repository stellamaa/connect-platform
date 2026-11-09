import { activity } from "@/constants/activity";
import { channels, messages } from "@/constants/community";
import { images } from "@/constants/images";
import { lessons } from "@/constants/lessons";
import { meditations } from "@/constants/meditations";
import { clients } from "@/constants/people";
import { prompts } from "@/constants/prompts";
import type { Assignable, Role } from "@/types/platform";

/**
 * Read-only access to the sample library.
 * Replace these lookups with server fetches when a database exists.
 * Keep the return shapes so pages and hooks stay stable.
 */

export function filterForViewer<T extends Assignable>(
  items: readonly T[],
  role: Role,
  clientId: string,
): T[] {
  if (role === "practitioner") return [...items];
  return items.filter((item) => item.assignedClientIds.includes(clientId));
}

export function collectTags(items: readonly { tags: readonly string[] }[]) {
  return [...new Set(items.flatMap((item) => item.tags))];
}

export function getClient(id: string) {
  return clients.find((client) => client.id === id);
}

export function namesFor(ids: readonly string[]) {
  return ids.map((id) => getClient(id)?.name ?? "Client");
}

export function getMeditation(slug: string) {
  return meditations.find((item) => item.slug === slug);
}

export function getPrompt(slug: string) {
  return prompts.find((item) => item.slug === slug);
}

export function getLesson(slug: string) {
  return lessons.find((item) => item.slug === slug);
}

export function getImage(slug: string) {
  return images.find((item) => item.slug === slug);
}

export function materialsForClient(clientId: string) {
  return {
    meditations: meditations.filter((item) =>
      item.assignedClientIds.includes(clientId),
    ),
    prompts: prompts.filter((item) =>
      item.assignedClientIds.includes(clientId),
    ),
    lessons: lessons.filter((item) =>
      item.assignedClientIds.includes(clientId),
    ),
    images: images.filter((item) => item.assignedClientIds.includes(clientId)),
  };
}

export function practiceStats() {
  return [
    { label: "Clients", value: clients.length, detail: "In the sample roster" },
    {
      label: "Meditations",
      value: meditations.length,
      detail: "In the library",
    },
    { label: "Prompts", value: prompts.length, detail: "Ready to assign" },
    {
      label: "Lessons",
      value: lessons.length,
      detail: "Short enough to reread",
    },
    { label: "Images", value: images.length, detail: "Visual anchors" },
    { label: "Channels", value: channels.length, detail: "In the circle" },
  ];
}

export function recentActivity() {
  return activity;
}

export function circleSeed() {
  return { channels, messages };
}
