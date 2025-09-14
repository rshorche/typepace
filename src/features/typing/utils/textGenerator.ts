const englishSampleTexts: readonly string[] = [
  `The concept of mindfulness is simple yet profound. It involves paying full attention to the present moment without judgment. This practice can reduce stress and improve focus, making it a valuable tool for modern life and personal well-being.`,
  `Exploring the world of creative writing can be a rewarding experience. It allows you to build new worlds, develop unique characters, and share your stories. Whether you prefer short stories or long novels, the only limit is your imagination.`,
  `Open-source software has revolutionized the technology industry. It fosters a collaborative environment where developers from all over the world can contribute to projects, leading to innovation and creating powerful, free tools for everyone.`,
  `The importance of a balanced diet cannot be overstated for good health. Eating a variety of fruits, vegetables, and whole grains provides essential nutrients that support your body's daily functions and helps to prevent chronic diseases.`,
  `Learning a new musical instrument offers numerous benefits beyond just entertainment. It enhances cognitive skills, improves memory and coordination, and provides a creative outlet for expressing emotions. It is a journey of discipline and passion.`,
];

const persianSampleTexts: readonly string[] = [
  `یادگیری یک زبان جدید پنجره ای به سوی فرهنگی متفاوت باز می کند. این فرایند نه تنها به شما امکان ارتباط با افراد جدید را می دهد، بلکه درک عمیق تری از جهان و دیدگاه های گوناگون آن برایتان به ارمغان می آورد. این یک سرمایه گذاری برای آینده است.`,
  `ورزش منظم یکی از مهم ترین عوامل برای حفظ سلامتی جسم و روان به شمار می رود. فعالیت بدنی به بهبود عملکرد قلب، تقویت عضلات و کاهش استرس کمک شایانی می کند. پیدا کردن ورزشی که از آن لذت می برید، کلید اصلی تداوم و موفقیت در این مسیر است.`,
  `تاریخ سینما مملو از شاهکارهایی است که توانسته اند احساسات انسان را به تصویر بکشند. فیلم ها قدرت آن را دارند که ما را به دنیاهای دیگر ببرند، با شخصیت های مختلف همراه کنند و سوالات عمیقی درباره زندگی، عشق و انسانیت در ذهن ما ایجاد نمایند.`,
  `هنر آشپزی ترکیبی از علم و خلاقیت است که می تواند به تجربه ای لذت بخش تبدیل شود. انتخاب مواد اولیه تازه، شناخت طعم ها و به کارگیری تکنیک های مختلف، به شما این امکان را می دهد که غذاهایی بی نظیر و به یاد ماندنی برای خود و دیگران خلق کنید.`,
  `فلسفه به ما می آموزد که چگونه به شکلی عمیق تر درباره مسائل اساسی زندگی فکر کنیم. این دانش به ما ابزارهایی برای تحلیل منطقی، پرسشگری و رسیدن به درکی بهتر از خودمان و جایگاهمان در جهان می دهد و تفکر انتقادی را در ما تقویت می کند.`,
];

export function getRandomText(language: "en" | "fa" = "en"): string {
  const texts = language === "fa" ? persianSampleTexts : englishSampleTexts;
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}
