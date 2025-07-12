import React, { useState } from 'react'
import Login from '../pages/Auth';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Navbar = ({ title, navItems, logoSrc, isScrolledToFeatures }) => {
    const navigate = useNavigate();

    function handleLoginChange() {
        navigate('/account/login')
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const buttonBgClass = isScrolledToFeatures ? 'bg-blue-600 text-white' : 'bg-white text-black';
    const menuBg = isScrolledToFeatures ? 'bg-white/90' : 'bg-slate-900/90';

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 backdrop-blur-sm w-full flex justify-center items-center z-50 py-2 px-2 sm:px-4`}>
                <nav className='flex justify-between items-center w-full max-w-7xl relative'>
                    <Logo title={title} logoSrc={logoSrc} isScrolledToFeatures={isScrolledToFeatures} onLogoClick={() => setIsMenuOpen(false)} />
                    
                    {/* Desktop Navigation - hidden on mobile and tablet, shown on large screens */}
                    <ul className='hidden lg:flex gap-6 xl:gap-8'>
                        {navItems.map((item, index) => (
                            <NavItem key={index} lable={item} isScrolledToFeatures={isScrolledToFeatures} />
                        ))}
                    </ul>
                    
                    {/* Medium screens navigation - compact version */}
                    <ul className='hidden md:flex lg:hidden gap-4'>
                        {navItems.map((item, index) => (
                            <NavItem key={index} lable={item} isScrolledToFeatures={isScrolledToFeatures} />
                        ))}
                    </ul>
                    
                    {/* Desktop Get Started Button */}
                    <div className='hidden md:flex gap-2 lg:gap-4'>
                        <Button 
                            label='Get Started' 
                            className={`${buttonBgClass} px-3 py-2 md:px-4 rounded-md cursor-pointer text-sm md:text-base`} 
                            onClick={handleLoginChange} 
                        />
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <Button
                            label={<FaBars />}
                            className={`${buttonBgClass} px-3 py-2 rounded-md cursor-pointer`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>
                </nav>
                
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-md ${menuBg} shadow-lg border-t border-white/10`}>
                        <div className='px-4 py-4'>
                            <ul className='flex flex-col space-y-4  font-[600] mb-4'>
                                {navItems.map((item, index) => (
                                    <NavItem key={index} lable={item} isScrolledToFeatures={isScrolledToFeatures} onItemClick={() => setIsMenuOpen(false)} />
                                ))}
                            </ul>
                            <Button 
                                label='Get Started' 
                                className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer w-full transition-colors duration-300' 
                                onClick={() => {
                                    handleLoginChange();
                                    setIsMenuOpen(false);
                                }}
                            />
                        </div>
                    </div>
                )}
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
    
    // Debug logging
    console.log('Logo - isScrolledToFeatures:', props.isScrolledToFeatures);
    console.log('Logo - textColorClass:', textColorClass);
    
    return (
        <>
            <div className={`text-lg md:text-xl font-bold transition-colors duration-300 ${textColorClass} flex-shrink-0`}>
                <Link to='/' className={`flex items-center justify-center ${textColorClass}`} onClick={props.onLogoClick}>
                    <img src={props.logoSrc} alt="logo" className="w-8 h-8 md:w-10 md:h-10 mr-2" style={logoStyle} />
                    <span className={`sm:inline lg:inline xl:inline ${textColorClass}`}>{props.title}</span>
                    
                </Link>
            </div>
        </>
    )
}

const NavItem = ({ lable, isScrolledToFeatures, onItemClick }) => {
    const path = lable.toLowerCase() === 'home' ? '/' : `/${lable.toLowerCase()}`;
    const colorClass = isScrolledToFeatures ? 'text-black' : 'text-white';
    const hoverColorClass = isScrolledToFeatures ? 'hover:text-gray-600' : 'hover:text-sky-700';
    return (
        <>
            <li className={`cursor-pointer transition-colors duration-300 ${colorClass} ${hoverColorClass} py-2 px-1 text-sm md:text-base`}>
                <Link to={path} className="block w-full whitespace-nowrap" onClick={onItemClick}>{lable}</Link>
            </li>
        </>
    )
}