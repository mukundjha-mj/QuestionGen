import React from 'react'

const Dashboard = () => {
  return (
    <div className='features-section min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-100 pt-20'>
      <div className='text-center px-4'>
        <div className='mb-8'>
          <div className='w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center'>
            <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
            </svg>
          </div>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>
            Dashboard
          </h1>
          <h2 className='text-2xl md:text-3xl font-semibold text-orange-600 mb-6'>
            Work in Progress
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Your personalized dashboard is being built! Soon you'll have access to powerful analytics, project management tools, and insights all in one place.
          </p>
        </div>
        <div className='flex items-center justify-center space-x-2 text-orange-500'>
          <div className='w-3 h-3 bg-orange-500 rounded-full animate-bounce'></div>
          <div className='w-3 h-3 bg-orange-500 rounded-full animate-bounce' style={{animationDelay: '0.1s'}}></div>
          <div className='w-3 h-3 bg-orange-500 rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
