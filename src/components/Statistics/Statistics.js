import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, XAxis, CartesianGrid, Line, YAxis, ZAxis, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()

    return (
        <div>
            <h2>Data Chart</h2>
            <div className='rounded-md bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto w-[550px]'>
                <LineChart width={500} height={500} data={data.data} className="p-4" >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="black" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="name" stroke="indigo" />
                    <Line type="monotone" dataKey="total" stroke="white" />
                </LineChart>
            </div>
        </div >
    );
};

export default Statistics;