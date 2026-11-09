"use client";

import { cn } from "@/lib/cn";
import type { Channel } from "@/types/platform";

export function ChannelList({
  channels,
  activeId,
  onSelect,
}: {
  channels: readonly Channel[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
      {channels.map((channel) => {
        const active = channel.id === activeId;
        return (
          <li key={channel.id} className="shrink-0 md:shrink">
            <button
              type="button"
              onClick={() => onSelect(channel.id)}
              aria-pressed={active}
              className={cn(
                "w-full rounded-md px-4 py-3 text-left",
                active ? "bg-moss text-paper" : "bg-paper-raised text-ink hover:border-sage",
              )}
            >
              <span className="block text-sm font-medium">{channel.name}</span>
              <span className={cn("mt-1 block text-xs", active ? "text-paper/70" : "text-ink-soft")}>
                {channel.description}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
