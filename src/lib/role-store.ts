import type { Role } from "@/types/platform";

const STORAGE_KEY = "connect:role";
const CHANGE_EVENT = "connect-role-change";

export function readRole(): Role {
  try {
    return localStorage.getItem(STORAGE_KEY) === "client"
      ? "client"
      : "practitioner";
  } catch {
    return "practitioner";
  }
}

export function writeRole(role: Role) {
  localStorage.setItem(STORAGE_KEY, role);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeRole(onStoreChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}
