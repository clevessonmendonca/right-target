import 'dotenv/config'
import { EmailTemplate } from '@/components/email-templete'
import { Resend } from 'resend'
import { FormSchema } from '@/app/(home)/components/cleaning-form'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(form: FormSchema) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Right Target <righttarget.contact@gmail.com>',
      to: ['wanderbloks311@gmail.com'],
      subject: 'Right Target',
      react: EmailTemplate(form) as React.ReactElement,
    })

    if (error) {
      return Response.json({ error })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error })
  }
}
