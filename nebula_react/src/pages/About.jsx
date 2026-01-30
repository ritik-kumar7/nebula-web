import React from 'react';
import '../About.css';

// Importing assets
import aboutIcon from '../assets/about_icon.png';
import missionIcon from '../assets/mission.png';
import vissionIcon from '../assets/vission.png';
import aboutSecImg from '../assets/about_sec.jpg';
import opportunityIcon from '../assets/opportunity.png';
import platformIcon from '../assets/platform.png';
import competitiveIcon from '../assets/competitive.png';

const About = () => {
    return (
        <div className="about-page-wrapper">
            <main className="page-content">
                <div className="section-header">
                    <h1 className="gradient-text">About Us</h1>
                    <p>Forex Trading with Nebula Financial Services Ltd</p>
                </div>

                <section className="content-section minimal-blur">
                    <div className="text-block" style={{ textAlign: 'center' }}>
                        <p>With years of experience in forex trading, our company has built a strong reputation for trust and reliability, with a commitment to ensuring the best trading experience for our clients.</p>
                    </div>
                </section>

                <div className="market-card-grid grid-container">
                    <div className="feature-card">
                        <div className="card-header" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div className="card-icon" style={{ marginBottom: '15px' }}>
                                <img src={aboutIcon} alt="Who We Are" style={{ width: '60px' }} />
                            </div>
                            <h3 className="card-title">Who We Are</h3>
                        </div>
                        <p className="card-description" style={{ textAlign: 'center' }}>
                            Nebula Financial Services Ltd has globally acquired brand recognition by providing a world-class trading environment to the investors without any divergence of interest. We are one of the world's most trusted online forex trading brokers.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="card-header" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div className="card-icon" style={{ marginBottom: '15px' }}>
                                <img src={missionIcon} alt="Our Mission" style={{ width: '60px' }} />
                            </div>
                            <h3 className="card-title">Our Mission</h3>
                        </div>
                        <p className="card-description" style={{ textAlign: 'center' }}>
                            We try to help the investors with long-term business conditions, client support and education to create a good customer relationship and strong presence around the globe.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="card-header" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <div className="card-icon" style={{ marginBottom: '15px' }}>
                                <img src={vissionIcon} alt="Our Vision" style={{ width: '60px' }} />
                            </div>
                            <h3 className="card-title">Our Vision</h3>
                        </div>
                        <p className="card-description" style={{ textAlign: 'center' }}>
                            We aim to build a strong relationship with our clients. We value the preferences of our clients and try to offer unique trading solutions for their businesses.
                        </p>
                    </div>
                </div>

                <section className="content-section split-section" style={{ marginTop: '40px' }}>
                    <div className="split-content">
                        <h3>About <span>Nebula Financial Services Ltd</span></h3>
                        <p>
                            Nebula Financial Services Ltd has globally acquired brand recognition by providing a world class trading environment to the investors without any divergence of interest.
                        </p>
                        <p>
                            Nebula Financial Services Ltd can be described as the future of Forex trading with unique business solutions. We try to enhance your experience by providing the best trading solutions so that you can gain superior control.
                        </p>
                    </div>
                    <div className="split-image">
                        <img src={aboutSecImg} alt="About Nebula" />
                    </div>
                </section>

                <section className="content-section">
                    <div className="section-header">
                        <h3>Our Core Value</h3>
                        <p>Make Us Professional</p>
                    </div>
                    <div className="text-block" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <p>With years of experience in forex trading, our company has built a strong reputation for trust and reliability, with a commitment to ensuring the best trading experience for our clients.</p>
                    </div>
                    <div className="market-card-grid">
                        <div className="feature-card core-value-card">
                            <div className="card-icon" style={{ marginBottom: '15px', textAlign: 'center' }}>
                                <img src={opportunityIcon} alt="Opportunities" style={{ width: '50px' }} />
                            </div>
                            <h3 className="card-title">OPPORTUNITIES</h3>
                            <p className="card-description">Nebula Financial Services Ltd Gives You An Opportunity To Take Part In Global Trading And Walk On The Path Of Organisational Growth And Progress.</p>
                        </div>
                        <div className="feature-card core-value-card">
                            <div className="card-icon" style={{ marginBottom: '15px', textAlign: 'center' }}>
                                <img src={platformIcon} alt="Platform" style={{ width: '50px' }} />
                            </div>
                            <h3 className="card-title">PLATFORM</h3>
                            <p className="card-description">Now You Can Get Superior Control Over Your Trading With Advanced Features And Trading Platform That Fulfils The Requirement Of Growing Currency Traders.</p>
                        </div>
                        <div className="feature-card core-value-card">
                            <div className="card-icon" style={{ marginBottom: '15px', textAlign: 'center' }}>
                                <img src={competitiveIcon} alt="Competitive" style={{ width: '50px' }} />
                            </div>
                            <h3 className="card-title">COMPETITIVE</h3>
                            <p className="card-description">We Can Help You To Continue The Trade With The Global Currency Market, CFDs And Share So That You Can Make The Most From The Competitive Spreads.</p>
                        </div>
                    </div>
                </section>

                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.</p>
                    <h6>Risk Warning:</h6>
                    <p>The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Secure and responsible trading.</p>
                    <p>Forex and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 70% of retail investor accounts lose money when forex and CFDs trading with this provider. You should consider whether you can afford to take the high risk of losing your money.</p>
                </div>
            </main>
        </div>
    );
};

export default About;
