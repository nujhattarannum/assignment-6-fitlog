"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Workout } from '@/types/workoutTypes';


interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/details/${workout.id}`}
      className="group bg-[#121318] border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
    >
      {/* Top Content Area */}
      <div>
        {/* Card Image */}
        <div className="relative w-full h-48 bg-zinc-950 overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Card Header & Body */}
        <div className="p-5 flex flex-col gap-3">
          {/* Muscle Group / Category Pills */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups?.map((group, index) => (
              <span
                key={index}
                className="bg-[#ccff00] text-black font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-black text-white uppercase tracking-wide group-hover:text-[#ccff00] transition-colors leading-tight">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="text-xs font-medium text-zinc-400">
            {workout.equipment}
          </p>
        </div>
      </div>

      {/* Bottom Stats Row (Inlined SVGs - No External Library Required) */}
      <div className="px-5 pb-5 pt-3 border-t border-zinc-800/50 mx-5 mb-1 flex items-center justify-between text-xs font-medium text-zinc-400">
        {/* Duration */}
        <div className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{workout.duration} min</span>
        </div>

        {/* Calories */}
        <div className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
          </svg>
          <span>{workout.caloriesBurned} kcal</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4 text-zinc-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <span>{workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default WorkoutCard;