import React from 'react';
import { Link } from 'react-router-dom';
import webLogo from '../../images/logo.png'

const Header = () => {
    return (
        <div className='w-5/6 h-36 leading-none mx-auto flex justify-between align-middle shadow-lg content-center'>
            <img src={webLogo} alt="" className='m-4' />
            <nav className='grid grid-cols-4 content-center text-2xl'>
                <Link to="/home">Home</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/statistics">Statistics</Link>
            </nav>
        </div>
    );
};

export default Header;