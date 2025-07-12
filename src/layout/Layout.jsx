import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import Logo from '/logo.png';

const Layout = ({ children }) => {
    const navItems = ['Home', 'Services', 'About', 'Contact'];
    const [isScrolledToFeatures, setIsScrolledToFeatures] = useState(false);
    const featuresRef = useRef(null);
    const location = useLocation();

    // Debug logging for state changes
    useEffect(() => {
        console.log('Layout - isScrolledToFeatures changed to:', isScrolledToFeatures);
    }, [isScrolledToFeatures]);

    useEffect(() => {
        // Check if device is mobile
        const isMobile = window.innerWidth <= 768;
        
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('Intersection observed:', entry.isIntersecting, 'Mobile:', isMobile);
                setIsScrolledToFeatures(entry.isIntersecting);
            },
            {
                threshold: isMobile ? 0.1 : 0.84, // Lower threshold for mobile
                rootMargin: isMobile ? '-50px 0px' : '0px' // Adjust trigger point on mobile
            }
        );

        const el = document.querySelector('.features-section');
        if (el) {
            observer.observe(el);
            console.log('Observer attached to features section');
        } else {
            console.log('Features section not found');
        }

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [location]);

    return (
        <>
            <Navbar title="QuestionGen" logoSrc={Logo} navItems={navItems} isScrolledToFeatures={isScrolledToFeatures} />
            <main>{children}</main>
        </>
    );
};

export default Layout;
