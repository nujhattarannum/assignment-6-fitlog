import React from 'react';
import Link from 'next/link';

const EmptyMyPlan = () => {
    return (
      <div className="w-full border border-dashed border-zinc-800 rounded-2xl py-20 px-4 flex flex-col items-center justify-center text-center bg-[#0c0d12]/40 mt-4">
        <h2 className="text-3xl font-black text-white uppercase tracking-wider">
          NOTHING HERE YET
        </h2>
        <p className="text-sm text-zinc-400 mt-2 mb-6">
          Browse the library and add a lift to get today moving.
        </p>
        <Link
          href="/#library"
          className="bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-xs px-6 py-3 rounded-full transition-all uppercase"
        >
          Go to workouts
        </Link>
      </div>
    );
};

export default EmptyMyPlan;