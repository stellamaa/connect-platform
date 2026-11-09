import type { Metadata } from "next";
import { CommunityBoard } from "@/components/community/community-board";

export const metadata: Metadata = {
  title: "Circle",
};

export default function CommunityPage() {
  return <CommunityBoard />;
}
