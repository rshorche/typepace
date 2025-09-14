import { useState, useEffect, useMemo, useCallback } from "react";
import { useAudio } from "@/shared/hooks/useAudio";

type Status = "waiting" | "running" | "finished";

export function useKeyPress(textToType: string) {
  const [userInput, setUserInput] = useState<string>("");
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [errorIndexes, setErrorIndexes] = useState<Set<number>>(new Set());
  const [status, setStatus] = useState<Status>("waiting");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const { playCorrectSound, playErrorSound } = useAudio();

  const currentIndex = userInput.length;
  const currentChar = textToType[currentIndex];

  const restart = useCallback(() => {
    setStatus("waiting");
    setUserInput("");
    setErrorIndexes(new Set());
    setElapsedTime(0);
    setStartTime(null);
  }, []);

  useEffect(() => {
    restart();
  }, [textToType, restart]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (status === "running") {
      timer = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (status === "finished") return;
      if (event.key !== "Backspace") event.preventDefault();

      if (status === "waiting") {
        setStatus("running");
        setStartTime(Date.now());
      }

      const { key } = event;
      setPressedKey(key.toLowerCase());

      if (currentIndex >= textToType.length) return;

      if (key === "Backspace") {
        setUserInput((prev) => prev.slice(0, -1));
      } else if (key.length === 1) {
        if (key === currentChar) {
          playCorrectSound();
          setUserInput((prev) => prev + key);
          if (currentIndex + 1 === textToType.length) {
            setStatus("finished");
          }
        } else {
          playErrorSound();
          setErrorIndexes((prev) => new Set(prev).add(currentIndex));
        }
      }
    };

    const handleKeyUp = () => setPressedKey(null);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [textToType, currentIndex, currentChar, status, playCorrectSound, playErrorSound]);

  const { wpm, accuracy } = useMemo(() => {
    if (!startTime || elapsedTime === 0) return { wpm: 0, accuracy: 100 };
    const wordsTyped = userInput.length / 5;
    const minutes = elapsedTime / 60;
    const wpm = minutes > 0 ? wordsTyped / minutes : 0;
    const totalTyped = userInput.length + errorIndexes.size;
    const accuracy = totalTyped > 0 ? (userInput.length / totalTyped) * 100 : 100;
    return { wpm: Math.round(wpm), accuracy: Math.round(accuracy) };
  }, [userInput, errorIndexes, elapsedTime, startTime]);

  return {
    pressedKey,
    userInput,
    currentIndex,
    errorIndexes,
    status,
    elapsedTime,
    wpm,
    accuracy,
    restart,
  };
}