import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
  return (
    <div className="mx-auto mt-8 flex max-w-screen-xl flex-col items-center justify-center gap-8 p-4 text-center md:flex-row md:gap-4 md:text-left">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="max-w-md text-4xl font-bold tracking-tight md:text-5xl">
          Impeccable Cleaning Services Tailored for You.
        </h1>
        <p className="text-xs text-muted-foreground">
          Work for Immigrants offers top-notch cleaning services performed by
          dedicated professionals. Let us take care of your home while you focus
          on what matters most to you
        </p>
        <div>
          <Button size="lg" className="text-xl">
            Book now
          </Button>
          {/* <span className="font-medium text-lg flex gap-4 mt-4"><PhoneIcon /> 772-521-3374</span> */}
        </div>
      </div>
      <div>
        <Image
          sizes="100vw"
          width={0}
          className="h-auto w-full px-5"
          height={0}
          src="/women-cleaning.jpg"
          alt=""
        />
      </div>
    </div>
  )
}
