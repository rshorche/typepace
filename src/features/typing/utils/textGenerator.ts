// src/features/typing/utils/textGenerator.ts

const englishSampleTexts: readonly string[] = [
  `The quick brown fox jumps over the lazy dog. This classic pangram uses every letter of the alphabet at least once, making it a perfect tool for testing keyboards and ensuring all keys are functional. Its clever construction has made it a timeless phrase.`,
  `Success is not final, failure is not fatal: it is the courage to continue that counts. This famous quote, often attributed to Winston Churchill, reminds us that the journey of perseverance is far more important than any single victory or individual defeat.`,
  `Technology has greatly changed how we live and work. From smartphones to artificial intelligence, modern innovations continue to shape our world. Staying updated with these new technologies is essential in today's fast-paced global environment.`,
];

const persianSampleTexts: readonly string[] = [
  `کتاب بهترین دوست انسان است؛ دوستی که همواره در دسترس شماست و هرگز خیانت نمی‌کند. مطالعه کردن دروازه‌ای به سوی دنیاهای جدید و ناشناخته است و به ما کمک می‌کند تا دیدگاهمان را گسترش دهیم.`,
  `تلاش و پشتکار کلید اصلی رسیدن به اهداف بزرگ است. هیچ موفقیتی یک شبه به دست نمی‌آید و نیازمند برنامه‌ریزی دقیق، صبر و اراده‌ای قوی است. هر قدم کوچک ما را به مقصد نهایی نزدیک‌تر می‌کند.`,
  `طبیعت منبعی غنی از الهام و آرامش برای انسان‌هاست. گذراندن وقت در طبیعت، پیاده‌روی در جنگل یا تماشای غروب خورشید می‌تواند به کاهش استرس و افزایش خلاقیت به طور شایانی کمک کند.`,
];

export function getRandomText(language: "en" | "fa" = "en"): string {
  const texts = language === "fa" ? persianSampleTexts : englishSampleTexts;
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}
