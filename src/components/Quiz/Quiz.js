import React from 'react';

const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { logo, name } = quiz
    return (
        <div className='mx-auto  text-xl rounded-2 border-2 shadow-xl shadow-orange-200 w-1/2 rounded-lg gap-4 bg-slate-300 w-96'>
            <img className='w-96 h-38 mx-auto'
                src={logo} alt="" />
            <div className='flex justify-between items-center text-left rounded-2 p-2 bg-indigo-300'>
                <p className='text-2xl font-bold text-left'>{name}</p>
                <button className='bg-orange-300 px-2 py-2 rounded-lg border-2 text-gray'>Start Practice</button>
            </div>

        </div>
    );
};

export default Quiz;