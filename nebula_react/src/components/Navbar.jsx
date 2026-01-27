import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // If on Market page
        if (location.pathname === '/market') {
            setActiveLink('market');
            return;
        }

        if (location.pathname === '/report') {
            setActiveLink('report');
            return;
        }

        if (location.pathname === '/portfolio') {
            setActiveLink('portfolio');
            return;
        }

        // If on Home page, use Scroll Spy
        const handleScroll = () => {
            // Include 'about' section which is usually explicitly linked
            // Note: 'home' is technically the top hero section
            // 'reports' and 'portfolio' are placeholders at bottom.
            const sections = ['home', 'about'];
            let current = 'home';

            // If near top, force home
            if (window.scrollY < 100) {
                setActiveLink('home');
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const sectionTop = element.offsetTop;
                    // standard offset for sticky header
                    if (window.scrollY >= sectionTop - 150) {
                        current = section;
                    }
                }
            }
            setActiveLink(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    // Helper to get class name
    const getLinkClass = (name) => {
        return activeLink === name ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Nebula Financial Services" /></Link>
                </div>
                <div className="nav-links" style={isMenuOpen ? { display: 'flex' } : {}}>
                    <ul>
                        <li><Link to="/#home" className={getLinkClass('home')} onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/#about" className={getLinkClass('about')} onClick={closeMenu}>About</Link></li>
                        <li><Link to="/market" className={getLinkClass('market')} onClick={closeMenu}>Markets</Link></li>
                        <li><Link to="/report" className={getLinkClass('report')} onClick={closeMenu}>Reports</Link></li>
                        <li><Link to="/portfolio" className={getLinkClass('portfolio')} onClick={closeMenu}>Portfolio</Link></li>
                    </ul>
                </div>
                <div className="nav-cta">
                    <button className="btn-get-started">Get Started</button>
                </div>
                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    id="menuToggle"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
