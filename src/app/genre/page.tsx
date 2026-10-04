import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function GenrePage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center w-full font-['Inter'] relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto relative flex flex-col pb-[100px]">
        
        {/* Navbar */}
        <nav className="relative z-50 flex items-center justify-between mx-10 mt-7 h-[65px] bg-transparent rounded-full">
          <div className="flex items-center gap-[40px]">
             <Link href="/" className="flex-shrink-0">
               <span
                  className="text-[24px] bg-clip-text text-transparent leading-none"
                  style={{
                    fontFamily: '"Antique Wonders", var(--font-playfair), serif',
                    backgroundImage: "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(131, 153, 222, 1) 50%, rgba(58, 134, 255, 1) 100%)",
                  }}
                >
                  Moviely
                </span>
             </Link>
             <div className="hidden lg:flex items-center gap-[24px] text-[16px] tracking-tight">
                <Link href="/" className="text-white/60 hover:text-white">Home</Link>
                <Link href="/#gallery" className="text-[#669FC3] underline underline-offset-4 decoration-1">Gallery</Link>
                <Link href="/library" className="text-white/60 hover:text-white">Library</Link>
             </div>
          </div>
          <div className="hidden lg:flex items-center gap-[24px]">
              <div className="flex items-center justify-between w-[333px] h-[49px] bg-[#202020] rounded-full px-5 cursor-text">
                <span className="text-white/60 text-[16px]">What are you lookin for ?</span>
                <Image src="/images/search.png" alt="Search" width={21} height={21} className="flex-shrink-0" />
              </div>
              <button className="h-[49px] px-[20px] min-w-[118px] bg-black rounded-full flex items-center justify-center text-white text-[16px] font-normal hover:bg-gray-800 transition">
                Sign In
              </button>
              <button className="h-[49px] px-[20px] min-w-[118px] bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-black text-[16px] font-normal shadow-[inset_0px_0px_11px_0px_rgba(242,242,242,1)] hover:bg-white/40 transition">
                Contact me
              </button>
          </div>
        </nav>
        
        {/* Hero Section */}
        <div className="relative w-full h-[752px] -mt-[93px]">
          <div className="absolute inset-0">
            <Image src="/images/hero-bg-genre.png" alt="Hero Background" fill className="object-cover lg:object-fill" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-[#313131]/85 to-transparent mix-blend-normal"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/0 via-[#858585]/5 to-transparent"></div>
          </div>
          
          <div className="relative z-10 w-full h-full pt-[215px] px-10 flex flex-col">
            <div className="relative w-[494px] h-[102px]">
              <Image src="/images/title-genre.png" alt="Mardaani 3" fill className="object-contain object-left" />
            </div>
            
            <div className="mt-8 max-w-[771px]">
              <p className="text-[24px] font-light leading-snug">
                Fearless cop Shivani Shivaji Roy returns to hunt down a ruthless criminal network responsible for kidnapping more than 90 girls across the country.
              </p>
              <div className="mt-4 flex items-center gap-3 text-[13.5px]">
                <span>Action/Crime/Drama</span>
                <span className="w-5 h-5 flex items-center justify-center text-[13.5px]">TV</span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-6">
               <div className="flex items-center h-[69px] bg-[#1D1D1D] rounded-[12px] px-[12px] gap-[24px]">
                 <div className="flex flex-col">
                   <span className="text-[18px] text-white/75 font-medium mb-1">Rating</span>
                   <div className="flex items-center gap-2">
                     <Image src="/images/star.svg" alt="Star" width={22} height={21} />
                     <span className="text-[18px] font-bold font-['Manrope']">8</span>
                   </div>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[18px] text-white/75 font-medium mb-1">Release</span>
                   <span className="text-[18px] font-normal font-['Manrope']">2026</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[18px] text-white/75 font-medium mb-1">Quality</span>
                   <span className="text-[13.5px]">4K/FullHD/Hd</span>
                 </div>
               </div>
            </div>
            
            <div className="mt-[32px] flex items-center gap-[24px]">
               <button className="flex items-center justify-center h-[56px] px-[24px] bg-gradient-to-r from-[#2F80ED] to-[#2D9EE0] rounded-[12px] text-[20px] font-bold tracking-tight text-white hover:opacity-90 transition">
                 Watch Now
               </button>
               <button className="w-[39px] h-[39px] hover:scale-105 transition-transform">
                 <Image src="/images/bookmark.png" alt="Bookmark" width={39} height={39} className="object-contain" />
               </button>
            </div>
          </div>
          
          <div className="absolute right-[40px] bottom-[123px] flex items-center gap-[12px] z-10">
             <Image src="/images/arrow-left.svg" alt="Prev" width={24} height={24} className="opacity-75 hover:opacity-100 cursor-pointer" />
             <div className="flex items-center gap-[4px] text-[16px]">
               <span className="text-white/75">2</span>
               <span className="text-white/75">/</span>
               <span className="text-white/75">10</span>
             </div>
             <Image src="/images/arrow-right.svg" alt="Next" width={24} height={24} className="opacity-75 hover:opacity-100 cursor-pointer" />
          </div>
          
          {/* Share Box */}
          <div className="absolute left-[40px] -bottom-[59px] w-[calc(100%-80px)] max-w-[1351px] h-[119px] bg-[#11161B] rounded-[12px] flex items-center px-[24px] z-20">
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
           <Link href="/dashboard" className="flex items-center justify-center h-[43px] px-[19px] bg-[#2F82EC] rounded-[12px] text-[20px] tracking-tight hover:opacity-90 transition font-normal">
             &larr; Back
           </Link>
        </div>
        
        {/* Genres Grid */}
        <div className="px-10 mt-[48px] flex flex-col w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-[1340px] mb-[40px] gap-6 lg:gap-0">
            <h2 className="text-[32px] font-medium flex items-center gap-4">
              <span className="w-1 h-[24px] bg-[#2F83EC]"></span>
              Genres
            </h2>
            
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-[40px]">
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-[24px] text-[16px]">
                 <span className="font-medium cursor-pointer hover:text-white">Comedy</span>
                 <span className="text-white relative cursor-pointer font-medium">
                   Action
                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[49px] h-[2px] bg-[#2F83EC]"></div>
                 </span>
                 <span className="text-white/80 cursor-pointer hover:text-white">Horror</span>
                 <span className="text-white/80 cursor-pointer hover:text-white">Romance</span>
                 <span className="text-white/80 cursor-pointer hover:text-white">SciFi</span>
                 <span className="text-white/80 cursor-pointer hover:text-white">Drama</span>
                 <span className="text-white/80 cursor-pointer hover:text-white">Animations</span>
              </div>
              <button className="flex items-center gap-2 px-[18px] py-[8px] border border-white/50 rounded-full bg-[#262626] hover:bg-white/10 transition whitespace-nowrap">
                 <span className="text-[16px] font-medium">Filters</span>
                 <Image src="/images/chevron-down.svg" alt="Filter" width={12} height={12} className="opacity-50" />
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
                 <span className="text-[16px] leading-[27px]">{item.title}</span>
               </div>
             ))}
          </div>
          
          {/* Pagination */}
          <div className="w-full flex justify-center mt-[64px] mb-[20px]">
             <div className="flex items-center gap-[8px] bg-transparent rounded-full px-[8px] py-[6px]">
                <button className="px-[15px] py-[6px] border border-white/50 rounded-full bg-[#262626] hover:bg-white/10 transition text-[16px] font-medium text-white/75">
                  Previous
                </button>
                <button className="px-[15px] py-[6px] border border-white/50 rounded-full bg-[#262626] hover:bg-white/10 transition text-[16px] font-medium">
                  1
                </button>
                <button className="px-[15px] py-[6px] border border-white/50 rounded-full bg-[#262626] hover:bg-white/10 transition text-[16px] font-medium">
                  2
                </button>
                <button className="px-[15px] py-[6px] border border-white/50 rounded-full bg-[#262626] hover:bg-white/10 transition text-[16px] font-medium">
                  3
                </button>
                <button className="px-[15px] py-[6px] border border-white/50 rounded-full bg-[#262626] hover:bg-white/10 transition text-[16px] font-medium">
                  ...
                </button>
                <button className="px-[15px] py-[6px] border border-white/50 rounded-full bg-[#262626] hover:bg-white/10 transition text-[16px] font-medium">
                  100 +
                </button>
                <button className="px-[15px] py-[6px] border border-white/50 rounded-full bg-[#262626] hover:bg-white/10 transition text-[16px] font-medium text-white/75">
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
