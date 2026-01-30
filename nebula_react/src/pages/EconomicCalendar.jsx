import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';

const EconomicCalendar = () => {
    useEffect(() => {
        // Load Dukascopy scripts
        window.DukascopyApplet = {
            "type": "economic_calendar_new",
            "params": {
                "showHeader": false,
                "tableBorderColor": "#ef7f1a",
                "defaultTimezone": 0,
                "defaultCountries": "r:All",
                "impacts": [0, 1, 2],
                "dateTab": 2,
                "dateFrom": Date.now(),
                "dateTo": Date.now() + 604800000, // 1 week
                "showColCountry": true,
                "showColCurrency": true,
                "showColImpact": true,
                "showColPrevious": true,
                "showColForecast": true,
                "width": "100%",
                "height": "600",
                "adv": "popup",
                "lang": "en"
            }
        };

        const script = document.createElement('script');
        script.src = 'https://freeserv-static.dukascopy.com/2.0/core.js';
        script.async = true;

        const container = document.getElementById('economic-calendar-container');
        if (container && container.innerHTML === '') {
            container.appendChild(script);
        }

        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <div className="instruments-page">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbsBanner">
                        <h2>Economic Calendar</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Tools</li>
                            <li>/</li>
                            <li>Economic Calendar</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="section-title">
                <div className="container">
                    <h2>Futurstic Way of Trading</h2>
                    <h3>Nebula Financial Services Ltd <span>ECONOMIC CALENDAR</span></h3>
                    <p>Foreign exchange is undoubtedly the most traded and liquid market. When you trade Forex with CFDs, you're essentially buying and selling one foreign currency at a time, trying to capitalize on both short term and long term price changes.</p>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container">
                    <div id="economic-calendar-container" style={{ minHeight: '600px', background: 'rgba(0,0,0,0.2)', borderRadius: '20px', padding: '20px', border: '1px solid rgba(212, 168, 83, 0.2)' }}>
                        {/* Widget will be injected here */}
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of restricted regions.</p>
                    <h6>Risk Warning:</h6>
                    <p>Trading financial instruments involves significant risk. The economic calendar provides scheduled events that may impact market volatility.</p>
                </div>
            </div>
        </div>
    );
};

export default EconomicCalendar;
