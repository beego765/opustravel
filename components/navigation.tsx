"use client";

import { useState } from "react";
import Link from "next/link";
import { PlaneLanding, Menu, X, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Globe2 className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-xl">OpusTravel</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/flights" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
              Flights
            </Link>
            <Link href="/hotels" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
              Hotels
            </Link>
            <Link href="/experiences" className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
              Experiences
            </Link>
            <ThemeToggle />
            <Button variant="default">Sign In</Button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-foreground/80 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/flights" className="text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium">
              Flights
            </Link>
            <Link href="/hotels" className="text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium">
              Hotels
            </Link>
            <Link href="/experiences" className="text-foreground/80 hover:text-foreground block px-3 py-2 rounded-md text-base font-medium">
              Experiences
            </Link>
            <div className="flex items-center px-3 py-2">
              <ThemeToggle />
            </div>
            <Button className="w-full" variant="default">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}