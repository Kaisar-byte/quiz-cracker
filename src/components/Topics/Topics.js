import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Topics = ({ topic }) => {

    const { id, name, logo, total } = topic

    return (
        <div data-aos="flip-left" className='border-2 rounded-3xl bg-cyan-500 px-2 flex h-full py-24'>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <img className='w-5/6 mr-4 rounded-full bg-red-400' src={logo} alt="" />
            </div>
            <div className='flex flex-col gap-4 mt-8 justify-center item-center pr-4'>
                <p className='text-2xl mx-4 rounded-3xl -mt-12 border-2'>{total} Quiz</p>

                <div className='flex flex-col justify-end items-center gap-4'>
                    <p className='text-4xl font-bold text-rose-800'>{name}</p>

                    <Link className='w-40 py-2 border-2 rounded-lg bg-blue-500 text-white text-2xl' to={`/topic/${id}`}>Practice Quiz</Link>

                </div>
            </div>
        </div>
    );
};

export default Topics;