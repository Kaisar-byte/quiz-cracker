import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, XAxis, CartesianGrid, Line, YAxis, ZAxis, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()

    return (
        <div>
            <h2>Data Chart</h2>
            <div className='mx-auto w-[550px]'>
                <LineChart width={650} height={500} data={data.data} className="p-4" >
                    <XAxis dataKey="name" />
                    <YAxis dataKey="total" />
                    <ZAxis dataKey="id" />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="black" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="name" stroke="pink" />
                    <Line type="monotone" dataKey="total" stroke="green" />
                </LineChart>
            </div>
        </div >
    );
};

export default Statistics;