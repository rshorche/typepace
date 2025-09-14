import { useMemo, useCallback } from "react";

const createAudio = (src: string) =>
  typeof window !== "undefined" ? new Audio(src) : null;

export function useAudio() {
  const correctSound = useMemo(() => createAudio("/correct.mp3"), []);
  const errorSound = useMemo(() => createAudio("/error.mp3"), []);

  const playSound = useCallback((audio: HTMLAudioElement | null) => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }, []);

  const playCorrectSound = useCallback(
    () => playSound(correctSound),
    [playSound, correctSound]
  );
  const playErrorSound = useCallback(
    () => playSound(errorSound),
    [playSound, errorSound]
  );

  return { playCorrectSound, playErrorSound };
}
