
import About from "@/components/About";
import GoverningBoard from "@/components/GoverningBoard";
import HeroSection from "@/components/HeroSection";
import InsuranceOperators from "@/components/InsuranceOperators";
import Services from "@/components/Services";
import CEOInsight from "@/components/CEOInsight";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function Home() {
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
