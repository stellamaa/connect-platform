"use client";

import { RoleSwitch } from "@/components/layout/role-switch";
import { useRole } from "@/hooks/use-role";

export function TopBar() {
  const { name, practiceName, role } = useRole();

  return (
    <div className="flex flex-col gap-3 border-b border-line bg-paper px-5 py-4 md:flex-row md:items-center md:justify-between md:px-10">
      <div>
        <p className="text-sm text-ink-soft">{practiceName}</p>
        <p className="font-sans text-lg tracking-tight text-ink">
          {role === "client" ? name : `${name}`}
        </p>
      </div>
      <RoleSwitch />
    </div>
  );
}
