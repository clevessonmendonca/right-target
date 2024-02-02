'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { CleaningForm } from '../../../components/form/cleaning-form'
import { ScrollArea } from '@/components/ui/scroll-area'
import { HomeCarousel } from './home-corousel'
import { motion, useAnimation } from 'framer-motion'

export const HeroSection = () => {
  const phoneIconControls = useAnimation()

  const startRingAnimation = () => {
    phoneIconControls.start({
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    })
  }

  const startShakeAnimation = () => {
    phoneIconControls.start({
      x: [-5, 5, -5, 5, 0],
      transition: {
        duration: 0.3,
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    })
  }

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      startShakeAnimation()
    }, 10000)

    return () => clearInterval(shakeInterval)
  }, [])

  return (
    <div className="mx-auto mt-8 flex max-w-screen-xl flex-col items-center justify-center gap-8 p-4 text-center md:flex-row md:gap-4 md:text-left">
      <motion.div
        className="flex flex-col items-center gap-4 md:max-w-screen-lg md:items-start"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <h1 className="max-w-md text-4xl font-bold tracking-tight md:text-5xl">
          Impeccable Cleaning Services Tailored for You.
        </h1>
        <p className="max-w-[32rem] text-xs text-muted-foreground">
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
                <DialogClose className="absolute right-2 top-10 rounded-full p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x h-4 w-4"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  <span className="sr-only">Close</span>
                </DialogClose>
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <Link
            href="tel:+19735830823"
            className="mt-4 flex gap-4 text-xl font-medium hover:text-zinc-800 hover:underline"
            onMouseEnter={startRingAnimation}
            onMouseLeave={() => phoneIconControls.stop()}
          >
            <motion.span animate={phoneIconControls}>
              <PhoneIcon />
            </motion.span>
            (973) 583-0823
          </Link>

          <span className="text-xs text-muted-foreground">
            Request a quote? Call us now.
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <HomeCarousel />
      </motion.div>
    </div>
  )
}
