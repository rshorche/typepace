const englishSampleTexts: readonly string[] = [
  `The concept of mindfulness is simple yet profound. It involves paying full attention to the present moment without judgment. This practice can reduce stress and improve focus, making it a valuable tool for modern life and personal well-being.`,
  `Exploring the world of creative writing can be a rewarding experience. It allows you to build new worlds, develop unique characters, and share your stories. Whether you prefer short stories or long novels, the only limit is your imagination.`,
  `Open-source software has revolutionized the technology industry. It fosters a collaborative environment where developers from all over the world can contribute to projects, leading to innovation and creating powerful, free tools for everyone.`,
  `The importance of a balanced diet cannot be overstated for good health. Eating a variety of fruits, vegetables, and whole grains provides essential nutrients that support your body's daily functions and helps to prevent chronic diseases.`,
  `Learning a new musical instrument offers numerous benefits beyond just entertainment. It enhances cognitive skills, improves memory and coordination, and provides a creative outlet for expressing emotions. It is a journey of discipline and passion.`,
  `Climate change is one of the most pressing issues of our time. It requires a global effort to reduce carbon emissions and transition to renewable energy sources. Individual actions, combined with government policies, can make a significant difference.`,
  `The art of photography is about capturing moments in time. It's a way to tell stories, express creativity, and document the world around us. A good photograph can evoke strong emotions and convey a powerful message without using any words.`,
  `Reading classic literature provides a window into different historical periods and cultures. The timeless themes and complex characters found in these works continue to resonate with readers today, offering insights into the human condition.`,
  `Regular physical exercise is crucial for maintaining both physical and mental health. It boosts energy levels, improves mood, and strengthens the immune system. Finding an activity you enjoy is the key to staying consistent with your fitness routine.`,
  `The internet has transformed the way we access information and communicate with each other. It has connected people from all corners of the globe, creating a vast network of knowledge and social interaction that was once unimaginable.`,
];

const persianSampleTexts: readonly string[] = [
  `یادگیری یک زبان جدید پنجره ای به سوی فرهنگی متفاوت باز می کند. این فرایند نه تنها به شما امکان ارتباط با افراد جدید را می دهد، بلکه درک عمیق تری از جهان و دیدگاه های گوناگون آن برایتان به ارمغان می آورد. این یک سرمایه گذاری برای آینده است.`,
  `ورزش منظم یکی از مهم ترین عوامل برای حفظ سلامتی جسم و روان به شمار می رود. فعالیت بدنی به بهبود عملکرد قلب، تقویت عضلات و کاهش استرس کمک شایانی می کند. پیدا کردن ورزشی که از آن لذت می برید، کلید اصلی تداوم و موفقیت در این مسیر است.`,
  `تاریخ سینما مملو از شاهکارهایی است که توانسته اند احساسات انسان را به تصویر بکشند. فیلم ها قدرت آن را دارند که ما را به دنیاهای دیگر ببرند، با شخصیت های مختلف همراه کنند و سوالات عمیقی درباره زندگی، عشق و انسانیت در ذهن ما ایجاد نمایند.`,
  `هنر آشپزی ترکیبی از علم و خلاقیت است که می تواند به تجربه ای لذت بخش تبدیل شود. انتخاب مواد اولیه تازه، شناخت طعم ها و به کارگیری تکنیک های مختلف، به شما این امکان را می دهد که غذاهایی بی نظیر و به یاد ماندنی برای خود و دیگران خلق کنید.`,
  `فلسفه به ما می آموزد که چگونه به شکلی عمیق تر درباره مسائل اساسی زندگی فکر کنیم. این دانش به ما ابزارهایی برای تحلیل منطقی، پرسشگری و رسیدن به درکی بهتر از خودمان و جایگاهمان در جهان می دهد و تفکر انتقادی را در ما تقویت می کند.`,
  `سفر کردن به نقاط مختلف جهان، فرصتی برای آشنایی با فرهنگ ها، آداب و رسوم و سبک های زندگی متفاوت است. این تجربه ها نه تنها خاطراتی به یاد ماندنی برای ما می سازند، بلکه به ما کمک می کنند تا با دیدی بازتر و عمیق تر به دنیای اطراف خود نگاه کنیم.`,
  `موسیقی زبان مشترک تمام انسان هاست که می تواند احساسات عمیق را بدون نیاز به کلمات بیان کند. گوش دادن به موسیقی یا نواختن یک ساز، راهی قدرتمند برای ابراز خود، کاهش تنش های روزمره و پیدا کردن آرامش درونی است که تاثیر زیادی بر روحیه دارد.`,
  `اهمیت حفاظت از محیط زیست روز به روز بیشتر می شود. با اقداماتی مانند کاهش مصرف پلاستیک، صرفه جویی در انرژی و حمایت از منابع پایدار، هر یک از ما می توانیم نقشی موثر در حفظ کره زمین برای نسل های آینده ایفا کنیم و به سلامت سیاره کمک نماییم.`,
  `دنیای دیجیتال فرصت های بی شماری برای یادگیری و پیشرفت فراهم کرده است. دوره های آنلاین، کتاب های الکترونیکی و منابع آموزشی رایگان به ما این امکان را می دهند که مهارت های جدیدی بیاموزیم و در هر زمینه ای که به آن علاقه مند هستیم، دانش خود را افزایش دهیم.`,
  `داشتن رویا و هدف در زندگی به ما انگیزه و جهت می دهد. تعیین اهداف واقع بینانه و تلاش مستمر برای رسیدن به آن ها، باعث ایجاد حس رضایت و موفقیت در ما می شود. این مسیر اگرچه ممکن است چالش برانگیز باشد، اما نتیجه آن بسیار ارزشمند و شیرین است.`,
];

export function getRandomText(language: "en" | "fa" = "en"): string {
  const texts = language === "fa" ? persianSampleTexts : englishSampleTexts;
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}
