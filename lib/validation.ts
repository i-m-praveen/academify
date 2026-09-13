import { z } from "zod";

export const interestOptions = [
  { value: "olympiad-hosting", label: "Olympiad hosting" },
  { value: "question-bank", label: "Institutional question bank" },
  { value: "practice-analytics", label: "Daily practice & analytics" },
  { value: "other", label: "Other" },
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  organization: z.string().trim().min(2, "Please enter your organization name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number.")
    .optional()
    .or(z.literal("")),
  interest: z.enum(
    ["olympiad-hosting", "question-bank", "practice-analytics", "other"],
    { errorMap: () => ({ message: "Please select what you're interested in." }) },
  ),
  message: z.string().trim().min(10, "Please tell us a bit more (at least 10 characters)."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;
