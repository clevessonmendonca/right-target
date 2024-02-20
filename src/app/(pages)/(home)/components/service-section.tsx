'use client'

import { Card } from '@/components/ui/card'
import { FastForward, SparklesIcon, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedServiceCardProps {
  children: ReactNode
}

const AnimatedCard = motion(Card)

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({
  children,
}) => (
  <AnimatedCard
    className="flex flex-wrap items-center justify-around gap-8 px-4 py-6 text-sm"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    {children}
  </AnimatedCard>
)

const AnimatedIcon = motion.span

export const ServicesSection = () => {
  const iconAnimationProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.6, duration: 0.5 },
  }

  return (
    <div className="z-10 mx-auto -mt-6 w-full max-w-screen-md px-4 md:-mt-9">
      <AnimatedServiceCard>
        <AnimatedIcon
          className="flex items-center gap-2"
          {...iconAnimationProps}
        >
          <FastForward className="text-primary" /> Quick Services
        </AnimatedIcon>
        <AnimatedIcon
          className="flex items-center gap-2"
          {...iconAnimationProps}
        >
          <SparklesIcon className="text-primary" /> Deep Clean Solutions
        </AnimatedIcon>
        <AnimatedIcon
          className="flex items-center gap-2"
          {...iconAnimationProps}
        >
          <UserCheck className="text-primary" /> Personalized Care
        </AnimatedIcon>
      </AnimatedServiceCard>
    </div>
  )
}
