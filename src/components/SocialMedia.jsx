import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialMedia = (props) => {
    return (
        <>
            <div className='flex items-center justify-center space-x-4'>
                <Link to={props.facebook} target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>
                    <FaFacebook size={25} />
                </Link>
                <Link to={props.twitter} target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 transition-colors duration-300'>
                    <FaTwitter size={25} />
                </Link>
                <Link to={props.instagram} target="_blank" rel="noopener noreferrer" className='text-pink-500 hover:text-pink-700 transition-colors duration-300'>
                    <FaInstagram size={25} />
                </Link>
            </div>
        </>
    )
}

export default SocialMedia