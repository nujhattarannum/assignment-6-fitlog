'use client';

import EmptyMyPlan from '@/components/shared/EmptyMyPlan';
import ListedWorkoutCard from '@/components/shared/ListedWorkoutCard';
import { workoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/types/workoutTypes';
import React, { useContext, useState } from 'react';

const ListedWorkout = () => {

  const { plannedWorkout, saved } = useContext(workoutContext);
  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
  const [sortBy, setSortBy] = useState<'duration' | 'rating' | 'caloriesBurned'>('duration');

  const sortworkouts = (workout: IWorkout[]) => {

    const sortedWorkouts = [...workout];

    if (sortBy === 'rating') {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'duration') {
      sortedWorkouts.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === 'caloriesBurned') {
      sortedWorkouts.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    return sortedWorkouts;
  };

  const sortedPlan = sortworkouts(plannedWorkout);
  const sortedSaved = sortworkouts(saved);

  const currentList = activeTab === 'today' ? sortedPlan : sortedSaved;

  return (
    <div className="min-h-screen text-base-content bg-black">

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10">

        {/* Heading */}
        <div className="mb-6 sm:mb-7">

          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            MY PLAN
          </h1>

          <p className="text-xs sm:text-sm text-base-content/50 mt-1 leading-relaxed">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Statistics */}
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body p-4 sm:p-6">

            <div
              className=" grid grid-cols-1 sm:grid-cols-3 ">

              {/* Exercises */}
              <div className=" border-b sm:border-b-0 sm:border-r border-base-300 pb-4 sm:pb-0 sm:pr-6">

                <p className="text-xs sm:text-sm text-base-content/50">
                  Exercises
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-lime-400">
                  {plannedWorkout.length}
                </p>
              </div>

              {/* Minutes */}
              <div
                className=" border-b sm:border-b-0 sm:border-r border-base-300 py-4 sm:py-0 sm:pl-6 sm:pr-6 " >

                <p className="text-xs sm:text-sm text-base-content/50">
                  Minutes
                </p>
                <p className="text-2xl sm:text-3xl text-white font-bold">
                  {plannedWorkout.reduce(
                    (total, workout) =>  total + workout.duration,
                    0
                  )}
                </p>
              </div>

              {/* Calories */}
              <div className=" pt-4 sm:pt-0 sm:pl-6" >

                <p className="text-xs sm:text-sm text-base-content/50">
                  Calories
                </p>

                <p className="text-2xl sm:text-3xl text-white font-bold">
                  {plannedWorkout.reduce(
                    (total, workout) =>  total + workout.caloriesBurned, 0
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div  className=" flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6 sm:mt-7 mb-4 ">

          {/* Tabs */}
          <div
            className=" tabs tabs-box bg-[#12151c] border  border-zinc-800/80 rounded-2xl p-1.5 inline-flex gap-1 w-fit max-w-full">

            <input
              type="radio"
              name="my_tabs_1"
              className=" tab text-zinc-400 checked:bg-[#1a1e27] checked:text-white checked:border checked:border-zinc-700/60 font-semibold rounded-xl px-3 sm:px-5 text-[10px] sm:text-xs transition-all "
              aria-label="Today's Plan"
              checked={activeTab === 'today'}
              onChange={() => setActiveTab('today')}
            />

            <input
              type="radio"
              name="my_tabs_1"
              className="
                tab
                text-zinc-400
                checked:bg-[#1a1e27]
                checked:text-white
                checked:border
                checked:border-zinc-700/60
                font-semibold
                rounded-xl
                px-3
                sm:px-5
                text-[10px] sm:text-xs transition-all "
              aria-label="Saved"
              checked={activeTab === 'saved'}
              onChange={() => setActiveTab('saved')}
            />
          </div>

          {/* Sort */}
          <div
            className=" flex  items-center gap-2 w-full sm:w-auto ">

            <span className="text-xs sm:text-sm text-base-content/50 whitespace-nowrap">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as  | 'rating'  | 'duration' | 'caloriesBurned')
              }
              className=" select select-bordered select-xs w-full sm:w-24 h-9  min-h-0  rounded-lg  text-xs sm:text-sm ">

              <option value="duration">
                Duration
              </option>

              <option value="caloriesBurned">
                Calories
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>
        </div>

        {/* Render list separately based on activeTab */}
        {currentList.length === 0 ? (
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
        )}
 </main>
    </div>
  );
};

export default ListedWorkout;