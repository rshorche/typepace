import { cn } from "@/shared/lib/cn";

interface DisplayProps {
  text: string;
  userInput: string;
  currentIndex: number;
  errorIndexes: Set<number>;
  language: "en" | "fa";
}

export function Display({
  text,
  userInput,
  currentIndex,
  errorIndexes,
  language,
}: DisplayProps) {
  const characters = text.split("");

  return (
    <div
      className="w-full min-h-44 rounded-xl bg-zinc-800 p-6 text-2xl shadow-down break-words text-justify"
      dir={language === "fa" ? "rtl" : "ltr"}>
      {characters.map((char, index) => {
        const isTyped = index < currentIndex;
        const isCurrent = index === currentIndex;
        const hasError = errorIndexes.has(index);
        const isCorrect = isTyped && !hasError && userInput[index] === char;

        return (
          <span
            key={index}
            className={cn({
              "text-red-500": hasError,
              "text-green-400": isCorrect,
              "text-zinc-500": !isTyped && !isCurrent,
              "blinking-cursor bg-zinc-600 rounded px-1": isCurrent,
            })}>
            {char}
          </span>
        );
      })}
    </div>
  );
}
