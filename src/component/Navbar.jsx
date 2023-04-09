import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='max-w-[1320px] mx-auto'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li className='mr-3' > <Link to='/' >Home</Link> </li>
                                <li className='mr-3'> <Link to='/statistics' >Statistics</Link> </li>
                                <li className='mr-3'> <Link to='/appliedJobs' >AppliedJobs</Link> </li>
                                <li className='mr-3'> <Link to='/blogs' >Blog</Link> </li>
                            </ul>
                        </div>
                        <a className=" text-xl lg:text-3xl font-extrabold text-[#1A1919;]  "><span className='text-blue-600'>C</span>areer<span className='text-blue-600'>B</span>akery</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="  menu-horizontal px-1">
                            <li className='mr-5' > <Link to='/' >Home</Link> </li>
                            <li className='mr-5'> <Link to='/statistics' >Statistics</Link> </li>
                            <li className='mr-5'> <Link to='/appliedJobs' >AppliedJobs</Link> </li>
                            <li className='mr-5'> <Link to='/blogs' >Blog</Link> </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link className=' my-btn ' to='/'>
                            Star Applying
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;