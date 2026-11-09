import type { Role } from "@/types/platform";

export const roles = {
  practitioner: {
    id: "practitioner" as const,
    label: "Practice",
    description: "Prepare materials, see the roster, and follow the circle.",
  },
  client: {
    id: "client" as const,
    label: "Client",
    description: "Return to what your practitioner left for the days between.",
  },
} satisfies Record<Role, { id: Role; label: string; description: string }>;

export const roleOrder: Role[] = ["practitioner", "client"];
