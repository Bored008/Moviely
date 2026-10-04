import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Dashboard() {
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
            <Image src="/images/hero-bg-2.png" alt="Hero Background" fill className="object-cover lg:object-fill" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-[#313131]/75 to-transparent mix-blend-normal"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/0 via-[#858585]/5 to-transparent"></div>
          </div>
          
          <div className="relative z-10 w-full h-full pt-[215px] px-10 flex flex-col">
            <div className="relative w-[758px] h-[102px]">
              <Image src="/images/title.png" alt="Dhurandhar" fill className="object-contain object-left" />
            </div>
            
            <div className="mt-8 max-w-[771px]">
              <p className="text-[24px] font-light leading-snug">
                Hamza Ali Mazari, whose real identity is Jaskirat Singh Rangi, pursues his undercover operation within Pakistan's criminal world while tracking down Majo.
              </p>
              <div className="mt-4 flex items-center gap-3 text-[13.5px]">
                <span>Action/Crime/Thriller</span>
                <span className="w-5 h-5 flex items-center justify-center text-[13.5px]">TV</span>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-6">
               <div className="flex items-center h-[69px] bg-[#1D1D1D] rounded-[12px] px-[12px] gap-[24px]">
                 <div className="flex flex-col">
                   <span className="text-[18px] text-white/75 font-medium mb-1">Rating</span>
                   <div className="flex items-center gap-2">
                     <Image src="/images/star.svg" alt="Star" width={22} height={21} />
                     <span className="text-[18px] font-bold font-['Manrope']">8.9</span>
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
               <span>1</span>
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
        
        {/* Continue Watching */}
        <div className="px-10 mt-[120px] flex flex-col w-full">
          <h2 className="text-[32px] font-medium mb-[24px]">CONTINUE WATCHING</h2>
          <div className="w-[212px] cursor-pointer group">
            <div className="relative w-[212px] h-[318px] rounded-[32px] overflow-hidden mb-[16px]">
              <Image src="/images/poster-dhurandhar-revenge.png" alt="Dhurandhar" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <span className="text-[16px] leading-[27px] block truncate">Dhurandhar: The Revenge (2026)</span>
            <div className="relative w-full h-[4px] bg-white/20 rounded-full mt-2">
               <div className="absolute top-0 left-0 h-full w-[40%] bg-[#2F83EC] rounded-full"></div>
            </div>
            <div className="text-right mt-1 text-[12px] font-light text-white/70">2:05:23/4:02:25</div>
          </div>
        </div>
        
        {/* Trending */}
        <div className="px-10 mt-[80px] flex flex-col w-full">
          <div className="flex items-center justify-between w-[1340px] max-w-full mb-[24px]">
            <h2 className="text-[32px] font-medium flex flex-col gap-1 items-start">
              Trending
              <span className="w-1 h-[24px] bg-[#2F83EC] absolute left-10 mt-1"></span>
            </h2>
            <div className="flex gap-4">
               <button className="w-[40px] h-[40px] border border-white/50 rounded-full flex items-center justify-center bg-[#262626] hover:bg-white/10 transition">
                 <Image src="/images/arrow-left.svg" alt="Prev" width={24} height={24} />
               </button>
               <button className="w-[40px] h-[40px] border border-white/50 rounded-full flex items-center justify-center bg-[#262626] hover:bg-white/10 transition">
                 <Image src="/images/arrow-right.svg" alt="Next" width={24} height={24} />
               </button>
            </div>
          </div>
          
          <div className="flex gap-[64px] overflow-x-auto pb-4 hide-scrollbar">
             {[
               { img: 'poster-thrash.png', title: 'Thrash (2026)' },
               { img: 'poster-tu-yaa-main.png', title: 'Tu Yaa Main (2026)' },
               { img: 'poster-vadh-2.png', title: 'Vadh 2 (2026)' },
               { img: 'poster-mrithyunjay.png', title: 'Mrithyunjay' },
               { img: 'poster-dhurandhar.png', title: 'Dhurandhar (2025)' },
             ].map((item, idx) => (
               <div key={idx} className="w-[212px] flex-shrink-0 cursor-pointer group">
                 <div className="relative w-[212px] h-[318px] rounded-[32px] overflow-hidden mb-[16px]">
                   <Image src={`/images/${item.img}`} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                 </div>
                 <span className="text-[16px] leading-[27px] block truncate">{item.title}</span>
               </div>
             ))}
          </div>
        </div>
        
        {/* Genres */}
        <div className="px-10 mt-[80px] flex flex-col w-full">
          <div className="flex items-center justify-between w-[1340px] max-w-full mb-[24px]">
            <h2 className="text-[32px] font-medium flex flex-col gap-1 items-start relative">
              <span className="w-1 h-[24px] bg-[#2F83EC] absolute -left-[23px] top-1/2 -translate-y-1/2"></span>
              Genres
            </h2>
            
            <div className="flex items-center gap-[40px]">
              <div className="hidden lg:flex items-center gap-[24px] text-[16px]">
                 <span className="font-medium cursor-pointer hover:text-white">Comedy</span>
                 <span className="text-white relative cursor-pointer font-medium">
                   Action
                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-full h-[2px] bg-[#2F83EC]"></div>
                 </span>
                 <span className="text-white/80 cursor-pointer hover:text-white">Horror</span>
                 <span className="text-white/80 cursor-pointer hover:text-white">Romance</span>
                 <span className="text-white/80 cursor-pointer hover:text-white">SciFi</span>
                 <span className="text-white/80 cursor-pointer hover:text-white">Drama</span>
                 <span className="text-white/80 cursor-pointer hover:text-white">Animations</span>
              </div>
              <button className="flex items-center gap-2 px-[18px] py-[8px] border border-white/50 rounded-full bg-[#262626] hover:bg-white/10 transition">
                 <span className="text-[16px] font-medium">Filters</span>
                 <Image src="/images/chevron-down.svg" alt="Filter" width={12} height={12} className="opacity-50" />
              </button>
            </div>
          </div>
          
          <div className="flex gap-[64px] overflow-x-auto pb-4 hide-scrollbar">
             {[
               { img: 'poster-dhurandhar-revenge.png', title: 'Dhurandhar: The Revenge (2026)' },
               { img: 'poster-jana-nayagan.png', title: 'Jana Nayagan (2026)' },
               { img: 'poster-romeo.png', title: "O' Romeo (2026)" },
               { img: 'poster-avatar.png', title: 'Avatar: Fire and Ash (2025)' },
               { img: 'poster-dhurandhar.png', title: 'Dhurandhar (2025)' },
             ].map((item, idx) => (
               <div key={idx} className="w-[212px] flex-shrink-0 cursor-pointer group">
                 <div className="relative w-[212px] h-[318px] rounded-[32px] overflow-hidden mb-[16px]">
                   <Image src={`/images/${item.img}`} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                 </div>
                 <span className="text-[16px] leading-[27px] block truncate">{item.title}</span>
               </div>
             ))}
          </div>
          
          <div className="w-full flex justify-end mt-[40px]">
             <button className="flex items-center gap-3 px-[16px] py-[12px] bg-gradient-to-r from-[#2F80ED] to-[#2D9EE0] rounded-[12px] border border-white/50 hover:opacity-90 transition">
               <span className="text-[20px] font-bold tracking-tight">Show more</span>
               <Image src="/images/chevron-right.svg" alt="More" width={12} height={12} className="invert brightness-0" />
             </button>
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
