import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Topic = () => {
    const quizs = useLoaderData()
    const { data } = quizs
    const { id, logo, name, questions, total } = data
    return (
        <div className='mt-12'>
            <div className='flex justify-between items-center border-2 w-11/12 mx-auto bg-cyan-700 p-4 text-white mb-4 rounded-md'>
                <img className='w-24 border-2 bg-gray-400 rounded-full'
                    src={logo} alt="" />
                <p className='text-4xl'>{name}</p>
                <p className='text-2xl mr-8'>Total Questions - {total}</p>
            </div>
            <div>
                {
                    questions.map(EachQuestion => <Questions
                        key={data.id} EachQuestion={EachQuestion}
                    ></Questions>)
                }
            </div>


        </div>
    );
};

export default Topic;