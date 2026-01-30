import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const BottomNav = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Set active section based on current pathname
        const path = location.pathname;

        if (path === '/' || path === '') {
            setActiveSection('home');
        } else if (path === '/about') {
            setActiveSection('about');
        } else if (path === '/academy') {
            setActiveSection('academy');
        } else if (path === '/contact-us') {
            setActiveSection('contact');
        } else if (path === '/account-types') {
            setActiveSection('accounts');
        } else if (path === '/market') {
            setActiveSection('markets');
        } else if (path === '/report') {
            setActiveSection('report');
        } else if (path === '/portfolio') {
            setActiveSection('portfolio');
        } else {
            setActiveSection('');
        }
    }, [location.pathname]);

    const isActive = (name) => {
        return activeSection === name;
    };

    return (
        <nav className="bottom-nav">
            <Link to="/" className={`bottom-nav-item ${isActive('home') ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span>Home</span>
            </Link>
            <Link to="/about" className={`bottom-nav-item ${isActive('about') ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <span>About</span>
            </Link>
            <Link to="/academy" className={`bottom-nav-item ${isActive('academy') ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 16l-5 2.72-5-2.72v-3.45l5 2.73 5-2.73V16z" />
                </svg>
                <span>Academy</span>
            </Link>
            <Link to="/contact-us" className={`bottom-nav-item ${isActive('contact') ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Contact</span>
            </Link>
            <Link to="/account-types" className={`bottom-nav-item ${isActive('accounts') ? 'active' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <span>Accounts</span>
            </Link>
        </nav>
    );
};
export default BottomNav;
