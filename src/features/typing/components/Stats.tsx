interface StatsProps {
  wpm: number;
  accuracy: number;
  errors: number;
  time: number;
  language: 'en' | 'fa';
}

const labels = {
  en: { wpm: "WPM", accuracy: "Accuracy", errors: "Errors", time: "Time" },
  fa: { wpm: "کلمه در دقیقه", accuracy: "دقت", errors: "خطاها", time: "زمان" }
};

export function Stats({ wpm, accuracy, errors, time, language }: StatsProps) {
  const t = labels[language];
  return (
    <div className="flex w-full justify-around rounded-xl bg-zinc-800 p-4 text-center shadow-down">
      <div>
        <div className="text-3xl font-bold text-green-400">{wpm}</div>
        <div className="text-sm text-zinc-400">{t.wpm}</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{accuracy}%</div>
        <div className="text-sm text-zinc-400">{t.accuracy}</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-red-500">{errors}</div>
        <div className="text-sm text-zinc-400">{t.errors}</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{time}s</div>
        <div className="text-sm text-zinc-400">{t.time}</div>
      </div>
    </div>
  );
}