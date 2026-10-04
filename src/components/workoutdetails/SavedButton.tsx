'use client';
import { workoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/types/workoutTypes';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedButton = ({workout}:{ workout : IWorkout}) => {

     const { setSaved } = useContext (workoutContext);

    const HandleSavedButton =() =>{
    
        console.log("add to plan button triggered",workout);
        toast.success(`You have  Saved "${workout.name}"`); 
        setSaved((prev) => [...prev, workout]);
    }
    return (
       <button className="btn btn-outline border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-xl px-6"
       onClick = { HandleSavedButton}>
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
    );
};

export default SavedButton;