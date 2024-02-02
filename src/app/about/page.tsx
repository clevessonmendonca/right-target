import React from 'react'
import { FastForward, SparklesIcon, UserCheck } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TestimonialsCarousel } from '../../components/testimonials-carousel'
import { CleaningForm } from '../../components/form/cleaning-form'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { AboutText } from './components/about-text'

export default function About() {
  return (
    <div className="flex flex-col">
      <Collapsible>
        <CollapsibleTrigger asChild>
          <div className="cursor-pointer bg-primary py-4 text-center text-white">
            <p className="text-lg">
              Transform your living space with Right Target&apos;s top-notch
              cleaning services.{' '}
              <span className="text-black underline">
                Schedule a cleaning now!
              </span>
            </p>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <CleaningForm />
        </CollapsibleContent>
      </Collapsible>

      <div className="mx-auto mt-16 flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold tracking-tight">About Us</h2>
        <div className="mt-12 text-black">
          <AboutText />
        </div>
      </div>

      <div className="mx-auto mt-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight">Why Choose Us?</h2>

        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-4 px-4 py-12">
          <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
            <FastForward className="text-primary" />
            <h3 className="mt-2 text-xl font-medium">Quick Services</h3>
            <p className="mt-4 text-sm">
              Swift and efficient cleaning solutions to save you time and
              hassle.
            </p>
          </Card>
          <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
            <SparklesIcon className="text-primary" />
            <h3 className="mt-2 text-xl font-medium">Deep Clean Solutions</h3>
            <p className="mt-4 text-sm">
              Our deep cleaning goes beyond the surface, ensuring a thorough and
              revitalizing experience.
            </p>
          </Card>
          <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
            <UserCheck className="text-primary" />
            <h3 className="mt-2 text-xl font-medium">Personalized Care</h3>
            <p className="mt-4 text-sm">
              Tailored services designed to meet your individual needs for a
              personalized touch.
            </p>
          </Card>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-primary">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
          <Badge className="text-white">Testimonials</Badge>
          <h2 className="text-3xl font-bold tracking-tight ">
            Our Clients <span className="text-white">Reviews</span>
          </h2>

          <TestimonialsCarousel />
        </div>
      </div>
    </div>
  )
}
