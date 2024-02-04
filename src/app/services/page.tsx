import React from 'react'
import { CleaningForm } from '../../components/form/cleaning-form'
import { ServicesCard } from './components/services-card'
import Image from 'next/image'

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary py-4 text-center text-white">
        <p className="text-lg">
          Explore the variety of top-notch cleaning services offered by Right
          Target. Choose the one that suits your needs.
        </p>
      </div>

      <div className="mx-auto mt-28 flex flex-col items-center">
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
