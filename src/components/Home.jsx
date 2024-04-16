import React from 'react';
import Navber from '../layout/Navber';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
    return (
        <div className='my-5'>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;