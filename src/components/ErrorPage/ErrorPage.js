import React from 'react';
import logoImage from '../../images/404-errors.png'

const ErrorPage = () => {
    return (
        <div className='bg-pink-500 p-12 mx-auto'>
            <img src={logoImage} alt="" className='ml-20' />
        </div>
    );
};

export default ErrorPage;