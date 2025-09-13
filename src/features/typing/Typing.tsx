import { Keyboard } from "./components/Keyboard";
import { useKeyPress } from "./hooks/useKeyPress";
import { Display } from "./components/Display";

export function Typing() {
  const { pressedKey, typedText } = useKeyPress();

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Display text={typedText} />
      <div className="flex w-full flex-col items-center gap-8 rounded-2xl bg-zinc-800 p-4 shadow-up">
        <Keyboard pressedKey={pressedKey} />
      </div>
    </div>
  );
}
