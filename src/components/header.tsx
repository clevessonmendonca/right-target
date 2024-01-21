import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";

export const Header = () => {
  return (
    <header className="mx-auto w-full max-w-screen-2xl">
      <Card className="flex items-center justify-between border-none p-[1.875rem]">
        <Link href="/">
          <h1 className="text-xl font-bold tracking-tighter">
            Work for Immigration
          </h1>
        </Link>
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </SheetTrigger>
            <SheetContent className="w-80">
              <SheetTitle className="mt-2">
                <h1 className="text-xl font-bold tracking-tighter">
                  Work for Immigration
                </h1>
              </SheetTitle>
              <nav className="flex h-full flex-col gap-4 px-2 py-8 text-end ">
                <Link
                  href="/about"
                  className="py-2 text-gray-500 hover:text-gray-900"
                >
                  About
                </Link>
                <Link
                  href="/testimonials"
                  className="py-2 text-gray-500 hover:text-gray-900"
                >
                  Testimonials
                </Link>
                <Link
                  href="/services"
                  className="py-2 text-gray-500 hover:text-gray-900"
                >
                  Services
                </Link>
                <Link href="/contact">
                  <Button>Contact us</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/contact" className="md:hidden">
            <Button>Contact us</Button>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/about" className="text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-500 hover:text-gray-900"
            >
              Testimonials
            </Link>
            <Link
              href="/services"
              className="text-gray-500 hover:text-gray-900"
            >
              Services
            </Link>
            <Link href="/contact">
              <Button>Contact us</Button>
            </Link>
          </nav>
        </div>
      </Card>
    </header>
  );
};
