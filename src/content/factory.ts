/** Stubs shaped like the Payload globals/collections for the Factory layer. */

export const factoryNav = [
  { label: "عینک", href: "/factory/glasses" },
  { label: "کاتالوگ AR", href: "/factory/ar-catalog" },
  { label: "درباره", href: "/about" },
  { label: "بلاگ", href: "/blog" },
] as const;

/** `factoryHome` global. */
export const factoryHome = {
  hero: {
    eyebrow: "AVH FACTORY",
    headline: "همان قاب، این بار در فضا",
    sub: "بازوی محصول و فناوری آوای هنر هفتم — عینک واقعیت افزوده، کاتالوگ سه‌بعدی، و تیزر صنعتی.",
    media: "/posters/f-hero.svg",
  },
  pillars: [
    {
      title: "عینک AVH",
      desc: "نمایشگر واقعیت افزوده برای خطوط تولید و آموزش فنی — سبک، بی‌سیم، ساخت ایران.",
      href: "/factory/glasses",
      media: "/posters/f-glasses.svg",
      status: "به‌زودی",
    },
    {
      title: "کاتالوگ AR",
      desc: "محصولات صنعتی‌تان را در فضای واقعی مشتری بگذارید — بدون نصب اپلیکیشن.",
      href: "/factory/ar-catalog",
      media: "/posters/f-ar.svg",
      status: "در دسترس",
    },
  ],
  bridge: {
    statement: "از تاریکخانهٔ کداک تا رایانش فضایی",
    body: "همان تیمی که سه دهه با نور و قاب کار کرده، حالا فضا را قاب می‌گیرد. فیلم و فناوری، دو سرِ یک خط‌اند.",
  },
} as const;

/** `glassesPage` global. */
export const glassesPage = {
  hero: {
    eyebrow: "AVH LENS ۰۱",
    headline: "دستت آزاد، نقشه جلوی چشمت",
    sub: "عینک واقعیت افزوده برای کار — نه برای بازی.",
    media: "/posters/g1.svg",
  },
  /** Each block pins the canvas and drives one camera state. */
  featureSections: [
    {
      eyebrow: "اپتیک",
      headline: "میدان دید ۵۲ درجه",
      body: "موجبر شیشه‌ای دولایه با روشنایی ۱۸۰۰ نیت — در نور مستقیم کارگاه هم خوانا می‌ماند.",
    },
    {
      eyebrow: "وزن",
      headline: "۹۸ گرم، تمام‌روز",
      body: "توزیع وزن روی استخوان گیجگاهی؛ باتری در بند پشتی، نه روی بینی.",
    },
    {
      eyebrow: "تعامل",
      headline: "صدا، نگاه، اشاره",
      body: "فرمان فارسی آفلاین روی خود دستگاه پردازش می‌شود — بدون ارسال صدا به سرور.",
    },
  ],
  specs: [
    {
      group: "نمایش",
      rows: [
        { label: "میدان دید", value: "۵۲°" },
        { label: "روشنایی", value: "۱۸۰۰ نیت" },
        { label: "نرخ تازه‌سازی", value: "۹۰ هرتز" },
      ],
    },
    {
      group: "سخت‌افزار",
      rows: [
        { label: "وزن", value: "۹۸ گرم" },
        { label: "عمر باتری", value: "۶ ساعت کار پیوسته" },
        { label: "اتصال", value: "وای‌فای ۶ · بلوتوث ۵٫۳" },
      ],
    },
  ],
  gallery: ["/posters/g1.svg", "/posters/g2.svg", "/posters/g3.svg", "/posters/g4.svg"],
  waitlist: {
    headline: "اولین نسخه، پاییز ۱۴۰۴",
    body: "ایمیلتان را بگذارید تا پیش از عرضهٔ عمومی خبر بدهیم. نه خبرنامه می‌فرستیم، نه شمارش معکوس داریم.",
    consent: "با دریافت یک ایمیل اطلاع‌رسانی موافقم.",
    success: "ثبت شد. وقتش که برسد خبر می‌دهیم.",
  },
  faq: [
    {
      q: "برای چه محیط‌هایی طراحی شده؟",
      a: "خط تولید، انبار، تعمیرات میدانی و آموزش فنی — جایی که دست اپراتور باید آزاد بماند.",
    },
    {
      q: "با نرم‌افزار داخلی ما کار می‌کند؟",
      a: "بله. SDK وب‌محور دارد و هر چیزی که در مرورگر اجرا شود روی عینک هم اجرا می‌شود.",
    },
    {
      q: "داده‌ها کجا پردازش می‌شوند؟",
      a: "پردازش صوت و تشخیص اشیا روی خود دستگاه انجام می‌شود؛ چیزی به بیرون فرستاده نمی‌شود.",
    },
  ],
} as const;

