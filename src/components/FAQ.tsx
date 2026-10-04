"use client";

import Image from 'next/image';
import { useState } from 'react';

const faqItems = [
  { 
    id: 1, 
    question: "Is the service really ad-free?",
    answer: "Yes, our service is completely ad-free. We believe in providing a seamless viewing experience without any interruptions or pop-up ads."
  },
  { 
    id: 2, 
    question: "What quality can I expect?",
    answer: "We offer up to 4K HDR quality for most modern releases, and optimized 1080p high-definition for our extensive classic catalog."
  },
  { 
    id: 3, 
    question: "Do I need special software to watch?",
    answer: "Not at all. You can access our library directly through any modern web browser on your computer, tablet, or smartphone."
  },
  { 
    id: 4, 
    question: "How often is the library updated?",
    answer: "Our library is updated daily with fresh content, including the latest releases and curated classic masterpieces."
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative w-full py-12 md:py-24 min-h-0 md:min-h-[698px] bg-transparent overflow-hidden flex flex-col items-center z-0">
      {/* Background Image that starts at sideline and bleeds right */}
      <div 
        className="absolute inset-y-0 right-0 z-0 bg-white/10"
        style={{ left: 'max(calc(4100vw / 1440), calc(50% - 720px + 41px))' }}
      >
        <Image
          src="/images/faq_bg-52a204.png"
          alt="FAQ Background"
          fill
          className="object-cover object-left"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(206, 206, 206, 0.1) 2%, rgba(203, 203, 203, 0.2) 3%, rgba(167, 167, 167, 0.2) 49%, rgba(127, 127, 127, 0.2) 97%, rgba(125, 125, 125, 0.1) 99%, rgba(255, 255, 255, 0) 100%)',
          }}
        />
      </div>

      {/* Decorative Icon Large */}
      <div 
        className="absolute bottom-[-16px] z-0 w-[317px] h-[275px]"
        style={{ left: 'max(calc(4100vw / 1440), calc(50% - 720px + 41px))' }}
      >
        <Image
          src="/images/faq_icon_large.svg"
          alt="Decorative Icon"
          fill
          className="object-contain opacity-50 md:opacity-100"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1059px] pt-12 md:pt-[132px] px-6 md:px-0 mx-auto pb-12 md:pb-24">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-[84px]">
          <h2 className="text-white text-[32px] md:text-[54px] font-medium leading-tight mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-white text-sm md:text-base font-normal mt-3" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Everything you need to know about our digital gallery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col w-full">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="flex flex-col w-full border-t border-dashed border-white cursor-pointer hover:bg-white/5 transition-colors"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="group flex items-center justify-between w-full h-[86px]">
                <span className="text-white text-lg md:text-[20px] font-normal px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.question}
                </span>
                <button 
                  className={`flex-shrink-0 w-6 h-6 relative mr-4 transition-transform duration-300 ease-in-out ${openId === item.id ? 'rotate-180' : 'opacity-80 group-hover:opacity-100'}`} 
                  aria-label="Toggle Question"
                >
                  <Image
                    src="/images/accordion_icon.svg"
                    alt="Expand"
                    fill
                    className="object-contain"
                  />
                </button>
              </div>
              
              {/* Answer Box */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === item.id ? 'max-h-[200px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-4 text-white/80 text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
