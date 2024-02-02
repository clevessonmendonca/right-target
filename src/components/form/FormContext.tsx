import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface ExistingFormData {
  fullName: string
  email: string
  phone: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  postalCode: string
}

interface HomeDetailsFormData {
  sqft: string
  homeStyle: string
  levels: string
  numOfBaths: string
  numOfBeds: string
  basement: string
  floorType: string
  numOfHouseMembers: string
  cookingFrequency: string
  hasPets: string
}

interface CleaningFormData {
  iAmLookingToHave: {
    residencialCleaning: boolean
    commercialCleaning: boolean
  }
  iNeed: {
    recurringServicePlan: boolean
    oneTimeCleaning: boolean
    moveInOut: boolean
    other: boolean
  }
  howOften: {
    weekly: boolean
    twoWeekly: boolean
    biWeekly: boolean
    monthly: boolean
    other: boolean
  }
  additionalServices?: string
}

export type MergedFormData = ExistingFormData &
  HomeDetailsFormData &
  CleaningFormData

interface IFormContext {
  formData: MergedFormData
  setFormData: Dispatch<SetStateAction<MergedFormData>>
  onHandleBack: () => void
  onHandleNext: () => void
  step: number
}

const FormContext = createContext<IFormContext>({
  formData: {
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    sqft: '',
    homeStyle: '',
    levels: '',
    numOfBaths: '',
    numOfBeds: '',
    basement: '',
    floorType: '',
    numOfHouseMembers: '',
    cookingFrequency: '',
    hasPets: '',
    iAmLookingToHave: {
      residencialCleaning: false,
      commercialCleaning: false,
    },
    iNeed: {
      recurringServicePlan: false,
      oneTimeCleaning: false,
      moveInOut: false,
      other: false,
    },
    howOften: {
      weekly: false,
      twoWeekly: false,
      biWeekly: false,
      monthly: false,
      other: false,
    },
    additionalServices: '',
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHandleBack: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHandleNext: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormData: () => {},
  step: 1,
})

interface IProps {
  children: ReactNode
}

export function FormProvider({ children }: IProps) {
  const [formData, setFormData] = useState<MergedFormData>({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    sqft: '',
    homeStyle: '',
    levels: '',
    numOfBaths: '',
    numOfBeds: '',
    basement: '',
    floorType: '',
    numOfHouseMembers: '',
    cookingFrequency: '',
    hasPets: '',
    iAmLookingToHave: {
      residencialCleaning: false,
      commercialCleaning: false,
    },
    iNeed: {
      recurringServicePlan: false,
      oneTimeCleaning: false,
      moveInOut: false,
      other: false,
    },
    howOften: {
      weekly: false,
      twoWeekly: false,
      biWeekly: false,
      monthly: false,
      other: false,
    },
    additionalServices: '',
  })
  const [step, setStep] = useState(1)

  function onHandleNext() {
    setStep((prev) => prev + 1)

    const section = document.querySelector('#form')

    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function onHandleBack() {
    setStep((prev) => prev - 1)
  }

  return (
    <FormContext.Provider
      value={{ formData, setFormData, onHandleBack, onHandleNext, step }}
    >
      {children}
    </FormContext.Provider>
  )
}

export function useFormState() {
  return useContext(FormContext)
}
