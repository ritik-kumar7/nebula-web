import React from 'react';
import '../Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio-page-wrapper">
            <main className="portfolio-content">

                {/* Intro */}
                <div className="section-header">
                    <h1 className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '10px' }}>
                        Account Types
                    </h1>
                    <p>Forex Trading with Nebula Financial Services Ltd.</p>
                </div>

                <div className="portfolio-intro">
                    <p>Each trading platform has its own array of assets and features that shape your trading experience.</p>
                </div>

                {/* Account Types Grid */}
                <div className="portfolio-grid">

                    {/* BRONZE */}
                    <div className="portfolio-card">
                        <div className="card-header-portfolio">
                            <h3>BRONZE</h3>
                        </div>
                        <ul className="card-features">
                            <li>
                                <div className="feature-label">Leverage <span className="feature-value">1:500</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Min Volume <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Step Lot <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Instruments <span className="feature-value">Forex, CFD, Comm.</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Commissions <span className="feature-value">Zero</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Margin Call <span className="feature-value">100%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Stop Out <span className="feature-value">70%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Swap Free <span className="feature-value">Yes</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Spread From <span className="feature-value">0.1 Pips</span></div>
                            </li>
                        </ul>
                        <a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noopener noreferrer" className="card-btn">Get Started</a>
                    </div>

                    {/* SILVER */}
                    <div className="portfolio-card">
                        <div className="card-header-portfolio">
                            <h3>SILVER</h3>
                        </div>
                        <ul className="card-features">
                            <li>
                                <div className="feature-label">Leverage <span className="feature-value">1:500</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Min Volume <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Step Lot <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Instruments <span className="feature-value">Forex, CFD, Comm.</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Commissions <span className="feature-value">Zero</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Margin Call <span className="feature-value">100%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Stop Out <span className="feature-value">70%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Swap Free <span className="feature-value">Yes</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Spread From <span className="feature-value">1 Pips</span></div>
                            </li>
                        </ul>
                        <a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noopener noreferrer" className="card-btn">Get Started</a>
                    </div>

                    {/* GOLD */}
                    <div className="portfolio-card">
                        <div className="card-header-portfolio">
                            <h3>GOLD</h3>
                        </div>
                        <ul className="card-features">
                            <li>
                                <div className="feature-label">Leverage <span className="feature-value">1:500</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Min Volume <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Step Lot <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Instruments <span className="feature-value">Forex, CFD, Comm.</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Commissions <span className="feature-value">Zero</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Margin Call <span className="feature-value">100%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Stop Out <span className="feature-value">70%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Swap Free <span className="feature-value">Yes</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Spread From <span className="feature-value">1.5 Pips</span></div>
                            </li>
                        </ul>
                        <a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noopener noreferrer" className="card-btn">Get Started</a>
                    </div>

                    {/* PLATINUM */}
                    <div className="portfolio-card">
                        <div className="card-header-portfolio">
                            <h3>PLATINUM</h3>
                        </div>
                        <ul className="card-features">
                            <li>
                                <div className="feature-label">Leverage <span className="feature-value">1:500</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Min Volume <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Step Lot <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Instruments <span className="feature-value">Forex, CFD, Comm.</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Commissions <span className="feature-value">Zero</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Margin Call <span className="feature-value">100%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Stop Out <span className="feature-value">70%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Swap Free <span className="feature-value">Yes</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Spread From <span className="feature-value">2 Pips</span></div>
                            </li>
                        </ul>
                        <a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noopener noreferrer" className="card-btn">Get Started</a>
                    </div>
                    {/* DIAMOND */}
                    <div className="portfolio-card">
                        <div className="card-header-portfolio">
                            <h3>DIAMOND</h3>
                        </div>
                        <ul className="card-features">
                            <li>
                                <div className="feature-label">Leverage <span className="feature-value">1:500</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Min Volume <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Step Lot <span className="feature-value">0.01</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Instruments <span className="feature-value">Forex, CFD, Comm.</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Commissions <span className="feature-value">Zero</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Margin Call <span className="feature-value">100%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Stop Out <span className="feature-value">70%</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Swap Free <span className="feature-value">Yes</span></div>
                            </li>
                            <li>
                                <div className="feature-label">Spread From <span className="feature-value">2.5 Pips</span></div>
                            </li>
                        </ul>
                        <a href="https://download.mql5.com/cdn/web/nebula.financial.services/mt5/nebulafinancialservices5setup.exe" target="_blank" rel="noopener noreferrer" className="card-btn">Get Started</a>
                    </div>

                </div>

                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.</p>
                    <h6>Risk Warning:</h6>
                    <p>The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Secure and responsible trading.</p>
                </div>
            </main>
        </div>
    );
};

export default Portfolio;
