import React from 'react';

const Topics = ({ topic }) => {
    console.log(topic);
    const { name, logo, total } = topic

    return (
        <div className='border-2 rounded-3xl bg-cyan-300 p-4 flex h-full -mt-[80px] py-24'>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <img className='w-4/5 p-2 border-2 rounded-full bg-red-400' src={logo} alt="" />
            </div>
            <div className='flex flex-col gap-4 justify-center item-center'>
                <p className='text-2xl text-right -mt-14 underline'>Quiz: {total}</p>

                <div className='flex flex-col justify-end items-center gap-4'>
                    <p className='text-4xl font-bold text-rose-800'>{name}</p>

                    <button className='w-40 py-2 border-2 rounded-lg bg-blue-600 text-white text-2xl'>Practice Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Topics;