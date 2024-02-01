import * as React from 'react'
import { MergedFormData } from './form/FormContext'

const ReceivedEmailTemplate: React.FC<MergedFormData> = ({
  email,
  phone,
  addressLine1,
  addressLine2,
  basement,
  city,
  cookingFrequency,
  floorType,
  fullName,
  hasPets,
  homeStyle,
  howOften,
  iAmLookingToHave,
  iNeed,
  levels,
  numOfBaths,
  numOfBeds,
  numOfHouseMembers,
  postalCode,
  sqft,
  state,
  additionalServices,
}) => {
  // Combine address details
  const address = `${addressLine1}, ${addressLine2}, ${city}, ${state} ${postalCode}`

  // Combine selected services
  const selectedServices = Object.entries(iAmLookingToHave)
    .filter(([key, value]) => value)
    .map(([key]) => key)

  // Combine additional needs
  const additionalNeeds = Object.entries(iNeed)
    .filter(([key, value]) => value)
    .map(([key]) => key)

  // Combine cleaning frequency
  const cleaningFrequency = Object.entries(howOften)
    .filter(([key, value]) => value)
    .map(([key]) => key)

  // Combine comments (if any)
  const comments = additionalServices ? (
    <p>
      <strong>Additional Services:</strong> {additionalServices}
    </p>
  ) : (
    <p>No additional services requested.</p>
  )

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
            <strong>Full Name:</strong> {fullName}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
          <li>
            <strong>Address:</strong> {address}
          </li>
        </ul>
        <p className="text-xl  text-primary">
          <strong>Home Details:</strong>
        </p>
        <ul className="mb-4">
          <li>
            <strong>SQ FT:</strong> {sqft}
          </li>
          <li>
            <strong>Home Style:</strong> {homeStyle}
          </li>
          <li>
            <strong>Levels:</strong> {levels}
          </li>
          <li>
            <strong>Number of Baths:</strong> {numOfBaths}
          </li>
          <li>
            <strong>Number of Beds:</strong> {numOfBeds}
          </li>
          <li>
            <strong>Basement:</strong> {basement}
          </li>
          <li>
            <strong>Floor Type:</strong> {floorType}
          </li>
          <li>
            <strong>Number of House Members:</strong> {numOfHouseMembers}
          </li>
          <li>
            <strong>Cooking Frequency:</strong> {cookingFrequency}
          </li>
          <li>
            <strong>Has Pets:</strong> {hasPets}
          </li>
        </ul>

        <span className="h-[2px] h-full w-full shrink-0 bg-border" />

        <p>
          <strong>Services Requested:</strong> {selectedServices.join(', ')}
        </p>
        <p>
          <strong>Additional Needs:</strong> {additionalNeeds.join(', ')}
        </p>
        <p>
          <strong>Cleaning Frequency:</strong> {cleaningFrequency.join(', ')}
        </p>
        {comments}
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

export default ReceivedEmailTemplate
