import { FormSchema } from '@/app/(home)/components/cleaning-form'
import { EmailTemplate } from '@/components/email-templete'
import { NextRequest } from 'next/server'
import { ReactElement } from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body: FormSchema = await req.json()

    const data = await resend.emails.send({
      from: 'Right Target <righttarget.contact@gmail.com>',
      to: [body.email],
      subject: 'Right Target',
      react: EmailTemplate(body) as ReactElement,
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
