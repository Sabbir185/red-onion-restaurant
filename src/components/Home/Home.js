import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavTabs from '../MaterialTab/NavTabs';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <div className='mt-3'>
                <NavTabs></NavTabs>
            </div>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;