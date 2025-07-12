import React from 'react'

const Contact = () => {
  return (
    <div className='features-section min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 pt-20'>
      <div className='text-center px-4'>
        <div className='mb-8'>
          <div className='w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center'>
            <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
            </svg>
          </div>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>
            Contact Us
          </h1>
          <h2 className='text-2xl md:text-3xl font-semibold text-purple-600 mb-6'>
            Work in Progress
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            We're building the perfect way for you to reach out to us! Our contact page is under construction and will soon feature multiple ways to get in touch with our team.
          </p>
        </div>
        <div className='flex items-center justify-center space-x-2 text-purple-500'>
          <div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce'></div>
          <div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce' style={{animationDelay: '0.1s'}}></div>
          <div className='w-3 h-3 bg-purple-500 rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Contact
