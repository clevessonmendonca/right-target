import { HeroSection } from './components/hero-section'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ServicesCard } from '../services/components/services-card'
import Link from 'next/link'
import { ServicesSection } from './components/service-section'
import { AboutText } from '../about/components/about-text'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'
import { CleaningForm } from '@/components/form/cleaning-form'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <ServicesSection />

      <div className="mx-auto mt-16 flex w-full flex-col items-center bg-[#F97316] py-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          About Us
        </h2>

        <div className="px-4 py-8 text-white">
          <AboutText />
        </div>
      </div>

      <div className="mx-auto mt-28 flex flex-col items-center">
        <h2 className="text-3xl font-bold tracking-tight ">Our Services</h2>

        <ServicesCard />

        <div className="mb-12 mt-6 font-bold">
          <Link href="/get-a-quote">
            <Button size="xl" className="text-lg font-semibold">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-primary">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
          <Badge className="text-white">Comments</Badge>
          <h2 className="text-3xl font-bold tracking-tight ">
            Our Clients <span className="text-white">Reviews</span>
          </h2>

          <TestimonialsCarousel />
        </div>
      </div>

      <div className="my-16 px-4">
        <CleaningForm />
      </div>
    </div>
  )
}
