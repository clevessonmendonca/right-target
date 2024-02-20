import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const Header = () => {
  return (
    <header className="mx-auto w-full max-w-screen-2xl">
      <Card className="flex flex-col items-center justify-around gap-8 border-none px-4 py-[1.5rem] md:flex-row md:px-[1.875rem]">
        <Image
          sizes="100vw"
          width={0}
          className="h-auto w-full  max-w-48 px-5 md:max-w-60"
          height={0}
          src="/logo.png"
          alt="Right Target Logo"
        />

        <Link href="tel:(973) 583-0823">
          <Button className="flex flex-col py-10 font-medium" size="xl">
            <span className="text-xl font-bold">Call (973) 583-0823</span>
            <span>click here to call for a quote</span>
          </Button>
        </Link>
      </Card>
    </header>
  )
}
