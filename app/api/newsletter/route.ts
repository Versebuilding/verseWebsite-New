import { z } from 'zod';
import { NextResponse } from 'next/server';
import {Resend} from 'resend'


const emailSchema = z.object({
  email: z.string().email()
});

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = emailSchema.parse(body);

    const {error} = await resend.emails.send({
        from: 'The Verse <onboarding@resend.dev>',
        to: email,
        subject: 'Thanks for subscribing to The Verse!',
        html:`<p>You're now part of something magical. We'll keep you updated ..</p>`
    })
if(error){
    return NextResponse.json({error: error.message}, {status: 500})
}
    return NextResponse.json({ message: 'Subscribed successfully' }, { status: 200 });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
