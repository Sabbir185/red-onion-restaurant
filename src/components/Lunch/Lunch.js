import React, { useEffect, useState } from 'react';
import lunchData from '../../fakeData/lunch.json'
import BreakfastFoods from '../BreakfastFoods/BreakfastFoods';
import './Lunch.css'

const Lunch = () => {
    const [lunch, setLunch] = useState([]);

    useEffect(()=>{
        setLunch(lunchData);
    },[])


    return (
        <div>
            {/* inherit design from BreakfastFoods but different data is loading */}
            <div className='lunch-style mt-4'>
                {
                    lunch.map(item => <BreakfastFoods key={item.url} items={item}></BreakfastFoods>)
                }
            </div>
        </div>
    );
};

export default Lunch;