"use client";

import type { ReactNode } from "react";
import { Suspense } from "react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { useRole } from "@/hooks/use-role";

function RailFallback() {
  return <div className="hidden bg-moss-deep md:block" aria-hidden />;
}

export function AppShell({ children }: { children: ReactNode }) {
  const { ready } = useRole();

  if (!ready) {
    return (
      <div className="grid min-h-dvh place-items-center bg-paper px-6">
        <p className="text-sm text-ink-soft">Opening the practice…</p>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-paper md:grid md:grid-cols-[16rem_minmax(0,1fr)]">
      <Suspense fallback={<RailFallback />}>
        <Sidebar />
      </Suspense>
      <div className="flex min-w-0 flex-col">
        <div className="sticky top-0 z-10">
          <TopBar />
          <Suspense fallback={null}>
            <MobileNav />
          </Suspense>
        </div>
        <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 md:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}
