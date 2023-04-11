import React from 'react';
import { useNavigate } from 'react-router-dom';

const LocalStorageCart = ({ jobDetail }) => {
    const { id, company_logo, job_title, remote_or_onsite, location, fulltime_or_partTime, company_name, location_img } = jobDetail

    const navigateDetails = useNavigate()
    const handleBack =()=>{
        navigateDetails(-1)
    }
    

    return (
        <div className='border border-gray-300 p-8 w-full flex items-center gap-10 mb-5 rounded'>
            <div className='w-28 h-28'>
                <img className='' src={company_logo} alt="" />
            </div>
            <div className='w-full flex justify-between items-center'>
                <div >
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
                </div>
                <div className='flex flex-col '>
                    <button onClick={handleBack}  className='my-btn my-4 mr-auto'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default LocalStorageCart;