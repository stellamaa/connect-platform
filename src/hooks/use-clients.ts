"use client";

import { clients } from "@/constants/people";
import { useRole } from "@/hooks/use-role";
import { getClient, materialsForClient } from "@/lib/catalog";

export function useClients() {
  const { role } = useRole();
  if (role !== "practitioner") return [];
  return clients;
}

export function useClientRecord(clientId: string) {
  const { role } = useRole();
  const client = getClient(clientId);
  return {
    client,
    materials: materialsForClient(clientId),
    allowed: role === "practitioner" && Boolean(client),
  };
}
