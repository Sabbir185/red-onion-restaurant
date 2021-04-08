import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import dinnerData from '../../fakeData/dinner.json'
import BreakfastFoods from '../BreakfastFoods/BreakfastFoods';
import './Dinner.css'


const Dinner = () => {
    const [dinner, setDinner] = useState([]);

    useEffect(()=>{
        setDinner(dinnerData);
    },[])


    return (
        <div>
            <Header></Header>

            {/* inherit design from BreakfastFoods but different data is loading */}
            <div className='dinner-style mt-4'>
                {
                    dinner.map(item => <BreakfastFoods key={item.url} items={item}></BreakfastFoods>)
                }
            </div>
        </div>
    );
};

export default Dinner;