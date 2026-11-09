"use client";

import { useSyncExternalStore } from "react";
import { practitioner, previewClient } from "@/constants/people";
import { readRole, subscribeRole, writeRole } from "@/lib/role-store";
import type { Role } from "@/types/platform";

const serverRole: Role = "practitioner";

function subscribeHydration() {
  return () => {};
}

export function useRole() {
  const ready = useSyncExternalStore(
    subscribeHydration,
    () => true,
    () => false,
  );
  const storedRole = useSyncExternalStore(
    subscribeRole,
    readRole,
    () => serverRole,
  );
  const role = ready ? storedRole : serverRole;
  const person = role === "client" ? previewClient : practitioner;

  return {
    ready,
    role,
    setRole: writeRole,
    clientId: previewClient.id,
    name: person.name,
    practiceName: practitioner.practiceName,
    credentials: practitioner.credentials,
  };
}
