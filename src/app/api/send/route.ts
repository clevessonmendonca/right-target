import 'dotenv/config'
import { EmailTemplate } from '@/components/email-templete'
import { Resend } from 'resend'
import { NextApiRequest, NextApiResponse } from 'next'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.body)
    const { data, error } = await resend.emails.send({
      from: 'Right Target <righttarget.contact@gmail.com>',
      to: ['wanderbloks311@gmail.com'],
      subject: 'Right Target',
      text: 'teste',
      // react: EmailTemplate() as React.ReactElement,
    })

    if (error) {
      return res.status(500).json({ message: error })
    }

    return res.status(200).json({ data })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
