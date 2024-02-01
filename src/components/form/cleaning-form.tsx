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
import { useEffect } from 'react'
import { Button } from '../ui/button'

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

  useEffect(() => {
    if (step === 4) {
      handleCleaningForm(formData)
    }
  }, [step, formData])
  switch (step) {
    case 1:
      return <UserNameForm />
    case 2:
      return <CleaningServicesForm />
    case 3:
      return <HomeDetailsForm />
    case 4:
      return (
        <>
          <p>Sending your book now.</p>
          <Button onClick={() => handleCleaningForm(formData)}>Resend</Button>
        </>
      )
    default:
      return null
  }
}

export const CleaningForm = () => {
  return (
    <FormProvider>
      <Card className="mx-auto max-w-screen-md p-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Elevate Your Living Space with Sparkling Cleanliness!
          </h2>
          <p className="mt-2 text-sm text-foreground">
            Experience the joy of a spotless home. Fill out the form below, and
            let us take care of the cleaning, so you can enjoy more of life!
          </p>
        </div>

        <ActiveStepFormComponent />
      </Card>
    </FormProvider>
  )
}
