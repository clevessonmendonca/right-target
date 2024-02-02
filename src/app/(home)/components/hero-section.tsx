import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CleaningForm } from '../../../components/form/cleaning-form'
import { ScrollArea } from '@/components/ui/scroll-area'

export const HeroSection = () => {
  return (
    <div className="mx-auto mt-8 flex max-w-screen-xl flex-col items-center justify-center gap-8 p-4 text-center md:flex-row md:gap-4 md:text-left">
      <div className="flex flex-col items-center gap-4 md:max-w-screen-lg md:items-start">
        <h1 className="max-w-md text-4xl font-bold tracking-tight md:text-5xl">
          Impeccable Cleaning Services Tailored for You.
        </h1>
        <p className="max-w-md text-xs text-muted-foreground md:max-w-full">
          Right Target offers top-notch cleaning services performed by
          professionals. Let us take care of your home while you focus on what
          on what matters most to you
        </p>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="xl" className="text-xl font-bold">
                Book now
              </Button>
            </DialogTrigger>
            <DialogContent className="p-0">
              <ScrollArea className="max-h-screen md:max-h-[80vh]">
                <CleaningForm />
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <Link
            href="tel:+19735830823"
            className="mt-4 flex gap-4 text-xl font-medium hover:text-zinc-800 hover:underline"
          >
            <PhoneIcon /> (973) 583-0823
          </Link>
          <span className="text-xs text-muted-foreground">
            Request a quote? Call us now.
          </span>
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
