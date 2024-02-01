import React from "react";
import { Badge } from "@/components/ui/badge";
import { TestimonialsCarousel } from "../../components/testimonials-carousel";
import { CleaningForm } from "../../components/form/cleaning-form";

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary py-4 text-center text-white">
        <p className="text-lg">
          Hear what our clients have to say about Right Target&apos;s top-notch
          cleaning services. Read their testimonials below.
        </p>
      </div>

      <div className="mx-auto w-full max-w-screen-xl px-4 py-12">
        <Badge className="text-white">Testimonials</Badge>
        <h2 className="text-3xl font-bold tracking-tight ">
          Our Clients <span className="text-white">Reviews</span>
        </h2>

        <TestimonialsCarousel />
      </div>

      <div className="my-16 w-full bg-primary px-4 py-12">
        <CleaningForm />
      </div>
    </div>
  );
}
