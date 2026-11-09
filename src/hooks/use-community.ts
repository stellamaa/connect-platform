"use client";

import { useState } from "react";
import { useRole } from "@/hooks/use-role";
import { circleSeed } from "@/lib/catalog";
import type { CircleMessage } from "@/types/platform";

export function useCommunity(initialChannelId?: string) {
  const { channels, messages } = circleSeed();
  const [channelId, setChannelId] = useState(
    initialChannelId ?? channels[0]?.id ?? "",
  );
  const [thread, setThread] = useState<CircleMessage[]>([...messages]);
  const [draft, setDraft] = useState("");
  const { role, name } = useRole();

  const channel = channels.find((item) => item.id === channelId) ?? channels[0];
  const visible = thread.filter((message) => message.channelId === channel?.id);

  function send() {
    const body = draft.trim();
    if (!body || !channel) return;
    const next: CircleMessage = {
      id: `local-${thread.length + 1}`,
      channelId: channel.id,
      authorName: name,
      authorRole: role,
      body,
      sentAtLabel: "Just now",
    };
    setThread((current) => [...current, next]);
    setDraft("");
  }

  return {
    channels,
    channel,
    channelId: channel?.id ?? "",
    setChannelId,
    visible,
    draft,
    setDraft,
    send,
  };
}
