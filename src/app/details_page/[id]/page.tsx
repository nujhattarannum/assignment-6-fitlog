import { IWorkout } from '@/types/workoutTypes';
import React from 'react';
import Image from "next/image";
import AddToPlan from '@/components/workoutdetails/AddToPlan';
import SavedButton from '@/components/workoutdetails/SavedButton';
import { notFound } from 'next/navigation';

interface IdetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async () => {
  const response = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await response.json();
  return data;
};

const page = async ({ params }: IdetailsProps) => {
  const { id } = await params;

  const workoutData = await getWorkouts();

  const workout = workoutData.find(
    (workout: IWorkout) =>
      String(workout.id) === String(id)
  ) as IWorkout;

  if (!workout) {
  notFound();
}
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-8 py-8 lg:py-12">

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* LEFT COLUMN: Image Card */}
        <div  className=" relative w-full aspect-square sm:aspect-[4/3] md:aspect-square lg:aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl" >
          <Image
            src={workout.image}  alt={workout.name}  fill  className="object-cover"  priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw" />
        </div>

        {/* RIGHT COLUMN: Details & Specs */}
        <div className="flex flex-col gap-6">

          {/* Header Title & Description */}
          <div>
            <h1 className=" text-2xl  sm:text-3xl md:text-4xl lg:text-3xl font-black uppercase text-white mb-3 ">
              {workout.name}
            </h1>

            <p className=" text-zinc-400  text-xs  sm:text-sm md:text-base  lg:text-xs leading-relaxed "  >
              {workout.description}
            </p>
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups?.map(
              (group: string, idx: number) => (
                <span
                  key={idx}
                  className=" badge  badge-lg border-none bg-[#ccff00] text-black  font-extrabold text-[10px] sm:text-xs tracking-wide  rounded-full  px-3 sm:px-4 py-3 uppercase">
                  {group}
                </span>
              )
            )}
          </div>

          {/* Specs Panel */}
          <div
            className="  bg-[#16181d] border border-zinc-800/80 rounded-2xl p-4  sm:p-5 space-y-3.5 text-xs sm:text-sm lg:text-xs">

            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">
                Equipment
              </span>

              <span className="text-zinc-200 font-medium text-right">
                {workout.equipment}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">
                Difficulty
              </span>

              <span className="text-zinc-200 font-medium text-right">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">
                Sets
              </span>

              <span className="text-zinc-200 font-medium text-right">
                {workout.sets}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">
                Reps
              </span>

              <span className="text-zinc-200 font-medium text-right">
                {workout.reps}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">
                Duration
              </span>

              <span className="text-zinc-200 font-medium text-right">
                {workout.duration} min
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-zinc-800/60 pb-3">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">
                Calories
              </span>

              <span className="text-zinc-200 font-medium text-right">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-zinc-500 font-bold tracking-wider uppercase">
                Rating
              </span>

              <span className="text-zinc-200 font-medium text-right">
                {workout.rating}
              </span>
            </div>
          </div>

          {/* Instructions List */}
          <div>
            <h2
              className="  text-lg sm:text-xl lg:text-xl  font-extrabold  uppercase tracking-widest text-zinc-200  mb-3 ">
              Instructions
            </h2>

            <ol  className="  space-y-2.5 text-sm sm:text-base lg:text-sm  text-zinc-400 list-decimal  list-inside leading-relaxed " >
              {workout.instructions?.map((step, idx) => (
                <li key={idx}>
                  <span className="text-zinc-300 ml-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div
            className="  flex  flex-col sm:flex-row  items-stretch sm:items-center  gap-3  pt-2">
            <AddToPlan workout={workout} />
            <SavedButton workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;