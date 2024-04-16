import React from 'react';
import Navber from '../layout/Navber';
import Banner from './Banner';
import Categories from './Categories';

import About from './About';

const Home = () => {
    return (
        <div className='my-5'>
            <Banner></Banner>
            <About></About>
            <Categories></Categories>
            
        </div>
    );
};

export default Home;