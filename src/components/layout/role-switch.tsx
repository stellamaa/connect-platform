"use client";

import { roleOrder, roles } from "@/constants/roles";
import { useRole } from "@/hooks/use-role";
import { cn } from "@/lib/cn";

export function RoleSwitch() {
  const { role, setRole } = useRole();

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">View</span>
      <div className="flex rounded-full bg-sage-soft p-1" role="group" aria-label="Switch view">
        {roleOrder.map((item) => {
          const active = role === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => setRole(item)}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm",
                active ? "bg-moss text-paper" : "text-moss",
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
