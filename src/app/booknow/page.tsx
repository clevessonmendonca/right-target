import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { HeroSection } from './components/hero-section'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BookNow() {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat ">
        <HeroSection />
      </div>

      <div className="bg-primary px-4 py-9 text-center">
        <h1 className="px-4 text-6xl font-black tracking-tight text-[#011A46] ">
          WE CLEAN!
        </h1>
        <h2 className="px-4 text-5xl font-black">SO YOU DONT HAVE TO!</h2>

        <div className="mx-auto mt-4 grid max-w-screen-lg justify-center gap-8 px-4 md:grid-cols-4">
          <Card className="flex max-w-sm flex-col items-center pb-6 pt-2">
            <Image
              sizes="100vw"
              width={0}
              className="h-auto w-full max-w-48 rounded-md px-5 md:max-w-60"
              height={0}
              src="/regular-cleaning-service.jpg"
              alt="regular-cleaning-service.jpg"
            />
            <h2 className="px-4 pt-4 text-2xl font-black">STANDARD CLEAN</h2>
          </Card>
          <Card className="flex max-w-sm flex-col items-center pb-6 pt-2">
            <Image
              sizes="100vw"
              width={0}
              className="h-auto w-full max-w-48 rounded-md px-5 md:max-w-60"
              height={0}
              src="/regular-cleaning-service.jpg"
              alt="regular-cleaning-service.jpg"
            />
            <h2 className="px-4 pt-4 text-2xl font-black">
              MAKE - READY CLEAN
            </h2>
          </Card>
          <Card className="flex max-w-sm flex-col items-center pb-6 pt-2">
            <Image
              sizes="100vw"
              width={0}
              className="h-auto w-full max-w-48 rounded-md px-5 md:max-w-60"
              height={0}
              src="/regular-cleaning-service.jpg"
              alt="regular-cleaning-service.jpg"
            />
            <h2 className="px-4 pt-4 text-2xl font-black">DEEP CLEAN</h2>
          </Card>
          <Card className="flex max-w-sm flex-col items-center pb-6 pt-2">
            <Image
              sizes="100vw"
              width={0}
              className="h-auto w-full max-w-48 rounded-md px-5 md:max-w-60"
              height={0}
              src="/regular-cleaning-service.jpg"
              alt="regular-cleaning-service.jpg"
            />
            <h2 className="px-4 pt-4 text-2xl font-black">POST CONSTRUCTION</h2>
          </Card>
        </div>

        <div className="mt-5 flex justify-center">
          <Link href="#form">
            <Button
              className="mx-auto flex flex-col bg-[#011A46] py-10 font-medium md:mx-0"
              size="xl"
            >
              <span className="text-3xl font-bold">GET $30 OFF TODAY!</span>
              <span>click here</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="mx-auto my-12 flex max-w-screen-lg flex-col gap-4 px-4 md:flex-row">
        <div className="flex flex-col gap-3">
          <h2 className="text-6xl font-black tracking-tight">WHY US?</h2>
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">
              Emphasize Experience and Expertise:
            </h3>
            <p>
              Showcase the experience and expertise of your cleaning staff.
              Highlight any specialized training or certifications that set your
              team apart.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Quality Assurance:</h3>
            <p>
              Communicate a commitment to quality. Assure potential customers
              that your cleaning services are thorough, reliable, and designed
              to meet their specific needs.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">
              Professionalism and Reliability:
            </h3>
            <p>
              Highlight the professionalism and reliability of your team. Stress
              the importance of punctuality, trustworthiness, and a consistent
              standard of service.
            </p>
          </div>

          <Link href="#form">
            <Button
              className="mx-auto flex flex-col py-10 font-medium md:mx-0"
              size="xl"
            >
              <span className="text-2xl font-bold">GET $30 OFF TODAY!</span>
              <span>click here</span>
            </Button>
          </Link>
        </div>

        <Image
          sizes="100vw"
          width={0}
          className="h-auto w-full max-w-lg"
          height={0}
          src="/regular-cleaning-service.jpg"
          alt="regular-cleaning-service.jpg"
        />
      </div>

      <div className="mx-auto my-14 flex max-w-screen-lg flex-col gap-4 px-4 md:flex-row">
        <Card>
          <CardContent className="flex flex-col justify-between space-y-3 px-8 py-12">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="max-w-md font-bold">
              &quot;Highly recommend! First time using their service, and they
              did not disappoint! Was very pleased with the job well done! Great
              service and easy to book. Everyone I communicated with was super
              professional and very friendly.&quot;
            </p>

            <p className="max-w-md text-2xl font-bold">- Cristina</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col justify-between  space-y-3 px-8 py-12">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="max-w-md font-bold">
              &quot;Amazing team of ladies, that worked together to clean my
              home to MY STANDARDS. To me that is what makes the
              difference..&quot;
            </p>

            <p className="max-w-md text-2xl font-bold">- John</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col justify-between space-y-3 px-8 py-12">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="max-w-md font-bold">
              &quot;I have been getting cleanings for a while now matter fact,
              they’re all good it’s worth the money for sure&quot;
            </p>

            <p className="max-w-md text-2xl font-bold">- Patrick</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
