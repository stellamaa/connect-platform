import { routes } from "@/constants/routes";
import type { NavItem, Role } from "@/types/platform";

export const practitionerNavigation: NavItem[] = [
  { href: routes.dashboard, label: "Practice", note: "Overview" },
  { href: routes.clients, label: "Clients", note: "Roster" },
  { href: routes.meditations, label: "Meditations", note: "Listen" },
  { href: routes.prompts, label: "Prompts", note: "Write" },
  { href: routes.learn, label: "Learning", note: "Read" },
  { href: routes.gallery, label: "Images", note: "See" },
  { href: routes.community, label: "Circle", note: "Talk" },
];

export const clientNavigation: NavItem[] = [
  { href: routes.today, label: "Today", note: "Between sessions" },
  { href: routes.meditations, label: "Meditations", note: "Listen" },
  { href: routes.prompts, label: "Prompts", note: "Write" },
  { href: routes.learn, label: "Learning", note: "Read" },
  { href: routes.gallery, label: "Images", note: "See" },
  { href: routes.community, label: "Circle", note: "Talk" },
];

export const settingsNavigation: NavItem = {
  href: routes.settings,
  label: "Settings",
  note: "This browser",
};

export function navigationFor(role: Role): NavItem[] {
  return role === "practitioner" ? practitionerNavigation : clientNavigation;
}
