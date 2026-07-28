/** Stub data mirroring the `projects` collection + `filmHome` / `verticalPage` globals. */

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: "film" | "cgi" | "motion";
  format: "wide" | "vertical";
  poster: string;
  tall?: boolean;
};

export const projects: Project[] = [
  { slug: "noor",    title: "نور",           client: "برند ۰۱", year: "۱۴۰۴", category: "film",   format: "wide",     poster: "/posters/p1.svg", tall: true },
  { slug: "madar",   title: "مدار",          client: "برند ۰۲", year: "۱۴۰۴", category: "cgi",    format: "wide",     poster: "/posters/p2.svg" },
  { slug: "sokoot",  title: "سکوت",          client: "برند ۰۳", year: "۱۴۰۳", category: "motion", format: "wide",     poster: "/posters/p3.svg", tall: true },
  { slug: "gharb",   title: "غبار",          client: "برند ۰۴", year: "۱۴۰۳", category: "film",   format: "wide",     poster: "/posters/p4.svg" },
  { slug: "tala",    title: "طلا",           client: "برند ۰۵", year: "۱۴۰۳", category: "cgi",    format: "wide",     poster: "/posters/p5.svg", tall: true },
  { slug: "shahr",   title: "شهرِ شب",       client: "برند ۰۶", year: "۱۴۰۲", category: "motion", format: "wide",     poster: "/posters/p6.svg" },
];

export const verticalReels: Project[] = [
  { slug: "reel-1", title: "ریتم", client: "برند ۰۲", year: "۱۴۰۴", category: "film", format: "vertical", poster: "/posters/v1.svg" },
  { slug: "reel-2", title: "لمس",  client: "برند ۰۵", year: "۱۴۰۴", category: "cgi",  format: "vertical", poster: "/posters/v2.svg" },
  { slug: "reel-3", title: "پرش",  client: "برند ۰۱", year: "۱۴۰۳", category: "motion", format: "vertical", poster: "/posters/v3.svg" },
];

export const categories = [
  { id: "all",    label: "همه" },
  { id: "film",   label: "فیلم" },
  { id: "cgi",    label: "CGI" },
  { id: "motion", label: "موشن سه‌بعدی" },
] as const;

export const filmHome = {
  headline: "آوای هنر هفتم",
  sub: "فیلم تبلیغاتی · CGI · موشن سه‌بعدی",
  services: [
    { title: "فیلم تبلیغاتی", desc: "از تریتمنت تا تدوین نهایی — روایت برند شما روی پرده." },
    { title: "CGI", desc: "جهان‌هایی که دوربین به آن‌ها نمی‌رسد؛ فریم به فریم ساخته می‌شوند." },
    { title: "موشن سه‌بعدی", desc: "محصول شما در حرکت — برای لانچ، کمپین و شبکه‌های اجتماعی." },
  ],
  clients: ["برند ۰۱", "برند ۰۲", "برند ۰۳", "برند ۰۴", "برند ۰۵", "برند ۰۶"],
  philosophy: {
    statement: "از تاریکخانهٔ کداک تا رایانش فضایی",
    body: "ما با نگاتیو شروع کردیم و به فضا رسیدیم؛ اما قاعده همان است: نور، قاب، روایت.",
  },
} as const;

export const verticalPage = {
  headline: "قاب عمودی، تمام‌قد",
  intro: "تولید ۹:۱۶ برای جایی که مخاطبِ برند واقعاً آنجاست — بدون اینکه سینما را فدای فرمت کنیم.",
  processNote:
    "هر ریل از ایده تا انتشار: تریتمنت کوتاه، تولید فشرده، نسخهٔ اختصاصی برای هر پلتفرم.",
  platforms: ["اینستاگرام", "یوتیوب شورتز", "تیک‌تاک"],
} as const;

/** `btsPage` global + the `projects.bts` groups it draws from. */
export const btsPage = {
  manifesto:
    "پیش از آنکه قابی ثبت شود، ساعت‌ها نور می‌سنجیم و صبر می‌کنیم. این صفحه همان ساعت‌هاست — دست‌ها، خطاها، و لحظه‌ای که همه‌چیز سر جایش می‌نشیند.",
  essays: [
    {
      slug: "noor",
      project: "نور",
      intro:
        "سه شب پشت‌بام، منتظر ابری که نور را بشکند. تیزر نهایی چهل ثانیه است؛ این چهل ثانیه سه شب طول کشید.",
      hero: "/posters/bts1.svg",
      stills: [
        { src: "/posters/bts2.svg", caption: "تست نور، ساعت ۴:۱۰ بامداد" },
        { src: "/posters/bts3.svg", caption: "فیلتر دست‌ساز روی لنز ۳۵" },
        { src: "/posters/bts4.svg", caption: "قاب نهایی، پیش از رندر" },
      ],
    },
    {
      slug: "tala",
      project: "طلا",
      intro:
        "کل صحنه CGI است جز یک چیز: بازتاب واقعی طلا که روی میز فیلم‌برداری ضبط شد و بعد به مدل بسته شد.",
      hero: "/posters/bts5.svg",
      stills: [
        { src: "/posters/bts6.svg", caption: "مرجع بازتاب، استودیو تهران" },
        { src: "/posters/bts1.svg", caption: "چیدمان نور برای اسکن" },
        { src: "/posters/bts3.svg", caption: "مقایسهٔ رندر و مرجع" },
      ],
    },
  ],
} as const;

/** `vvipPage` global. */
export const vvipPage = {
  manifesto: {
    line: "برای وقتی که فیلم، خودِ محصول است.",
    paragraph:
      "تولید ممتاز برای برندهایی که یک بار در سال یک کار می‌سازند و آن یک کار باید سال‌ها بماند. کارگردانی اختصاصی، تیم بسته، و جدول زمانی‌ای که فقط مال شماست.",
  },
  offerings: [
    {
      title: "فیلم تبلیغاتی با کارگردان",
      body: "از تریتمنت تا نسخهٔ نهایی زیر نظر یک کارگردان ثابت. کستینگ، لوکیشن و موسیقی اختصاصی.",
    },
    {
      title: "CGI کامل",
      body: "جهانی که دوربین به آن نمی‌رسد — از مدل‌سازی تا رندر نهایی در استودیوی خودمان.",
    },
    {
      title: "فیلم لانچ محصول",
      body: "روایت معرفی محصول برای رویداد، رسانه و شبکه‌های اجتماعی، در یک بستهٔ هماهنگ.",
    },
  ],
  process: [
    { title: "گفت‌وگو", body: "یک جلسه، بدون بریف رسمی. می‌خواهیم بدانیم چه چیزی برایتان مهم است." },
    { title: "تریتمنت اختصاصی", body: "جهت هنری، مرجع بصری و برآورد — پیش از هر تعهدی." },
    { title: "تولید و تحویل", body: "تیم بسته، گزارش هفتگی، و اکران خصوصی نسخهٔ نهایی." },
  ],
  references: ["noor", "tala"],
  form: {
    intro: "فرم را پر کنید؛ ظرف ۴۸ ساعت کاری خودمان تماس می‌گیریم.",
    budgetBands: ["تا ۵۰۰ میلیون", "۵۰۰ میلیون تا ۲ میلیارد", "بیش از ۲ میلیارد", "هنوز مشخص نیست"],
    success: "درخواست شما ثبت شد. تا ۴۸ ساعت کاری تماس می‌گیریم.",
  },
} as const;
