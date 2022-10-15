import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </div>
    );
};

export default Header;