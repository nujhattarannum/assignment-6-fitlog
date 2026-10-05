'use client';

import EmptyMyPlan from '@/components/shared/EmptyMyPlan';
import ListedWorkoutCard from '@/components/shared/ListedWorkoutCard';
import { workoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/types/workoutTypes';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';

const ListedWorkout = () => {

    const { plannedWorkout , saved } = useContext(workoutContext);
    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    const [ sortBy , setSortBy] = useState<"duration" | "rating" | "caloriesBurned">("duration");
     
   console.log(  plannedWorkout , " my plan");
    console.log(  saved , " my plan");

    const sortworkouts =(workout:IWorkout[])=>{
       const sortedWorkouts = [...workout];

       if(sortBy === "rating"){
        sortedWorkouts.sort((a,b)=> b.rating - a.rating);
       }else  if(sortBy === "duration"){
        sortedWorkouts.sort((a,b)=> b.duration - a.duration);
       }else  if(sortBy === "caloriesBurned"){
        sortedWorkouts.sort((a,b)=> b.caloriesBurned - a.caloriesBurned);
       }
       return sortedWorkouts;
    };

    const sortedPlan = sortworkouts(plannedWorkout);
      const sortedSaved = sortworkouts(saved);
      const currentList = activeTab === 'today' ? sortedPlan : sortedSaved;

 return (
    <div className="min-h-screen text-base-content bg-black">
        {/* Main */}

        <main className="max-w-6xl mx-auto px-6 py-10">

            {/* Heading */}

            <div className="mb-7">
                <h1 className="text-3xl font-bold text-white">
                    MY PLAN
                </h1>
                <p className="text-sm text-base-content/50 mt-1">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
            </div>

            {/* Statistics */}

            <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body p-6">
                    <div className="grid grid-cols-3">
                        <div className="border-r border-base-300">
                            <p className="text-sm text-base-content/50">
                                Exercises
                            </p>
                            <p className="text-3xl font-bold text-lime-400">
                                {plannedWorkout.length}
                            </p>
                        </div>

                        <div className="border-r border-base-300 pl-8">
                            <p className="text-sm text-base-content/50">
                                Minutes
                            </p>
                            <p className="text-3xl text-white font-bold">
                                {plannedWorkout.reduce(
                                    (total, workout) => total + workout.duration,0
                                )}
                            </p>
                        </div>

                        <div className="pl-8">
                            <p className="text-sm text-base-content/50">
                                Calories
                            </p>
                            <p className="text-3xl text-white font-bold">
                                {plannedWorkout.reduce(
                                    (total, workout) => total + workout.caloriesBurned,0
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

           {/* Tabs + Sort */}
<div className="flex justify-between items-center mt-7 mb-4">

   {/* name of each tab group should be unique */}
<div className="tabs tabs-box bg-[#12151c] border border-zinc-800/80 rounded-2xl p-1.5 inline-flex gap-1">
  <input
    type="radio"
    name="my_tabs_1"
    className="tab text-zinc-400 checked:bg-[#1a1e27] checked:text-white checked:border checked:border-zinc-700/60 font-semibold rounded-xl px-5 text-xs transition-all"
    aria-label="Today's Plan"
    checked={activeTab === 'today'}
    onChange={() => setActiveTab('today')}
 />

  <input
    type="radio"
    name="my_tabs_1"
    className="tab text-zinc-400 checked:bg-[#1a1e27] checked:text-white checked:border checked:border-zinc-700/60 font-semibold rounded-xl px-5 text-xs transition-all"
    aria-label="Saved"
    checked={activeTab === 'saved'}
    onChange={() => setActiveTab('saved')}
  />
</div>

  {/* Sort */}
    <div className="flex items-center gap-2">
        <span className="text-sm text-base-content/50">
            Sort By
        </span>
        <select
        value={sortBy}
        onChange ={(e) => setSortBy (e.target.value as "rating" |"duration" |"caloriesBurned")}
        className="select select-bordered select-xs w-24 h-9 min-h-0 rounded-lg text-sm">
            <option value={"duration"}>Duration</option>
            <option value={"caloriesBurned"}>Calories</option>
            <option value={"rating"}>Rating</option>
        </select>
    </div>
</div>

{/* Render list separately based on activeTab */}
{
currentList.length === 0 ? (
          <EmptyMyPlan />
    ) : (
      <div className="mt-4 space-y-4">
        {currentList.map((workout: IWorkout) => (
          <ListedWorkoutCard
            key={workout.id}
            workout={workout}
            isSavedTab={activeTab === 'saved'}
          />
        ))}
      </div>
    )  }      
        </main>
    </div>
);
};

export default ListedWorkout;