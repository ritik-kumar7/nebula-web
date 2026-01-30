import React from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';
import cpImage from '../assets/channel_partner.jpg';

const ChannelPartner = () => {
    return (
        <div className="instruments-page">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbsBanner">
                        <h2>Channel Partner</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>What is A Channel Partner</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="section-title">
                <div className="container">
                    <h2>What is A Channel Partner</h2>
                    <h3>What is a <span>Channel Partner?</span></h3>
                    <p>A channel partnership can be a win-win for both the vendor and the partner. By choosing the right group of channel partners, the vendor is able to get a big bang for their buck. They can increase sales exponentially by gaining access to the partner’s existing customers. Conversely, the channel partner is able to increase revenue by cross selling or upselling a new product to its existing customers and by acquiring additional customers who are interested in the new offering.</p>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container">
                    <div className="grid-2-col">
                        <div className="info-content-col">
                            <p className="description-text" style={{ fontStyle: 'italic', color: 'var(--text-light)' }}>
                                The challenge for both the vendor and the potential channel partner is to find the right fit. The 80/20 rule is well known in channel sales. It states that, on average, 20% of a vendor’s partners will generate 80% of the indirect sale channel’s revenue.
                            </p>
                            <h3 className="titleSubTextspan">#Channel Partnership Benefits</h3>
                            <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                                Different partner programs offer different benefits to both the vendor and the partner. Here are a few benefits to each which may be achieved depending on the type of partnership that is implemented.
                            </p>
                        </div>
                        <div className="view-widget-card" style={{ textAlign: 'center' }}>
                            <img src={cpImage} className="img-fluid" alt="Channel Partner" style={{ borderRadius: '20px', border: '1px solid rgba(212, 168, 83, 0.3)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of restricted regions.</p>
                    <h6>Risk Warning:</h6>
                    <p>The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Secure and responsible trading.</p>
                </div>
            </div>
        </div>
    );
};

export default ChannelPartner;