/** `arCatalogPage` global + `catalogItems` collection. */
export const arCatalogPage = {
  hero: {
    headline: "کاتالوگ شما، وسط کارخانهٔ مشتری",
    sub: "مدل سه‌بعدی محصولاتتان را با یک لینک در فضای واقعی مشتری بگذارید — بدون نصب اپلیکیشن.",
    media: "/posters/f-ar.svg",
  },
  steps: [
    { title: "اسکن محصول", body: "با اسکنر یا از روی نقشهٔ CAD شما، مدل دقیق ساخته می‌شود." },
    { title: "بهینه‌سازی و کاتالوگ", body: "مدل برای وب سبک می‌شود و در کاتالوگ قابل جست‌وجو می‌نشیند." },
    { title: "مشاهده در AR", body: "مشتری لینک را باز می‌کند و محصول را در ابعاد واقعی می‌بیند." },
  ],
  industries: ["ماشین‌آلات صنعتی", "مبلمان اداری", "تجهیزات پزشکی", "لوازم خانگی", "روشنایی", "خودرو"],
} as const;

export type CatalogItem = {
  slug: string;
  title: string;
  industry: string;
  poster: string;
  specs: { label: string; value: string }[];
};

export const catalogItems: CatalogItem[] = [
  {
    slug: "cnc-01",
    title: "دستگاه CNC رومیزی",
    industry: "ماشین‌آلات صنعتی",
    poster: "/posters/ar1.svg",
    specs: [
      { label: "ابعاد", value: "۱۲۰ × ۸۰ × ۹۵ سانتی‌متر" },
      { label: "وزن", value: "۲۴۰ کیلوگرم" },
      { label: "حجم مدل", value: "۲٫۱ مگابایت" },
    ],
  },
  {
    slug: "chair-02",
    title: "صندلی ارگونومیک اداری",
    industry: "مبلمان اداری",
    poster: "/posters/ar2.svg",
    specs: [
      { label: "ابعاد", value: "۶۵ × ۶۵ × ۱۲۰ سانتی‌متر" },
      { label: "تنوع رنگ", value: "۶ رنگ" },
      { label: "حجم مدل", value: "۱٫۴ مگابایت" },
    ],
  },
  {
    slug: "lamp-03",
    title: "چراغ خطی سقفی",
    industry: "روشنایی",
    poster: "/posters/ar3.svg",
    specs: [
      { label: "طول", value: "۱۵۰ سانتی‌متر" },
      { label: "توان", value: "۴۸ وات" },
      { label: "حجم مدل", value: "۰٫۹ مگابایت" },
    ],
  },
  {
    slug: "bed-04",
    title: "تخت بیمارستانی برقی",
    industry: "تجهیزات پزشکی",
    poster: "/posters/ar4.svg",
    specs: [
      { label: "ابعاد", value: "۲۱۰ × ۹۵ سانتی‌متر" },
      { label: "ظرفیت", value: "۲۰۰ کیلوگرم" },
      { label: "حجم مدل", value: "۳٫۰ مگابایت" },
    ],
  },
];
