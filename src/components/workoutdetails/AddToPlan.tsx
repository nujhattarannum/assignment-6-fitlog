'use client';
import { workoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/types/workoutTypes';
import React, { useContext } from 'react';


const AddToPlan = ({ workout } :{ workout :IWorkout}) => {

  const { addToPlan } = useContext(workoutContext);

  const handleAddPlan = () => {
    addToPlan(workout);
  };
   
    return (
          <button className="btn w-full
        sm:w-auto border-none bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl px-6" 
          onClick={handleAddPlan}>
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
    );
};

export default AddToPlan;