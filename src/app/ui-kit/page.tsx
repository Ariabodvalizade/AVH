import { Button, ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Chip";
import { Card, GlassPanel, SectionHeading } from "@/components/ui/Surface";
import { Skeleton, EmptyState, Notice } from "@/components/ui/Feedback";
import Accordion from "@/components/ui/Accordion";
import NumberedList from "@/components/ui/NumberedList";
import ShowreelPlayer from "@/components/media/ShowreelPlayer";
import WorkCard from "@/components/film/WorkCard";
import RevealObserver from "@/components/motion/RevealObserver";
import ModalDemo from "./ModalDemo";
import FormDemo from "./FormDemo";
import { projects } from "@/content/film";

export const metadata = {
  title: "کیت رابط کاربری — AVH",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "ink", value: "#0A0A0A", use: "سطح اصلی — ۶۰٪", cls: "bg-ink border border-border" },
  { name: "paper", value: "#F5F5F0", use: "سطح روشن — ۳۰٪", cls: "bg-paper" },
  { name: "kodak", value: "#FFB800", use: "اکسنت — حداکثر ۱۰٪", cls: "bg-kodak" },
  { name: "ink-90", value: "mix", use: "کارت روی مشکی", cls: "bg-ink-90" },
  { name: "paper-70", value: "mix", use: "متن ثانویه روی مشکی", cls: "bg-paper-70" },
  { name: "paper-40", value: "mix", use: "متن خاموش (۴٫۵:۱)", cls: "bg-paper-40" },
  { name: "destructive", value: "#D92D20", use: "فقط خطای فرم", cls: "bg-destructive" },
];

const typeScale = [
  { token: "--text-display", label: "نمایشی", sample: "آوای هنر هفتم" },
  { token: "--text-h1", label: "تیتر ۱", sample: "قاب عمودی، تمام‌قد" },
  { token: "--text-h2", label: "تیتر ۲", sample: "کارهای منتخب" },
  { token: "--text-h3", label: "تیتر ۳", sample: "فیلم تبلیغاتی" },
  { token: "--text-lg", label: "بدنهٔ بزرگ", sample: "از تاریکخانهٔ کداک تا رایانش فضایی" },
  { token: "--text-base", label: "بدنه", sample: "نور، قاب، روایت — قاعده همان است که بود." },
  { token: "--text-sm", label: "کپشن", sample: "برند ۰۲ · ۱۴۰۴" },
];

const spacing = ["2xs", "xs", "sm", "md", "lg", "xl"];

