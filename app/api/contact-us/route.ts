import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const toMessage = (e: unknown, fallback = "Resend error"): string => {
  if (typeof e === "string") return e;
  if (typeof e === "object" && e !== null && "message" in e) {
    const m = (e as { message?: unknown }).message;
    if (typeof m === "string") return m;
  }
  return fallback;
};
const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.CONTACT_FROM_EMAIL || "The Verse <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL || "farvardin.koorosh@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name = "", email, message, intent, category, platform, links } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required" }, { status: 400 });
    }

    if (email.length > 254 || message.length > 5000) {
      return NextResponse.json({ error: "Input too long" }, { status: 400 });
    }

    // save
    const saved = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message,
        intent: intent ?? null,
        category: category ?? null,
        platform: platform ?? null,
        links: links ?? null,
      },
    });

    // notify team
    {
      const { error } = await resend.emails.send({
        from: FROM,
        to: [TO],
        subject: `New contact message from ${name || email}`,
        replyTo: email, 
        text: `From: ${name || "Anonymous"} <${email}>\n\n${message}\n\nMessage ID: ${saved.id}`,
      });
        if (error) throw new Error(toMessage(error));
    }

    // auto reply
    {
      const { error } = await resend.emails.send({
        from: FROM,
        to: [email],
        subject: "We received your message",
        text: `Hey${name ? ` ${name}` : ""},\n\nThanks for reaching out to The Verse. We’ll get back to you soon.\n\n— The Verse Team`,
      });
  if (error) throw new Error(toMessage(error));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("POST /api/contact-us failed:", err);
    return NextResponse.json({ error: "Server err" }, { status: 500 });
  }
}
