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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight uppercase">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-zinc-400 text-sm md:text-base font-medium max-w-lg mt-2">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            {/* DaisyUI CTA Button */}
            <button className="btn bg-lime-400 hover:bg-lime-500 text-black font-extrabold border-none uppercase px-6 py-3 rounded-xl mt-4">
              BROWSE WORKOUTS
            </button>
          </div>

          {/* Right Hero Image */}
          <div className="relative w-full max-w-sm lg:max-w-md flex justify-center lg:justify-end">
            <Image
              src={logo}
              alt="Gym Workout Machine Illustration"
              className="object-contain max-h-[350px] w-auto drop-shadow-2xl"
              priority
            />
          </div>

        </div>
      </div>
    </div>
    );
};

export default Banner;