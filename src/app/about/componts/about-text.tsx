import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const AboutText = () => {
  return (
    <div className="flex w-full flex-col justify-center gap-4 md:justify-between lg:flex-row">
      <div className="w-full max-w-md tracking-tight">
        <p className="mb-4 text-lg font-bold">
          Welcome to Right Target Cleaning Service!
        </p>
        <p className="mb-4">
          With years of experience, we&apos;re your trusted choice for{' '}
          <span className="font-semibold">home cleaning</span>,{' '}
          <span className="font-semibold">apartment maintenance</span>,{' '}
          <span className="font-semibold">deep cleaning</span>,{' '}
          <span className="font-semibold">post-construction cleanup</span>, and{' '}
          <span className="font-semibold">move-in/move-out services</span>.
        </p>
        <p className="mb-4">
          Our dedicated team ensures a clean and comfortable space, offering
          reliable and efficient cleaning solutions tailored to your needs.
          Experience the{' '}
          <span className="font-semibold">Right Target difference</span> - where{' '}
          <span className="font-semibold">quality</span> meets{' '}
          <span className="font-semibold">excellence</span> in every service!
        </p>

        <div className="w-full py-4 text-center md:text-start">
          <Link href="/get-a-quote">
            <Button className="border-2 border-primary bg-primary-foreground text-black hover:bg-primary/80">
              GET A QUOTE NOW
            </Button>
          </Link>
        </div>
      </div>

      <Image
        sizes="100vw"
        width={0}
        className="h-auto w-full max-w-lg px-5"
        height={0}
        src="/women-cleaning.jpg"
        alt=""
      />
    </div>
  )
}
