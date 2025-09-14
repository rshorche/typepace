import { useState, useEffect } from "react";
import { useAudio } from "@/shared/hooks/useAudio";

export function useKeyPress(textToType: string) {
  const [userInput, setUserInput] = useState<string>("");
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [errorIndexes, setErrorIndexes] = useState<Set<number>>(new Set());

  const { playCorrectSound, playErrorSound } = useAudio();

  const currentIndex = userInput.length;
  const currentChar = textToType[currentIndex];

  useEffect(() => {
    setUserInput("");
    setErrorIndexes(new Set());
  }, [textToType]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Backspace") {
        event.preventDefault();
      }

      const { key } = event;
      setPressedKey(key.toLowerCase());

      if (currentIndex >= textToType.length) {
        return;
      }

      if (key === "Backspace") {
        setUserInput((prev) => prev.slice(0, -1));
      } else if (key.length === 1) {
        if (key === currentChar) {
          playCorrectSound();
          setUserInput((prev) => prev + key);
        } else {
          playErrorSound();
          setErrorIndexes((prev) => new Set(prev).add(currentIndex));
        }
      }
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [textToType, currentIndex, currentChar, playCorrectSound, playErrorSound]);

  return { pressedKey, userInput, currentIndex, errorIndexes };
}
