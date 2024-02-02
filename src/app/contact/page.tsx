import React from 'react'
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CleaningForm } from '../../components/form/cleaning-form'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="xl" className="text-xl font-bold">
                  Schedule a Cleaning
                </Button>
              </DialogTrigger>
              <DialogContent className="p-0">
                <ScrollArea className="max-h-screen md:max-h-[80vh]">
                  <CleaningForm />
                </ScrollArea>
              </DialogContent>
            </Dialog>
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
              className="flex items-center gap-1 font-semibold"
            >
              <Image
                sizes="100vw"
                width={0}
                className="h-auto w-full  max-w-14 rounded-full"
                height={0}
                src="/instagram-icon.png"
                alt="Instagram Right Target"
              />{' '}
              <span>@right_.target</span>
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61555770274333"
              className="flex items-center gap-2 font-semibold"
            >
              <Image
                sizes="100vw"
                width={0}
                className="h-auto w-full  max-w-9"
                height={0}
                src="/facebook-icon.png"
                alt="Facebook Right Target"
              />
              <span>Right Target</span>

              <span className="sr-only">Facebook page</span>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
