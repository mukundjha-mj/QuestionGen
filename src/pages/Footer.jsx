import React from 'react'
import SocialMedia from '../components/SocialMedia'

const Footer = () => {
    return (
        <div className='bg-white text-black w-full py-4 sm:py-6 md:py-8 border-t-2 border-gray-200'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6'>
                    <div className='sm:absolute sm:left-10  lg:left-20 flex items-center justify-center space-x-4'>
                        <SocialMedia
                            facebook="https://facebook.com"
                            twitter="https://twitter.com"
                            instagram="https://instagram.com"
                        />
                    </div>
                    <p className='text-center text-sm sm:text-base'>
                        © 2025 Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer