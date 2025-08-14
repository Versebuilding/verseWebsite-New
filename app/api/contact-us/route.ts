import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";



export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// resend
const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'
const TO = process.env.CONTACT_TO_EMAIL || 'farvardin.koorosh@gmail.com'
export async function POST(req: NextRequest){
    try { 
        const { name, email, message} = await req.json()
        
        if (!email || !message) {
            return NextResponse.json({error : 'Email and message are required'}, {status:400})
        }

        //  saving to db
        const saved = await prisma.contactMessage.create({
            data : {name, email, message}
        })

        //  notify team
        await resend.emails.send({
            from: `The verse <${FROM}>`,
            to: [TO],
            replyTo: email,
            subject: `New contact message from ${name || email}`,
            text: `From: ${name || 'Anonymous'} <${email}>\n\n${message}\n\nMessage ID: ${saved.id}`,
        })

        // auto reply to user
          await resend.emails.send({
          from: `The Verse <${FROM}>`,
          to: [email],
          subject: 'We received your message',
          text: `Hey${name ? ` ${name}` : ''},\n\nThanks for reaching out to The Verse. We’ll get back to you soon.\n\n— The Verse Team`,
    })

        return NextResponse.json({ok: true})
    } catch (err) {
        console.log('Post / contact failed', err)
        return NextResponse.json({error : "Server err"}, {status : 500})
    }
}