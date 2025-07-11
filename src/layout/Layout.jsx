import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const navItems = ['Home', 'Services', 'About', 'Contact'];
    const [isScrolledToFeatures, setIsScrolledToFeatures] = useState(false);
    const featuresRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolledToFeatures(entry.isIntersecting);
            },
            {
                threshold: 0.84,
            }
        );

        const el = document.querySelector('.features-section');
        if (el) {
            observer.observe(el);
        }

        return () => {
            if (el) observer.unobserve(el);
        };
    }, [location]);

    return (
        <>
            <Navbar title="QuestionGen" logoSrc={'logo.png'} navItems={navItems} isScrolledToFeatures={isScrolledToFeatures} />
            <main>{children}</main>
        </>
    );
};

export default Layout;
