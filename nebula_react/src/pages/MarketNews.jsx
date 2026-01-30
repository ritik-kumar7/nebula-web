import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';

const MarketNews = () => {
    useEffect(() => {
        // Load Dukascopy scripts for news
        window.DukascopyApplet = {
            "type": "online_news",
            "params": {
                "header": false,
                "borders": false,
                "defaultLanguage": "en",
                "availableLanguages": ["ar", "bg", "cs", "de", "en", "es", "fa", "fr", "he", "hu", "it", "ja", "ms", "pl", "pt", "ro", "ru", "sk", "sv", "th", "uk", "zh"],
                "newsCategories": ["finance", "forex", "stocks", "company_news", "commodities"],
                "width": "100%",
                "height": "800",
                "adv": "popup"
            }
        };

        const script = document.createElement('script');
        script.src = 'https://freeserv-static.dukascopy.com/2.0/core.js';
        script.async = true;

        const container = document.getElementById('market-news-container');
        if (container && container.innerHTML === '') {
            container.appendChild(script);
        }
    }, []);

    return (
        <div className="instruments-page">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbsBanner">
                        <h2>Market News</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Tools</li>
                            <li>/</li>
                            <li>Market News</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="section-title">
                <div className="container">
                    <h2>Futurstic Way of Trading</h2>
                    <h3>Nebula Financial Services Ltd <span>Market News</span></h3>
                    <p>Staying informed with the latest market news is crucial for successful trading. Our market news tool provides real-time updates on finance, forex, stocks, and commodities.</p>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container">
                    <div id="market-news-container" style={{ minHeight: '800px', background: 'rgba(0,0,0,0.2)', borderRadius: '15px', padding: '10px', border: '1px solid rgba(212, 168, 83, 0.2)' }}>
                        {/* Widget will be injected here */}
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of restricted regions.</p>
                    <h6>Risk Warning:</h6>
                    <p>Market news can influence trading decisions. Always perform your own analysis before entering any trades.</p>
                </div>
            </div>
        </div>
    );
};

export default MarketNews;
