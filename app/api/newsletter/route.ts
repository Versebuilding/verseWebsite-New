import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { randomBytes } from "crypto";

export const runtime = "nodejs";

const schema = z.object({ email: z.string().email(), source: z.string().optional() });
const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.NEWSLETTER_FROM_EMAIL || "The Verse <onboarding@resend.dev>";
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const toMessage = (e: unknown, fallback = "Resend error"): string => {
  if (typeof e === "string") return e;
  if (typeof e === "object" && e !== null && "message" in e) {
    const m = (e as { message?: unknown }).message;
    if (typeof m === "string") return m;
  }
  return fallback;
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source } = schema.parse(body);

    // upsert pending subscriber with fresh token
    const token = randomBytes(24).toString("hex");
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
    const userAgent = req.headers.get("user-agent") || null;

    const existing = await prisma.subscriber.findUnique({ where: { email } });
    if (existing?.status === "subscribed") {
      return NextResponse.json({ ok: true, already: true });
    }

    await prisma.subscriber.upsert({
      where: { email },
      create: {
        email,
        status: "pending",
        token,
        source: source ?? "footer",
        ip: ip ?? undefined,
        userAgent: userAgent ?? undefined,
      },
      update: {
        status: "pending",
        token,
        source: source ?? existing?.source ?? "footer",
        ip: ip ?? existing?.ip ?? undefined,
        userAgent: userAgent ?? existing?.userAgent ?? undefined,
      },
    });

    const confirmUrl = `${BASE_URL}/api/newsletter/confirm?token=${token}`;

    const { error } = await resend.emails.send({
      from: FROM,
      to: [email],
      subject: "Confirm your subscription to The Verse",
      text:
        `Hi,\n\nPlease confirm your subscription by clicking the link below:\n` +
        `${confirmUrl}\n\nIf you didn't request this, just ignore this email.\n\n— The Verse`,
    });

if (error) {
  console.error('Resend error:', error); 
  return NextResponse.json({ error: toMessage(error) }, { status: 502 });
}
    return NextResponse.json({ ok: true, message: "Check your email to confirm." });
  } catch (err) {
    console.error('Post /api/newsletter failed', err)
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues.map(i => i.message) }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}