"use client";

import About from "@/components/About";
import GoverningBoard from "@/components/GoverningBoard";
import HeroSection from "@/components/HeroSection";
import InsuranceOperators from "@/components/InsuranceOperators";
import Services from "@/components/Services";
import CEOInsight from "@/components/CEOInsight";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import AOS from "aos";

export default function Home() {

  useEffect( () => {
    const initAOS =async ()=> {
      await import ('aos');
      AOS.init({
        duration: 1000, 
        once: true,
        easing: 'ease',
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div>
      <main>
        <HeroSection />
        <Services />
        <About />
        <CEOInsight />
        <InsuranceOperators />
        <GoverningBoard />
        <ContactSection />
      </main>
    </div>
  );
}
