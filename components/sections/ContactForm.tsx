"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactFormSchema, interestOptions, type FieldErrors } from "@/lib/validation";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        organization: fieldErrors.organization?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        interest: fieldErrors.interest?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setFormError("Something went wrong sending your message. Please try again, or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded bg-success/10 p-10 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-success" aria-hidden="true" />
        <h2 className="font-heading text-xl font-semibold text-ink">Thanks — we got it.</h2>
        <p className="text-sm text-ink-muted">
          A member of our team will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" error={errors.name} required autoComplete="name" />
        <Field
          label="Organization"
          name="organization"
          error={errors.organization}
          required
          autoComplete="organization"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field
          label="Work email"
          name="email"
          type="email"
          error={errors.email}
          required
          autoComplete="email"
        />
        <Field
          label="Phone (optional)"
          name="phone"
          type="tel"
          error={errors.phone}
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-ink">
          I&apos;m interested in <span aria-hidden="true">*</span>
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.interest)}
          aria-describedby={errors.interest ? "interest-error" : undefined}
          className="w-full rounded-sm border border-border bg-white px-3.5 py-2.5 text-sm text-ink focus-ring"
        >
          <option value="" disabled>
            Select an option
          </option>
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.interest ? (
          <p id="interest-error" className="mt-1.5 text-sm text-danger">
            {errors.interest}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-sm border border-border bg-white px-3.5 py-2.5 text-sm text-ink focus-ring"
          placeholder="Tell us about your institution and what you'd like to run on Academify."
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-danger">
            {errors.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p role="alert" className="text-sm text-danger">
          {formError}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-sm border border-border bg-white px-3.5 py-2.5 text-sm text-ink focus-ring"
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
