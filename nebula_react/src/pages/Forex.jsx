import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';

const Forex = () => {
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
            "height": "600",
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
                    "title": "Forex",
                    "symbols": [
                        { "s": "FX:CADCHF" },
                        { "s": "FX:CADJPY" },
                        { "s": "FX:EURCAD" },
                        { "s": "FX:EURGBP" },
                        { "s": "FX:EURJPY" },
                        { "s": "FX:EURUSD" },
                        { "s": "FX:GBPCAD" },
                        { "s": "FX:GBPCHF" },
                        { "s": "FX:GBPJPY" },
                        { "s": "FX:GBPUSD" },
                        { "s": "FX:USDCAD" },
                        { "s": "FX:USDCHF" },
                        { "s": "FX:USDJPY" },
                        { "s": "FX:AUDCAD" }
                    ],
                    "originalTitle": "Forex"
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
                        <h2>Forex Trading</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Instruments List</li>
                            <li>/</li>
                            <li>Forex</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="section-title">
                <div className="container">
                    <p>Foreign exchange is undoubtedly the most traded and liquid market. When you trade Forex with CFDs, you're essentially buying and selling one foreign currency at a time, trying to capitalize on both short term and long term price changes.</p>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container">
                    <div className="grid-2-col">
                        <div className="view-widget-card">
                            <div id="tradingview-widget" className="tradingview-widget-container"></div>
                        </div>
                        <div className="info-content-col">
                            <h3 className="titleSubTextspan">Additional Information</h3>
                            <p className="description-text">How to calculate Profit & Margin on Forex Currencies?</p>

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
                    </div>
                </div>
            </section>

            <section className="table-section">
                <div className="section-title">
                    <h3>FX MAJOR LIST</h3>
                </div>
                <div className="at_table_row">
                    <table>
                        <thead>
                            <tr>
                                <th className="tdhiegt">Symbol</th>
                                <th>Description</th>
                                <th>Digits</th>
                                <th>Contract Size</th>
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
                                <td className="symbol-cell">EURUSD</td>
                                <td>Euro vs US Dollar</td>
                                <td>5</td>
                                <td>EUR 100000</td>
                                <td>0.01</td>
                                <td>15</td>
                                <td>0.01</td>
                                <td>Forex</td>
                                <td>USD</td>
                                <td>EUR</td>
                                <td>1.9300000</td>
                                <td>00:01 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">GBPUSD</td>
                                <td>Great Britain Pound vs US Dollar</td>
                                <td>5</td>
                                <td>GBP 100000</td>
                                <td>0.01</td>
                                <td>15</td>
                                <td>0.01</td>
                                <td>Forex</td>
                                <td>USD</td>
                                <td>GBP</td>
                                <td>1.6500000</td>
                                <td>00:01 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">USDJPY</td>
                                <td>US Dollar vs Japanese Yen</td>
                                <td>3</td>
                                <td>USD 100000</td>
                                <td>0.01</td>
                                <td>15</td>
                                <td>0.01</td>
                                <td>Forex</td>
                                <td>JPY</td>
                                <td>USD</td>
                                <td>1.4000000</td>
                                <td>00:01 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">USDCHF</td>
                                <td>US Dollar vs Swiss Franc</td>
                                <td>5</td>
                                <td>USD 100000</td>
                                <td>0.01</td>
                                <td>15</td>
                                <td>0.01</td>
                                <td>Forex</td>
                                <td>CHF</td>
                                <td>USD</td>
                                <td>1.4000000</td>
                                <td>00:01 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">AUDUSD</td>
                                <td>Australian Dollar vs US Dollar</td>
                                <td>5</td>
                                <td>AUD 100000</td>
                                <td>0.01</td>
                                <td>15</td>
                                <td>0.01</td>
                                <td>Forex</td>
                                <td>USD</td>
                                <td>AUD</td>
                                <td>1.4000000</td>
                                <td>00:01 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">USDCAD</td>
                                <td>US Dollar vs Canadian Dollar</td>
                                <td>5</td>
                                <td>USD 100000</td>
                                <td>0.01</td>
                                <td>15</td>
                                <td>0.01</td>
                                <td>Forex</td>
                                <td>CAD</td>
                                <td>USD</td>
                                <td>1.4000000</td>
                                <td>00:01 - 23:58:59</td>
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
                    <p>The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage.</p>
                </div>
            </div>
        </div>
    );
};

export default Forex;
