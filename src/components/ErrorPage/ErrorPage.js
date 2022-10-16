import React from 'react';
import logoFroErrorPage from '../../images/404-errors.png'

const ErrorPage = () => {
    return (
        <div>
            <div className='bg-amber-400 w-1/2 mx-auto mt-12 rounded-lg shadow-2xl shadow-emerald-300'>
                <h2 className='bg-yellow-600 text-2xl py-8 rounded-tl-lg rounded-tr-lg '>website not found or error may be occured in your site</h2>
                <div className='flex justify-between px-12 py-32'>
                    <p className='text-9xl bg-blue-300 p-9 rounded-3xl'>4</p>
                    <p className='text-9xl bg-blue-300 p-9 rounded-3xl'>0</p>
                    <p className='text-9xl bg-blue-300 p-9 rounded-3xl'>4</p>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default ErrorPage;