
import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <span className="loading loading-spinner loading-lg text-lime-400"></span>
      <p className="mt-4 text-md font-semibold tracking-wider text-zinc-400 uppercase animate-pulse">
        Workouts Loading...
      </p>
    </div>
  );
};

export default Loading;