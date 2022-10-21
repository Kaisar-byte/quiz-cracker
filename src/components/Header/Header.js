import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import AOS from 'aos';


const Header = () => {

    return (
        <div className='py-2 bg-yellow-500 text-xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>
            <div className='w-5/6 mx-auto h-24 mx-auto flex sm:flex justify-between items-center'>
                <img src={logo} className="w-32 p-4 rounded-full" alt="" />
                <nav className='flex gap-3 text-2xl justify-start' >
                    <Link className='bg-blue-300 hover:bg-orange-300 px-6 py-2 rounded-lg hover:text-white' to='/home' data-aos="fade-up">Home</Link>
                    <Link className='bg-blue-300 hover:bg-orange-300 px-6 py-2 rounded-lg hover:text-white' to='/blog' data-aos="fade-down">Blogs</Link>
                    <Link className='bg-blue-300 hover:bg-orange-300 px-6 py-2 rounded-lg hover:text-white' to='/statistics' data-aos="fade-up">Statistics</Link>
                </nav>
            </div>
        </div>

    );
};

export default Header;