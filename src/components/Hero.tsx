import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full lg:min-h-[971px] overflow-visible bg-transparent z-0">
      {/* Background Graphics (Right side) - constrained to 1440px center */}
      <div className="hidden lg:block absolute inset-0 w-full max-w-[1440px] mx-auto pointer-events-none z-0">
        <div className="absolute top-[-148px] right-[-240px] w-[1250px] h-[971px]">
          <Image 
            src="/images/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto flex flex-col h-full px-4">
        {/* Navbar */}
        <nav className="mt-7 flex flex-col lg:flex-row items-start lg:items-center justify-between w-full bg-transparent min-h-[65px] gap-6 lg:gap-0">
          {/* Row 1 on Mobile: Logo & Account Actions */}
          <div className="flex items-center justify-between w-full lg:w-auto lg:justify-start lg:gap-12">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span 
                className="text-[32px] text-transparent bg-clip-text bg-[linear-gradient(135deg,#0B132B_0%,#1C2541_50%,#3A86FF_100%)] font-playfair"
                style={{ fontFamily: '"Antique Wonders", var(--font-playfair), serif' }}
              >
                Moviely
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-12">
              <Link href="/" className="text-[#2F85EB] underline underline-offset-8 decoration-2 text-[16px] font-medium tracking-tight">
                Home
              </Link>
              <Link href="/gallery" className="text-gray-500 text-[16px] hover:text-[#2F85EB] transition-colors tracking-tight">
                Gallery
              </Link>
              <Link href="/library" className="text-gray-500 text-[16px] hover:text-[#2F85EB] transition-colors tracking-tight">
                Library
              </Link>
            </div>

            {/* Mobile Account Actions */}
            <div className="flex lg:hidden items-center space-x-3">
              <button className="flex items-center justify-center px-4 h-[40px] bg-black text-white rounded-full text-[14px] tracking-tight hover:bg-gray-800 transition-colors shadow-sm">
                Sign In
              </button>
              <button className="flex items-center justify-center px-4 h-[40px] bg-white/30 backdrop-blur-md text-black border border-gray-300 rounded-full text-[14px] tracking-tight hover:bg-white/50 transition-colors shadow-sm">
                Contact me
              </button>
            </div>
          </div>

          <div className="hidden lg:block flex-1" />

          {/* Mobile Row 2: Links */}
          <div className="flex lg:hidden items-center space-x-6">
            <Link href="/" className="text-[#2F85EB] underline underline-offset-8 decoration-2 text-[16px] font-medium tracking-tight">
              Home
            </Link>
            <Link href="/gallery" className="text-gray-500 text-[16px] hover:text-[#2F85EB] transition-colors tracking-tight">
              Gallery
            </Link>
            <Link href="/library" className="text-gray-500 text-[16px] hover:text-[#2F85EB] transition-colors tracking-tight">
              Library
            </Link>
          </div>

          {/* Mobile Row 3 & Desktop Actions */}
          <div className="flex items-center space-x-6 w-full lg:w-auto">
            {/* Search Bar */}
            <div className="flex items-center justify-between w-full lg:w-[333px] h-[49px] bg-black rounded-full px-5 cursor-text shadow-sm">
              <span className="text-white text-[16px] tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">What are you lookin for ?</span>
              <Image src="/images/search.png" alt="Search" width={18} height={18} className="flex-shrink-0 ml-2" />
            </div>
            
            {/* Desktop Account Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="flex items-center justify-center w-[118px] h-[49px] bg-black text-white rounded-full text-[16px] tracking-tight hover:bg-gray-800 transition-colors shadow-sm">
                Sign In
              </button>
              <button className="flex items-center justify-center w-[118px] h-[49px] bg-white/30 backdrop-blur-md text-black border border-gray-300 rounded-full text-[16px] tracking-tight hover:bg-white/50 transition-colors shadow-sm">
                Contact me
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col mt-16 lg:mt-40 max-w-[600px] pb-4 lg:pb-[100px]">
          <h1 
            className="text-[58px] lg:text-[96px] leading-[1.0] text-transparent bg-clip-text mb-6 tracking-tight"
            style={{ 
              fontFamily: '"Bauhaus 93", sans-serif',
              backgroundImage: 'linear-gradient(135deg, rgba(11, 19, 43, 1) 0%, rgba(28, 37, 65, 1) 34%, rgba(58, 134, 255, 1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Tap.<br/>
            Download.<br/>
            Enjoy.
          </h1>
          <p className="text-black text-[16px] font-medium mb-8 lg:mb-12 max-w-[420px] leading-relaxed">
            Each resolution, one optimized fast link for instant downloads for free.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center justify-center space-x-2 w-[191px] h-[62px] bg-gradient-to-r from-[#2F80ED] to-[#2D9EE0] rounded-xl text-white text-[16px] font-medium tracking-tight hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30">
              <Image src="/images/film-reel.png" alt="Film Reel" width={20} height={20} />
              <span>Grab Your Movie</span>
            </button>
            <button className="flex items-center justify-center space-x-2 w-[170px] h-[62px] text-[#3A86FF] bg-white border border-gray-200 rounded-xl text-[16px] font-medium tracking-tight shadow-sm hover:bg-blue-50/50 transition-colors">
              <Image src="/images/play-button.png" alt="Play" width={20} height={20} />
              <span>View Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
