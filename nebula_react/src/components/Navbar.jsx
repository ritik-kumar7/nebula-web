import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open on mobile
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setOpenDropdown(null);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setOpenDropdown(null);
    };

    const toggleDropdown = (name, e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            setOpenDropdown(openDropdown === name ? null : name);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992) {
                setIsMenuOpen(false);
                setOpenDropdown(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Set active link based on current pathname
        const path = location.pathname;

        if (path === '/' || path === '') {
            setActiveLink('home');
        } else if (path === '/about') {
            setActiveLink('about');
        } else if (path === '/account-types') {
            setActiveLink('account-types');
        } else if (path === '/academy') {
            setActiveLink('academy');
        } else if (path === '/contact-us') {
            setActiveLink('contact');
        } else if (path === '/forex' || path === '/metals' || path === '/oil-commodities' || path === '/spot-index' || path === '/crypto') {
            setActiveLink('instruments');
        } else if (path === '/margin-calculator' || path === '/profit-calculator') {
            setActiveLink('calculator');
        } else if (path === '/market') {
            setActiveLink('market');
        } else if (path === '/report') {
            setActiveLink('report');
        } else if (path === '/portfolio') {
            setActiveLink('portfolio');
        } else {
            setActiveLink('');
        }
    }, [location.pathname]);

    const getLinkClass = (name) => activeLink === name ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Nebula Financial Services" /></Link>
                </div>
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/" className={getLinkClass('home')} onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/about" className={getLinkClass('about')} onClick={closeMenu}>About</Link></li>
                        <li><Link to="/account-types" className={getLinkClass('account-types')} onClick={closeMenu}>Account Types</Link></li>

                        <li className={`dropdown ${openDropdown === 'instruments' ? 'active' : ''} ${getLinkClass('instruments') ? 'nav-active' : ''}`}>
                            <Link to="#" onClick={(e) => toggleDropdown('instruments', e)}>
                                <span>Instruments List</span> <i className="bi bi-chevron-down"></i>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/forex" onClick={closeMenu}>Forex</Link></li>
                                <li><Link to="/metals" onClick={closeMenu}>Metals</Link></li>
                                <li><Link to="/oil-commodities" onClick={closeMenu}>Oil & Commodities</Link></li>
                                <li><Link to="/spot-index" onClick={closeMenu}>Spot Index</Link></li>
                                <li><Link to="/crypto" onClick={closeMenu}>Cryptocurrency</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/academy" className={getLinkClass('academy')} onClick={closeMenu}>Academy</Link></li>

                        <li className={`dropdown ${openDropdown === 'calculator' ? 'active' : ''} ${getLinkClass('calculator') ? 'nav-active' : ''}`}>
                            <Link to="#" onClick={(e) => toggleDropdown('calculator', e)}>
                                <span>Calculator</span> <i className="bi bi-chevron-down"></i>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/margin-calculator" onClick={closeMenu}>Margin Calculator</Link></li>
                                <li><Link to="/profit-calculator" onClick={closeMenu}>Profit Calculator</Link></li>
                            </ul>
                        </li>

                        <li className={`dropdown ${openDropdown === 'platform' ? 'active' : ''}`}>
                            <Link to="#" onClick={(e) => toggleDropdown('platform', e)}>
                                <span>Platform</span> <i className="bi bi-chevron-down"></i>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noreferrer" onClick={closeMenu}>MT5 for Windows</a></li>
                                <li><a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noreferrer" onClick={closeMenu}>MT5 for Android</a></li>
                                <li><a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noreferrer" onClick={closeMenu}>MT5 for IOS</a></li>
                            </ul>
                        </li>

                        <li><Link to="/contact-us" className={getLinkClass('contact')} onClick={closeMenu}>Contact</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noreferrer" className="btn-get-started">Get Started</a>
                    <button
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
