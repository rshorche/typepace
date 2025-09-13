interface DisplayProps {
  text: string;
}

export function Display({ text }: DisplayProps) {
  return (
    <div className="w-full min-h-20 rounded-xl bg-zinc-800 p-6 text-2xl tracking-wider shadow-down">
      {text}
    </div>
  );
}
