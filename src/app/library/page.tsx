import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-white text-[#0D0D0D] flex flex-col items-center w-full font-['Inter'] relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto relative flex flex-col pb-[100px]">
        
        {/* Navbar */}
        <nav className="relative z-50 flex items-center justify-between mx-10 mt-7 h-[65px] bg-transparent rounded-full">
          <div className="flex items-center gap-[40px]">
             <Link href="/" className="flex-shrink-0">
               <span
                  className="text-[24px] bg-clip-text text-transparent leading-none"
                  style={{
                    fontFamily: '"Antique Wonders", var(--font-playfair), serif',
                    backgroundImage: "linear-gradient(135deg, rgba(11, 19, 43, 1) 0%, rgba(28, 37, 65, 1) 50%, rgba(58, 134, 255, 1) 100%)",
                  }}
                >
                  Moviely
                </span>
             </Link>
             <div className="hidden lg:flex items-center gap-[24px] text-[16px] tracking-tight">
                <Link href="/" className="text-[#0D0D0D]/60 hover:text-[#0D0D0D]">Home</Link>
                <Link href="/#gallery" className="text-[#0D0D0D]/60 hover:text-[#0D0D0D]">Gallery</Link>
                <Link href="/library" className="text-[#5AB1E7] underline underline-offset-4 decoration-1">Library</Link>
             </div>
          </div>
          <div className="hidden lg:flex items-center gap-[24px]">
              <div className="flex items-center justify-between w-[333px] h-[49px] bg-[#2D2D2D] rounded-full px-5 cursor-text">
                <span className="text-white/60 text-[16px]">What are you lookin for ?</span>
                <Image src="/images/search.png" alt="Search" width={21} height={21} className="flex-shrink-0 invert" />
              </div>
              <button className="h-[49px] px-[20px] min-w-[118px] bg-[#0D0D0D] rounded-full flex items-center justify-center text-white text-[16px] font-normal hover:bg-gray-800 transition">
                Sign In
              </button>
              <button className="h-[49px] px-[20px] min-w-[118px] bg-[#EFEFEF]/36 backdrop-blur-md rounded-full flex items-center justify-center text-[#0D0D0D] text-[16px] font-normal shadow-[inset_0px_0px_11px_0px_rgba(242,242,242,1)] hover:bg-black/5 transition">
                Contact me
              </button>
          </div>
        </nav>
        
        {/* Hero Section */}
        <div className="relative w-full h-[752px] -mt-[93px]">
          <div className="absolute inset-0">
            <Image src="/images/hero-bg-genre.png" alt="Hero Background" fill className="object-cover lg:object-fill" priority />
            {/* Dark gradient on the left, fading to transparent on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-[#313131]/85 to-transparent mix-blend-normal"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/0 via-[#858585]/5 to-transparent"></div>
          </div>
          
          <div className="relative z-10 w-full h-full pt-[215px] px-10 flex flex-col text-white">
            <div className="relative w-[494px] h-[102px]">
              <Image src="/images/title-genre.png" alt="Mardaani 3" fill className="object-contain object-left" />
            </div>
            
            <div className="mt-8 max-w-[771px]">
              <p className="text-[24px] font-light leading-snug">
                Fearless cop Shivani Shivaji Roy returns to hunt down a ruthless criminal network responsible for kidnapping more than 90 girls across the country.
              </p>
              <div className="mt-4 flex items-center gap-3 text-[13.5px]">
                <span className="text-[#0D0D0D] bg-white/10 px-2 py-1 rounded">Action/Crime/Drama</span>
                <span className="text-[#0D0D0D] bg-white/10 px-2 py-1 rounded flex items-center justify-center">TV</span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-6">
               <div className="flex items-center h-[69px] bg-[#E2E2E2] rounded-[12px] px-[12px] gap-[24px] text-[#0D0D0D]">
                 <div className="flex flex-col">
                   <span className="text-[18px] text-[#0D0D0D]/75 font-medium mb-1">Rating</span>
                   <div className="flex items-center gap-2">
                     <Image src="/images/star.svg" alt="Star" width={22} height={21} />
                     <span className="text-[18px] font-bold font-['Manrope']">8</span>
                   </div>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[18px] text-[#0D0D0D]/75 font-medium mb-1">Release</span>
                   <span className="text-[18px] font-normal font-['Manrope']">2026</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[18px] text-[#0D0D0D]/75 font-medium mb-1">Quality</span>
                   <span className="text-[13.5px]">4K/FullHD/Hd</span>
                 </div>
               </div>
            </div>
            
            <div className="mt-[32px] flex items-center gap-[24px]">
               <button className="flex items-center justify-center h-[56px] px-[24px] bg-gradient-to-r from-[#2F80ED] to-[#2D9EE0] rounded-[12px] text-[20px] font-bold tracking-tight text-[#0D0D0D] hover:opacity-90 transition">
                 Watch Now
               </button>
               <button className="w-[39px] h-[39px] hover:scale-105 transition-transform">
                 <Image src="/images/bookmark.png" alt="Bookmark" width={39} height={39} className="object-contain" />
               </button>
            </div>
          </div>
          
          <div className="absolute right-[40px] bottom-[123px] flex items-center gap-[12px] z-10 text-white">
             <Image src="/images/arrow-left.svg" alt="Prev" width={24} height={24} className="opacity-75 hover:opacity-100 cursor-pointer invert brightness-0" />
             <div className="flex items-center gap-[4px] text-[16px]">
               <span className="text-[#0D0D0D]/75 font-semibold">2</span>
               <span className="text-[#0D0D0D]/75 font-semibold">/</span>
               <span className="text-white/75 font-semibold">10</span>
             </div>
             <Image src="/images/arrow-right.svg" alt="Next" width={24} height={24} className="opacity-75 hover:opacity-100 cursor-pointer invert brightness-0" />
          </div>
          
          {/* Share Box */}
          <div className="absolute left-[40px] -bottom-[59px] w-[calc(100%-80px)] max-w-[1351px] h-[119px] bg-[#0D0D0D] rounded-[12px] flex items-center px-[24px] z-20 text-white">
             <Image src="/images/avatar.png" alt="Avatar" width={58} height={58} className="rounded-full object-cover" />
             <div className="ml-[12px] flex flex-col">
               <p className="text-[16px] leading-[22px] tracking-tight font-semibold">
                 <span className="text-[#2D91E5]">Love this site?</span><br />
                 Share it and let others know!
               </p>
             </div>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="px-10 mt-[120px] flex w-full">
           <Link href="/dashboard" className="flex items-center justify-center h-[43px] px-[19px] bg-[#468FEE] rounded-[12px] text-[20px] tracking-tight text-[#0D0D0D] hover:opacity-90 transition font-normal">
             &larr; Back
           </Link>
        </div>
        
        {/* Genres Grid */}
        <div className="px-10 mt-[48px] flex flex-col w-full text-[#0D0D0D]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-[1340px] mb-[40px] gap-6 lg:gap-0">
            <h2 className="text-[32px] font-medium flex items-center gap-4">
              <span className="w-1 h-[24px] bg-[#4692EE]"></span>
              Genres
            </h2>
            
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-[40px]">
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-[24px] text-[16px]">
                 <span className="font-medium cursor-pointer hover:text-black">Comedy</span>
                 <span className="text-black relative cursor-pointer font-medium">
                   Action
                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[49px] h-[2px] bg-[#4692EE]"></div>
                 </span>
                 <span className="text-[#0D0D0D]/80 cursor-pointer hover:text-black">Horror</span>
                 <span className="text-[#0D0D0D]/80 cursor-pointer hover:text-black">Romance</span>
                 <span className="text-[#0D0D0D]/80 cursor-pointer hover:text-black">SciFi</span>
                 <span className="text-[#0D0D0D]/80 cursor-pointer hover:text-black">Drama</span>
                 <span className="text-[#0D0D0D]/80 cursor-pointer hover:text-black">Animations</span>
              </div>
              <button className="flex items-center gap-2 px-[18px] py-[8px] border border-black/20 rounded-full bg-[#D9D9D9] hover:bg-[#C9C9C9] transition whitespace-nowrap">
                 <span className="text-[16px] font-medium text-[#0D0D0D]">Filters</span>
                 <Image src="/images/chevron-down.svg" alt="Filter" width={12} height={12} className="opacity-75 invert brightness-0" />
              </button>
            </div>
          </div>
          
          {/* Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-[64px] gap-y-[48px] w-full max-w-[1340px]">
             {[
               { img: 'poster-dhurandhar-revenge.png', title: 'Dhurandhar: The Revenge (2026)' },
               { img: 'poster-jana-nayagan.png', title: 'Jana Nayagan (2026)' },
               { img: 'poster-romeo.png', title: "O' Romeo (2026)" },
               { img: 'poster-avatar.png', title: 'Avatar: Fire and Ash (2025)' },
               { img: 'poster-dhurandhar.png', title: 'Dhurandhar (2025)' },
               
               { img: 'poster-mrithyunjay.png', title: 'Mrithyunjay' },
               { img: 'poster-happy-patel.png', title: 'Happy Patel: Khatarnak Jasoos (2026)' },
               { img: 'poster-muthu.png', title: 'Muthu Alias Kaatam (Season 1) (2026)' },
               { img: 'poster-mardaani-3.png', title: 'Mardaani 3 (2026)' },
               { img: 'poster-ustaad.png', title: 'Ustaad Bhagat Singh (2026)' },
               
               { img: 'poster-border-2.png', title: 'Boreder 2 (2026)' },
               { img: 'poster-sardar.png', title: 'Sardar (2022)' },
               { img: 'poster-yevadu.png', title: 'Yevadu (2014)' },
               { img: 'poster-pushpa-2.png', title: 'Pushpa 2 (2024)' },
               { img: 'poster-kill.png', title: 'Kill (2024)' },
             ].map((item, idx) => (
               <div key={idx} className="w-[212px] flex flex-col cursor-pointer group">
                 <div className="relative w-[212px] h-[318px] rounded-[32px] overflow-hidden mb-[16px]">
                   <Image src={`/images/${item.img}`} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                 </div>
                 <span className="text-[16px] leading-[27px] font-medium">{item.title}</span>
               </div>
             ))}
          </div>
          
          {/* Pagination */}
          <div className="w-full flex justify-center mt-[64px] mb-[20px]">
             <div className="flex items-center gap-[8px] bg-transparent rounded-full px-[8px] py-[6px]">
                <button className="px-[15px] py-[6px] rounded-full bg-[#D9D9D9] hover:bg-[#C9C9C9] transition text-[16px] font-medium text-[#0D0D0D]">
                  Previous
                </button>
                <button className="px-[15px] py-[6px] rounded-full bg-[#D9D9D9] hover:bg-[#C9C9C9] transition text-[16px] font-medium text-[#0D0D0D]">
                  1
                </button>
                <button className="px-[15px] py-[6px] rounded-full bg-[#D9D9D9] hover:bg-[#C9C9C9] transition text-[16px] font-medium text-[#0D0D0D]">
                  2
                </button>
                <button className="px-[15px] py-[6px] rounded-full bg-[#D9D9D9] hover:bg-[#C9C9C9] transition text-[16px] font-medium text-[#0D0D0D]">
                  3
                </button>
                <button className="px-[15px] py-[6px] rounded-full bg-[#D9D9D9] hover:bg-[#C9C9C9] transition text-[16px] font-medium text-[#0D0D0D]">
                  ...
                </button>
                <button className="px-[15px] py-[6px] rounded-full bg-[#D9D9D9] hover:bg-[#C9C9C9] transition text-[16px] font-medium text-[#0D0D0D]">
                  100 +
                </button>
                <button className="px-[15px] py-[6px] rounded-full bg-[#D9D9D9] hover:bg-[#C9C9C9] transition text-[16px] font-medium text-[#0D0D0D]">
                  Next
                </button>
             </div>
          </div>
          
        </div>
        
      </div>
      <div className="w-full">
         <Footer />
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </main>
  );
}
