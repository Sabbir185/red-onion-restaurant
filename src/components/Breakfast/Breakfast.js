import React from 'react';
import breakfastData from '../../fakeData/breakfast.json'
import { useState } from 'react';
import { useEffect } from 'react';
import BreakfastFoods from '../BreakfastFoods/BreakfastFoods';
import './Breakfast.css'

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);

    useEffect(()=>{
        setBreakfast(breakfastData);
    },[])


    return (
        <div>
            <div className='bk-style mt-4'>
                {
                    breakfast.map(item => <BreakfastFoods key={item.url} items={item}></BreakfastFoods>)
                }
            </div>
        </div>
    );
};

export default Breakfast;