function Block({ title, note, children }: { title: string; note?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-10">
      <SectionHeading level={3}>{title}</SectionHeading>
      {note && <p className="mt-2 max-w-[70ch] text-sm text-paper-40">{note}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function UiKitPage() {
  return (
    <div data-layer="film" className="min-h-dvh bg-ink">
      <RevealObserver />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20">
        <header>
          <p className="font-latin text-sm tracking-[0.2em] text-kodak" dir="ltr">
            AVH DESIGN SYSTEM
          </p>
          <h1 className="mt-3 font-extrabold" style={{ fontSize: "var(--text-h1)" }}>
            کیت رابط کاربری
          </h1>
          <p className="mt-4 max-w-[60ch] leading-[1.8] text-paper-70">
            مرجع زندهٔ اجزای سایت. سه رنگ قفل‌شده، مقیاس تایپ فارسی، و همهٔ حالت‌های
            هر کامپوننت — همان چیزی که کد واقعی از آن استفاده می‌کند.
          </p>
        </header>

        <Block title="رنگ" note="فقط ink و paper و kodak. خنثی‌ها همه با color-mix از همین سه ساخته می‌شوند — رنگ چهارم وجود ندارد.">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {colors.map((c) => (
              <div key={c.name}>
                <div className={`h-20 w-full ${c.cls}`} />
                <p className="mt-2 font-latin text-sm" dir="ltr">
                  {c.name}
                </p>
                <p className="text-sm text-paper-40">{c.use}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="تایپوگرافی" note="فارسی با ارتفاع خط ۱٫۸؛ فاصلهٔ حروف منفی فقط روی لاتین اعمال می‌شود.">
          <div className="flex flex-col gap-6">
            {typeScale.map((t) => (
              <div key={t.token} className="flex flex-col gap-1 border-b border-border pb-4">
                <span className="font-latin text-sm text-paper-40" dir="ltr">
                  {t.token}
                </span>
                <span
                  className="font-extrabold"
                  style={{ fontSize: `var(${t.token})`, lineHeight: "var(--leading-display)" }}
                >
                  {t.sample}
                </span>
              </div>
            ))}
          </div>
        </Block>

        <Block title="فاصله‌گذاری" note="مقیاس ۴/۸ — ریتم عمودی کل سایت از همین توکن‌ها می‌آید.">
          <div className="flex flex-wrap items-end gap-6">
            {spacing.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className="bg-kodak" style={{ width: `var(--spacing-${s})`, height: `var(--spacing-${s})` }} />
                <span className="font-latin text-sm text-paper-40" dir="ltr">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </Block>

        <Block title="دکمه‌ها" note="فقط یک دکمهٔ پرشدهٔ کداک در هر صفحه — بقیه خط مو یا شفاف‌اند.">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <Button>کداک (اصلی)</Button>
              <Button variant="hairline">خط مو</Button>
              <Button variant="ghost">شفاف</Button>
              <Button variant="danger">حذف</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">کوچک</Button>
              <Button size="md">متوسط</Button>
              <Button size="lg">بزرگ</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button loading>در حال ارسال</Button>
              <Button disabled>غیرفعال</Button>
              <ButtonLink href="/film">پیوند با ظاهر دکمه</ButtonLink>
            </div>
          </div>
        </Block>

        <Block title="برچسب‌ها">
          <div className="flex flex-wrap gap-2">
            <Tag>اینستاگرام</Tag>
            <Tag>یوتیوب شورتز</Tag>
            <Tag tone="muted">آرشیو</Tag>
          </div>
        </Block>

        <Block title="فرم" note="لیبل همیشه بالای فیلد، خطا زیر فیلد و اعلام‌شده برای اسکرین‌ریدر، ارتفاع حداقل ۴۴px.">
          <FormDemo />
        </Block>

        <Block title="سطوح">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h4 className="font-bold">کارت لایهٔ فیلم</h4>
              <p className="mt-2 text-sm leading-[1.8] text-paper-70">
                گوشهٔ تیز، خط مو، بدون سایه — سردبیری و فیلمیک.
              </p>
            </Card>
            <GlassPanel>
              <h4 className="font-bold">پنل شیشه‌ای لایهٔ فکتوری</h4>
              <p className="mt-2 text-sm leading-[1.8] text-paper-70">
                شعاع ۲۴، بلور ۴۰ — فقط برای کروم و پنل‌های فکتوری، نه متن بدنه.
              </p>
            </GlassPanel>
          </div>
        </Block>

        <Block title="مودال">
          <ModalDemo />
        </Block>

        <Block title="فهرست شماره‌دار" note="شماره‌گذاری فقط جایی که ترتیب معنا دارد — خدمات VVIP و گام‌های فرایند.">
          <NumberedList
            items={[
              { title: "گفت‌وگو", body: "جلسهٔ کوتاه برای فهم برند، مخاطب و بازهٔ زمانی." },
              { title: "تریتمنت", body: "جهت هنری، قاب‌بندی و برآورد — پیش از هر تولیدی." },
              { title: "تولید و تحویل", body: "فیلم‌برداری یا CGI، تدوین، و نسخه‌های اختصاصی هر پلتفرم." },
            ]}
          />
        </Block>

        <Block title="آکاردئون">
          <Accordion
            items={[
              { q: "زمان تحویل یک تیزر چقدر است؟", a: "بسته به دامنهٔ کار، معمولاً بین سه تا هشت هفته از تأیید تریتمنت." },
              { q: "امکان تولید هم‌زمان نسخهٔ عمودی هست؟", a: "بله. نسخهٔ ۹:۱۶ در همان تولید برنامه‌ریزی می‌شود، نه به‌عنوان برش بعدی." },
            ]}
          />
        </Block>

        <Block title="پخش‌کنندهٔ نمایشریل" note="همیشه HLS از Cloudflare Stream؛ استریم تا کلیک کاربر بارگذاری نمی‌شود.">
          <div className="max-w-2xl">
            <ShowreelPlayer playbackId="demo" poster="/posters/p2.svg" title="نمایشریل ۱۴۰۴" />
          </div>
        </Block>

        <Block title="کارت نمونه‌کار" note="مدیا داخل قاب ثابت بزرگ می‌شود تا چیدمان جابه‌جا نشود؛ شمارهٔ کداک با hover ظاهر می‌شود.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <WorkCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Block>

        <Block title="حالت‌های بارگذاری، خالی و پیام">
          <div className="flex flex-col gap-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <Skeleton aspect="16/10" />
              <Skeleton aspect="16/10" />
              <Skeleton aspect="16/10" />
            </div>
            <EmptyState
              title="هنوز کاری در این دسته منتشر نشده"
              body="دستهٔ دیگری را انتخاب کنید یا همهٔ کارها را ببینید."
              action={<Button variant="hairline">دیدن همهٔ کارها</Button>}
            />
            <div className="flex flex-col gap-3">
              <Notice>پیش‌نمایش‌ها بی‌صدا پخش می‌شوند؛ برای صدا روی ویدیو کلیک کنید.</Notice>
              <Notice tone="success">پیام ثبت شد — تا ۴۸ ساعت کاری پاسخ می‌دهیم.</Notice>
              <Notice tone="error">ارسال نشد. اتصال را بررسی کنید و دوباره تلاش کنید.</Notice>
            </div>
          </div>
        </Block>
      </div>
    </div>
  );
}
