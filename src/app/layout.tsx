import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vazir = localFont({
  src: "../fonts/Vazirmatn-Variable.woff2",
  variable: "--font-vazir",
  display: "swap",
  weight: "100 900",
});

const inter = localFont({
  src: "../fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "آوای هنر هفتم — AVH",
    template: "%s — آوای هنر هفتم",
  },
  description:
    "خانهٔ خلاقیت آوای هنر هفتم — از تاریکخانهٔ کداک تا رایانش فضایی. AVH FILM: فیلم تبلیغاتی، CGI و موشن سه‌بعدی. AVH FACTORY: محصول و فناوری AR/VR.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
