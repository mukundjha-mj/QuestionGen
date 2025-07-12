import React, { useRef } from 'react'
import Hero from './Hero'
import Features from './Features';
import Footer from './Footer';

const Home = () => {
    const featuresRef = useRef(null);

    return (
        <>
            <Hero />
            <Features ref={featuresRef} />
            <Footer />
        </>
    )
}

export default Home