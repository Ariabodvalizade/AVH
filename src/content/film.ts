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
