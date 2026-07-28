"use client";

import { useState } from "react";
import { Field, Input, Checkbox } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Notice } from "@/components/ui/Feedback";
import { glassesPage } from "@/content/factory";

/** Posts to `waitlistSignups` once Payload is wired. No countdown, no scarcity. */
export default function Waitlist() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  if (status === "sent") {
    return <Notice tone="success">{glassesPage.waitlist.success}</Notice>;
  }

  return (
    <form
      className="flex w-full max-w-md flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("sent"), 900);
      }}
    >
      <Field label="ایمیل" required>
        {({ id, describedBy }) => (
          <Input
            id={id}
            name="email"
            type="email"
            dir="ltr"
            required
            autoComplete="email"
            aria-describedby={describedBy}
          />
        )}
      </Field>
      <Checkbox name="consent" required label={glassesPage.waitlist.consent} />
      <Button type="submit" loading={status === "sending"} className="self-start">
        مرا خبر کن
      </Button>
    </form>
  );
}
