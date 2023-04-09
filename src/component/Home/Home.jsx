import React from 'react';
import Navbar from '../NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </>
    );
};

export default Home;