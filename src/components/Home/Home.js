import React from 'react';
import Header from '../Header/Header';
import NavTabs from '../MaterialTab/NavTabs';


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <div className='mt-3'>
                <NavTabs></NavTabs>
            </div>

        </div>
    );
};

export default Home;