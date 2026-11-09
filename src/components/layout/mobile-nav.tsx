"use client";

import { NavLinks } from "@/components/layout/nav-links";

export function MobileNav() {
  return (
    <div className="overflow-x-auto border-b border-white/10 bg-moss-deep px-4 py-3 md:hidden">
      <NavLinks orientation="horizontal" />
    </div>
  );
}
