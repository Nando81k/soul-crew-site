"use client";

import { useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import {
  getServerSnapshot,
  getSnapshot,
  subscribe,
  toggle,
} from "@/lib/audio-player";

type PlayButtonProps = {
  slug: string;
  src: string;
  title: string;
};

export function PlayButton({ slug, src, title }: PlayButtonProps) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isActive = state.slug === slug;
  const isPlaying = isActive && state.isPlaying;
  const isLoading = isActive && state.isLoading;
  const progress = isActive ? state.progress : 0;

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => toggle(slug, src)}
        aria-label={isPlaying ? `Pause preview of ${title}` : `Play preview of ${title}`}
        aria-pressed={isPlaying}
        className="group/play relative flex size-12 shrink-0 items-center justify-center rounded-full border border-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        <svg
          className="absolute inset-0 -rotate-90"
          viewBox="0 0 48 48"
          aria-hidden
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="currentColor"
            strokeOpacity={isActive ? 0.15 : 0}
            strokeWidth="1"
          />
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 22}
            strokeDashoffset={2 * Math.PI * 22 * (1 - progress)}
            className="transition-[stroke-dashoffset] duration-100"
          />
        </svg>
        {isPlaying ? (
          <Pause className="size-4" />
        ) : (
          <Play className="size-4 translate-x-[1px]" />
        )}
        {isLoading && (
          <span className="absolute inset-0 rounded-full border border-foreground/40 border-t-foreground animate-spin" />
        )}
      </button>
      <Equalizer playing={isPlaying} />
    </div>
  );
}

function Equalizer({ playing }: { playing: boolean }) {
  return (
    <div className="flex h-5 items-end gap-[3px]" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="block w-[3px] origin-bottom bg-foreground/70"
          style={{
            height: playing ? "100%" : "30%",
            animation: playing
              ? `eq-bar 0.${6 + i}s ease-in-out ${i * 0.08}s infinite alternate`
              : "none",
            transition: "height 200ms ease-out",
          }}
        />
      ))}
      <style>{`
        @keyframes eq-bar {
          0% { transform: scaleY(0.25); }
          100% { transform: scaleY(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-hidden] span { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
