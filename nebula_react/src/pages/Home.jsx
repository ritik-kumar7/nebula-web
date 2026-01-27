import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
                        <button className="btn-primary">Get Started</button>
                        <button className="btn-secondary">Learn More</button>
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

            {/* Reports and Portfolio sections were linked in nav but empty in HTML? */}
            {/* The index.html shows links to #reports and #portfolio but no sections with those IDs. */
            /* I will add empty sections with IDs or placeholders so the scroll spy works without error. */}
            <section id="reports" style={{ height: '1px' }}></section>
            <section id="portfolio" style={{ height: '1px' }}></section>
        </main>
    );
};

export default Home;
