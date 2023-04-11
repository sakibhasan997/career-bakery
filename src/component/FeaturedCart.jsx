import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const FeaturedCart = ({ fCard }) => {
    const { id, company_logo, job_title, remote_or_onsite, location, fulltime_or_partTime, company_name, location_img } = fCard

    const navigate = useNavigate()
    

    return (
        <>
            <div className="main border-2 py-8 px-10 rounded-lg">
                <div className="cartDetails">
                    <div className='w-28 h-28'>
                        <img className='' src={company_logo} alt="" />
                    </div>
                    <h2 className='font-bold text-2xl text-[#474747] my-3'>{job_title}</h2>
                    <h3 className='font-semibold text-xl text-[#757575]'>{company_name}</h3>
                    <div className='flex items-center gap-3 my-3'>
                        <button className=' my-linear' >{remote_or_onsite}</button>
                        <button className='my-linear'>{fulltime_or_partTime}</button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-5 h-5' src={location_img} alt="" />
                        <p className='font-semibold text-xl text-[#757575]'>{location}</p>
                    </div>
                    
                        <button onClick={()=>navigate(`/cartDetails/${id}`)} className='my-btn my-4'>View Details</button>
                    
                </div>
            </div>
        </>
    );
};

export default FeaturedCart;