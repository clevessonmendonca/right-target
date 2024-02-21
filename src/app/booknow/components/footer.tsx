import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-4 py-[1.5rem] md:px-[1.875rem]">
      <div className="flex flex-col justify-around md:flex-row">
        <Image
          sizes="100vw"
          width={0}
          className="h-auto w-full  max-w-48 px-5 md:max-w-60"
          height={0}
          src="/logo.png"
          alt="Right Target Logo"
        />

        <div className="space-y-2 text-center text-xl">
          <strong>Right Target Cleaning Services</strong>
          <p>
            <strong>Service Location:</strong> Philadelphia & Pennsylvania Area
          </p>
          <Link href="tel:(973) 583-0823">
            <Button variant="link" className="text-2xl">
              Call (973) 583-0823
            </Button>
          </Link>
        </div>
      </div>

      <div>
        <Separator />

        <div className="text-center font-medium">
          <p>© Copyright 2023 Right Target - All Rights Reserved Privacy</p>
          <Link href="/privacy">Policy | Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
