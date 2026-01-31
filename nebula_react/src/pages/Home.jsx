import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Handle scroll to hash on load or location change
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                // Determine header offset based on screen size if needed, 
                // but standard scrollIntoView is usually fine or we can use window.scrollTo
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure render
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <main>
            {/* Hero Section */}
            <section id="home" className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="gradient-text">Global Markets.</span><br />
                        <span className="gradient-text">Smart Trading.</span>
                    </h1>
                    <p className="hero-subtitle">Institutional finance you can trust.</p>
                    <div className="hero-buttons">
                        <a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noreferrer" className="btn-primary">Get Started</a>
                        <Link to="/about" className="btn-secondary">Learn More</Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="about-container">
                    <h2 className="section-title gradient-text">Why Choose Nebula Finserv?</h2>

                    <div className="features-grid">
                        {/* Card 1 */}
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <h3 className="card-title">India + UAE Expertise</h3>
                            </div>
                            <p className="card-description">Deep market knowledge and regional expertise across the UAE.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <path d="M3 9h18M9 21V9" />
                                        <path d="M13 13h4M13 17h4" />
                                    </svg>
                                </div>
                                <h3 className="card-title">Smart Trading Strategies</h3>
                            </div>
                            <p className="card-description">Advanced, data-driven trading strategies tailored for institutional clients.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="card-title">Regulation & Transparency</h3>
                            </div>
                            <p className="card-description">Adhering to the highest standards of regulatory compliance and clarity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Section */}
            <section id="trusted" className="trusted-section">
                <div className="trusted-container">
                    <h2 className="trusted-title">
                        <span className="gradient-text-white">Trusted.</span>
                        <span className="gradient-text-white">Transparent.</span>
                        <span className="gradient-text-white">Performance-Driven.</span>
                    </h2>
                </div>
            </section>

            {/* Strategic Approach Section (and reports/portfolio placeholder essentially) */}
            <section id="strategy" className="strategy-section">
                <div className="strategy-container">
                    <div className="strategy-content">
                        <div className="strategy-left">
                            <h2 className="strategy-title">
                                <span className="gradient-text">Strategic Approach.</span><br />
                                <span className="gradient-text">Proven Results.</span>
                            </h2>
                            <p className="strategy-description">
                                We combine deep market knowledge, advanced trading algorithms, and rigorous risk management to
                                deliver consistent results.
                            </p>
                            <div className="strategy-chart">
                                <svg viewBox="0 0 400 200" className="chart-svg">
                                    {/* Grid lines */}
                                    <line x1="40" y1="150" x2="380" y2="150" stroke="rgba(212, 168, 83, 0.1)" strokeWidth="1" />
                                    <line x1="40" y1="100" x2="380" y2="100" stroke="rgba(212, 168, 83, 0.1)" strokeWidth="1" />
                                    <line x1="40" y1="50" x2="380" y2="50" stroke="rgba(212, 168, 83, 0.1)" strokeWidth="1" />
                                    {/* Axes */}
                                    <line x1="40" y1="150" x2="380" y2="150" stroke="rgba(212, 168, 83, 0.3)" strokeWidth="2" />
                                    <line x1="40" y1="150" x2="40" y2="20" stroke="rgba(212, 168, 83, 0.3)" strokeWidth="2" />

                                    {/* Area Fill (Under the curve) */}
                                    <path d="M 40 150 L 40 130 C 100 110, 180 80, 280 40 C 320 25, 360 20, 380 15 L 380 150 Z"
                                        fill="url(#goldAreaGradient)" opacity="0.2" />

                                    {/* Glow curve path */}
                                    <path d="M 40 130 C 100 110, 180 80, 280 40 C 320 25, 360 20, 380 15" fill="none"
                                        stroke="url(#goldGradient)" strokeWidth="4" opacity="0.4" filter="url(#glow)" />
                                    {/* Main curve */}
                                    <path d="M 40 130 C 100 110, 180 80, 280 40 C 320 25, 360 20, 380 15" fill="none"
                                        stroke="url(#goldGradient)" strokeWidth="2" />

                                    {/* Points on curve */}
                                    <circle cx="40" cy="130" r="3" fill="#d4a853" />
                                    <circle cx="160" cy="85" r="3" fill="#d4a853" />
                                    <circle cx="280" cy="40" r="4" fill="#e8c56c" />
                                    <circle cx="380" cy="15" r="3" fill="#d4a853" />

                                    {/* Labels */}
                                    <text x="40" y="170" fontSize="11" fill="rgba(212, 168, 83, 0.6)" fontFamily="Playfair Display">2023</text>
                                    <text x="150" y="170" fontSize="11" fill="rgba(212, 168, 83, 0.6)" fontFamily="Playfair Display">2024</text>
                                    <text x="260" y="170" fontSize="11" fill="rgba(212, 168, 83, 0.6)" fontFamily="Playfair Display">2025</text>
                                    <text x="360" y="170" fontSize="11" fill="rgba(212, 168, 83, 0.6)" fontFamily="Playfair Display">2026</text>
                                    <text x="15" y="155" fontSize="10" fill="rgba(212, 168, 83, 0.6)" fontFamily="Playfair Display">$50M</text>
                                    <text x="10" y="105" fontSize="10" fill="rgba(212, 168, 83, 0.6)" fontFamily="Playfair Display">120%</text>


                                    {/* Defs for gradients and filters */}
                                    <defs>
                                        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#d4a853', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#e8c56c', stopOpacity: 1 }} />
                                        </linearGradient>
                                        <linearGradient id="goldAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: '#d4a853', stopOpacity: 0.4 }} />
                                            <stop offset="100%" style={{ stopColor: '#d4a853', stopOpacity: 0 }} />
                                        </linearGradient>
                                        <filter id="glow">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>
                                </svg>
                                <div className="chart-badge">
                                    <div className="badge-value">$325M</div>
                                    <div className="badge-label">AUM</div>
                                    <div className="badge-growth">+85% CAGR</div>
                                </div>
                            </div>
                        </div>
                        <div className="strategy-right">
                            <div className="strategy-feature">
                                <div className="feature-icon">🇮🇳</div>
                                <h3 className="feature-name">India + UAE Market<br />Expertise</h3>
                                <p className="feature-desc">In-depth regional insights and access to key markets.</p>
                            </div>
                            <div className="strategy-feature">
                                <div className="feature-icon">🎓</div>
                                <h3 className="feature-name">Smart Trading<br />Strategies</h3>
                                <p className="feature-desc">Data-driven trading algorithms designed for institutional success.</p>
                            </div>
                            <div className="strategy-feature">
                                <div className="feature-icon">🛡️</div>
                                <h3 className="feature-name">Robust Risk<br />Management</h3>
                                <p className="feature-desc">Strict risk controls and regulatory adherence.</p>
                            </div>
                        </div>
                    </div>
                    <p className="strategy-tagline">
                        <span className="gradient-text">Achieving Wealth Growth Through Smart Investments</span><br />
                        <span className="gradient-text">and Rigorous Risk Controls.</span>
                    </p>
                </div>
            </section>

            {/* Why Us Section */}
            <section id="why-us" className="why-us-section">
                <div className="why-us-container">
                    <div className="section-badge">WHY US</div>
                    <h2 className="why-us-title">
                        Forex Trading with <span className="gradient-text">Nebula Financial Services Ltd</span>
                    </h2>
                    <p className="why-us-subtitle">
                        Nebula Financial Services Ltd offers state of art technology with tight spreads & superior trading conditions.
                    </p>

                    <div className="why-us-grid">
                        <div className="why-us-card">
                            <div className="why-us-icon">
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="8" y="40" width="8" height="16" fill="currentColor" opacity="0.6" />
                                    <rect x="20" y="32" width="8" height="24" fill="currentColor" opacity="0.7" />
                                    <rect x="32" y="24" width="8" height="32" fill="currentColor" opacity="0.8" />
                                    <rect x="44" y="16" width="8" height="40" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="why-us-value">0.1 Pips</h3>
                            <p className="why-us-label">Low Spreads From</p>
                        </div>

                        <div className="why-us-card">
                            <div className="why-us-icon">
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="3" fill="none" />
                                    <text x="32" y="38" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">$</text>
                                    <path d="M32 8 L36 16 L28 16 Z" fill="currentColor" />
                                    <path d="M32 56 L28 48 L36 48 Z" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="why-us-value">500</h3>
                            <p className="why-us-label">Leverage Up to 1</p>
                        </div>

                        <div className="why-us-card">
                            <div className="why-us-icon">
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="8" y="16" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <rect x="36" y="16" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <rect x="8" y="34" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <rect x="36" y="34" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M18 20 L18 26 M14 23 L22 23" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="46" cy="23" r="3" fill="currentColor" />
                                    <path d="M40 41 L52 41" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="18" cy="41" r="3" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="why-us-value">70+</h3>
                            <p className="why-us-label">Instruments</p>
                        </div>

                        <div className="why-us-card">
                            <div className="why-us-icon">
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="28" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M32 20 L32 28 L38 28" stroke="currentColor" strokeWidth="2" />
                                    <path d="M20 44 L28 36" stroke="currentColor" strokeWidth="2" />
                                    <path d="M44 44 L36 36" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="16" cy="48" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <circle cx="48" cy="48" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                            <h3 className="why-us-value">True</h3>
                            <p className="why-us-label">ECN/STP</p>
                        </div>

                        <div className="why-us-card">
                            <div className="why-us-icon">
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="16" y="24" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M16 32 L48 32" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="32" cy="16" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <text x="32" y="20" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold">$</text>
                                </svg>
                            </div>
                            <h3 className="why-us-value">Easy</h3>
                            <p className="why-us-label">Funding</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Trading Section */}
            <section id="start-trading" className="start-trading-section">
                <div className="start-trading-container">
                    <div className="section-badge">FOREX TRADING</div>
                    <h2 className="start-trading-title">
                        Start Forex Trading <span className="gradient-text">IN MINUTES</span>
                    </h2>
                    <p className="start-trading-subtitle">
                        Start Forex Trading with Us. It's Easy, and takes only a few minutes!
                    </p>

                    <div className="start-trading-grid">
                        <div className="trading-step-card">
                            <div className="step-icon">
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="16" y="8" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M20 36 L44 36 M20 42 L44 42" stroke="currentColor" strokeWidth="2" />
                                    <rect x="24" y="52" width="16" height="4" rx="1" fill="currentColor" />
                                </svg>
                            </div>
                            <h3 className="step-title">Register</h3>
                            <p className="step-description">Register the trading account with your information.</p>
                        </div>

                        <div className="trading-step-card">
                            <div className="step-icon">
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="32" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <text x="24" y="37" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">$</text>
                                    <path d="M38 18 L52 18 L52 8" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="52" cy="8" r="4" fill="currentColor" />
                                    <path d="M42 28 L48 22 M42 22 L48 28" stroke="currentColor" strokeWidth="2" />
                                    <path d="M40 44 C44 40, 52 42, 52 48 L52 56 L40 56 L40 48" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </div>
                            <h3 className="step-title">Fund</h3>
                            <p className="step-description">Fund your trading with the payment method of your choice.</p>
                        </div>

                        <div className="trading-step-card">
                            <div className="step-icon">
                                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <circle cx="44" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <circle cx="32" cy="44" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <path d="M20 26 L32 36 M44 26 L32 36" stroke="currentColor" strokeWidth="2" />
                                    <text x="32" y="48" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold">$</text>
                                    <path d="M8 16 L14 16 M8 20 L14 20 M8 24 L14 24" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M50 16 L56 16 M50 20 L56 20 M50 24 L56 24" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <h3 className="step-title">Trade</h3>
                            <p className="step-description">Submit the required KYC and you are ready to trade!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Become IB Section */}
            <section id="become-ib" className="become-ib-section">
                <div className="become-ib-container">
                    <div className="become-ib-content">
                        <div className="become-ib-image">
                            <div className="ib-image-placeholder">
                                <svg viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Monitor */}
                                    <rect x="60" y="30" width="180" height="130" rx="8" stroke="currentColor" strokeWidth="3" fill="rgba(0,200,150,0.1)" />
                                    <rect x="70" y="40" width="160" height="100" fill="rgba(0,200,150,0.2)" />
                                    {/* Money stacks */}
                                    <rect x="90" y="60" width="40" height="60" fill="rgba(100,200,100,0.4)" rx="2" />
                                    <rect x="95" y="55" width="40" height="60" fill="rgba(100,200,100,0.5)" rx="2" />
                                    <rect x="100" y="50" width="40" height="60" fill="rgba(100,200,100,0.6)" rx="2" />
                                    <rect x="140" y="70" width="35" height="50" fill="rgba(100,200,100,0.4)" rx="2" />
                                    <rect x="145" y="65" width="35" height="50" fill="rgba(100,200,100,0.5)" rx="2" />
                                    <rect x="150" y="60" width="35" height="50" fill="rgba(100,200,100,0.7)" rx="2" />
                                    {/* Chart lines */}
                                    <path d="M200 100 L210 85 L220 95 L230 70" stroke="currentColor" strokeWidth="2" />
                                    {/* Stand */}
                                    <rect x="130" y="160" width="40" height="10" fill="currentColor" opacity="0.5" />
                                    <rect x="110" y="170" width="80" height="8" rx="2" fill="currentColor" opacity="0.4" />
                                    {/* People */}
                                    <circle cx="40" cy="180" r="10" fill="#e8a040" />
                                    <path d="M30 195 L30 230 M50 195 L50 230 M30 210 L50 210" stroke="#e8a040" strokeWidth="4" />
                                    <circle cx="260" cy="180" r="10" fill="#e8a040" />
                                    <path d="M250 195 L250 230 M270 195 L270 230 M250 210 L270 210" stroke="#e8a040" strokeWidth="4" />
                                </svg>
                            </div>
                        </div>
                        <div className="become-ib-text">
                            <h2 className="ib-title">
                                Increase Your Revenue Potential Become An Introducing Broker With{' '}
                                <span className="gradient-text">Nebula Financial Services Ltd</span>
                            </h2>
                            <p className="ib-features">
                                Customised Rebate Scheme | Marketing Tools | Dedicated IB DashBoard
                            </p>
                            <h3 className="ib-highlight">
                                <span className="gradient-text">Earn Maximum IB Commission With Nebula Financial Services Ltd*</span>
                            </h3>
                            <a href="#" className="btn-become-ib">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                Become An IB
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reports and Portfolio sections were linked in nav but empty in HTML? */}
            {/* The index.html shows links to #reports and #portfolio but no sections with those IDs. */
            /* I will add empty sections with IDs or placeholders so the scroll spy works without error. */}
            <section id="reports" style={{ height: '1px' }}></section>
            <section id="portfolio" style={{ height: '1px' }}></section>
        </main>
    );
};

export default Home;
