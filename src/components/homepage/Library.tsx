import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';
import { IWorkout } from '@/types/workoutTypes';

const getWorkouts = async()=> {
    const response = await fetch(' https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data ;
}
const Library = async() => {
    const workoutData = await getWorkouts();

    return (
    <div className = "container mx-auto p-4 md:p-8 bg-black">
        <div >
        <h2 className = "text-2xl font-bold text-mist-50">THE LIBRARY</h2>
        <p className = "text-gray-200">Twelve lifts covering every major muscle group</p>
        </div>
        <div className = " grid grids-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-8 ">
           { workoutData.map((item:IWorkout) => (
            <WorkoutCard 
            key = {item.id}
            workout = {item}
            />
               
        )
            ) }
        </div>
      </div>  
    );
};

export default Library;