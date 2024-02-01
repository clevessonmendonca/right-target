import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useFormState } from './FormContext'

const testeFormSchema = z.object({
  fullName: z.string().min(2, 'First name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(10, 'Cell phone number must have at least 10 digits'),
})

export type FormSchema = z.infer<typeof testeFormSchema>

export const testeForm = () => {
  const { onHandleNext, setFormData, formData } = useFormState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: formData,
    resolver: zodResolver(testeFormSchema),
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

      <Button type="submit" className="font-bold" size="xl">
        NEXT
      </Button>
    </form>
  )
}
