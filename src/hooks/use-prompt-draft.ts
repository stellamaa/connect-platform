"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function keyFor(promptId: string) {
  return `connect:prompt:${promptId}`;
}

function readDraft(promptId: string) {
  try {
    return sessionStorage.getItem(keyFor(promptId)) ?? "";
  } catch {
    return "";
  }
}

/** Keeps a writing draft in this browser tab, keyed by prompt. */
export function usePromptDraft(promptId: string) {
  const draft = useSyncExternalStore(
    subscribe,
    () => readDraft(promptId),
    () => "",
  );

  function update(value: string) {
    try {
      sessionStorage.setItem(keyFor(promptId), value);
    } catch {
      return;
    }
    emit();
  }

  function clear() {
    try {
      sessionStorage.removeItem(keyFor(promptId));
    } catch {
      return;
    }
    emit();
  }

  return { draft, update, clear };
}
