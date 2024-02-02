'use client'

import { Card } from '@/components/ui/card'
import { UserNameForm } from '@/components/form/user-info'
import {
  FormProvider,
  MergedFormData,
  useFormState,
} from '@/components/form/FormContext'
import { CleaningServicesForm } from '@/components/form/cleaning-service'
import { HomeDetailsForm } from '@/components/form/home-details-form'
import { toast } from 'sonner'
import axios from 'axios'
import { useEffect, useRef } from 'react'
import StepIndicator from './step-indicator'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'

function ActiveStepFormComponent() {
  const { step, formData } = useFormState()

  useEffect(() => {
    if (step === 4) {
      handleCleaningForm(formData)
    }
  }, [step, formData])

  async function handleCleaningForm(data: MergedFormData) {
    try {
      const response = await axios.post('api/send', data)

      if (!response.data.error)
        return toast.success('Email send secess!', {
          description: 'Your email is sent successfully.',
        })

      toast.error('Error sending email', {
        description: 'Please try again later',
      })
    } catch (error) {
      toast.error('Error sending email', {
        description: 'Please try again later',
      })
    }
  }

  switch (step) {
    case 1:
      return <UserNameForm />
    case 2:
      return <CleaningServicesForm />
    case 3:
      return <HomeDetailsForm />
    case 4:
      return (
        <div className="text-center">
          <h2 className="mb-4 flex items-center justify-center gap-3 text-2xl font-semibold">
            <CheckCircleIcon className="h-8 w-8 text-emerald-500" /> Thank you!
          </h2>
          <p>
            Thanks for requesting a quote with us! We appreciate your interest
            in our cleaning services. Our team will review your information, and
            we&aposll get back to you with a detailed budget shortly.
          </p>
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Follow us on social media</h3>
            <div className="mt-3 flex items-center justify-center gap-2">
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
        </div>
      )
    default:
      return null
  }
}

export const CleaningForm = () => {
  return (
    <FormProvider>
      <Card id="form" className="mx-auto max-w-screen-md p-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">GET A QUOTE!</h2>
            <p className="mt-2 text-sm text-foreground">
              Experience the joy of a spotless home. Fill out the form below,
              and let us take care of the cleaning, so you can{' '}
              <span className="font-semibold">enjoy more of life!</span>
            </p>
          </div>
        </div>

        <StepIndicator />
        <ActiveStepFormComponent />
      </Card>
    </FormProvider>
  )
}
