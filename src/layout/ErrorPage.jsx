import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
        <div>
        <img className='w-3/4 justify-center' src="https://i.ibb.co/LS2Jmm1/1-De-Bkx8vjbump-CO-Zk-PE9-Cw.png" alt="" />
        <Link to="/">
        <div className='flex justify-center'>
        <button className='btn btn-neutral mx-auto'>GO HOME</button>
        </div>
        </Link>
        </div>
     </div>
    );
};

export default Error;