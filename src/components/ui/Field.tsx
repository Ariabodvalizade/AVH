"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";

/**
 * Form primitives. Rules enforced here so pages can't get them wrong:
 * visible label above the control (never placeholder-only), helper text
 * persistent, error below the field and announced, 16px text to stop iOS
 * zoom, min 44px touch height.
 */

const control =
  "w-full min-h-11 bg-transparent border px-4 py-2.5 text-base text-current " +
  "placeholder:text-muted transition-colors duration-[var(--duration-fast)] " +
  "border-border hover:border-muted focus:border-kodak " +
  "disabled:opacity-40 disabled:pointer-events-none " +
  "read-only:border-dashed read-only:text-muted";

type FieldShellProps = {
  label: string;
  helper?: string;
  error?: string;
  required?: boolean;
  children: (props: { id: string; describedBy?: string; invalid: boolean }) => React.ReactNode;
};

export function Field({ label, helper, error, required, children }: FieldShellProps) {
  const id = useId();
  const helperId = helper ? `${id}-helper` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, helperId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold text-current">
        {label}
        {required && (
          <span className="ms-1 text-[var(--color-accent-text)]" aria-hidden>
            *
          </span>
        )}
      </label>

      {children({ id, describedBy, invalid: Boolean(error) })}

      {error && (
        <p id={errorId} role="alert" className="text-sm text-[var(--color-error)]">
          {error}
        </p>
      )}
      {helper && (
        <p id={helperId} className="text-sm text-muted">
          {helper}
        </p>
      )}
    </div>
  );
}

export function Input({
  invalid,
  className,
  ...props
}: { invalid?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      className={cn(control, invalid && "border-[var(--color-error)]", className)}
      style={{ borderRadius: "var(--radius-control)" }}
    />
  );
}

export function Textarea({
  invalid,
  className,
  ...props
}: { invalid?: boolean } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={props.rows ?? 4}
      aria-invalid={invalid || undefined}
      className={cn(control, "resize-y leading-[1.8]", invalid && "border-[var(--color-error)]", className)}
      style={{ borderRadius: "var(--radius-control)" }}
    />
  );
}

export function Select({
  invalid,
  className,
  children,
  ...props
}: { invalid?: boolean } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      aria-invalid={invalid || undefined}
      className={cn(control, "cursor-pointer appearance-none", invalid && "border-[var(--color-error)]", className)}
      style={{ borderRadius: "var(--radius-control)" }}
    >
      {children}
    </select>
  );
}

export function Checkbox({
  label,
  className,
  ...props
}: { label: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <div className="flex items-start gap-3">
      <input
        {...props}
        id={id}
        type="checkbox"
        className={cn(
          "mt-1 size-5 shrink-0 cursor-pointer appearance-none border border-border",
          "checked:border-kodak checked:bg-kodak",
          "disabled:opacity-40 disabled:pointer-events-none",
          className
        )}
        style={{ borderRadius: "var(--radius-control)" }}
      />
      <label htmlFor={id} className="cursor-pointer text-sm leading-[1.8] text-muted">
        {label}
      </label>
    </div>
  );
}
