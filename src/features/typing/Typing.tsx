import { useState } from "react";
import { Keyboard } from "./components/Keyboard";
import { useKeyPress } from "./hooks/useKeyPress";
import { Display } from "./components/Display";
import { getRandomText } from "./utils/textGenerator";
import { Button } from "@/shared/components/ui/Button";

export function Typing() {
  const { pressedKey } = useKeyPress();
  const [language, setLanguage] = useState<"en" | "fa">("en");
  const [textToType, setTextToType] = useState(() => getRandomText(language));

  const handleSelectLanguage = (selectedLanguage: "en" | "fa") => {
    setLanguage(selectedLanguage);
    setTextToType(getRandomText(selectedLanguage));
  };

  const containerMaxWidth =
    language === "fa" ? "max-w-[70rem]" : "max-w-[60rem]";

  return (
    <div
      className={`flex w-full flex-col items-center text-left gap-5 my-5 ${containerMaxWidth}`}>
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

      <Display text={textToType} language={language} />

      <div className="flex flex-col items-center rounded-2xl bg-zinc-800 p-4 shadow-up">
        <Keyboard pressedKey={pressedKey} language={language} />
      </div>
    </div>
  );
}
