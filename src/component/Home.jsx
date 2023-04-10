import React, { useEffect, useState } from 'react';
import Header from './Header';
import Category from './Category';

const Home = () => {


    // category data load start
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // category data load end

    return (
        <>
            <div className=" ">
                <div className="header bg-blue-100 pt-4 ">
                    <Header></Header>
                </div>
                <section className='body my-container'>
                    <div className='category '>
                        <div className='title flex flex-col items-center lg:items-center mt-32 mb-8 '>
                            <h1 className='font-extrabold text-3xl lg:text-5xl color-[#1A1919] '>Job Category List</h1>
                            <p className='font-medium text-center lg:text-base color-[#757575] mt-3 mx-auto'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                        </div>
                        <div className="cart grid grid-cols-2 md:grid-cols-4 gap-6 my-5 mx-auto ">
                        {
                            categories.map((category) => (<Category
                                key={category.id}
                                category={category}
                            ></Category>))
                        }
                        </div>
                    </div>

                    <div className='featured'></div>
                </section>
            </div>
        </>
    );
};

export default Home;