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

const ListedWorkoutCard = ({ workout, isSavedTab = false }: ListedWorkoutCardProps) => {

    const { plannedWorkout, setPlannedWorkout, saved, setSaved } = useContext(workoutContext);

const handleMarkAsDone = () => {
  // Filter out the done workout from plannedWorkout
  setPlannedWorkout((prev:IWorkout[]) => prev.filter((item) => item.id !== workout.id));
  toast.success(`"${workout.name}" marked as done! 🎉`);
};

const handleRemove = () => {
  if (isSavedTab) {
    setSaved((prev:IWorkout[]) => prev.filter((item) => item.id !== workout.id));
    toast.info(`Removed "${workout.name}" from saved workouts.`);
  } else {
    setPlannedWorkout((prev:IWorkout[]) => prev.filter((item) => item.id !== workout.id));
    toast.info(`Removed "${workout.name}" from today's plan.`);
  }
};

    return (
    <div className="card card-side w-full h-[168px] bg-base-100 border border-base-300 rounded-2xl p-6">

    {/* Image */}
    <figure className="w-[212px] h-[116px] shrink-0">
        <Image
            src={workout.image}
            alt={workout.name}
            width={212}
            height={116}
            className="w-full h-full object-cover rounded-2xl"
        />
    </figure>

    {/* Workout Information */}
    <div className="card-body p-0 pl-6 justify-center">

        <h2 className="text-2xl font-extrabold tracking-wide leading-none">
            {workout.name}
        </h2>

        <p className="text-lg font-semibold text-base-content/60 mt-1">
            {workout.muscleGroups}
        </p>

        {/* Workout Stats */}
        <div className="flex items-center gap-5 mt-2">

            <span className="flex items-center gap-2 text-base text-base-content/80">
                <span className="text-xl text-lime-400">◷</span>
                {workout.duration} min
            </span>

            <span className="flex items-center gap-2 text-base text-base-content/80">
                <span className="text-xl text-lime-400">♨</span>
                {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-2 text-base text-base-content/80">
                <span className="text-xl text-lime-400">☆</span>
                {workout.rating}
            </span>

        </div>

    </div>

    {/* Right Side Buttons */}
    <div className="flex items-center gap-4 ml-auto">

        <Link
            href={`/details_page/${workout.id}`}
            className="btn btn-outline border-base-content/30 hover:bg-base-200 rounded-full px-7 h-12 min-h-0 text-base font-normal"
        >
            View Details
        </Link>

        {/* Render Mark as Done only when NOT on Saved tab */}
        {!isSavedTab && (
            <button
                onClick={handleMarkAsDone}
                className="btn bg-lime-400 hover:bg-lime-300 border-none text-black rounded-full px-7 h-12 min-h-0 text-base font-semibold"
            >
                ✓ &nbsp; Mark as Done
            </button>
        )}

        <button
            onClick={handleRemove}
            className="btn btn-ghost btn-circle text-2xl text-base-content/40 hover:text-base-content"
        >
            ×
        </button>

    </div>

</div>
    );
};

export default ListedWorkoutCard;