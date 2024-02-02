import { cn } from '@/lib/utils'
import React from 'react'
import { useFormState } from './FormContext'

export default function StepIndicator() {
  const { step } = useFormState()

  return (
    <section className="mb-8 flex items-center justify-center gap-6 uppercase md:justify-around md:gap-2">
      <div className="flex items-center gap-4">
        <p
          className={cn(
            'text-c-neutral-white border-c-neutral-white flex h-[33px] w-[33px] items-center justify-center rounded-full border text-sm font-bold',
            {
              'border-primary bg-primary text-primary-foreground': step === 1,
            },
          )}
        >
          1
        </p>
        <div className="hidden flex-col sm:flex">
          <p className="text-xs">step 1</p>
          <p className="text-c-neutral-white text-sm font-bold">YOUR INFO</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p
          className={cn(
            'text-c-neutral-white border-c-neutral-white flex h-[33px] w-[33px] items-center justify-center rounded-full border text-sm font-bold',
            {
              'border-primary bg-primary text-primary-foreground': step === 2,
            },
          )}
        >
          2
        </p>
        <div className="hidden flex-col sm:flex">
          <p className="text-xs">step 2</p>
          <p className="text-c-neutral-white text-sm font-bold">SERVICES</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p
          className={cn(
            'text-c-neutral-white border-c-neutral-white flex h-[33px] w-[33px] items-center justify-center rounded-full border text-sm font-bold',
            {
              'border-primary bg-primary text-primary-foreground': step === 3,
            },
          )}
        >
          3
        </p>
        <div className="hidden flex-col sm:flex">
          <p className="text-xs">step 3</p>
          <p className="text-c-neutral-white text-sm font-bold">
            YOUR PROPERTY
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p
          className={cn(
            'text-c-neutral-white border-c-neutral-white flex h-[33px] w-[33px] items-center justify-center rounded-full border text-sm font-bold',
            {
              'border-primary bg-primary text-primary-foreground': step === 4,
            },
          )}
        >
          4
        </p>
        <div className="hidden flex-col sm:flex">
          <p className="text-xs">step 4</p>
          <p className="text-c-neutral-white text-sm font-bold">SENT</p>
        </div>
      </div>
    </section>
  )
}
