import Link from 'next/link'
import { Card } from './ui/card'
import { Button } from './ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="mx-auto w-full max-w-screen-2xl">
      <Card className="flex items-center justify-between border-none px-[1.875rem] py-[1rem]">
        <Link href="/">
          <Image
            sizes="100vw"
            width={0}
            className="h-auto w-full  max-w-48 px-5 md:max-w-60"
            height={0}
            src="/logo.png"
            alt="Right Target Logo"
          />
          {/* <h1 className="text-xl font-bold tracking-tighter">
            Right Target
          </h1> */}
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden sm:block md:hidden">
            <Button>Contact us</Button>
          </Link>

          <Sheet>
            <SheetTrigger className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="w-80">
              <SheetTitle className="mt-2 flex items-center gap-2">
                <Image
                  sizes="100vw"
                  width={0}
                  className="h-auto w-full max-w-10"
                  height={0}
                  src="/right-logo.png"
                  alt="Right Target Logotipo"
                />
                <h1 className="text-xl font-bold tracking-tighter">
                  Right Target
                </h1>
              </SheetTitle>
              <nav className="flex h-full flex-col gap-4 px-2 py-8 text-end ">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    About
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/get-a-quote"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    Get A Quote
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/services"
                    className="py-2 text-gray-500 hover:text-gray-900"
                  >
                    Services
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/contact">
                    <Button size="xl">Contact us</Button>
                  </Link>
                </SheetClose>

                <div className="mt-4 flex justify-end gap-4">
                  <SheetClose asChild>
                    <Link
                      href="https://www.instagram.com/right_.target/"
                      className="flex items-center gap-1 font-semibold"
                    >
                      <Image
                        sizes="100vw"
                        width={0}
                        className="h-auto w-full  max-w-14 rounded-full"
                        height={0}
                        src="/instagram-icon.png"
                        alt="Instagram Right Target"
                      />
                      <span className="sr-only">Instagram page</span>
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link
                      href="https://www.facebook.com/profile.php?id=61555770274333"
                      className="flex items-center gap-2 font-semibold"
                    >
                      <Image
                        sizes="100vw"
                        width={0}
                        className="h-auto w-full  max-w-9"
                        height={0}
                        src="/facebook-icon.png"
                        alt="Facebook Right Target"
                      />

                      <span className="sr-only">Facebook page</span>
                    </Link>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/get-a-quote"
              className="text-gray-500 hover:text-gray-900"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="text-gray-500 hover:text-gray-900"
            >
              Services
            </Link>
            <Link href="/contact">
              <Button size="lg">Contact us</Button>
            </Link>
          </nav>
        </div>
      </Card>
    </header>
  )
}
