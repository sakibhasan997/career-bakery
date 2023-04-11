import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const Statistics = () => {


    const data = [
        {
            name: 'Assignment 1',
            marks: 57,
            batch: 'Batch 7',
            students: 'Sakib Hasan',
        },
        {
            name: 'Assignment 2',
            marks: 38,
            batch: 'Batch 7',
            students: 'Sakib Hasan',
        },
        {
            name: 'Assignment 3',
            marks: 28,
            batch: 'Batch 7',
            students: 'Sakib Hasan',
        },
        {
            name: 'Assignment 4',
            marks: 50,
            batch: 'Batch 7',
            students: 'Sakib Hasan',
        },
        {
            name: 'Assignment 5',
            marks: 25,
            batch: 'Batch 7',
            students: 'Sakib Hasan',
        },
        {
            name: 'Assignment 6',
            marks: 40,
            batch: 'Batch 7',
            students: 'Sakib Hasan',
        },
        {
            name: 'Assignment 7',
            marks: 35,
            batch: 'Batch 7',
            students: 'Sakib Hasan',
        },
        {
            name: 'Assignment 8',
            marks: 60,
            batch: 'Batch 7',
            students: 'Sakib Hasan',
        },
    ];

    return (
        <>
            <div className="main my-container my-32">
                <div className=''>
                    <ResponsiveContainer width="100%" height={400}>
                        <AreaChart
                            width={1000}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="batch" stroke="#82ca9d" fill="#8884d8" />
                            <Area type="monotone" dataKey="students" stroke="#82ca9d" fill="#8884d8" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </>
    );
};

export default Statistics;