import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';

const Metals = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "colorTheme": "dark",
            "dateRange": "12M",
            "showChart": true,
            "locale": "in",
            "largeChartUrl": "",
            "isTransparent": true,
            "showSymbolLogo": false,
            "showFloatingTooltip": false,
            "width": "100%",
            "height": "400",
            "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
            "plotLineColorFalling": "rgba(41, 98, 255, 1)",
            "gridLineColor": "rgba(240, 243, 250, 0)",
            "scaleFontColor": "rgba(106, 109, 120, 1)",
            "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
            "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
            "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
            "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
            "tabs": [
                {
                    "title": "Metal",
                    "symbols": [
                        { "s": "FOREXCOM:XAUUSD" },
                        { "s": "FOREXCOM:XAGUSD" }
                    ]
                }
            ]
        });
        const container = document.getElementById('tradingview-widget');
        if (container && container.innerHTML === '') {
            container.appendChild(script);
        }
    }, []);

    return (
        <div className="instruments-page">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbsBanner">
                        <h2>Metals</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Instruments List</li>
                            <li>/</li>
                            <li>Metals</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="section-title">
                <div className="container">
                    <p>The metals Gold and Silver are two of the most traded commodities in the world market. Nebula Financial Services Ltd is flexible leverage, low commissions and exceptional execution speeds makes it easier to trade long or short on both rising and falling prices.</p>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container">
                    <div className="grid-2-col">
                        <div className="info-content-col">
                            <h3 className="titleSubTextspan">Additional Information</h3>
                            <p className="description-text">How to calculate Profit & Margin on Precious Metals?</p>

                            <h3 className="titleSubTextspan">Facts behind the Calculations</h3>
                            <div className="flexBtnforcalcul">
                                <div className="forexCalFlex">
                                    <p>Profit/Loss is always calculated on the last quoted currency of symbol.</p>
                                    <Link to="/profit-calculator" className="becomePas">Profit Calculator</Link>
                                </div>
                                <div className="forexCalFlex">
                                    <p>Margin is always calculated on the first quoted currency of symbol.</p>
                                    <Link to="/margin-calculator" className="becomePas">Margin Calculator</Link>
                                </div>
                            </div>
                        </div>
                        <div className="view-widget-card">
                            <div id="tradingview-widget" className="tradingview-widget-container"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="table-section">
                <div className="section-title">
                    <h3>GOLD & SILVER SPECIFICATIONS</h3>
                </div>
                <div className="at_table_row">
                    <table>
                        <thead>
                            <tr>
                                <th className="tdhiegt">Symbol</th>
                                <th>Description</th>
                                <th>Digits</th>
                                <th>Contract Size</th>
                                <th>Tick Size</th>
                                <th>Min. Volume</th>
                                <th>Max. Volume</th>
                                <th>Step Lot</th>
                                <th>Calculation</th>
                                <th>Profit Currency</th>
                                <th>Margin Currency</th>
                                <th>Initial Margin</th>
                                <th>Trading Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="symbol-cell">XAUUSD</td>
                                <td>Gold Ounce vs US Dollar</td>
                                <td>2</td>
                                <td>100 XAU</td>
                                <td>0</td>
                                <td>0.01</td>
                                <td>10</td>
                                <td>0.01</td>
                                <td>Forex</td>
                                <td>USD</td>
                                <td>XAU</td>
                                <td>3.0000000</td>
                                <td>01:01 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">XAGUSD</td>
                                <td>Silver vs US Dollar</td>
                                <td>3</td>
                                <td>5000 XAG</td>
                                <td>0</td>
                                <td>0.01</td>
                                <td>10</td>
                                <td>0.01</td>
                                <td>Forex</td>
                                <td>USD</td>
                                <td>XAG</td>
                                <td>15.0000000</td>
                                <td>01:01 - 23:58:59</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="container">
                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.</p>
                    <h6>Risk Warning:</h6>
                    <p>Precious metals trading involves significant risk and may not be suitable for all investors. Leverage can work against you as much as for you.</p>
                </div>
            </div>
        </div>
    );
};

export default Metals;
