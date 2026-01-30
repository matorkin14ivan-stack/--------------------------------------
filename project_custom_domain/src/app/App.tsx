import { Hero } from "@/app/components/Hero";
import { Problems } from "@/app/components/Problems";
import { WhatWeDo } from "@/app/components/WhatWeDo";
import { Difference } from "@/app/components/Difference";
import { HowWeWork } from "@/app/components/HowWeWork";
import { Channels } from "@/app/components/Channels";
import { Results } from "@/app/components/Results";
import { CaseStudies } from "@/app/components/CaseStudies";
import { CTA } from "@/app/components/CTA";
import { FAQ } from "@/app/components/FAQ";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problems />
      <WhatWeDo />
      <Difference />
      <HowWeWork />
      <Channels />
      <Results />
      <CaseStudies />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
