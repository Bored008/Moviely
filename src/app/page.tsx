import Image from "next/image";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden flex flex-col items-center w-full">
      <div className="w-full relative">
        <Hero />
        
        <div className="relative w-full">
          {/* Sidelines overlay spanning from Gallery through FAQ */}
          <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
            {/* Top dashed horizontal line */}
            <div className="absolute top-0 w-full max-w-[1440px] left-1/2 -translate-x-1/2 border-t border-dashed border-[#336FD1]"></div>
            {/* Left solid vertical line */}
            <div 
              className="absolute top-0 bottom-0 w-px bg-[#336FD1]"
              style={{ left: 'max(calc(4100vw / 1440), calc(50% - 720px + 41px))' }}
            ></div>
          </div>
          <Gallery />
          <HowItWorks />
          <Features />
          <FAQ />
        </div>

        <Footer />
      </div>
    </main>
  );
}
