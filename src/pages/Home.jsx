import React, { useRef } from 'react'
import Hero from './Hero'
import Features from './Features';

const Home = () => {
    const featuresRef = useRef(null);

    return (
        <>
            <Hero />
            <Features ref={featuresRef} />
        </>
    )
}

export default Home