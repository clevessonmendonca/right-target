'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const userFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must have at least 10 digits'),
  city: z.string().min(2, 'City is required'),
  email: z.string().email('Enter a valid email address'),
  bedrooms: z.number().min(1, 'Please select the number of bedrooms'),
  service: z.string().min(2, 'Desired service is required'),
})

type FormSchema = z.infer<typeof userFormSchema>

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(userFormSchema),
  })

  const onHandleFormSubmit = async (data: FormSchema) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <div>
        <label className="font-semibold" htmlFor="firstName">
          First Name:
        </label>
        <Input {...register('firstName')} />
        {errors.firstName && (
          <p className="text-sm text-destructive">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="font-semibold">
          Phone:
        </label>
        <Input {...register('phone')} />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="city" className="font-semibold">
          City:
        </label>
        <Input {...register('city')} />
        {errors.city && (
          <p className="text-sm text-destructive">{errors.city.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-semibold">
          Email:
        </label>
        <Input {...register('email')} />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="bedrooms" className="font-semibold">
          How many bedrooms do you need cleaned?
        </label>
        <Input type="number" {...register('bedrooms')} />
        {errors.bedrooms && (
          <p className="text-sm text-destructive">{errors.bedrooms.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="font-semibold">
          Desired Service:
        </label>
        <Input {...register('service')} />
        {errors.service && (
          <p className="text-sm text-destructive">{errors.service.message}</p>
        )}
      </div>

      <Button type="submit" className="text-lg   font-bold" size="xl">
        SUBMIT
      </Button>
    </form>
  )
}
