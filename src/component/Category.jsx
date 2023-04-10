import React from 'react';

const Category = ({ category }) => {
    const { id, category_logo, category_name, jobs_available } = category
    return (
        <>
            <div className="main bg-gray-200 py-10 px-5 rounded-md">

                <div className="card">
                    <div className='w-[70px] h-[70px] flex justify-center items-center bg-gray-300 rounded ' >
                        <img className='w-10 h-10' src={category_logo} alt="" />
                    </div>
                    <div className="description mt-6">
                        <h3 className='font-bold text-xl text-[#474747]'>{category_name}</h3>
                        <p className='font-medium text-base text-[#A3A3A3]'>{jobs_available}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;