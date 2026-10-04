import React from 'react';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="relative w-full max-w-[1288px] mx-auto py-14 px-4 xl:px-0">
      {/* Background Icon */}
      <div className="absolute top-0 right-0 -z-10 opacity-50 xl:opacity-100">
        <Image 
          src="/images/icon_bg.svg" 
          alt="" 
          width={444} 
          height={382} 
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-[32px] md:gap-[53px] w-full max-w-[1260px] mx-auto">
        {/* Left Side: Image */}
        <div className="w-full lg:w-[639px] flex-shrink-0">
          <Image
            src="/images/feature_main-6a132a.png"
            alt="Moviely Standard Interface"
            width={639}
            height={563}
            className="w-full h-[290px] md:h-auto rounded-[24px] object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-[32px] md:gap-[54px] w-full">
          {/* Title */}
          <h2 className="text-[30px] md:text-[54px] leading-[1.1] md:leading-[54px] text-[#2C3437] font-medium tracking-tight">
            <span className="font-sans font-medium font-inter">The</span>{' '}
            <span className="font-['Antique_Wonders'] text-transparent bg-clip-text bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A86FF]">Moviely</span>{' '}
            <span className="font-sans font-medium font-inter">Standard</span>
          </h2>

          {/* Features List */}
          <div className="flex flex-col gap-[24px]">
            {/* Feature 1 */}
            <div className="flex flex-col relative pl-[56px] min-h-[94px]">
              <div className="absolute left-0 top-[2px]">
                <Image
                  src="/images/icon_zero_intrusions.svg"
                  alt=""
                  width={30}
                  height={30}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[22.5px] leading-[31.5px] font-medium text-[#2C3437] font-inter">
                Zero Intrusions
              </h3>
              <p className="text-[18px] leading-[27px] text-[#596064] font-inter mt-1 max-w-[496px]">
                We believe in pure focus. No ads, no pop-ups, no tracking. Just you and the films you love.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col relative pl-[56px] min-h-[94px]">
              <div className="absolute left-0 top-[6px]">
                <Image
                  src="/images/icon_uncapped_velocity.svg"
                  alt=""
                  width={31}
                  height={24}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[22.5px] leading-[31.5px] font-medium text-[#2C3437] font-inter">
                Uncapped Velocity
              </h3>
              <p className="text-[18px] leading-[27px] text-[#596064] font-inter mt-1 max-w-[498px]">
                Our global CDN ensures your downloads saturate your connection, getting you to the experience faster.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col relative pl-[56px] min-h-[94px]">
              <div className="absolute left-0 top-[6px]">
                <Image
                  src="/images/icon_master_quality.svg"
                  alt=""
                  width={30}
                  height={24}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-[22.5px] leading-[31.5px] font-medium text-[#2C3437] font-inter">
                Master Quality
              </h3>
              <p className="text-[18px] leading-[27px] text-[#596064] font-inter mt-1 max-w-[512px]">
                Files sourced from original masters, preserving grain, dynamic range, and spatial audio exactly as intended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
