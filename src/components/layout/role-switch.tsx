"use client";

import { roleOrder, roles } from "@/constants/roles";
import { useRole } from "@/hooks/use-role";
import { cn } from "@/lib/cn";

export function RoleSwitch() {
  const { role, setRole } = useRole();

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-ink-soft lowercase">view</span>
      <div className="flex border border-line" role="group" aria-label="Switch view">
        {roleOrder.map((item) => {
          const active = role === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => setRole(item)}
              className={cn(
                "px-3 py-1.5 text-sm lowercase",
                active ? "bg-ink text-cream" : "text-ink",
              )}
            >
              {roles[item].label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
