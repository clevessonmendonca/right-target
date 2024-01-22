'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Sarah Taylor',
    comment:
      'The Deep Clean transformed my living space. Work for Immigrants brought order to my home, and I appreciate their dedication to perfection.',
    imageSrc: '/sara.jpg',
  },
  {
    name: 'Alex Miller',
    comment:
      'Amazing service! The team did a fantastic job cleaning our house. Highly recommended!',
    imageSrc: '/man-cleaning.jpg',
  },
  {
    name: 'Emily Davis',
    comment:
      "I'm impressed with the attention to detail. They truly care about customer satisfaction.",
    imageSrc: '/woman-cleaning.jpg',
  },
]

export const TestimonialsCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm px-4 lg:max-w-screen-xl"
    >
      <CarouselContent>
        {testimonials.map(({ name, imageSrc, comment }) => (
          <CarouselItem key={name} className="max-w-sm">
            <Card className="mt-6 h-64 max-w-sm space-y-4 px-5 py-6">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{name}</AvatarFallback>
                  <AvatarImage src={imageSrc} />
                </Avatar>
                <h4 className="text-lg font-medium">{name}</h4>
              </div>
              <p>&quot; {comment} &quot;</p>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
