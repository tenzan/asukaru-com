import type { APIRoute } from "astro";
import { Resend } from "resend";
import { RESEND_API_KEY } from "astro:env/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message, website } = body as {
      name?: string;
      email?: string;
      message?: string;
      website?: string;
    };

    // Honeypot check
    if (website) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400 },
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: "Asukaru Contact <onboarding@resend.dev>",
      to: "contact@asukaru.com",
      subject: `Contact form: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(
      JSON.stringify({ error: "Failed to send message." }),
      { status: 500 },
    );
  }
};
