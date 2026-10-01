import React from 'react';
import Link from "next/link";
import logo from '@/assests/logo.png';
import Image from "next/image";

const Navbar = () => {
    return (
      <nav className="navbar bg-black text-white px-8 py-4 flex items-center justify-between border-b border-zinc-800">
      {/* 1. LEFT: Logo */}
      <div className="navbar-start w-auto">
        <Link href="/" className="flex items-center gap-2 tracking-wider font-bold text-white">
       
     <Image src = {logo} alt="FITLOG Logo" width={24} height={24}/>
          <span>FITLOG</span>
        </Link>
      </div>

      {/* 2. CENTER: Pill Navigation */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal p-1  text-sm font-medium">
          <li>
            <Link
              href="/"
              className="bg-lime-950 text-lime-400 hover:bg-lime-900/50 hover:text-lime-300 rounded-full px-5 py-1.5 transition-all"
            >
              Workouts
            </Link>
          </li>
          <li>
            <Link
              href="/myPlan"
              className="text-zinc-400 hover:text-white rounded-full px-5 py-1.5 transition-all"
            >
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      {/* 3. RIGHT: Counters */}
      <div className="navbar-end w-auto flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
          <span>Plan</span>
          <span className="badge border-none bg-lime-400 text-black font-bold h-5 w-5 rounded-full text-xs p-0 flex items-center justify-center">
            0
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
          <span>Saved</span>
          <span className="badge border border-zinc-700 bg-zinc-900 text-zinc-300 font-bold h-5 w-5 rounded-full text-xs p-0 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;