import React, { useState } from 'react'
import Login from '../pages/Auth';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ title, navItems, logoSrc, isScrolledToFeatures }) => {
    const navigate = useNavigate();

    function handleLoginChange() {
        navigate('/account/login')
    }

    const buttonBgClass = isScrolledToFeatures ? 'bg-blue-600 text-white' : 'bg-white text-black';

    return (
        <>
            <div className={`fixed backdrop-blur-sm left-0 flex pt-3  justify-center items-center right-0 z-50 overflow-hidden py-2`}>

                <nav className='flex flex-row static px-44 justify-between items-center w-[100vw] gap-24 '>
                    <Logo title={title} logoSrc={logoSrc} isScrolledToFeatures={isScrolledToFeatures} />
                    <ul className='flex gap-8'>
                        {navItems.map((item, index) => (
                            <NavItem key={index} lable={item} isScrolledToFeatures={isScrolledToFeatures} />
                        ))}
                    </ul>
                    <div className='flex gap-4'>
                        <Button label='Get Started' className={`${buttonBgClass} px-4 py-2 rounded-md cursor-pointer`} onClick={handleLoginChange} />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;

function Logo(props) {
    const textColorClass = props.isScrolledToFeatures ? 'text-black' : 'text-white';
    const logoStyle = props.isScrolledToFeatures ? { filter: 'brightness(0) invert(0)' } : {
        filter: 'none',
    };
    return (
        <>
            <div className={`text-xl font-bold transition-colors duration-300 ${textColorClass}`}>
                <Link to='/' className='flex items-center justify-center'>
                    <img src={props.logoSrc} alt="logo" className="w-10 h-10 mr-2" style={logoStyle} />
                    {props.title}
                </Link>
            </div>
        </>
    )
}

const NavItem = ({ lable, isScrolledToFeatures }) => {
    const path = lable.toLowerCase() === 'home' ? '/' : `/${lable.toLowerCase()}`;
    const colorClass = isScrolledToFeatures ? 'text-black' : 'text-white';
    const hoverColorClass = isScrolledToFeatures ? 'hover:text-gray-600' : 'hover:text-sky-700';
    return (
        <>
            <li className={`flex cursor-pointer transition-colors duration-300 ${colorClass} ${hoverColorClass}`}>
                <Link to={path}>{lable}</Link>
            </li>
        </>
    )
}