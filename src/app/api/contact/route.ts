import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";
import { getResend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      const message =
        parsed.error.issues[0]?.message ?? "Please check the project details.";
      return NextResponse.json({ message }, { status: 400 });
    }

    if (parsed.data.company) {
      return NextResponse.json({ message: "Thanks." });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return NextResponse.json(
        { message: "Contact email is not configured yet." },
        { status: 500 }
      );
    }

    const resend = getResend();
    const { name, email, projectType, budgetRange, timeline, message } = parsed.data;

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New nexs.tudio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        `Budget range: ${budgetRange}`,
        `Timeline: ${timeline}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Project brief sent." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Could not send the inquiry. Please email hello@nexs.tudio." },
      { status: 500 }
    );
  }
}
