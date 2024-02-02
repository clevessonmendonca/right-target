import { Card } from '@/components/ui/card'
import {
  Building,
  CalendarDaysIcon,
  CombineIcon,
  PartyPopperIcon,
  SparklesIcon,
} from 'lucide-react'

export const ServicesCard = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-4 px-4 pt-12">
      <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
        <CalendarDaysIcon />
        <h3 className="mt-2 text-xl font-medium">Regular Cleaning</h3>
        <p className="mt-4 text-sm">
          Enjoy the convenience of regular and recurring cleaning services. We
          tailor our cleaning schedules to match your preferences and keep your
          home consistently clean.
        </p>
      </Card>
      <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
        <SparklesIcon />
        <h3 className="mt-2 text-xl font-medium">Deep Cleaning</h3>
        <p className="mt-4 text-sm">
          Our deep residential cleaning service ensures a thorough and
          comprehensive cleaning of your home, leaving every corner spotless and
          refreshed.
        </p>
      </Card>
      <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
        <PartyPopperIcon />
        <h3 className="mt-2 text-xl font-medium">Post-Event Cleaning</h3>
        <p className="mt-4 text-sm">
          Hosting an event? Let us take care of the aftermath. Our post-event
          cleaning service ensures your space is restored to its pristine
          condition after the festivities.
        </p>
      </Card>
      <Card className="hidden h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center md:flex">
        <Building />
        <h3 className="mt-2 text-xl font-medium">Organizational Services</h3>
        <p className="mt-4 text-sm">
          Beyond cleaning, we offer organizational services to declutter and
          enhance the overall orderliness of your living spaces.
        </p>
      </Card>
      <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
        <CombineIcon />
        <h3 className="mt-2 text-xl font-medium">
          Customized Cleaning Solutions
        </h3>
        <p className="mt-4 text-sm">
          Tailored to your unique needs, our customized cleaning solutions offer
          flexibility and personalized care for your home.
        </p>
      </Card>
    </div>
  )
}
