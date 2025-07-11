import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6'>
            <div className='mb-4'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                    </svg>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>{props.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{props.description}</p>
            </div>
        </div>
    )
}   

export default Card