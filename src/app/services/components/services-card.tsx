'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import {
  Building,
  CalendarDaysIcon,
  CombineIcon,
  PartyPopperIcon,
  SparklesIcon,
} from 'lucide-react'
import Link from 'next/link'
import { ReactNode, useState } from 'react'

interface AnimatedServiceCardProps {
  children: ReactNode
}

const AnimatedCard = motion(Card)

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({
  children,
}) => {
  const [whileHover, setWhileHover] = useState(false)

  return (
    <AnimatedCard
      onHoverStart={() => setWhileHover(true)}
      onHoverEnd={() => setWhileHover(false)}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      className="relative flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center"
    >
      <motion.span
        whileInView={{
          opacity: 0.4,
        }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          ease: 'linear',
        }}
        className={`-z-4 absolute bottom-0 right-0 h-72 w-72 rounded-b-md bg-gradient-to-tl from-primary via-transparent via-50% to-transparent opacity-30 ${whileHover === true ? 'block' : 'hidden'}`}
      ></motion.span>

      {children}

      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ y: 10 }}
        whileInView={{ y: 0 }}
        className={`z-10 mt-4 text-white ${whileHover === true ? 'block' : 'hidden'}`}
      >
        <Link href="/get-a-quote">
          <Button size="xl">Request a Quote</Button>
        </Link>
      </motion.div>
    </AnimatedCard>
  )
}

export const ServicesCard = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-4 px-4 pt-12">
      <AnimatedServiceCard>
        <CalendarDaysIcon />
        <h3 className="mt-2 text-xl font-medium">Regular Cleaning</h3>
        <p className="mt-4 text-sm">
          Enjoy the convenience of regular and recurring cleaning services. We
          tailor our cleaning schedules to match your preferences and keep your
          home consistently clean.
        </p>
      </AnimatedServiceCard>
      <AnimatedServiceCard>
        <SparklesIcon />
        <h3 className="mt-2 text-xl font-medium">Deep Cleaning</h3>
        <p className="mt-4 text-sm">
          Our deep residential cleaning service ensures a thorough and
          comprehensive cleaning of your home, leaving every corner spotless and
          refreshed.
        </p>
      </AnimatedServiceCard>
      <AnimatedServiceCard>
        <PartyPopperIcon />
        <h3 className="mt-2 text-xl font-medium">Post-Event Cleaning</h3>
        <p className="mt-4 text-sm">
          Hosting an event? Let us take care of the aftermath. Our post-event
          cleaning service ensures your space is restored to its pristine
          condition after the festivities.
        </p>
      </AnimatedServiceCard>
      <AnimatedServiceCard>
        <Building />
        <h3 className="mt-2 text-xl font-medium">Organizational Services</h3>
        <p className="mt-4 text-sm">
          Beyond cleaning, we offer organizational services to declutter and
          enhance the overall orderliness of your living spaces.
        </p>
      </AnimatedServiceCard>
      <AnimatedServiceCard>
        <CombineIcon />
        <h3 className="mt-2 text-xl font-medium">
          Customized Cleaning Solutions
        </h3>
        <p className="mt-4 text-sm">
          Tailored to your unique needs, our customized cleaning solutions offer
          flexibility and personalized care for your home.
        </p>
      </AnimatedServiceCard>
    </div>
  )
}
