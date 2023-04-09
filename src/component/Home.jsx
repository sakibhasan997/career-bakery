import React from 'react';
import Header from './Header';

const Home = () => {
    return (
        <>
            <div className=" ">
                <div className="header bg-blue-100 pt-4 ">
                    <Header></Header>
                </div>
                <div className="body max-w-[1320px] mx-auto">
                    body
                </div>
            </div>
        </>
    );
};

export default Home;