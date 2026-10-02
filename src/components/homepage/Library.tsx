import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';
import { Workout } from '@/types/workoutTypes';

const getWorkouts = async()=> {
    const response = await fetch(' https://api.abcz.workers.dev/api/fitlog');
    const data = await response.json();
    return data ;
}
const Library = async() => {
    const workoutData = await getWorkouts();

    return (

        <div className = " grid grid-cols-3 gap-2 container mx-auto p-4 md:p-8 bg-black">
           { workoutData.map((item:Workout) => (
            <WorkoutCard 
            key = {item.id}
            workout = {item}
            />
               
        )
            ) }
        </div>
    );
};

export default Library;