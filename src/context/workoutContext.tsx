'use client';
import { IWorkout } from '@/types/workoutTypes';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface WorkoutContextType {
  plannedWorkout: IWorkout[];
  setPlannedWorkout: Dispatch<SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: Dispatch<SetStateAction<IWorkout[]>>;
}

export const workoutContext = createContext<WorkoutContextType>({
  plannedWorkout: [],
  setPlannedWorkout: () => {},
  saved: [],
  setSaved: () => {},
});

const WorkoutProvider = ({children}:{children:ReactNode}) => {

const [plannedWorkout, setPlannedWorkout] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

    const sharedData = {
       plannedWorkout, 
       setPlannedWorkout,
       saved, 
       setSaved
    };

    return (
    <workoutContext.Provider value = {sharedData }>
        {children}
    </workoutContext.Provider>
    );
};

export default WorkoutProvider ;