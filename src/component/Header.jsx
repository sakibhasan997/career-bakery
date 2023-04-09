import React from 'react';

const Header = () => {
    return (
        <>
            <div className='my-container my-container grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                <div>
                    <h1 className='font-extrabold text-3xl lg:text-7xl text-[#1A1919]'>One Step <br /> Closer To Your <br /><span className='text-blue-500'>Dream Job</span> </h1>
                    <p className='my-5 text-[#757575] font-medium '>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className='my-btn'>Get Started</button>
                </div>
                <div>
                    <img src="/public/P3OLGJ1 copy 1.png" alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;