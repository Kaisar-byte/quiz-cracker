import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {

    return (
        <div className='py-2 bg-yellow-500 text-xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            <div className='w-5/6 h-24 mx-auto flex justify-between items-center'>
                <img src={logo} className="w-32 p-4 rounded-t-full -mb-6" alt="" />
                <nav className='grid grid-cols-3 gap-3 text-2xl '>
                    <Link className='bg-blue-300 hover:bg-orange-300 px-6 py-2 rounded-full hover:text-white' to='/home'>Home</Link>
                    <Link className='bg-blue-300 hover:bg-orange-300 px-6 py-2 rounded-full hover:text-white' to='/topics'>Topics</Link>
                    <Link className='bg-blue-300 hover:bg-orange-300 px-6 py-2 rounded-full hover:text-white' to='/statistics'>Statistics</Link>
                </nav>
            </div>
        </div>

    );
};

export default Header;