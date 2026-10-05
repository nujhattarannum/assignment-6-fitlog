import { IWorkout } from '@/types/workoutTypes';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { workoutContext } from '@/context/workoutContext';

interface ListedWorkoutCardProps {
  workout: IWorkout;
  isSavedTab?: boolean;
}

const ListedWorkoutCard = ({ workout, isSavedTab = false,}: ListedWorkoutCardProps) => {

  const { setPlannedWorkout, setSaved } = useContext(workoutContext);

  const handleMarkAsDone = () => {
    setPlannedWorkout((prev: IWorkout[]) =>
      prev.filter((item) => item.id !== workout.id)
    );

    toast.success(`"${workout.name}" marked as done! 🎉`);
  };

  const handleRemove = () => {
    if (isSavedTab) {
      setSaved((prev: IWorkout[]) =>
        prev.filter((item) => item.id !== workout.id)
      );

      toast.info(
        `Removed "${workout.name}" from saved workouts.`
      );
    } else {
      setPlannedWorkout((prev: IWorkout[]) =>
        prev.filter((item) => item.id !== workout.id)
      );

      toast.info(
        `Removed "${workout.name}" from today's plan.`
      );
    }
  };

  return (
    <div
      className=" card  w-full  bg-base-100  border border-base-300 rounded-2xl p-4 sm:p-5 md:p-5   flex flex-col  md:flex-row md:items-center lg:card-side lg:h-[168px]  lg:p-6">

      {/* Image */}
      <figure
        className=" w-full h-48 shrink-0 sm:h-52  md:w-[180px] md:h-[120px] lg:w-[212px] lg:h-[116px]">
        <Image
          src={workout.image} alt={workout.name} width={212} height={116}
          className=" w-full  h-full object-cover rounded-2xl "     
           />
      </figure>

      {/* Workout Information */}
      <div
        className=" card-body p-0 pt-4 md:pt-0 md:pl-5  lg:pl-6 justify-center min-w-0 ">
        {/* Workout Name */}
        <h2
          className=" text-xl sm:text-2xl font-extrabold  tracking-wide leading-tight break-words">
          {workout.name}
        </h2>

        {/* Muscle Groups */}
        <p className="  text-sm sm:text-lg font-semibold text-base-content/60 mt-1">
          {workout.muscleGroups}
        </p>

        {/* Workout Stats */}
        <div className=" flex flex-wrap items-center gap-x-4  gap-y-2 sm:gap-5 mt-2">
          {/* Duration */}
          <span className=" flex items-center  gap-1.5  sm:gap-2 text-sm  sm:text-base text-base-content/80">
            <span className="text-lg sm:text-xl text-lime-400">
              ◷
            </span>
            {workout.duration} min
          </span>

          {/* Calories */}
          <span className=" flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base  text-base-content/80">
            <span className="text-lg sm:text-xl text-lime-400">
              ♨
            </span>
            {workout.caloriesBurned} kcal
          </span>
          {/* Rating */}
          <span className=" flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base  text-base-content/80">
            <span className="text-lg sm:text-xl text-lime-400">
              ☆
            </span>
            {workout.rating}
          </span>
        </div>
      </div>
      {/* Right Side Buttons */}
      <div className="  flex flex-col gap-2 mt-4 sm:flex-row sm:flex-wrap sm:items-center md:flex-col md:items-stretched md:ml-auto md:mt-0 lg:flex-row lg:items-center lg:gap-4 lg:ml-auto">
        {/* View Details */}
        <Link
          href={`/details_page/${workout.id}`}
          className=" btn btn-outline border-base-content/30 hover:bg-base-200 rounded-full w-full  sm:w-auto px-5 sm:px-7 h-11 sm:h-12 min-h-0 text-sm  sm:text-base font-normal">
          View Details
        </Link>
        {/* Mark as Done */}
        {!isSavedTab && (
          <button
            onClick={handleMarkAsDone}
            className=" btn  bg-lime-400 hover:bg-lime-300 border-none text-black rounded-full w-full sm:w-auto px-5 sm:px-7 h-11  sm:h-12  min-h-0 text-sm sm:text-base font-semibold"  >
            ✓ &nbsp; Mark as Done
          </button>
        )}

        {/* Remove */}
        <button
          onClick={handleRemove}
          className=" btn btn-ghost btn-circle self-end sm:self-auto text-2xl text-base-content/40 hover:text-base-content">
          ×
        </button>
      </div>
    </div>
  );
};

export default ListedWorkoutCard;