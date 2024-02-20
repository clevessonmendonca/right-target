import React from 'react'
import { CleaningForm } from '@/components/form/cleaning-form'
import { ServicesCard } from './components/services-card'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary p-4 text-center text-white">
        <p className="text-lg">
          Explore the variety of top-notch cleaning services offered by Right
          Target. Choose the one that suits your needs.
        </p>
      </div>

      <div className="mx-auto mt-20 flex h-full w-full max-w-screen-xl flex-wrap items-start justify-around gap-4 px-4">
        <Card className="w-full max-w-xl shadow-lg">
          <Image
            sizes="100vw"
            width={0}
            className="h-auto max-h-80 w-full rounded-t-md"
            height={0}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src="/regular-cleaning-service.jpg"
            alt="regular cleaning service"
          />

          <div className="px-8 py-6">
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Regular Cleaning
            </h2>
            <div className="space-y-4 py-6">
              <div>
                <h3 className="text-xl font-semibold">
                  1 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$130 - $170</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  2 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$ 140 - $ 180</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  3 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$ 180 - $ 220</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  4 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$ 220 - $ 240</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  5 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$ 250 - $ 270</p>
              </div>
            </div>
            <Link href="/get-a-quote" className="block w-full text-center">
              <Button size="xl" className="text-lg">
                Book Now
              </Button>
            </Link>
          </div>
        </Card>
        <Card className="w-full max-w-xl shadow-lg">
          <Image
            sizes="100vw"
            width={0}
            className="h-auto max-h-80 w-full rounded-t-md"
            height={0}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src="/deep-cleaning.webp"
            alt="Deep Cleaning Service Right Target"
          />

          <div className="px-8 py-6">
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Deep Cleaning
            </h2>
            <div className="space-y-4 py-6">
              <div>
                <h3 className="text-xl font-semibold">
                  1 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$ 200 - 220</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  2 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$ 240 - $270</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  3 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$ 290 - $330</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  4 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$ 370 - $ 470</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  5 Bedroom Deep Cleaning (Move In/Out):
                </h3>
                <p className="text-2xl font-bold text-primary">$ 420 - $ 700</p>
              </div>
            </div>
            <Link href="/get-a-quote" className="block w-full text-center">
              <Button size="xl" className="text-lg">
                Book Now
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      <div className="mx-auto mt-28 flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold tracking-tight ">Our Services</h2>

        <ServicesCard />
      </div>

      <div className="mx-auto mt-20 max-w-screen-lg px-4">
        <h3 className="up text-center text-xl font-bold uppercase">
          TO BETTER SERVE YOU, WE HAVE{' '}
          <span className="text-primary">DIFFERENT</span> PAYMENT METHODS
        </h3>

        <div className="mt-6 flex flex-wrap items-center justify-around gap-4">
          <div className="flex flex-col items-center gap-4">
            <Image
              sizes="100vw"
              width={0}
              className="h-auto w-full max-w-28 px-5"
              height={0}
              src="/money-payment.jpeg"
              alt="money payment"
            />
            <span className="font-semibold">Money</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              sizes="100vw"
              width={0}
              className="h-auto w-full max-w-28 px-5"
              height={0}
              src="/check-payment.jpeg"
              alt="check payment"
            />
            <span className="font-semibold">Check</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              sizes="100vw"
              width={0}
              className="h-auto w-full max-w-28 px-5"
              height={0}
              src="/zelle-payment.jpeg"
              alt="zelle payment"
            />
            <span className="font-semibold">Zelle</span>
          </div>
        </div>
      </div>

      <div className="my-16 w-full bg-primary px-4 py-12">
        <CleaningForm />
      </div>
    </div>
  )
}
