import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-paper">
      <div className="bg-stone text-cream">
        <SiteHeader tone="cream" />
      </div>
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
