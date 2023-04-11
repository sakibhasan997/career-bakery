import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import LocalStorageCart from './LocalStorageCart';

const AppliedJobs = () => {

    const { cartArray } = useLoaderData();

    return (
        <>
            <div className="header bg-blue-100 pb-20">
                <h1 className='font-bold text-3xl text-[#1A1919] text-center'>Applied Jobs</h1>
            </div>
            <div className='my-container my-10'>
                <div className=' min-h-screen flex  items-center justify-center  text-gray-900 '>
                    <div className='flex flex-col w-[1000px]  p-8 space-y-4 sm:p-10'>
                        <h2 className='text-xl font-semibold'>
                            {/* {cartArray.length ? 'add this cart' : 'cart is not defined!!'} */}
                        </h2>
                        <ul className='flex flex-col  my-3'>
                            {
                                cartArray.map(jobDetail => (<LocalStorageCart
                                    key={jobDetail.id}
                                    jobDetail={jobDetail}
                                ></LocalStorageCart>))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;
// if(cartData){
//     const cart = JSON.parse(cartData)
// }
// {cart.length}