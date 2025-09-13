import { Keyboard } from "@/features/typing/components/Keyboard";
import { useKeyPress } from "@/features/typing/hooks/useKeyPress";

export function Typing() {
  const { pressedKey } = useKeyPress();
  return (
    <div className="flex flex-col items-center shadow-up p-3 rounded-2xl">
      <Keyboard pressedKey={pressedKey} />
    </div>
  );
}
