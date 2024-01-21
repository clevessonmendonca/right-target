import {
  Building,
  CalendarDaysIcon,
  CombineIcon,
  FastForward,
  PartyPopperIcon,
  SparklesIcon,
  UserCheck,
} from "lucide-react";
import { HeroSection } from "./components/hero-section";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <div className="mx-auto w-full max-w-screen-md px-4">
        <Card className="flex flex-wrap items-center justify-around gap-8 px-4 py-6 text-sm">
          <span className="flex items-center gap-2">
            <FastForward className="text-primary" /> Quick Services
          </span>
          <span className="flex items-center gap-2">
            <SparklesIcon className="text-primary" /> Deep Clean Solutions
          </span>
          <span className="flex items-center gap-2">
            <UserCheck className="text-primary" /> Personalized Care
          </span>
        </Card>
      </div>

      <div className="mx-auto mt-28 flex flex-col items-center">
        <h2 className="text-2xl font-bold tracking-tight ">Our Services</h2>

        <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-12">
          <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
            <CalendarDaysIcon />
            <h3 className="mt-2 text-xl font-medium">
              Regular and Recurring Cleaning
            </h3>
            <p className="mt-4 text-sm">
              Enjoy the convenience of regular and recurring cleaning services.
              We tailor our cleaning schedules to match your preferences and
              keep your home consistently clean.
            </p>
          </Card>
          <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
            <SparklesIcon />
            <h3 className="mt-2 text-xl font-medium">Deep Clean</h3>
            <p className="mt-4 text-sm">
              Our deep residential cleaning service ensures a thorough and
              comprehensive cleaning of your home, leaving every corner spotless
              and refreshed.
            </p>
          </Card>
          <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
            <PartyPopperIcon />
            <h3 className="mt-2 text-xl font-medium">Post-Event Cleaning</h3>
            <p className="mt-4 text-sm">
              Hosting an event? Let us take care of the aftermath. Our
              post-event cleaning service ensures your space is restored to its
              pristine condition after the festivities.
            </p>
          </Card>
          <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
            <Building />
            <h3 className="mt-2 text-xl font-medium">
              Organizational Services
            </h3>
            <p className="mt-4 text-sm">
              Beyond cleaning, we offer organizational services to declutter and
              enhance the overall orderliness of your living spaces.
            </p>
          </Card>
          <Card className="flex h-72 max-w-sm flex-col items-center gap-2 px-8 py-6 text-center">
            <CombineIcon />
            <h3 className="mt-2 text-xl font-medium">
              Customized Cleaning Solutions
            </h3>
            <p className="mt-4 text-sm">
              Tailored to your unique needs, our customized cleaning solutions
              offer flexibility and personalized care for your home.
            </p>
          </Card>
        </div>
      </div>

      {/* <div>
        <div>
          <Image
            sizes="100vw"
            width={0}
            className="h-auto w-full px-5"
            height={0}
            src="/women-cleaning.jpg"
            alt=""
          />

          <div>
            <span></span>
            <h2></h2>
          </div>
        </div>
      </div> */}
    </div>
  );
}
