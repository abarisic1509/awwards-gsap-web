"use client";
import {
  BenefitsSection,
  FlavorsSection,
  HeroSection,
  MessageSection,
  NutritionSection,
} from "@/ui/sections";
import TestimonialsSection from "@/ui/sections/TestimonialsSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main className="flex-1 flex flex-col w-full" id="smooth-wrapper">
      <div className="flex-1" id="smooth-content">
        <HeroSection />

        <MessageSection />

        <FlavorsSection />

        <NutritionSection />
        <BenefitsSection />
        <TestimonialsSection />
      </div>
    </main>
  );
}
