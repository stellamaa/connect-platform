"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { settingsNavigation, navigationFor } from "@/constants/navigation";
import { useRole } from "@/hooks/use-role";
import { cn } from "@/lib/cn";
import { isActivePath } from "@/lib/paths";
import type { NavItem } from "@/types/platform";

function Item({
  item,
  pathname,
  orientation,
}: {
  item: NavItem;
  pathname: string;
  orientation: "vertical" | "horizontal";
}) {
  const active = isActivePath(pathname, item.href);
  if (orientation === "horizontal") {
    return (
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={cn(
          "shrink-0 rounded-full px-3 py-1.5 text-sm",
          active ? "bg-white/15 text-paper" : "text-paper/70 hover:text-paper",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "block rounded-2xl px-3 py-2",
        active ? "bg-white/10 text-paper" : "text-paper/75 hover:bg-white/5 hover:text-paper",
      )}
    >
      <span className="block text-sm">{item.label}</span>
      <span className="block text-xs text-paper/50">{item.note}</span>
    </Link>
  );
}

export function NavLinks({
  orientation,
}: {
  orientation: "vertical" | "horizontal";
}) {
  const pathname = usePathname();
  const { role } = useRole();
  const items = navigationFor(role);

  if (orientation === "horizontal") {
    return (
      <nav className="flex gap-1" aria-label="Practice">
        {items.map((item) => (
          <Item key={item.href} item={item} pathname={pathname} orientation="horizontal" />
        ))}
        <Item item={settingsNavigation} pathname={pathname} orientation="horizontal" />
      </nav>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <nav className="flex flex-col gap-1" aria-label="Practice">
        {items.map((item) => (
          <Item key={item.href} item={item} pathname={pathname} orientation="vertical" />
        ))}
      </nav>
      <div className="mt-auto pt-6">
        <Item item={settingsNavigation} pathname={pathname} orientation="vertical" />
      </div>
    </div>
  );
}
