import { useState } from "react";
import { Keyboard } from "./components/Keyboard";
import { useKeyPress } from "./hooks/useKeyPress";
import { Display } from "./components/Display";
import { Stats } from "./components/Stats";
import { getRandomText } from "./utils/textGenerator";
import { Button } from "@/shared/components/ui/Button";

export function Typing() {
  const [language, setLanguage] = useState<"en" | "fa">("en");
  const [textToType, setTextToType] = useState(() => getRandomText(language));

  const {
    pressedKey,
    userInput,
    currentIndex,
    errorIndexes,
    status,
    elapsedTime,
    wpm,
    accuracy,
  } = useKeyPress(textToType);

  const handleReset = () => {
    const newText = getRandomText(language);
    setTextToType(newText);
  };

  const handleSelectLanguage = (selectedLanguage: "en" | "fa") => {
    setLanguage(selectedLanguage);
    const newText = getRandomText(selectedLanguage);
    setTextToType(newText);
  };

  const containerMaxWidth =
    language === "fa" ? "max-w-[70rem]" : "max-w-[60rem]";

  return (
    <div
      className={`flex w-full flex-col items-center gap-5 my-5 ${containerMaxWidth}`}>
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-4">
          <Button
            onClick={() => handleSelectLanguage("en")}
            variant={language === "en" ? "secondary" : "primary"}
            className="w-36">
            English
          </Button>
          <Button
            onClick={() => handleSelectLanguage("fa")}
            variant={language === "fa" ? "secondary" : "primary"}
            className="w-36">
            فارسی
          </Button>
        </div>
        <Button onClick={handleReset} className="w-36">
          Reset
        </Button>
      </div>

      <Stats
        wpm={wpm}
        accuracy={accuracy}
        errors={errorIndexes.size}
        time={elapsedTime}
        language={language}
      />

      <Display
        text={textToType}
        userInput={userInput}
        currentIndex={currentIndex}
        errorIndexes={errorIndexes}
        language={language}
      />

      {status !== "finished" && (
        <div className="flex flex-col items-center rounded-2xl bg-zinc-800 p-4 shadow-up">
          <Keyboard pressedKey={pressedKey} language={language} />
        </div>
      )}
    </div>
  );
}
