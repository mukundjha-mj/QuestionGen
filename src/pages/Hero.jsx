import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className='hero-bg min-h-screen flex flex-col items-center justify-center relative'>
          {/* Blurred floating shapes */}
          <div className="blur-shape blur-blue"></div>
          <div className="blur-shape blur-cyan"></div>
          <div className="blur-shape blur-purple"></div>
          <div className="blur-shape blur-light"></div>
          <div className="container  flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-between w-full pt-20 md:pt-32 z-10">
              {/* Left: Headline, subheadline, buttons */}
              <div className="flex-1 flex flex-col items-start justify-center px-2 md:px-8 pb-20 md:pb-32">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Transform <br />
                  Handwritten Questions <br />
                  into Perfect Papers
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                  Upload, Extract, Generate, The smartest way for faculty to create exam papers from notebook images.
                </p>
                <div className="flex gap-4 mb-8">
                  <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-100 transition">Start Free Trial</button>
                  <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition border border-blue-400">Watch Demo</button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              className="block w-full"
              height="120"
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,32 C360,120 1080,0 1440,96 L1440,120 L0,120 Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div >
      </div>
    </>
  )
}

export default Hero