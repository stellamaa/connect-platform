"use client";

import { useEffect, useState } from "react";

/**
 * A stand-in for an audio element. It follows the meditation's intended
 * length so the session screen has a real control before files are attached.
 */
export function useMeditationPlayer(durationMinutes: number) {
  const durationSeconds = Math.max(1, durationMinutes) * 60;
  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const finished = seconds >= durationSeconds;

  useEffect(() => {
    if (!playing || finished) return;
    const id = window.setInterval(() => {
      setSeconds((current) => Math.min(durationSeconds, current + 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [playing, finished, durationSeconds]);

  return {
    playing: playing && !finished,
    seconds,
    durationSeconds,
    finished,
    progress: seconds / durationSeconds,
    toggle: () => {
      if (finished) return;
      setPlaying((current) => !current);
    },
    restart: () => {
      setPlaying(false);
      setSeconds(0);
    },
  };
}
