'use client';

import { IWorkout } from '@/types/workoutTypes';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { toast } from 'react-toastify';

interface WorkoutContextType {
  plannedWorkout: IWorkout[];
  setPlannedWorkout: Dispatch<SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: Dispatch<SetStateAction<IWorkout[]>>;
  addToPlan: (workout: IWorkout) => void;
  addToSaved: (workout: IWorkout) => void;
  removeFromPlan: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void;
}

export const workoutContext = createContext<WorkoutContextType>({
  plannedWorkout: [],
  setPlannedWorkout: () => {},
  saved: [],
  setSaved: () => {},
  addToPlan: () => {},
  addToSaved: () => {},
  removeFromPlan: () => {},
  removeFromSaved: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plannedWorkout, setPlannedWorkout] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  // Add to Today's Plan
  const addToPlan = (workout: IWorkout) => {
    const isAlreadyAdded = plannedWorkout.some(
      (item) => item.id === workout.id
    );

    if (isAlreadyAdded) {
      toast.warning(`"${workout.name}" is already in your plan!`);
      return;
    }

    if (plannedWorkout.length >= 5) {
      toast.error(
        'You can only add up to 5 workouts to your daily plan!'
      );
      return;
    }

    setPlannedWorkout((prev) => [...prev, workout]);

    toast.success(`You have added "${workout.name}"`);
  };

  // Add to Saved
  const addToSaved = (workout: IWorkout) => {
    const isAlreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (isAlreadySaved) {
      toast.warning(`"${workout.name}" is already in your saved list!`);
      return;
    }

    setSaved((prev) => [...prev, workout]);

    toast.success(`"${workout.name}" saved successfully! ⭐`);
  };

  // Remove from Plan
  const removeFromPlan = (id: string | number) => {
    setPlannedWorkout((prev) =>
      prev.filter((item) => String(item.id) !== String(id))
    );

    toast.info("Removed from Today&apos;s Plan.");
  };

  // Remove from Saved
  const removeFromSaved = (id: string | number) => {
    setSaved((prev) =>
      prev.filter((item) => String(item.id) !== String(id))
    );

    toast.info('Removed from Saved.');
  };

  const sharedData = {
    plannedWorkout,
    setPlannedWorkout,
    saved,
    setSaved,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
  };

  return (
    <workoutContext.Provider value={sharedData}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;