import React from 'react';
import Image from "next/image";
import logo from "@/assests/logo.png";

const Footer = () => {
    return (
       <footer className="footer bg-black text-zinc-400 border-t border-zinc-800 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left: Brand Logo and Title */}
      <div className="flex items-center gap-2">
        <Image src={logo} alt="FITLOG Logo" width={24} height={24} />
        <span className="font-bold tracking-wider text-white  text-base">
          FITLOG
        </span>
      </div>

      {/* Right: Copyright text */}
      <div className="text-xs text-zinc-500">
        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
    );
};

export default Footer;