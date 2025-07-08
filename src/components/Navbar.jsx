import React from 'react'
import Login from './Login';

const Navbar = ({ title, navItems }) => {
    return (
        <>
            <div className='fixed backdrop-blur-sm left-0 right-0 z-50 overflow-hidden'>

                <nav className='flex flex-row static px-56  justify-between items-center w-[100vw] gap-24 '>
                    <Logo title={title} />
                    <ul className='flex gap-8'>
                        {navItems.map((item, index) => (
                            <NavItem key={index} lable={item} />
                        ))}
                    </ul>
                <Login />
                </nav>
            </div>
        </>
    )
}

export default Navbar;

function Logo({ title }) {
    return (
        <>
            <div className='text-xl font-bold'>
                {title}
            </div>
        </>
    )
}

const NavItem = ({ lable }) => {
    return (
        <>
            <li className=' flex hover:text-sky-700 cursor-pointer'>
                {lable}
            </li>
        </>
    )
}