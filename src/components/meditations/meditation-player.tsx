"use client";

import { Button } from "@/components/ui/button";
import { useMeditationPlayer } from "@/hooks/use-meditation-player";
import { useRole } from "@/hooks/use-role";
import { formatClock, formatMinutes } from "@/lib/format";
import type { Meditation } from "@/types/platform";

export function MeditationPlayer({ meditation }: { meditation: Meditation }) {
  const { role, clientId } = useRole();
  const player = useMeditationPlayer(meditation.durationMinutes);
  const assigned = meditation.assignedClientIds.includes(clientId);

  if (role === "client" && !assigned) {
    return (
      <p className="text-ink-soft">
        This practice is in the library, and it is not in your tray.
      </p>
    );
  }

  return (
    <article>
      <p className="text-xs tracking-[0.16em] text-sage uppercase">
        {formatMinutes(meditation.durationMinutes)} · Listen
      </p>
      <h1 className="mt-3 font-sans tracking-tight text-4xl tracking-tight text-ink md:text-5xl">
        {meditation.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">{meditation.intention}</p>
      <div className="mt-8 max-w-xl rounded-md border border-line bg-moss-deep p-6 text-paper">
        <p className="text-sm text-paper/70">
          Timer for the intended length. Audio is not attached in this build.
        </p>
        <p className="mt-6 font-sans tracking-tight text-5xl tabular-nums">
          {formatClock(player.seconds)}
          <span className="ml-2 text-2xl text-paper/50">
            / {formatClock(player.durationSeconds)}
          </span>
        </p>
        <div
          className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/15"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={player.durationSeconds}
          aria-valuenow={player.seconds}
          aria-label="Practice time"
        >
          <div
            className="h-full bg-gold"
            style={{ width: `${player.progress * 100}%` }}
          />
        </div>
        <div className="mt-6 flex gap-3">
          <Button
            variant="clay"
            onClick={player.toggle}
            disabled={player.finished}
          >
            {player.finished
              ? "Complete"
              : player.playing
                ? "Pause"
                : player.seconds > 0
                  ? "Resume"
                  : "Begin"}
          </Button>
          <Button variant="quiet" onClick={player.restart}>
            Start again
          </Button>
        </div>
        {player.finished ? (
          <p className="mt-4 text-sm text-gold" role="status">
            The intended length is complete.
          </p>
        ) : null}
      </div>
      <div className="mt-10 max-w-2xl space-y-4">
        <h2 className="font-sans tracking-tight text-2xl text-ink">Guidance</h2>
        {meditation.guidance.map((paragraph) => (
          <p key={paragraph} className="leading-7 text-ink-soft">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
