import React from 'react'
import { CleaningForm } from '../../components/form/cleaning-form'
import { ServicesCard } from './components/services-card'

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
      <div className="my-16 w-full bg-primary px-4 py-12">
        <CleaningForm />
      </div>
    </div>
  )
}
