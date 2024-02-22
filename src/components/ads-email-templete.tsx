import { FormSchema } from '@/app/booknow/components/form'
import * as React from 'react'

const AdsEmailTemplate: React.FC<FormSchema> = ({
  bathroom,
  bedrooms,
  city,
  email,
  firstName,
  phone,
  service,
}) => {
  return (
    <div className="mx-auto my-12 flex max-w-screen-md flex-col gap-4 p-2">
      <div>
        <p className="text-xl font-semibold">Dear Team,</p>
        <p className="text-sm">
          You have received a new cleaning services request. Here are the
          details:
        </p>
      </div>
      <div className="flex flex-col gap-2 rounded-lg border bg-card px-6 py-6 text-card-foreground shadow-sm">
        <p className="text-xl text-primary">
          <strong>Contact Information:</strong>
        </p>
        <ul className="mb-4">
          <li>
            <strong>Full Name:</strong> {firstName}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
        </ul>
        <p className="text-xl  text-primary">
          <strong>Property Details:</strong>
        </p>
        <ul className="mb-4">
          <li>
            <strong>City:</strong> {city}
          </li>
          <li>
            <strong>Number of Bathrooms:</strong> {bathroom}
          </li>
          <li>
            <strong>Number of Bedrooms:</strong> {bedrooms}
          </li>
        </ul>

        <span className="h-[2px] w-full shrink-0 bg-border" />

        <p>
          <strong>Requested Service:</strong> {service}
        </p>
      </div>

      <p>
        Review the details and provide a detailed budget. If you have any
        additional questions or specific requirements, feel free to reach out.
      </p>
      <p>Thank you for your attention to this request.</p>
      <div>
        <button className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-primary text-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <a href={`mailto:${email}`} className="text-lg font-semibold">
            Send Budget to Customer
          </a>
        </button>
      </div>
    </div>
  )
}

export default AdsEmailTemplate
