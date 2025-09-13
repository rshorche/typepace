import { useState, useEffect } from "react";

export function useKeyPress() {
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const [typedText, setTypedText] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      setPressedKey(key.toLowerCase());

      if (key === "Backspace") {
        setTypedText((prev) => prev.slice(0, -1));
      } else if (key.length === 1) {
        setTypedText((prev) => prev + key);
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
  }, []);

  return { pressedKey, typedText };
}
