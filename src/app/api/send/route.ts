import ReceivedEmailTemplate from '@/components/email-templete'
import EmailTemplateClient from '@/components/email-templete-client'
import { MergedFormData } from '@/components/form/FormContext'
import { NextRequest } from 'next/server'
import { ReactElement } from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body: MergedFormData = await req.json()

    const { data, error } = await resend.emails.send({
      from: 'Right Target <contact@righttargetservice.com>',
      to: [body.email],
      subject: 'Right Target',
      react: EmailTemplateClient(body) as ReactElement,
    })

    await resend.emails.send({
      from: 'New Budget <contact@righttargetservice.com>',
      to: ['contact@righttargetservice.com'],
      subject: 'Right Target',
      react: ReceivedEmailTemplate(body) as ReactElement,
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
