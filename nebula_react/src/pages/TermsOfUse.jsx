import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';

const TermsOfUse = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General Info' },
        { id: 'trading', label: 'Trading Rules' },
        { id: 'accounts', label: 'Accounts & Rewards' },
        { id: 'refunds', label: 'Refunds & Inactivity' },
    ];

    const tabContent = {
        general: [
            { q: "What is Nebula Financial Services Ltd?", a: "Nebula Financial Services Ltd offers simulated trading programs designed for education and evaluation purposes. Please note that no real trades are executed on these platforms." },
            { q: "Do you provide investment advice?", a: "No. Nebula Financial Services Ltd does not offer investment guidance, recommendations, or brokerage services. All materials are for educational purposes only." },
            { q: "Who is eligible to use Nebula Financial Services Ltd?", a: "Our services are restricted in certain regions, including FATF/EU sanctioned countries, Vietnam, and the UAE. Access is granted only where legally permitted." },
        ],
        trading: [
            { q: "What are the key trading rules?", a: "Traders are expected to follow disciplined and consistent practices. The use of prohibited trading methods or toxic trading flows is strictly forbidden." },
            { q: "Which trading instruments are available?", a: "All accounts operate in a simulated environment. Available instruments include CFDs, forex, and other evaluation tools intended solely for practice and assessment." },
        ],
        accounts: [
            { q: "How are account credentials managed?", a: "Accounts are provided with secure login credentials. Sharing or misuse of these credentials may result in account suspension or termination." },
            { q: "How are rewards distributed?", a: "Rewards are granted based on performance in evaluation programs. Nebula Financial Services Ltd reserves the right to review accounts for risk compliance before issuing any rewards." },
        ],
        refunds: [
            { q: "Are program fees refundable?", a: "All program fees are non-refundable, except where required by applicable law." },
            { q: "What happens if my account is inactive?", a: "Accounts that remain inactive for prolonged periods may be suspended or terminated in accordance with our Terms of Use." },
        ],
    };

    return (
        <div className="instruments-page">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbsBanner">
                        <h2>Terms of Use</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Terms of Use</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container" style={{ padding: '40px' }}>
                    <h2 className="titleSubTextspan">Terms of Use</h2>

                    <div className="tabs-container" style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`becomePas ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    background: activeTab === tab.id ? 'var(--gold-light)' : 'rgba(255,215,0,0.1)',
                                    color: activeTab === tab.id ? '#000' : 'var(--gold-light)',
                                    border: '1px solid var(--gold-light)',
                                    cursor: 'pointer'
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="tab-panel" style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                        {tabContent[activeTab].map((item, index) => (
                            <details key={index} style={{ marginBottom: '20px', padding: '15px', border: '1px solid rgba(212, 168, 83, 0.2)', borderRadius: '10px', background: 'rgba(0,0,0,0.2)' }}>
                                <summary style={{ fontWeight: 'bold', color: 'var(--gold-light)', cursor: 'pointer' }}>{item.q}</summary>
                                <p style={{ marginTop: '10px' }}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd reserves the right to review, update, or revise these Terms of Use at any time without prior notice.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
