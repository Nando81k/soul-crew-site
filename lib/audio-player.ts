type Snapshot = {
  slug: string | null;
  isPlaying: boolean;
  isLoading: boolean;
  progress: number;
};

const initial: Snapshot = {
  slug: null,
  isPlaying: false,
  isLoading: false,
  progress: 0,
};

let snapshot: Snapshot = initial;
let audio: HTMLAudioElement | null = null;
let rafId: number | null = null;
const listeners = new Set<() => void>();

function set(partial: Partial<Snapshot>) {
  snapshot = { ...snapshot, ...partial };
  listeners.forEach((l) => l());
}

function tickProgress() {
  if (!audio || !audio.duration) {
    rafId = requestAnimationFrame(tickProgress);
    return;
  }
  set({ progress: audio.currentTime / audio.duration });
  rafId = requestAnimationFrame(tickProgress);
}

function startTicking() {
  if (rafId === null) {
    rafId = requestAnimationFrame(tickProgress);
  }
}

function stopTicking() {
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

function ensureAudio(): HTMLAudioElement {
  if (audio) return audio;
  const a = new Audio();
  a.preload = "metadata";
  a.crossOrigin = "anonymous";
  a.addEventListener("play", () => {
    set({ isPlaying: true, isLoading: false });
    startTicking();
  });
  a.addEventListener("pause", () => {
    set({ isPlaying: false });
    stopTicking();
  });
  a.addEventListener("ended", () => {
    set({ isPlaying: false, slug: null, progress: 0 });
    stopTicking();
  });
  a.addEventListener("waiting", () => set({ isLoading: true }));
  a.addEventListener("playing", () => set({ isLoading: false }));
  a.addEventListener("error", () => {
    set({ isPlaying: false, isLoading: false });
    stopTicking();
  });
  audio = a;
  return a;
}

export function toggle(slug: string, src: string) {
  const a = ensureAudio();
  if (snapshot.slug === slug) {
    if (snapshot.isPlaying) {
      a.pause();
    } else {
      a.play().catch(() => set({ isPlaying: false, isLoading: false }));
    }
    return;
  }
  a.pause();
  a.src = src;
  set({ slug, isPlaying: false, isLoading: true, progress: 0 });
  a.play().catch(() => set({ isPlaying: false, isLoading: false }));
}

export function stopAll() {
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
  set({ slug: null, isPlaying: false, progress: 0 });
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getSnapshot(): Snapshot {
  return snapshot;
}

export function getServerSnapshot(): Snapshot {
  return initial;
}
