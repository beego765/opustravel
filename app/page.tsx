import { Globe } from "@/components/globe";
import { Button } from "@/components/ui/button";
import { PlaneLanding, Hotel, Compass } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Globe />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Explore Britain and Beyond
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Your premium travel companion for flights, hotels, and unique experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Book a Flight
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Plan Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Premium Travel Services</h2>
            <p className="text-muted-foreground">
              Experience luxury travel with our comprehensive services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card">
              <PlaneLanding className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Flight Booking</h3>
              <p className="text-muted-foreground">
                Real-time flight tracking and booking with premium airlines
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <Hotel className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Luxury Stays</h3>
              <p className="text-muted-foreground">
                Handpicked hotels and accommodations across the globe
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card">
              <Compass className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Unique Experiences</h3>
              <p className="text-muted-foreground">
                Curated experiences and guided tours in every destination
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}