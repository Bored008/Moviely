import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-16 lg:py-24 flex flex-col items-center bg-transparent">


      <div className="relative z-10 flex flex-col items-center w-full max-w-[377px] lg:max-w-[1260px] mx-auto px-4 lg:mt-12 lg:mb-12">
        
        {/* Mobile Gallery (Arc) */}
        <div className="flex lg:hidden relative w-[377px] h-[222px] justify-center items-center mb-8">
          
          {/* Outermost Left */}
          <div className="absolute top-[85px] left-[9px] w-[86px] h-[109px] rounded-2xl overflow-hidden blur-[1px] border border-white z-10 opacity-80 -rotate-[15deg]">
            <Image src="/images/gallery_1.png" alt="Movie 1" fill className="object-cover" />
          </div>

          {/* Outermost Right */}
          <div className="absolute top-[85px] left-[285px] w-[86px] h-[109px] rounded-2xl overflow-hidden blur-[1px] border border-white z-10 opacity-80 rotate-[15deg]">
            <Image src="/images/gallery_2.png" alt="Movie 2" fill className="object-cover" />
          </div>

          {/* Mid Left */}
          <div className="absolute top-[55px] left-[33px] w-[115px] h-[146px] rounded-2xl overflow-hidden blur-[0.5px] border border-white z-20 opacity-90 -rotate-[10deg]">
            <Image src="/images/gallery_3.png" alt="Movie 3" fill className="object-cover" />
          </div>

          {/* Mid Right */}
          <div className="absolute top-[60px] left-[241px] w-[114px] h-[140px] rounded-2xl overflow-hidden blur-[0.5px] border border-white z-20 opacity-90 rotate-[10deg]">
            <Image src="/images/gallery_4.png" alt="Movie 4" fill className="object-cover" />
          </div>

          {/* Inner Left */}
          <div className="absolute top-[14px] left-[69px] w-[148px] h-[188px] rounded-2xl overflow-hidden border border-white z-30 shadow-md -rotate-[5deg]">
            <Image src="/images/gallery_6.png" alt="Movie 6" fill className="object-cover" />
          </div>

          {/* Inner Right */}
          <div className="absolute top-[15px] left-[193px] w-[147px] h-[187px] rounded-2xl overflow-hidden border border-white z-30 shadow-md rotate-[5deg]">
            <Image src="/images/gallery_5.png" alt="Movie 5" fill className="object-cover" />
          </div>

          {/* Center */}
          <div className="absolute top-[0px] left-[123px] w-[136px] h-[204px] rounded-2xl overflow-hidden border border-white z-40 shadow-lg">
            <Image src="/images/gallery_7.png" alt="Movie 7" fill className="object-cover" />
          </div>
        </div>

        {/* Desktop Gallery ARC */}
        <div className="hidden lg:flex relative w-full max-w-[1196px] h-[473px] justify-center items-center scale-100 origin-top">
          
          {/* Image 8: Outermost Left */}
          <div className="absolute top-[238px] left-[0px] w-[185px] h-[235px] rounded-[32px] overflow-hidden blur-[2px] transition-transform hover:scale-105 hover:blur-none hover:z-50 opacity-80 hover:opacity-100 z-10 -rotate-[15deg]">
            <Image src="/images/gallery_1.png" alt="Movie 1" fill className="object-cover" />
          </div>

          {/* Image 3: Mid Left */}
          <div className="absolute top-[154px] left-[82px] w-[249px] h-[316px] rounded-[32px] overflow-hidden blur-[1.5px] border-2 border-white transition-transform hover:scale-105 hover:blur-none hover:z-50 opacity-90 hover:opacity-100 z-20 -rotate-[10deg]">
            <Image src="/images/gallery_3.png" alt="Movie 3" fill className="object-cover" />
          </div>

          {/* Image 11: Inner Left */}
          <div className="absolute top-[72px] left-[228px] w-[315px] h-[398px] rounded-[32px] overflow-hidden border-2 border-white transition-transform hover:scale-105 hover:z-50 shadow-xl z-30 -rotate-[5deg]">
            <Image src="/images/gallery_6.png" alt="Movie 6" fill className="object-cover" />
          </div>

          {/* Image 13 (Center): Highest and most prominent */}
          <div className="absolute top-[0px] left-[465px] w-[286px] h-[430px] rounded-[32px] overflow-hidden border-2 border-white transition-transform hover:scale-110 hover:z-50 shadow-2xl z-40">
            <Image src="/images/gallery_7.png" alt="Movie 7" fill className="object-cover" />
          </div>

          {/* Image 4: Inner Right */}
          <div className="absolute top-[74px] left-[673px] w-[312px] h-[396px] rounded-[32px] overflow-hidden border-2 border-white transition-transform hover:scale-105 hover:z-50 shadow-xl z-30 rotate-[5deg]">
            <Image src="/images/gallery_5.png" alt="Movie 5" fill className="object-cover" />
          </div>

          {/* Image 9: Mid Right */}
          <div className="absolute top-[166px] left-[869px] w-[246px] h-[304px] rounded-[32px] overflow-hidden blur-[1.5px] border-2 border-white transition-transform hover:scale-105 hover:blur-none hover:z-50 opacity-90 hover:opacity-100 z-20 rotate-[10deg]">
            <Image src="/images/gallery_4.png" alt="Movie 4" fill className="object-cover" />
          </div>

          {/* Image 5: Outermost Right */}
          <div className="absolute top-[234px] left-[1010px] w-[186px] h-[236px] rounded-[32px] overflow-hidden blur-[2px] transition-transform hover:scale-105 hover:blur-none hover:z-50 opacity-80 hover:opacity-100 z-10 rotate-[15deg]">
            <Image src="/images/gallery_2.png" alt="Movie 2" fill className="object-cover" />
          </div>
          
        </div>

        {/* Action Area */}
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-3">
          {/* Mobile Camera Icon */}
          <div className="relative w-[38px] h-[38px] lg:hidden flex-shrink-0">
            <Image src="/images/camera_icon.svg" alt="Camera" fill className="object-contain" />
          </div>
          {/* Action Button */}
          <button 
            className="w-[172px] h-[52px] lg:w-[204px] lg:h-[66px] rounded-xl text-white font-bold text-[14px] lg:text-[20px] tracking-tight flex items-center justify-center hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(90deg, #2F80ED 0%, #2D9EE0 100%)' }}
          >
            Choose Movie
          </button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
