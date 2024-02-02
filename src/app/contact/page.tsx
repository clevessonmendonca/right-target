import React from 'react'
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <div className="bg-primary py-4 text-center text-white">
        <p className="text-lg">
          Explore the variety of top-notch cleaning services offered by Right
          Target. Choose the one that suits your needs.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-screen-xl flex-col items-center justify-center gap-8 p-4 text-center md:flex-row md:gap-4 md:text-left">
        <div className="flex flex-col items-center gap-4 md:max-w-screen-lg ">
          <h2 className="max-w-md text-3xl font-bold tracking-tight md:text-4xl">
            Get in Touch
          </h2>
          <p className="max-w-md text-center text-xs text-muted-foreground">
            Have questions or want to schedule a cleaning service? Reach out to
            us through the options below.
          </p>
          <div>
            <Link href="/get-a-quote">
              <Button size="xl" className="text-xl font-bold">
                Schedule a Cleaning
              </Button>
            </Link>
          </div>

          <Card className="mt-4 flex w-full flex-col gap-4 px-6 py-12">
            <Link
              href="tel:+19735830823"
              className="flex items-center gap-4 text-xl font-medium"
            >
              <PhoneIcon className="text-primary" /> (973) 583-0823
            </Link>
            <Link
              href="mailto:rightarget.contact@gmail.com"
              className="flex items-center gap-4 text-xl font-medium"
            >
              <MailIcon className="text-primary" /> rightarget.contact@gmail.com
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 text-xl font-medium"
            >
              <MapPinIcon className="text-primary" /> 123 Cleaning Street,
              Cityville, USA
            </Link>
          </Card>

          <Card className="mb-20 flex w-full items-center justify-around gap-4 px-6 py-4">
            <Link
              href="https://www.instagram.com/right_.target/"
              className="flex gap-2"
            >
              <InstagramIcon className="text-primary" />
              <span>@right_.target</span>
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61555770274333"
              className="flex gap-2"
            >
              <svg
                className="h-4 w-4 text-primary"
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
              <span>@righttarget</span>

              <span className="sr-only">Facebook page</span>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
