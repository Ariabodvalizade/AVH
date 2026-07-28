/**
 * Content stubs shaped 1:1 like the Payload CMS model
 * (design-system/avh/cms-content-model.md). When Payload lands,
 * these modules are replaced by CMS queries — components stay untouched.
 */

export const siteSettings = {
  brandFa: "آوای هنر هفتم",
  brandEn: "AVH",
  brandLine: "از تاریکخانهٔ کداک تا رایانش فضایی",
  filmNav: [
    { label: "کارها", href: "/film#work" },
    { label: "عمودی", href: "/film/vertical" },
    { label: "پشت صحنه", href: "/film/bts" },
    { label: "VVIP", href: "/film/vvip" },
    { label: "درباره", href: "/about" },
    { label: "بلاگ", href: "/blog" },
  ],
  footer: {
    city: "تهران",
    email: "hello@avh.studio",
    phone: "۰۲۱ — ۰۰۰۰ ۰۰۰۰",
  },
} as const;

export const gateway = {
  brandLine: "از تاریکخانهٔ کداک تا رایانش فضایی",
  filmPanel: {
    titleLatin: "FILM",
    titleFa: "فیلم",
    tagline: "فیلم تبلیغاتی · CGI · موشن سه‌بعدی",
    href: "/film",
    poster: "/posters/gateway-film.svg",
  },
  factoryPanel: {
    titleLatin: "FACTORY",
    titleFa: "فکتوری",
    tagline: "عینک AR/VR · کاتالوگ AR · تیزر صنعتی",
    href: "/factory",
    poster: "/posters/gateway-factory.svg",
  },
} as const;
