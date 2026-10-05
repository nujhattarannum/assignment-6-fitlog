
'use client';

import React from 'react';
import logo from '@/assests/banner.png';
import Image from "next/image";

const Banner = () => {
  return (
    <div className="p-4 md:p-8 bg-black">
      {/* DaisyUI Hero Card */}
      <div className="hero bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-6 md:p-12">
        <div className="hero-content flex-col lg:flex-row justify-between items-center w-full gap-8">

          {/* Left Text Content */}
          <div className="max-w-xl flex flex-col items-start gap-4">

            {/* Tagline */}
            <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">
              WORKOUT LIBRARY
            </span>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-none uppercase">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-400 text-sm md:text-base font-medium max-w-lg mt-2">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Anchor Link CTA Button */}
            <a
              href="#library"
              className="btn bg-lime-400 hover:bg-lime-500 text-black font-extrabold border-none uppercase px-6 py-3 rounded-xl mt-4"
            >
              BROWSE WORKOUTS

              {/* Down Arrow Icon */}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>

          </div>

          {/* Right Hero Image */}
          <div className="relative w-full max-w-md lg:max-w-xl h-[300px] sm:h-[350px] lg:h-[400px] flex justify-center lg:justify-end">
            <Image
              src={logo}
              alt="Gym Workout Machine Illustration"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
