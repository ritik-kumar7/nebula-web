import React, { useState } from 'react';
import '../Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Your message has been sent. Thank you!');
    };

    return (
        <div className="contact-page-wrapper">
            <main className="page-content">
                {/* Breadcrumbs */}
                <div className="breadcrumbs-section">
                    <h1 className="gradient-text">Contact Us</h1>

                </div>

                {/* Main Contact Section */}
                <div className="contact-section content-section">
                    <div className="section-title">
                        <h2 className="gradient-text">Contact Us</h2>
                        <h3>We Love to hear <span className="gradient-text">From You</span></h3>
                        <p>If you have any queries on our product or services, feel free to contact us or drop your info in the form below. Our team will get in touch with you shortly!</p>
                    </div>

                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info-section">
                            <div className="info-box feature-card">
                                <div className="address-block">
                                    <div className="card-icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <h3 className="card-title">Registered Address</h3>
                                    <p className="card-description">
                                        Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
                                    </p>
                                    <p className="card-description gold-text">Registration Number: 2025-00811</p>
                                </div>

                                <div className="address-block">
                                    <div className="card-icon">
                                        <i className="bi bi-building"></i>
                                    </div>
                                    <h3 className="card-title">Physical Address</h3>
                                    <p className="card-description">
                                        2 David Gamrekeli St., Office No. 2, 0160 Tbilisi, Georgia.
                                    </p>
                                </div>

                                <div className="contact-methods">
                                    <a href="tel:+971506018460" className="contact-method">
                                        <i className="bi bi-telephone"></i>
                                        <span>+971 50 601 8460</span>
                                    </a>
                                    <a href="mailto:support@nebulafinserv.com" className="contact-method">
                                        <i className="bi bi-envelope"></i>
                                        <span>support@nebulafinserv.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-section">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="number"
                                            placeholder="Your Number"
                                            value={formData.number}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Your Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="gold-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Disclaimers */}
                <div className="disclaimer-box content-section">
                    <h6>Disclaimers:</h6>
                    <p>
                        Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North Korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.
                    </p>
                    <h6>Risk Warning:</h6>
                    <p>
                        The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money.
                    </p>
                    <p>
                        Forex and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 70% of retail investor accounts lose money when forex and CFDs trading with this provider. You should consider whether you can afford to take the high risk of losing your money.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Contact;
