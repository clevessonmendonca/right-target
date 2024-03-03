import { FormSchema } from '@/app/booknow/components/form'
import AdsEmailTemplete from '@/components/ads-email-templete'
import { NextRequest } from 'next/server'
import { ReactElement } from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body: FormSchema = await req.json()

    const data = await resend.emails.send({
      from: 'Budget <onboarding@resend.dev>',
      to: ['righttarget.contact@gmail.com'],
      subject: 'New Budget',
      react: AdsEmailTemplete(body) as ReactElement,
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
