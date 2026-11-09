"use client";

import { ChannelList } from "@/components/community/channel-list";
import { MessageComposer } from "@/components/community/message-composer";
import { MessageThread } from "@/components/community/message-thread";
import { PageHeader } from "@/components/ui/page-header";
import { brand } from "@/constants/brand";
import { useCommunity } from "@/hooks/use-community";

export function CommunityBoard() {
  const community = useCommunity();

  return (
    <>
      <PageHeader
        eyebrow="Stay"
        title="Circle"
        description="A small chat for Stillroom. Messages you send stay in this browser session. They are not delivered to anyone else yet."
      />
      <p className="mb-6 max-w-2xl text-sm leading-6 text-ink-soft">{brand.supportNote}</p>
      <div className="grid items-start gap-4 md:grid-cols-[16rem_minmax(0,1fr)]">
        <ChannelList
          channels={community.channels}
          activeId={community.channelId}
          onSelect={community.setChannelId}
        />
        <section className="rounded-[1.6rem] border border-line bg-paper px-4 py-4 md:px-6">
          <h2 className="font-serif text-2xl text-ink">{community.channel?.name}</h2>
          <div className="mt-5">
            <MessageThread messages={community.visible} />
          </div>
          <MessageComposer
            value={community.draft}
            onChange={community.setDraft}
            onSend={community.send}
          />
        </section>
      </div>
    </>
  );
}
