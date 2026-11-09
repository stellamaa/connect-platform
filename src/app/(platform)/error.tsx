"use client";

import { Button } from "@/components/ui/button";

export default function PlatformError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-3xl border border-line bg-paper-raised px-6 py-12">
      <h1 className="font-serif text-3xl text-ink">This page did not open.</h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-ink-soft">
        The rest of the practice is still there. Try this page again.
      </p>
      <div className="mt-6">
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  );
}
