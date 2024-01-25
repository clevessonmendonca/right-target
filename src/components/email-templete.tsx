import { FormSchema } from '@/app/(home)/components/cleaning-form'
import * as React from 'react'
import { Separator } from './ui/separator'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import Image from 'next/image'

export const EmailTemplate: React.FC<Readonly<FormSchema>> = ({
  address,
  email,
  name,
  phone,
  services,
  comments,
}) => (
  <div>
    <div className="mx-auto flex max-w-screen-md flex-col gap-4 p-2">
      <div className="flex items-center justify-center">
        <Image
          sizes="100vw"
          width={0}
          className="h-auto w-full max-w-60 px-5 md:max-w-64"
          height={0}
          src="/logo.jpeg"
          alt="Right Target Logo"
        />
      </div>
      <div>
        <p>Dear name {name},</p>
        <p className="text-sm">
          Thank you for choosing our cleaning services. We have received your
          request for a cleaning house budget, and here are the details:
        </p>
      </div>
      <Card>
        <CardContent className="flex flex-col gap-2 px-4 py-4">
          <p>
            <strong>Contact Information:</strong>
          </p>
          <ul>
            <li>
              <strong>Email:</strong> {email}
            </li>
            <li>
              <strong>Phone:</strong> {phone}
            </li>
            <li>
              <strong>Address:</strong> {address}
            </li>
          </ul>
          <p>
            <strong>Selected Services:</strong> {services}
          </p>
          {comments
            ? `
          <p>
            <strong>Comments:</strong> comments{" "}
          </p>
          `
            : 'No comments.'}
        </CardContent>
      </Card>

      <Separator />
      <p>
        We will review your request and provide you with a detailed budget
        shortly. If you have any additional questions or specific requirements,
        feel free to reach out to us.
      </p>
      <p>
        Thank you again for choosing our services. We look forward to assisting
        you with your cleaning needs!
      </p>
      <div>
        <p>Best regards,</p>
        <p>Right Target</p>
      </div>

      <Separator />

      <nav className="mt-2 flex justify-center">
        <Link href="#" className="text-primary hover:brightness-90">
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Facebook page</span>
        </Link>
      </nav>
    </div>
  </div>
)
