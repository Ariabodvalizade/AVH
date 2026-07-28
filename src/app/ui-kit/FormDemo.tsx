"use client";

import { useState } from "react";
import { Field, Input, Textarea, Select, Checkbox } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Feedback";

export default function FormDemo() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex max-w-xl flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setSent(true);
        }, 1200);
      }}
    >
      <Field label="نام و نام خانوادگی" required>
        {({ id, describedBy, invalid }) => (
          <Input id={id} aria-describedby={describedBy} invalid={invalid} name="name" />
        )}
      </Field>

      <Field label="ایمیل" required error="ایمیل معتبر نیست — دامنه را بررسی کنید.">
        {({ id, describedBy, invalid }) => (
          <Input
            id={id}
            type="email"
            dir="ltr"
            defaultValue="brand@"
            aria-describedby={describedBy}
            invalid={invalid}
          />
        )}
      </Field>

      <Field label="بازهٔ بودجه" helper="اختیاری — به تخمین زمان‌بندی کمک می‌کند.">
        {({ id, describedBy }) => (
          <Select id={id} aria-describedby={describedBy} defaultValue="">
            <option value="">انتخاب کنید</option>
            <option>تا ۵۰۰ میلیون</option>
            <option>۵۰۰ میلیون تا ۲ میلیارد</option>
            <option>بیش از ۲ میلیارد</option>
          </Select>
        )}
      </Field>

      <Field label="شرح پروژه" helper="یک پاراگراف کافی است؛ باقی را در جلسه می‌پرسیم.">
        {({ id, describedBy }) => <Textarea id={id} aria-describedby={describedBy} />}
      </Field>

      <Field label="شمارهٔ قرارداد" helper="فقط خواندنی — از سیستم پر می‌شود.">
        {({ id, describedBy }) => (
          <Input id={id} readOnly defaultValue="AVH-۱۴۰۴-۰۲۷" aria-describedby={describedBy} />
        )}
      </Field>

      <Checkbox label="با تماس تیم آوای هنر هفتم موافقم." defaultChecked />
      <Checkbox label="گزینهٔ غیرفعال (نمونهٔ حالت disabled)" disabled />

      {sent && <Notice tone="success">پیام ثبت شد — تا ۴۸ ساعت کاری پاسخ می‌دهیم.</Notice>}

      <div className="flex flex-wrap gap-3">
        <Button type="submit" loading={loading}>
          ارسال درخواست
        </Button>
        <Button type="reset" variant="ghost" onClick={() => setSent(false)}>
          پاک کردن
        </Button>
      </div>
    </form>
  );
}
