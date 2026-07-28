"use client";

import { useState } from "react";
import { Field, Input, Textarea, Select } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Feedback";
import { vvipPage } from "@/content/film";

/**
 * VVIP inquiry. Posts to `inquiries` (type: vvip, priority: high) once Payload
 * is wired; for now it resolves locally so the states are real and reviewable.
 */
export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-6">
        <Notice tone="success">{vvipPage.form.success}</Notice>
        <Button variant="ghost" onClick={() => setStatus("idle")}>
          ارسال درخواست دیگر
        </Button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("sent"), 1000);
      }}
    >
      <Field label="نام و نام خانوادگی" required>
        {({ id, describedBy }) => (
          <Input id={id} name="name" required autoComplete="name" aria-describedby={describedBy} />
        )}
      </Field>

      <Field label="شرکت یا برند">
        {({ id, describedBy }) => (
          <Input id={id} name="company" autoComplete="organization" aria-describedby={describedBy} />
        )}
      </Field>

      <Field label="راه تماس" required helper="ایمیل یا شمارهٔ تماس مستقیم.">
        {({ id, describedBy }) => (
          <Input id={id} name="contact" required aria-describedby={describedBy} />
        )}
      </Field>

      <Field label="شرح پروژه" helper="یک پاراگراف کافی است؛ باقی را در جلسه می‌پرسیم.">
        {({ id, describedBy }) => (
          <Textarea id={id} name="outline" aria-describedby={describedBy} />
        )}
      </Field>

      <Field label="بازهٔ بودجه" helper="اختیاری — به تخمین دامنهٔ کار کمک می‌کند.">
        {({ id, describedBy }) => (
          <Select id={id} name="budget" defaultValue="" aria-describedby={describedBy}>
            <option value="">انتخاب کنید</option>
            {vvipPage.form.budgetBands.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </Select>
        )}
      </Field>

      <Button type="submit" size="lg" loading={status === "sending"} className="self-start">
        ارسال درخواست
      </Button>
    </form>
  );
}
