import * as React from 'react'
import { MergedFormData } from './form/FormContext'
import Link from 'next/link'

const EmailTemplateClient: React.FC<Readonly<MergedFormData>> = ({
  email,
  phone,
  address,
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
  const addressFull = `${address}, ${city}, ${state} ${postalCode}`

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
    <div className="mx-auto flex max-w-screen-md flex-col gap-4 p-2">
      <div>
        <p className="text-xl font-semibold">Dear {fullName},</p>
        <p className="text-sm">
          Thank you for choosing our cleaning services. We have received your
          request for a cleaning house budget, and here are the details:
        </p>
      </div>
      <div className="flex flex-col gap-2 rounded-lg border bg-card px-6 py-6 text-card-foreground shadow-sm">
        <p className="text-xl text-primary">
          <strong>Contact Information:</strong>
        </p>
        <ul className="mb-4">
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
          <li>
            <strong>Address:</strong> {addressFull}
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

        <span className="h-[2px] w-full shrink-0 bg-border" />

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
        We will review your request and provide you with a detailed budget
        shortly. If you have any additional questions or specific requirements,
        feel free to reach out to us.
      </p>
      <p>
        Thank you again for choosing our services. We look forward to assisting
        you with your cleaning needs!
      </p>
      <div>
        <p>Best regards,</p>
        <a
          href="https://righttargetservice.com"
          className="text-lg font-semibold"
        >
          Right Target
        </a>
      </div>
    </div>
  )
}

export default EmailTemplateClient
