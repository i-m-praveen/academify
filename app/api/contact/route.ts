import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // TODO: Wire this up to a real destination before launch. Options:
  //   - Email service (e.g. Resend: https://resend.com/docs) — send a
  //     notification email to sales@academify.example with parsed.data.
  //   - CRM webhook (e.g. HubSpot, Salesforce) — POST parsed.data to the
  //     CRM's lead-capture endpoint.
  // Add the relevant API key / webhook URL as an environment variable
  // (see .env.example / README.md) and call it here.
  console.log("[contact-form] New demo request:", parsed.data);

  return NextResponse.json({ ok: true });
}
