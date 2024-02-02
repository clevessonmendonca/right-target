'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useRef } from 'react'

const images = [
  {
    name: 'beautiful-photo-of-a-modern-home-kitchen',
    imageSrc: '/beautiful-photo-of-a-modern-home-kitchen.jpg',
  },
  {
    name: '3D-rendering-loft-luxury-living-room-with-bookcase',
    imageSrc: '/3D-rendering-loft-luxury-living-room-with-bookcase.jpg',
  },
  {
    name: 'photo-of-the-interior-of-a-modern-kitchen-with-large-windows',
    imageSrc:
      '/photo-of-the-interior-of-a-modern-kitchen-with-large-windows.jpg',
  },
]

export const HomeCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 4000 }))

  return (
    <Carousel plugins={[plugin.current]} className="max-w-screen-md">
      <CarouselContent>
        {images.map(({ name, imageSrc }) => (
          <CarouselItem key={name}>
            <Image
              sizes="100vw"
              width={0}
              className="h-auto w-full px-5"
              height={0}
              src={imageSrc}
              alt={name}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
