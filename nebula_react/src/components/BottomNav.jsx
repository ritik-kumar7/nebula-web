import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const BottomNav = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        if (location.pathname === '/market') {
            setActiveSection('markets');
            return;
        }

        if (location.pathname === '/report') {
            setActiveSection('report');
            return;
        }

        if (location.pathname === '/portfolio') {
            setActiveSection('portfolio');
            return;
        }

        const handleScroll = () => {
            // Logic matches original index.html scroll spy
            const sections = ['home'];
            let current = 'home';
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const sectionTop = element.offsetTop;
                    if (window.scrollY >= sectionTop - 250) {
                        current = section;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const isActive = (name) => {
        if (location.pathname.includes('market')) {
            return name === 'markets';
        }
        if (location.pathname.includes('report')) {
            return name === 'report';
        }
        if (location.pathname.includes('portfolio')) {
            return name === 'portfolio';
        }
        return activeSection === name;
    };

    return (
        <nav className="bottom-nav">
            <Link to="/#home" className={`bottom-nav-item ${isActive('home') ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>Home</span>
            </Link>
            <Link to="/market" className={`bottom-nav-item ${isActive('markets') ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
                <span>Markets</span>
            </Link>
            <Link to="/report" className={`bottom-nav-item ${isActive('report') ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
                <span>Reports</span>
            </Link>
            <Link to="/portfolio" className={`bottom-nav-item ${isActive('portfolio') ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                </svg>
                <span>Portfolio</span>
            </Link>
        </nav>
    );
};
export default BottomNav;
