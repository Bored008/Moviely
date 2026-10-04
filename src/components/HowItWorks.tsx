import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden z-0">
      {/* Background Image that starts at sideline and bleeds right */}
      <div 
        className="absolute inset-y-0 right-0 -z-10 bg-black"
        style={{ left: 'max(calc(4100vw / 1440), calc(50% - 720px + 41px))' }}
      >
        <Image 
          src="/images/hiw-bg-2b7198.png"
          alt="How it works background"
          fill
          className="object-cover opacity-100 object-left"
        />
      </div>

      {/* Decorative Icon */}
      <div 
        className="absolute top-[-26px] pointer-events-none -z-10"
        style={{ left: 'max(calc(500vw / 1440), calc(50% - 720px + 5px))' }}
      >
        <Image 
          src="/images/hiw-large-icon.svg"
          alt="Decorative Background Icon"
          width={298}
          height={258}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[32px] md:text-6xl font-bold text-white mb-4 md:mb-6">How It works</h2>
          <p className="text-base md:text-xl text-white">Three steps to your personal cinematic sanctuary.</p>
        </div>

        <div className="relative">
          {/* Connecting Line - hidden on mobile */}
          <div className="hidden md:block absolute top-[36px] left-[15%] right-[15%] h-px bg-white -z-10" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="mb-6 md:mb-8 w-[72px] h-[72px] flex items-center justify-center relative">
                <Image 
                  src="/images/icon-search.svg"
                  alt="Search"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">1. Search</h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-[323px]">
                Discover masterpieces through our sophisticated editorial search and filtering system.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="mb-6 md:mb-8 w-[72px] h-[72px] flex items-center justify-center relative">
                <Image 
                  src="/images/icon-select.svg"
                  alt="Select"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">2. Select</h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-[353px]">
                Choose your preferred resolution and bit-rate for the ultimate viewing experience.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="mb-6 md:mb-8 w-[72px] h-[72px] flex items-center justify-center relative">
                <Image 
                  src="/images/icon-download.svg"
                  alt="Download"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">3. Download</h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-[344px]">
                High-speed direct access to clean files with no redirects or invasive pop-ups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
