'use client'

import { Button } from '@/components/ui/button'
import { useFormState } from './FormContext'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'
import { Badge } from '../ui/badge'
import { useEffect } from 'react'
import ReactGA from 'react-ga'

const homeDetailsFormSchema = z.object({
  sqft: z.string().refine((value) => !!value, {
    message: 'Please select a value.',
  }),
  homeStyle: z.string().refine((value) => !!value, {
    message: 'Please select a value.',
  }),
  levels: z.string().refine((value) => !!value, {
    message: 'Please select a value.',
  }),
  numOfBaths: z.string().refine((value) => !!value, {
    message: 'Please select a value.',
  }),
  numOfBeds: z.string().refine((value) => !!value, {
    message: 'Please select a value.',
  }),
  basement: z.string().refine((value) => !!value, {
    message: 'Please select a value.',
  }),
  floorType: z.string().min(2, { message: 'Please specify a floor type' }),
  numOfHouseMembers: z
    .string()
    .min(1, { message: 'Please specify a floor type' }),
  cookingFrequency: z
    .string()
    .min(1, { message: 'Please specify how often do you cook.' }),
  hasPets: z.string().optional(),
})

type HomeDetailsFormSchema = z.infer<typeof homeDetailsFormSchema>

export const HomeDetailsForm = () => {
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState()
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm<HomeDetailsFormSchema>({
    defaultValues: formData as HomeDetailsFormSchema,
    resolver: zodResolver(homeDetailsFormSchema),
  })

  const onHandleFormSubmit = async (data: HomeDetailsFormSchema) => {
    setFormData((prev) => ({ ...prev, ...data }))

    ReactGA.event({
      category: 'Conversão',
      action: 'Enviar',
      label: 'AW-11139734703/D6zhCOOO8JEZEK-5678p',
    })

    onHandleNext()
  }

  useEffect(() => {
    ReactGA.initialize('GTM-KXCK2GK5')
  }, [])

  return (
    <form
      onSubmit={handleSubmit(onHandleFormSubmit)}
      className="flex flex-col gap-4 space-y-4"
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-full">
          <label className="font-bold" htmlFor="sqft">
            SQ FT:
          </label>
          <Select
            onValueChange={(value: string) => {
              setValue('sqft', value, { shouldValidate: true })
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under 1000 sqft">Under 1000 sqf</SelectItem>
              <SelectItem value="1001-1400 sqft">1001-1400 sqft</SelectItem>
              <SelectItem value="1401-1800 sqft">1401-1800 sqft</SelectItem>
              <SelectItem value="1801-2400 sqft">1801-2400 sqft</SelectItem>
              <SelectItem value="2401-2800 sqft">2401-2800 sqft</SelectItem>
              <SelectItem value="2801-3300 sqft">2801-3300 sqft</SelectItem>
              <SelectItem value="3301-4000 sqft">3301-4000 sqft</SelectItem>
              <SelectItem value="above 4001 sqft">Above 4001 sqft</SelectItem>
            </SelectContent>
          </Select>
          {errors.sqft && (
            <p className="text-sm text-destructive">{errors.sqft.message}</p>
          )}
        </div>

        <div className="w-full">
          <label className="font-bold" htmlFor="homeStyle">
            My Home Style:
          </label>
          <Select
            onValueChange={(value: string) => {
              setValue('homeStyle', value, { shouldValidate: true })
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single-home">Single Home</SelectItem>
              <SelectItem value="town-home">Town Home</SelectItem>
              <SelectItem value="condo-apart">Condo / Apart.</SelectItem>
              <SelectItem value="mansion">Mansion</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-destructive">
            {errors.homeStyle?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-4 sm:flex-row">
        <div className="w-full">
          <label className="font-bold" htmlFor="levels">
            Number of Levels:
          </label>
          <Select
            onValueChange={(value: string) => {
              setValue('levels', value, { shouldValidate: true })
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="one-story">1 Story</SelectItem>
              <SelectItem value="two-story">2 Story</SelectItem>
              <SelectItem value="three-story">3 Story</SelectItem>
              <SelectItem value="split-levels">Split Level</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-destructive">{errors.levels?.message}</p>
        </div>

        <div className="w-full">
          <label className="font-bold" htmlFor="numOfBaths">
            Number of Bathrooms:
          </label>
          <Select
            onValueChange={(value: string) => {
              setValue('numOfBaths', value, { shouldValidate: true })
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
              <SelectItem value="five-bath">5</SelectItem>
              <SelectItem value="six-or-more-bath">6 or more</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-destructive">
            {errors.numOfBaths?.message}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-4 sm:flex-row">
        <div className="w-full">
          <label className="font-bold" htmlFor="numOfBeds">
            Number of Bedrooms:
          </label>
          <Select
            onValueChange={(value: string) => {
              setValue('numOfBeds', value, { shouldValidate: true })
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="one-beds">1</SelectItem>
              <SelectItem value="two-beds">2</SelectItem>
              <SelectItem value="three-beds">3</SelectItem>
              <SelectItem value="four-beds">4</SelectItem>
              <SelectItem value="five-beds">5</SelectItem>
              <SelectItem value="six-or-more-beds">6 or more</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-destructive">
            {errors.numOfBeds?.message}
          </p>
        </div>
        <div className="w-full">
          <label className="font-bold" htmlFor="basement">
            Basement Type:
          </label>
          <Select
            onValueChange={(value: string) => {
              setValue('basement', value, { shouldValidate: true })
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a value" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-finished">Full Finished</SelectItem>
              <SelectItem value="partial-finished">Partial Finished</SelectItem>
              <SelectItem value="not-finished">Not Finished</SelectItem>
              <SelectItem value="no-finished">No Basement</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-sm text-destructive">{errors.basement?.message}</p>
        </div>
      </div>

      <div>
        <label className="font-bold">Floor Type:</label>
        <Input {...register('floorType')} />
        {errors.floorType && (
          <p className="text-sm text-destructive">{errors.floorType.message}</p>
        )}
      </div>

      <div className="flex flex-col items-end gap-4 md:flex-row">
        <div className="w-full">
          <label className="font-bold">
            How many house members live in the house?
          </label>
          <Input {...register('numOfHouseMembers')} />
          {errors.numOfHouseMembers && (
            <p className="text-sm text-destructive">
              {errors.numOfHouseMembers.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="font-bold">How often do you cook?</label>
          <Input {...register('cookingFrequency')} />
          {errors.cookingFrequency && (
            <p className="text-sm text-destructive">
              {errors.cookingFrequency.message}
            </p>
          )}
        </div>
      </div>

      <div className="w-full">
        <label className="font-bold">
          Do you have any pets?{' '}
          <Badge variant="outline" className="mb-2">
            Optional
          </Badge>
        </label>
        <Input {...register('hasPets')} />
        {errors.hasPets && (
          <p className="text-sm text-destructive">{errors.hasPets.message}</p>
        )}
      </div>

      <div
        className="flex 
        justify-end gap-6"
      >
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
          Confirm
        </Button>
      </div>
    </form>
  )
}
