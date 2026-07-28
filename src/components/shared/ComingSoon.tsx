import Link from "next/link";

export default function ComingSoon({ title, back = "/film" }: { title: string; back?: string }) {
  return (
    <section className="flex min-h-[70dvh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="font-extrabold" style={{ fontSize: "var(--text-h1)" }}>
        {title}
      </h1>
      <p className="text-paper-70">این صفحه در حال ساخت است.</p>
      <Link
        href={back}
        className="border-b-2 border-kodak pb-1 font-bold transition-colors hover:text-kodak"
      >
        بازگشت
      </Link>
    </section>
  );
}
