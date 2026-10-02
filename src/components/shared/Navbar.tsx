"use client";

import React from 'react';
import Link from "next/link";
import logo from '@/assests/logo.png';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar bg-black text-white px-4 md:px-8 py-3 md:py-4 flex items-center justify-between border-b border-zinc-800">
      
      {/* 1. LEFT: Mobile Hamburger + Logo */}
      <div className="navbar-start w-auto flex items-center gap-2">
        {/* Mobile Dropdown (Visible ONLY on phones < 768px) */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-zinc-300 p-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow-lg bg-zinc-900 border border-zinc-800 rounded-xl w-44 gap-1"
          >
            <li>
              <Link href="/" className="text-lime-400 font-semibold hover:bg-zinc-800">
                Workouts
              </Link>
            </li>
            <li>
              <Link href="/myPlan" className="text-zinc-300 hover:bg-zinc-800">
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 tracking-wider font-bold text-white text-base md:text-lg">
          <Image src={logo} alt="FITLOG Logo" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
          <span>FITLOG</span>
        </Link>
      </div>

      {/* 2. CENTER: Pill Navigation (Visible on both Tablet and Laptop) */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-1 text-sm font-medium gap-1">
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
      <div className="navbar-end w-auto flex items-center gap-3 md:gap-4">
        <div className="flex items-center gap-1.5 md:gap-2 text-xs font-semibold text-zinc-300">
          <span>Plan</span>
          <span className="badge border-none bg-lime-400 text-black font-bold h-5 w-5 rounded-full text-xs p-0 flex items-center justify-center">
            0
          </span>
        </div>

        <div className="flex items-center gap-1.5 md:gap-2 text-xs font-semibold text-zinc-300">
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