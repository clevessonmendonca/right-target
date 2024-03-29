import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { HeroSection } from './components/hero-section'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'

export default function BookNow() {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat ">
        <HeroSection />
      </div>

      <div id="3-step" className="bg-primary px-4 py-9 text-center">
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
              src="/asian-cleaning-service-woman-worker-cleaning-in-li-2021-12-09-20-22-54-utc.jpg"
              alt="asian-cleaning-service-woman-worker-cleaning-in-li-2021-12-09-20-22-54-utc.jpg"
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
              src="/Deep-Cleaning-Whats-The-Difference.jpg"
              alt="Deep-Cleaning-Whats-The-Difference.jpg"
            />
            <h2 className="px-4 pt-4 text-2xl font-black">DEEP CLEAN</h2>
          </Card>
          <Card className="flex max-w-sm flex-col items-center pb-6 pt-2">
            <Image
              sizes="100vw"
              width={0}
              className="h-auto w-full max-w-48 rounded-md px-5 md:max-w-60"
              height={0}
              src="/post-construction-cleaning-checklist.jpg"
              alt="post-construction-cleaning-checklist.jpg"
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

      <div
        id="faq"
        className="mx-auto my-12 flex max-w-screen-lg flex-col gap-4 px-4 px-4 md:flex-row"
      >
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
          className="mx-auto h-auto w-full max-w-lg bg-contain"
          height={0}
          src="/women-cleaning.jpg"
          alt="women-cleaning.jpg"
        />
      </div>

      <div id="reviews">
        <div className="mx-auto my-14 flex max-w-screen-lg flex-col gap-4 px-4 md:flex-row">
          <Card>
            <CardContent className="flex flex-col justify-between space-y-3 px-8 py-12">
              <p>⭐⭐⭐⭐⭐</p>
              <p className="max-w-md font-bold">
                &quot;Highly recommend! First time using their service, and they
                did not disappoint! Was very pleased with the job well done!
                Great service and easy to book. Everyone I communicated with was
                super professional and very friendly.&quot;
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

        <div className="mx-auto flex w-full justify-center px-4">
          <Link href="#form" className="">
            <Button
              className="mx-auto flex flex-col py-10 font-medium md:mx-0"
              size="xl"
            >
              <span className="text-3xl font-bold">BOOK NOW</span>
              <span>click here</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-6 bg-orange-500/20 px-4 py-12">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-5xl font-black tracking-tight md:text-6xl">
            READY TO RESTORE YOUR HOME?
          </h2>
          <h3 className="text-3xl font-medium">YOU ARE IN SAFE HANDS...</h3>
          <ArrowDown className="h-6 w-6 animate-bounce font-bold" />

          <div className="flex flex-col gap-4 md:flex-row">
            <p className="text-3xl font-bold">FAST QUOTE</p>
            <p className="text-3xl font-bold">Affordable Prices</p>
            <p className="text-3xl font-bold">Licensed + Insured </p>
            <p className="text-3xl font-bold">100% Satisfaction</p>
          </div>

          <Link href="#form">
            <Button
              className="mx-auto flex flex-col py-10 font-medium md:mx-0"
              size="xl"
            >
              <span className="text-3xl font-bold">GET $30 OFF TODAY!</span>
              <span>click here</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
