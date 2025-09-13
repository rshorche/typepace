import { Button } from "@/shared/components/ui/Button";
import { cn } from "@/shared/lib/cn";
import {
  en_row1,
  en_row2,
  en_row3,
  fa_row1,
  fa_row2,
  fa_row3,
} from "../utils/keyboardConstants";

interface KeyboardProps {
  language?: "en" | "fa";
  pressedKey?: string | null;
}

export function Keyboard({ language = "en", pressedKey }: KeyboardProps) {
  const isEnglish = language === "en";
  const rows = isEnglish
    ? [en_row1, en_row2, en_row3]
    : [fa_row1, fa_row2, fa_row3];

  const renderRow = (keys: string[]) => (
    <div className="flex justify-center">
      {keys.map((key) => (
        <Button
          key={key}
          variant={pressedKey === key ? "secondary" : "primary"}
          className={cn({ "w-32": key === "backspace" || key === "capslock" })}>
          {key}
        </Button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col">
      {rows.map(renderRow)}
      <div className="flex justify-center">
        <Button className="w-1/2">space</Button>
      </div>
    </div>
  );
}
