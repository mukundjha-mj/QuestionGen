import React from 'react'

const Services = () => {
  return (
    <div className='features-section min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20'>
      <div className='text-center px-4'>
        <div className='mb-8'>
          <div className='w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center'>
            <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.172V5L8 4z' />
            </svg>
          </div>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>
            Services
          </h1>
          <h2 className='text-2xl md:text-3xl font-semibold text-blue-600 mb-6'>
            Work in Progress
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            We're working hard to bring you amazing services. This page is currently under development and will be available soon with exciting features and offerings.
          </p>
        </div>
        <div className='flex items-center justify-center space-x-2 text-blue-500'>
          <div className='w-3 h-3 bg-blue-500 rounded-full animate-bounce'></div>
          <div className='w-3 h-3 bg-blue-500 rounded-full animate-bounce' style={{animationDelay: '0.1s'}}></div>
          <div className='w-3 h-3 bg-blue-500 rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Services