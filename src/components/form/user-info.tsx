import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from './FormContext'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Badge } from '../ui/badge'

const userFormSchema = z.object({
  fullName: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(10, 'Cell phone number must have at least 10 digits'),
  addressLine1: z.string().min(2, 'Address is required'),
  addressLine2: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  postalCode: z.string().min(2, 'Postal code is required'),
})

type FormSchema = z.infer<typeof userFormSchema>

export const UserNameForm = () => {
  const { onHandleNext, setFormData, formData } = useFormState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: formData,
    resolver: zodResolver(userFormSchema),
  })

  const onHandleFormSubmit = async (data: FormSchema) => {
    setFormData((prev) => ({ ...prev, ...data }))
    onHandleNext()
  }

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <div>
        <label className="" htmlFor="name">
          Full Name:
        </label>
        <Input {...register('fullName')} />
        {errors.fullName && (
          <p className="text-sm text-destructive">{errors.fullName.message}</p>
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
        <label htmlFor="phone">Phone Number:</label>
        <Input {...register('phone')} />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="address">Address Line 1:</label>
        <Input {...register('addressLine1')} />
        {errors.addressLine1 && (
          <p className="text-sm text-destructive">
            {errors.addressLine1.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="mb-1 flex items-center gap-2">
          Address Line 2: <Badge variant="outline">Optional</Badge>
        </label>
        <Input {...register('addressLine2')} />
        {errors.addressLine2 && (
          <p className="text-sm text-destructive">
            {errors.addressLine2.message}
          </p>
        )}
      </div>

      <div className="flex justify-around gap-4">
        <div className="w-full">
          <label htmlFor="city">City:</label>
          <Input {...register('city')} />
          {errors.city && (
            <p className="text-sm text-destructive">{errors.city.message}</p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="state">State:</label>
          <Input {...register('state')} />
          {errors.state && (
            <p className="text-sm text-destructive">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="max-w-xs">
        <label htmlFor="postalCode">Postal Code:</label>
        <Input {...register('postalCode')} />
        {errors.postalCode && (
          <p className="text-sm text-destructive">
            {errors.postalCode.message}
          </p>
        )}
      </div>

      <Button type="submit" className="font-bold" size="xl">
        NEXT
      </Button>
    </form>
  )
}
