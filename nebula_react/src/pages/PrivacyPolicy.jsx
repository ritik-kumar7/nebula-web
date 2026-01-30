import React from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';

const PrivacyPolicy = () => {
    return (
        <div className="instruments-page">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbsBanner">
                        <h2>Privacy Policy</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Privacy Policy</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container" style={{ padding: '40px' }}>
                    <div className="policy-content" style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                        <h2 className="titleSubTextspan">Privacy Policy</h2>
                        <p>Because we want you to be informed about what we do with your information in the best way possible, we have prepared for you this Privacy Policy in accordance with the European Parliament and Council (EU) directive no. 2016/679, on the protection of natural persons with regard to the processing of personal data (hereinafter only as “GDPR”).</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}><strong>In the Privacy Policy, you will learn especially:</strong></h4>
                        <ul>
                            <li>What information we collect about you and why.</li>
                            <li>How we use that information.</li>
                            <li>What your rights regarding the private information used by us are and how to exercise them with us.</li>
                        </ul>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}><strong>Information We Collect About You</strong></h4>
                        <p>If you are a natural person, you will fill in for us at the beginning of the provision of any of the services the personal data necessary for the provision of such services and for the conclusion of a contract. You will fill out your full name, your contact information (email, phone), address, IP, and perhaps date of birth and your bank account number.</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}><strong>How We Use Your Information</strong></h4>
                        <p>The personal data you provide to us are mainly used to provide you the expected services of the highest possible quality – these are the provision of information about the service, billing related thereto, and the fulfilment of our obligations. We store your personal information in our encrypted database.</p>

                        <h2 className="titleSubTextspan" style={{ marginTop: '50px' }}>Refund Policy</h2>
                        <h4 style={{ color: 'var(--gold-light)' }}><strong>Cancellation Period</strong></h4>
                        <p>The user has the right to cancel the ordered services, specifically the "Nebula Financial Services Ltd Trading Evaluation," within 14 days of purchasing the services. This cancellation period begins from the date of purchase and ends on the 14th day following the purchase date.</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}><strong>Eligibility for Refund</strong></h4>
                        <p>To be eligible for a refund during the 14-day cancellation period, the user must not have initiated the use of the services by opening any orders on the Evaluation account. If the user has already initiated the use of the services, this refund policy no longer applies, and refunds will not be issued.</p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of restricted regions.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
