import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { useFormState } from './FormContext'

export const ServiceForm = () => {
  const { formData, setFormData, onHandleNext, onHandleBack } = useFormState()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleNext = () => {
    // Adicione validações conforme necessário
    onHandleNext()
  }

  const handleBack = () => {
    onHandleBack()
  }

  return (
    <>
      <div>
        <label htmlFor="typeOfCleaning">Type of cleaning services:</label>
        <Input
          type="text"
          id="typeOfCleaning"
          name="typeOfCleaning"
          value={formData.typeOfCleaning || ''}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="lookingFor">What are you looking for?</label>
        <Input
          type="text"
          id="lookingFor"
          name="lookingFor"
          value={formData.lookingFor || ''}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="iAmLookingToHave">I Am Looking To Have:</label>
        <Input
          type="text"
          id="iAmLookingToHave"
          name="iAmLookingToHave"
          value={formData.iAmLookingToHave || ''}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="cleaningNeeds">I Need:</label>
        <div>
          <Checkbox
            id="recurringService"
            name="cleaningNeeds"
            value="Recurring Service Plan"
            checked={formData.cleaningNeeds === 'Recurring Service Plan'}
            onChange={handleChange}
          />
          <label htmlFor="recurringService">Recurring Service Plan</label>
        </div>

        <div>
          <Checkbox
            id="oneTimeCleaning"
            name="cleaningNeeds"
            value="One Time Cleaning"
            checked={formData.cleaningNeeds === 'One Time Cleaning'}
            onChange={handleChange}
          />
          <label htmlFor="oneTimeCleaning">One Time Cleaning</label>
        </div>

        <div>
          <Checkbox
            id="moveInOut"
            name="cleaningNeeds"
            value="Move In/Out"
            checked={formData.cleaningNeeds === 'Move In/Out'}
            onChange={handleChange}
          />
          <label htmlFor="moveInOut">Move In/Out</label>
        </div>

        <div>
          <Checkbox
            id="other"
            name="cleaningNeeds"
            value="Other"
            checked={formData.cleaningNeeds === 'Other'}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>

      <div>
        <label htmlFor="howOften">How Often?</label>
        {/* Adicione campos e lógica de renderização conforme necessário */}
      </div>

      <div>
        <label htmlFor="additionalServices">Additional Services:</label>
        {/* Adicione campos e lógica de renderização conforme necessário */}
      </div>

      <div className="flex justify-between">
        <Button onClick={handleBack} className="font-bold">
          Back
        </Button>
        <Button onClick={handleNext} className="font-bold">
          Next
        </Button>
      </div>
    </>
  )
}

export default ServiceForm
