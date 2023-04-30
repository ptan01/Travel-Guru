import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar  container mx-auto ">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-2xl">Travel Guru</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/destination'>Destination</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;