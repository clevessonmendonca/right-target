'use client'

import React from 'react'
import { PhoneIcon, MailIcon, SparklesIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CleaningForm } from '@/components/form/cleaning-form'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div>
      <div className="bg-primary p-4 text-center text-white">
        <p className="text-lg">
          Explore the variety of top-notch cleaning services offered by Right
          Target. Choose the one that suits your needs.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-screen-xl flex-col items-center justify-center gap-8 p-4 text-center md:flex-row md:gap-4 md:text-left">
        <div className="flex flex-col items-center gap-4 px-4 md:max-w-screen-lg">
          <motion.h2
            className="max-w-md text-3xl font-bold tracking-tight md:text-4xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            Get in Touch
          </motion.h2>
          <p className="w-full max-w-md text-center text-xs">
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

          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Card className="mt-4 flex w-full flex-col gap-4 p-4">
              <Link
                href="tel:+19735830823"
                className="flex w-full flex-wrap items-center justify-between gap-4 rounded-full border px-4 py-4 text-xl font-medium hover:bg-primary/20 sm:justify-normal"
              >
                <PhoneIcon className="absolute text-primary" />{' '}
                <span className="flex-1 px-12 text-center">(973) 583-0823</span>
              </Link>
              <Link
                href="mailto:rightarget.contact@gmail.com"
                className="flex w-full flex-wrap items-center justify-between gap-4 rounded-full border px-4 py-4 text-xl font-medium hover:bg-primary/20 sm:justify-normal"
              >
                <MailIcon className="absolute text-primary" />{' '}
                <span className="flex-1 px-12 text-center">
                  contact@rightargetservice.com
                </span>
              </Link>
              <Link
                href="/services"
                className="flex w-full flex-wrap items-center justify-between gap-4 rounded-full border px-4 py-4 text-xl font-medium hover:bg-primary/20 sm:justify-normal"
              >
                <SparklesIcon className="absolute text-primary" />{' '}
                <span className="flex-1 px-12 text-center">
                  Explore our cleaning services
                </span>
              </Link>
              <Link
                href="mailto:rightarget.contact@gmail.com"
                className="flex w-full flex-wrap items-center justify-between gap-4 rounded-full border px-4 py-4 text-xl font-medium hover:bg-primary/20 sm:justify-normal"
              >
                <MailIcon className="absolute text-primary" />{' '}
                <span className="flex-1 px-12 text-center">
                  rightarget.contact@gmail.com
                </span>
              </Link>
            </Card>
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Card className="mb-20 flex w-full flex-wrap items-center justify-around gap-4 px-6 py-4">
              <Link
                href="https://www.instagram.com/right_.target/"
                className="flex flex-wrap items-center gap-1 font-semibold"
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
