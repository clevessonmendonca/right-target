import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from './FormContext'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Badge } from '../ui/badge'

const cleaningFormSchema = z.object({
  iAmLookingToHave: z
    .object({
      residencialCleaning: z.boolean(),
      commercialCleaning: z.boolean(),
    })
    .refine((data) => data.residencialCleaning || data.commercialCleaning, {
      message: 'Please select at least one option for "I Am Looking To Have".',
    }),
  iNeed: z
    .object({
      recurringServicePlan: z.boolean(),
      oneTimeCleaning: z.boolean(),
      moveInOut: z.boolean(),
      other: z.boolean(),
    })
    .refine(
      (data) =>
        data.recurringServicePlan ||
        data.oneTimeCleaning ||
        data.moveInOut ||
        data.other,
      {
        message: 'Please select at least one option for "I Need".',
      },
    ),
  howOften: z
    .object({
      weekly: z.boolean(),
      twoWeekly: z.boolean(),
      biWeekly: z.boolean(),
      monthly: z.boolean(),
      other: z.boolean(),
    })
    .refine(
      (data) =>
        data.weekly ||
        data.twoWeekly ||
        data.biWeekly ||
        data.monthly ||
        data.other,
      {
        message: 'Please select at least one option for "How Often?".',
      },
    ),
  additionalServices: z.string().optional(),
})

type CleaningFormSchema = z.infer<typeof cleaningFormSchema>

export const CleaningServicesForm = () => {
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CleaningFormSchema>({
    defaultValues: formData,
    resolver: zodResolver(cleaningFormSchema),
  })

  const onHandleFormSubmit = async (data: CleaningFormSchema) => {
    setFormData((prev) => ({ ...prev, ...data }))
    onHandleNext()
  }

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex flex-col gap-4"
    >
      <div>
        <label className="font-semibold">I Am Looking To Have:</label>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('iAmLookingToHave.residencialCleaning')}
            id="residencialCleaning"
          />
          <label htmlFor="residencialCleaning">Residential Cleaning</label>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('iAmLookingToHave.commercialCleaning')}
            id="commercialCleaning"
          />
          <label htmlFor="commercialCleaning">Commercial Cleaning</label>
        </div>
        <p className="text-sm text-destructive">
          {errors.iAmLookingToHave?.root?.message}
        </p>
      </div>

      <div>
        <label className="font-semibold">I Need?</label>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('iNeed.recurringServicePlan')}
            id="recurringServicePlan"
          />
          <label htmlFor="recurringServicePlan">Recurring Service Plan</label>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('iNeed.oneTimeCleaning')}
            id="oneTimeCleaning"
          />
          <label htmlFor="oneTimeCleaning">One Time Cleaning</label>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('iNeed.moveInOut')}
            id="moveInOut"
          />
          <label htmlFor="moveInOut">Move In/Out</label>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('iNeed.other')}
            id="otherNeed"
          />
          <label htmlFor="otherNeed">Other</label>
        </div>
        <p className="text-sm text-destructive">
          {errors.iNeed?.root?.message}
        </p>
      </div>

      <div>
        <label className="font-semibold">How Often?</label>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('howOften.weekly')}
            id="weekly"
          />
          <label htmlFor="weekly">Weekly</label>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('howOften.twoWeekly')}
            id="twoWeekly"
          />
          <label htmlFor="twoWeekly">2x a Week</label>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('howOften.biWeekly')}
            id="biWeekly"
          />
          <label htmlFor="biWeekly">Bi-Weekly</label>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('howOften.monthly')}
            id="monthly"
          />
          <label htmlFor="monthly">Monthly</label>
        </div>
        <div className="flex items-center gap-2">
          <Input
            className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            type="checkbox"
            {...register('howOften.other')}
            id="otherHowOften"
          />
          <label htmlFor="otherHowOften">Other</label>
        </div>
        <p className="text-sm text-destructive">
          {errors.howOften?.root?.message}
        </p>
      </div>

      <div>
        <label htmlFor="additionalServices">
          Additional Services:{' '}
          <Badge className="mb-2 ml-2" variant="secondary">
            Optional
          </Badge>
        </label>
        <Input {...register('additionalServices')} />
        {errors.additionalServices && (
          <p className="text-sm text-destructive">
            {errors.additionalServices.message}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-6">
        <Button
          type="button"
          onClick={onHandleBack}
          className="font-bold"
          size="xl"
          variant="secondary"
        >
          Back
        </Button>
        <Button type="submit" className="font-bold" size="xl">
          Next
        </Button>
      </div>
    </form>
  )
}
