import 'dotenv/config'
import { NextResponse } from 'next/server'
import { EmailTemplate } from '@/components/email-templete'
import { Resend } from 'resend'
import { FormSchema } from '@/app/(home)/components/cleaning-form'

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(data: FormSchema) {
  try {
    const sendEmail = await resend.emails.send({
      from: 'Right Target <righttarget.contact@gmail.com>',
      to: ['wanderbloks311@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate(data) as React.ReactElement,
    })

    return NextResponse.json(sendEmail)
  } catch (error) {
    console.log(error)
  }
}
