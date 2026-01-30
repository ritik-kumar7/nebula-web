import React from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';

const TermsConditions = () => {
    return (
        <div className="instruments-page">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbsBanner">
                        <h2>Terms & Conditions</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Terms & Conditions</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container" style={{ padding: '40px' }}>
                    <div className="policy-content" style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                        <h2 className="titleSubTextspan">General Terms & Conditions</h2>

                        <p>By accessing our website and/or purchasing any product or service from us, you (“User”, “Customer”, or “Client”) agree to be bound by the following Terms and Conditions (“Terms”, “Terms of Service”), including any additional terms, conditions, and policies referenced herein or available via hyperlink.</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}>1. Eligibility</h4>
                        <p>Our Services are intended only for individuals aged 18 years or older who reside in a country where the Services are legally available. By registering, you confirm that you are at least 18 years old and are accessing the Services from a country where they are permitted.</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}>2. No Investment Advice Disclaimer</h4>
                        <p>The Services provided are not investment services and should not be interpreted as investment advice or financial recommendations. We do not provide guidance or opinions on investment tools.</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}>3. Payments and Refund Policy</h4>
                        <p>All payments are final and for evaluation purposes only. Registration fees are non-refundable as the service is delivered immediately upon purchase, except as specified in our Refund Policy.</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}>4. Know Your Customer (KYC)</h4>
                        <p>You may be required to complete verification under applicable AML/CFT laws. We reserve the right to suspend or terminate accounts with incomplete or false information.</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}>5. Prohibited Uses</h4>
                        <p>You are prohibited from using the website or its content for any unlawful, harmful, or unethical activity. Engaging in trading strategies that exploit platform inefficiencies is strictly prohibited.</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}>6. Limitation of Liability</h4>
                        <p>To the maximum extent permitted by law, the Company shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the Services.</p>

                        <h4 style={{ color: 'var(--gold-light)', marginTop: '30px' }}>7. Governing Law</h4>
                        <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where the Company operates (Dubai, Georgia, or Saint Lucia as applicable).</p>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="disclaimer-box">
                    <h6>Contact Information:</h6>
                    <p>For any questions or clarifications regarding these Terms of Service, please contact us at: support@nebulafinserv.com</p>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
