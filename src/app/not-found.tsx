"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="mx-auto mt-8 flex h-[80vh] max-h-screen max-w-screen-xl flex-col items-center justify-center gap-8 p-4 text-center">
      <motion.div
        className="flex max-w-md flex-col items-center gap-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <Image
          sizes="100vw"
          width={0}
          className="mb-4 h-auto w-full max-w-48 px-5 md:max-w-60"
          height={0}
          src="/logo.png"
          alt="Right Target Logo"
        />
        <h1 className="text-4xl font-bold text-primary">404 - Not Found</h1>
        <p className="text-xs text-muted-foreground">
          Oops! The page you are looking for might be in another universe.
        </p>
        <Link href="/">
          <Button>Go back home</Button>
        </Link>
      </motion.div>
    </div>
  );
}
