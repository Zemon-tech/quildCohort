"use client"

import * as React from "react";
import Navbar from "./components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import UseCases from "../components/sections/UseCases";
import HowItWorks from "../components/sections/HowItWorks";
import Benefits from "../components/sections/Benefits";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black text-zinc-200">
      <div className="pointer-events-none fixed inset-x-0 top-6 z-50 flex justify-center">
        <Navbar />
      </div>

      <main className="w-full">
        <Hero />
        <Features />
        <UseCases />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />

        <div className="mt-25" />
        <CTA />

        <div className="mt-20" />
        <Footer />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Quild Cohort 2.0",
            "description": "Advanced Engineering Fellowship guided by clarity and disciplined intelligence.",
            "provider": {
              "@type": "Organization",
              "name": "Quild",
              "sameAs": "https://quild.in"
            },
            "offers": {
              "@type": "Offer",
              "category": "Fellowship"
            }
          })
        }}
      />
    </div>
  );
}
