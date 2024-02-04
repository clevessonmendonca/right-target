import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from './FormContext'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

const userFormSchema = z.object({
  fullName: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(10, 'Cell phone number must have at least 10 digits'),
  address: z.string().min(2, 'Address is required'),
  city: z.string().min(2, 'City is rfont-boldequired'),
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
        <label className="font-semibold" htmlFor="name">
          Full Name:
        </label>
        <Input {...register('fullName')} />
        {errors.fullName && (
          <p className="text-sm text-destructive">{errors.fullName.message}</p>
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
        <label htmlFor="phone" className="font-semibold">
          Phone Number:
        </label>
        <Input {...register('phone')} />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="font-semibold">
          Address:
        </label>
        <Input {...register('address')} />
        {errors.address && (
          <p className="text-sm text-destructive">{errors.address.message}</p>
        )}
      </div>

      <div className="flex justify-around gap-4 font-semibold">
        <div className="w-full">
          <label htmlFor="city">City:</label>
          <Input {...register('city')} />
          {errors.city && (
            <p className="text-sm text-destructive">{errors.city.message}</p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="state" className="font-semibold">
            State:
          </label>
          <Input id="state" {...register('state')} />
          {errors.state && (
            <p className="text-sm text-destructive">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="max-w-xs">
        <label htmlFor="postalCode" className="font-semibold">
          Zip Code:
        </label>
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
