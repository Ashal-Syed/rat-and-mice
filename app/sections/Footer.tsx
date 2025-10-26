import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full red-gradient text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">


        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center">

              <Image src="/Logo/logo.svg" alt="Logo" width={40} height={40} />
            </div>
            <h1 className="font-bold text-lg">Rat and Mice Control</h1>
          </div>
          <p className="text-sm text-white/80">Keeping your home pest-free, safely and professionally.</p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li><Link href="#hero" className="hover:text-gray-200">Home</Link></li>
          <li><Link href="#about" className="hover:text-gray-200">About</Link></li>
          <li><Link href="#services" className="hover:text-gray-200">Services</Link></li>
          <li><Link href="#pricing" className="hover:text-gray-200">Pricing</Link></li>
          <li><Link href="#contact" className="hover:text-gray-200">Contact</Link></li>
        </ul>


        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="font-semibold">Call us now</p>
          <a
            href="tel:+61449924428"
            className="bg-white text-[#a12727] font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            +61 422 383 777
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-5 text-center text-xs text-white">
        Designed and developed by <Link href='https://www.webifex.io' className="font-semibold text-green-400">Webifex</Link>
      </div>
    </footer>
  );
};

export default Footer;
