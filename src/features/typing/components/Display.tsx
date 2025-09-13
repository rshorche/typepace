interface DisplayProps {
  text: string;
  language: "en" | "fa";
}

export function Display({ text, language }: DisplayProps) {
  return (
    <div
      className="w-full min-h-44 rounded-xl bg-zinc-800 p-6 text-2xl shadow-down break-words text-justify"
      dir={language === "fa" ? "rtl" : "ltr"}>
      {text}
    </div>
  );
}
