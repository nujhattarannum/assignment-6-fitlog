import { IWorkout } from '@/types/workoutTypes';
import React from 'react';
import Image from "next/image";

 interface IdetailsProps{
    params: Promise<{
        id : string;
    }>;
}

const getWorkouts = async()=> {
    const response = await fetch(' https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data ;
}

const page = async ({params}:IdetailsProps) => {
    const { id} = await params;

    const workoutData = await getWorkouts();

    const workout = workoutData.find (
        (workout:IWorkout) => String(workout.id) === String(id) 
    ) as IWorkout;
    return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Image Card */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* RIGHT COLUMN: Details & Specs */}
        <div className="flex flex-col gap-6">
          
          {/* Header Title & Description */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase text-white mb-3">
              {workout.name}
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {workout.description}
            </p>
          </div>

          {/* Category Badges (DaisyUI) */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups?.map((group: string, idx: number)=> (
              <span
                key={idx}
                className="badge badge-lg border-none bg-[#ccff00] text-black font-extrabold text-xs tracking-wide rounded-full px-4 py-3 uppercase"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Specs Panel */}
          <div className="bg-[#16181d] border border-zinc-800/80 rounded-2xl p-5 space-y-3.5 text-xs">
            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">Equipment</span>
              <span className="text-zinc-200 font-medium">{workout.equipment}</span>
            </div>
            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">Difficulty</span>
              <span className="text-zinc-200 font-medium">{workout.difficulty}</span>
            </div>
            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">Sets</span>
              <span className="text-zinc-200 font-medium">{workout.sets}</span>
            </div>
            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">Reps</span>
              <span className="text-zinc-200 font-medium">{workout.reps}</span>
            </div>
            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">Duration</span>
              <span className="text-zinc-200 font-medium">{workout.duration} min</span>
            </div>
            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">Calories</span>
              <span className="text-zinc-200 font-medium">{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">Rating</span>
              <span className="text-zinc-200 font-medium">{workout.rating}</span>
            </div>
          </div>

          {/* Instructions List */}
          <div>
            <h2 className="text-xl font-extrabold uppercase tracking-widest text-zinc-200 mb-3">
              Instructions
            </h2>
            <ol className="space-y-2.5 text-sm text-zinc-400 list-decimal list-inside leading-relaxed">
              {workout.instructions?.map((step, idx) => (
                <li key={idx}>
                  <span className="text-zinc-300 ml-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons (DaisyUI) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="btn border-none bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl px-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Add to today&apos;s plan
            </button>

            <button className="btn btn-outline border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-xl px-6">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              Save for later
            </button>
          </div>

        </div>

      </div>
    </div>
    );
};

export default page;