import React from 'react';
import '../AccountTypes.css';

const AccountTypes = () => {
    const accountLevels = [
        { name: 'BRONZE', spread: '0.1 Pips' },
        { name: 'SILVER', spread: '1 Pips' },
        { name: 'GOLD', spread: '1.5 Pips' },
        { name: 'PLATINUM', spread: '2 Pips' },
        { name: 'DIAMOND', spread: '2.5 Pips' },
    ];

    const features = [
        { label: 'Leverage', value: '1:500' },
        { label: 'Min Order Volume', value: '0.01' },
        { label: 'Step Lot', value: '0.01' },
        { label: 'Instruments', value: "Forex, CFD's, Commodities" },
        { label: 'Commissions', value: 'Zero Commissions' },
        { label: 'Margin Call', value: '100 %' },
        { label: 'Stop Out', value: '70 %' },
        { label: 'Max Volume in Lots of Orders', value: 'Unlimited' },
        { label: 'Max Number of Pending Orders', value: '300' },
        { label: 'IB Rebate', value: 'Yes' },
        { label: 'EA Allowed', value: 'Yes' },
        { label: 'Swap Free Account', value: 'Yes' },
        { label: 'Order Execution', value: 'Lightning Bolt Execution' },
    ];

    return (
        <div className="account-types-wrapper">
            <main className="page-content">
                <div className="section-header">
                    <h1 className="gradient-text">Account Types</h1>
                    <p>Forex Trading with Nebula Financial Services Ltd</p>
                </div>

                <section className="content-section minimal-blur">
                    <div className="text-block" style={{ textAlign: 'center' }}>
                        <p>Each trading platform has its own array of assets and features that shape your trading experience.</p>
                    </div>
                </section>

                <div className="account-cards-grid">
                    {accountLevels.map((level, index) => (
                        <div key={index} className="account-card feature-card">
                            <div className="card-header">
                                <h3 className="card-title">{level.name}</h3>
                            </div>
                            <div className="account-features">
                                <div className="feature-item">
                                    <span className="feature-label">Spread starts from</span>
                                    <span className="feature-value gold-text">{level.spread}</span>
                                </div>
                                {features.map((f, i) => (
                                    <div key={i} className="feature-item">
                                        <span className="feature-label">{f.label}</span>
                                        <span className="feature-value">{f.value}</span>
                                    </div>
                                ))}
                            </div>
                            <button className="gold-btn" style={{ marginTop: '20px' }}>Get Started</button>
                        </div>
                    ))}
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

export default AccountTypes;
