import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoCloud } from "@/components/landing/LogoCloud";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Gallery } from "@/components/landing/Gallery";
import { CostOfInaction } from "@/components/landing/CostOfInaction";
import { Testimonials } from "@/components/landing/Testimonials";
import { UrgencyCTA } from "@/components/landing/UrgencyCTA";
import { SkepticCTA } from "@/components/landing/SkepticCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111] text-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Problem />
      <HowItWorks />
      <Features />
      <Gallery />
      <CostOfInaction />
      <Testimonials />
      <UrgencyCTA />
      <SkepticCTA />
      <Footer />
    </main>
  );
}
