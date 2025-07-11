import React, { forwardRef } from 'react'
import Card from '../components/Card'

const Features = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='features-section w-full bg-white text-black py-16'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Features</h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Discover powerful tools designed to streamline your exam paper creation process
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <Card title="Smart OCR Extraction" description="Accurately extract text from handwritten notes with advanced AI technology" />
                    <Card title="Custom Format Support" description="Generate papers in multiple formats including PDF, Word, and custom layouts" />
                    <Card title="Secure User Management" description="Manage user accounts with robust security and role-based access control" />
                    <Card title="One-Click PDF Generation" description="Instantly create professional PDFs from selected questions with custom styling" />
                </div>
            </div>
        </div>
    )
})

export default Features