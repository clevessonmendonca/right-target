import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ThankYouPage() {
  return (
    <div className="mx-auto my-14 flex h-full max-w-screen-lg flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-5xl font-black tracking-tight md:text-6xl">
        Thank You for Your Request!
      </h1>
      <p className="mb-8 text-xl">
        We have received your cleaning services request. Our team will get back
        to you as soon as possible.
      </p>

      <Link href="/">
        <Button className="mx-auto flex flex-col py-10 font-medium">
          <span className="text-3xl font-bold">Back to Home</span>
        </Button>
      </Link>

      <div className="mb-20 mt-6 flex items-center gap-2 sm:mt-0 sm:justify-center">
        <Link
          href="https://www.instagram.com/right_.target/"
          className="text-gray-500 hover:text-primary "
        >
          <Image
            sizes="100vw"
            width={0}
            className="h-auto w-full  max-w-14 rounded-full"
            height={0}
            src="/instagram-icon.png"
            alt="Instagram Right Target"
          />
          <span className="sr-only">Instagram page</span>
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61555770274333"
          className="text-gray-500 hover:text-primary"
        >
          <Image
            sizes="100vw"
            width={0}
            className="h-auto w-full  max-w-9"
            height={0}
            src="/facebook-icon.png"
            alt="Facebook Right Target"
          />
          <span className="sr-only">Facebook page</span>
        </Link>
      </div>
    </div>
  )
}
