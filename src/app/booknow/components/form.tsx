'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Select, SelectValue } from '@radix-ui/react-select'
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import axios from 'axios'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const userFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  phone: z.string().min(10, 'Phone number must have at least 10 digits'),
  city: z.string().min(2, 'City is required'),
  email: z.string().email('Enter a valid email address'),
  bathroom: z.string().refine((value) => !!value, {
    message: 'Please select the number of bedrooms',
  }),
  bedrooms: z.string().refine((value) => !!value, {
    message: 'Please select the number of bedrooms',
  }),
  service: z.string().refine((value) => !!value, {
    message: 'Please a service',
  }),
})

export type FormSchema = z.infer<typeof userFormSchema>

export const UserForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(userFormSchema),
  })

  const router = useRouter()

  async function onHandleFormSubmit(data: FormSchema) {
    try {
      const response = await axios.post('api/ads-email', data)

      toast.success('Email send secess!', {
        description: 'Your email is sent successfully.',
      })

      router.push('/booknow/thank-you')
    } catch (error) {
      toast.error('Error sending email', {
        description: 'Please try again later',
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <div>
        <label className="font-semibold" htmlFor="firstName">
          First Name *
        </label>
        <Input placeholder="First Name" {...register('firstName')} />
        {errors.firstName && (
          <p className="text-sm text-destructive">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="font-semibold">
          Phone *
        </label>
        <Input placeholder="Phone" {...register('phone')} />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="city" className="font-semibold">
          City *
        </label>
        <Input placeholder="City" {...register('city')} />
        {errors.city && (
          <p className="text-sm text-destructive">{errors.city.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="font-semibold">
          Email *
        </label>
        <Input placeholder="Email" {...register('email')} />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="w-full">
        <label className="font-bold" htmlFor="bathroom">
          How many bathroom do you need cleaned? *
        </label>
        <Select
          onValueChange={(value: string) => {
            setValue('bathroom', value, { shouldValidate: true })
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one-bath">1</SelectItem>
            <SelectItem value="two-bath">2</SelectItem>
            <SelectItem value="three-bath">3</SelectItem>
            <SelectItem value="four-bath">4</SelectItem>
            <SelectItem value="five-bath-or-more">5+</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-destructive">{errors.bathroom?.message}</p>
      </div>

      <div className="w-full">
        <label className="font-bold" htmlFor="bedrooms">
          How many bedrroms do you need cleaned? *
        </label>
        <Select
          onValueChange={(value: string) => {
            setValue('bedrooms', value, { shouldValidate: true })
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="one-bath">1</SelectItem>
            <SelectItem value="two-bath">2</SelectItem>
            <SelectItem value="three-bath">3</SelectItem>
            <SelectItem value="four-bath">4</SelectItem>
            <SelectItem value="five-bath-or-more">5+</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-destructive">{errors.bedrooms?.message}</p>
      </div>

      <div className="w-full">
        <label className="font-bold" htmlFor="service">
          Desired Service *
        </label>
        <Select
          onValueChange={(value: string) => {
            setValue('service', value, { shouldValidate: true })
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Weekly-Maid-Service">
              Weekly Maid Service
            </SelectItem>
            <SelectItem value="Bi-Weekly-Maid-Service">
              Bi-Weekly Maid Service
            </SelectItem>
            <SelectItem value="Monthly-Maid-Service">
              Monthly Maid Service
            </SelectItem>
            <SelectItem value="One-Time-Cleaning">One-Time Cleaning</SelectItem>
            <SelectItem value="Move-In-Move-Out-Cleaning">
              Move In/Move Out Cleaning
            </SelectItem>
            <SelectItem value="Post-Construction-Cleaning">
              Post Construction Cleaning
            </SelectItem>
            <SelectItem value="Commercial-Janitorial-Cleaning">
              Commercial/Janitorial Cleaning
            </SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-destructive">{errors.service?.message}</p>
      </div>

      <Button type="submit" className="text-lg   font-bold" size="xl">
        SEND
      </Button>
    </form>
  )
}
