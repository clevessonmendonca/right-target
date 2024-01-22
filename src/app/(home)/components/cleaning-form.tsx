'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(10, 'Phone number must have at least 10 digits'),
  address: z.string(),
  services: z.string(),
  comments: z.string().optional(),
})

type FormSchema = z.infer<typeof formSchema>

export const CleaningForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const handleCleaningForm = async (data: FormSchema) => {
    console.log(data)
  }

  return (
    <Card className="mx-auto max-w-screen-md p-12">
      <form
        onSubmit={handleSubmit(handleCleaningForm)}
        className="flex flex-col gap-4"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Get Your Home Cleaned!
          </h2>
          <p className="mt-2 text-sm text-foreground">
            Experience the joy of a spotless home. Fill out the form below, and
            let us take care of the cleaning, so you can enjoy more of life!
          </p>
        </div>

        <div>
          <label className="" htmlFor="name">
            Full Name:
          </label>
          <Input {...register('name')} />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Input {...register('email')} />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <Input {...register('phone')} />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <Input {...register('address')} />
          {errors.address && (
            <p className="text-sm text-destructive">{errors.address.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="service">Service:</label>
          <div className="flex flex-wrap items-center gap-4">
            <div className="space-x-2">
              <Checkbox id="deepclean" {...register('services')} />
              <label
                htmlFor="deepclean"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Deep Clean
              </label>
            </div>
            <div className="space-x-2">
              <Checkbox id="regular" {...register('services')} />
              <label
                htmlFor="regular"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Regular and Recurring Cleaning
              </label>
            </div>
            <div className="space-x-2">
              <Checkbox id="post-event" {...register('services')} />
              <label
                htmlFor="post-event"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Post-Event Cleaning
              </label>
            </div>
            <div className="space-x-2">
              <Checkbox id="organizational" {...register('services')} />
              <label
                htmlFor="organizational"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Organizational Services
              </label>
            </div>
            <div className="space-x-2">
              <Checkbox id="customized" {...register('services')} />
              <label
                htmlFor="customized"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Customized Cleaning Solutions
              </label>
            </div>
          </div>
          {errors.services && (
            <p className="text-sm text-destructive">
              {errors.services.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="comments">Comments (optional):</label>
          <Textarea {...register('comments')} />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </Card>
  )
}
