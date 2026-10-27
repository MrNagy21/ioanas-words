"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  playCelebrationSound,
  playSpinSound,
  playWordSound,
  unlockGameSound,
} from "@/components/game-sound";

// Retain the preference introduced for anonymous wheel sound.
const STORAGE_KEY = "word-wheel:spin-sound";
const CHANGE_EVENT = "word-wheel:spin-sound-change";
let fallbackPreference: boolean | null = null;

export type GameSoundControl = {
  enabled: boolean;
  onChange: (enabled: boolean) => void | Promise<unknown>;
  disabled?: boolean;
};

function readPreference() {
  if (fallbackPreference !== null) return fallbackPreference;
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "on";
  } catch {
    return false;
  }
}
function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(CHANGE_EVENT, listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(CHANGE_EVENT, listener);
  };
}

export function useGameSound({
  control,
  persist = true,
}: { control?: GameSoundControl; persist?: boolean } = {}) {
  const saved = useSyncExternalStore(subscribe, readPreference, () => false);
  const [temporary, setTemporary] = useState(false);
  const [pending, setPending] = useState<boolean | null>(null);
  const enabled = pending ?? control?.enabled ?? (persist ? saved : temporary);
  const enabledRef = useRef(enabled);
  const cleanup = useRef<(() => void) | null>(null);
  const stop = useCallback(() => {
    cleanup.current?.();
    cleanup.current = null;
  }, []);
  useEffect(() => {
    enabledRef.current = enabled;
    if (!enabled) stop();
  }, [enabled, stop]);
  useEffect(() => {
    const hide = () => {
      if (document.hidden) stop();
    };
    document.addEventListener("visibilitychange", hide);
    return () => {
      document.removeEventListener("visibilitychange", hide);
      stop();
    };
  }, [stop]);

  async function toggle() {
    const next = !enabled;
    enabledRef.current = next;
    if (next) unlockGameSound();
    else stop();
    if (control) {
      setPending(next);
      try {
        await control.onChange(next);
      } catch {
        /* The owning screen reports persistence failures. */
      } finally {
        setPending(null);
      }
      return;
    }
    if (!persist) {
      setTemporary(next);
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
      fallbackPreference = null;
    } catch {
      fallbackPreference = next;
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }

  const start = useCallback(
    (durationMs: number) => {
      stop();
      if (!enabledRef.current || document.hidden) return;
      unlockGameSound();
      cleanup.current = playSpinSound(durationMs);
    },
    [stop],
  );
  const reveal = useCallback(() => {
    stop();
    if (enabledRef.current) cleanup.current = playWordSound();
  }, [stop]);
  const celebrate = useCallback(() => {
    stop();
    if (enabledRef.current) cleanup.current = playCelebrationSound();
    return stop;
  }, [stop]);
  return {
    enabled,
    toggle,
    start,
    reveal,
    celebrate,
    stop,
    disabled: control?.disabled || pending !== null,
  };
}
