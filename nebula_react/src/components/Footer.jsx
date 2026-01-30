import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Ensure global styles are available

const Footer = () => {
    return (
        <footer>
            <div className="mycontainer">
                <div className="contactus-wrapper">
                    <h6>Disclaimers:</h6>
                    <p>
                        Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.
                    </p>
                    <h6>Risk Warning:</h6>
                    <p>
                        The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Secure and responsible trading.
                    </p>
                    <p>
                        Forex and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 70% of retail investor accounts lose money when forex and CFDs trading with this provider. You should consider whether you can afford to take the high risk of losing your money.
                    </p>
                </div>
            </div>
            <div id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Address</h4>
                                <div className="fotcon">
                                    <h3 className="cospName">Registered Address:</h3>
                                    <p>Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.</p>
                                    <p className="cospName"> Registration Number: 2025-00811</p>
                                    <br />
                                    <h3 className="cospName">Physical Address:</h3>
                                    <p>2 David Gamrekeli St., Office No. 2, 0160 Tbilisi, Georgia.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/account-types">Trading</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/channel-partner">Channel Partner</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/academy">Academy</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/margin-calculator">Margin Calculator</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/profit-calculator">Profit Calculator</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Instruments List</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/forex">Forex</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/metals">Metals</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/oil-commodities">Oil Commodities</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/spot-index">Spot Index</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/crypto">Cryptocurrency</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Other Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/economic-calendar">Economic Calendar</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/market-news">Market News</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/terms-of-use">Terms of Use</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/terms-conditions">Terms & Conditions</Link></li>
                                    <li><i className="bx bx-chevron-right"></i> <Link to="/privacy-policy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container FooderPas">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="copyright">
                                &copy; Copyright <span>Nebula Financial Services Ltd</span>. All Rights Reserved
                            </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
