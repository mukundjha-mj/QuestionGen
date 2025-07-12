import React from 'react'

const About = () => {
    return (
        <div className='features-section min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 pt-20'>
            <div className='text-center px-4'>
                <div className='mb-8'>
                    <div className='w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center'>
                        <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                        </svg>
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>
                        About Us
                    </h1>
                    <h2 className='text-2xl md:text-3xl font-semibold text-green-600 mb-6'>
                        Work in Progress
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                        Our story is being written! We're crafting a compelling about page that will tell you everything about our mission, vision, and the amazing team behind this project.
                    </p>
                </div>
                <div className='flex items-center justify-center space-x-2 text-green-500'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-bounce'></div>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-bounce' style={{ animationDelay: '0.1s' }}></div>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    )
}

export default About
