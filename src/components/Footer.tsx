import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#336FD1] lg:h-[123px] relative overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto lg:h-full relative flex flex-col lg:block items-center py-10 lg:py-0 gap-6 lg:gap-0">
        {/* Logo */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[15px]">
          <span
            className="text-[64px] bg-clip-text text-transparent leading-none font-playfair"
            style={{
              fontFamily: '"Antique Wonders", var(--font-playfair), serif',
              backgroundImage:
                "linear-gradient(135deg, rgba(11, 19, 43, 1) 0%, rgba(28, 37, 65, 1) 50%, rgba(58, 134, 255, 1) 100%)",
            }}
          >
            Moviely
          </span>
        </div>

        {/* Links */}
        <div className="lg:absolute lg:left-[90px] lg:top-[54px] flex gap-[13px]">
          <Link href="/" className="text-black/75 font-['Geist'] text-[15px] leading-[1.65em]">
            Home
          </Link>
          <Link href="/create" className="text-black/75 font-['Geist'] text-[15px] leading-[1.65em]">
            Create
          </Link>
          <Link href="/contact" className="text-black/75 font-['Geist'] text-[15px] leading-[1.65em]">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="lg:absolute lg:right-[90px] lg:top-[46px] flex gap-[8px]">
          <Link href="#">
            <Image
              src="/images/x.png"
              alt="X"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/github.png"
              alt="GitHub"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/telegram.png"
              alt="Telegram"
              width={32}
              height={32}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Copyright */}
        <div className="lg:absolute lg:left-[605px] lg:top-[86px] flex items-center gap-[5px] mt-2 lg:mt-0">
          <Image
            src="/images/copyright.png"
            alt="Copyright"
            width={22}
            height={24}
            className="object-contain"
          />
          <span className="text-black/75 font-['Geist'] text-[15px] leading-[1.65em] text-center">
            2026 DocDesign. All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
