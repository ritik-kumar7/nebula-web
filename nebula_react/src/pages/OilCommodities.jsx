import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';

const OilCommodities = () => {
    useEffect(() => {
        const createWidget = (id, tabs) => {
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
                "tabs": tabs
            });
            const container = document.getElementById(id);
            if (container && container.innerHTML === '') {
                container.appendChild(script);
            }
        };

        createWidget('tradingview-widget-oil', [{
            "title": "Oil",
            "symbols": [
                { "s": "TVC:UKOIL" },
                { "s": "TVC:USOIL" }
            ]
        }]);

        createWidget('tradingview-widget-commodities', [{
            "title": "Commodities",
            "symbols": [
                { "s": "CAPITALCOM:COPPER" },
                { "s": "VANTAGE:NG" },
                { "s": "SKILLING:XPTUSD" }
            ]
        }]);
    }, []);

    return (
        <div className="instruments-page">
            <section className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbsBanner">
                        <h2>Oil & Commodities</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Instruments List</li>
                            <li>/</li>
                            <li>Oil & Commodities</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="section-title">
                <div className="container">
                    <p>Oil, as one of the most traded and essential commodities, is viewed as a significant market driver. Invest in rising and falling market prices with Nebula Financial Services Ltd's low commissions, low leverage, and exceptionally fast execution.</p>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container">
                    <div className="grid-2-col">
                        <div className="info-content-col">
                            <h3 className="titleSubTextspan">Oil Trading Analysis</h3>
                            <p className="description-text">Global benchmarks for Crude Oil including Brent and WTI.</p>

                            <div className="flexBtnforcalcul">
                                <div className="forexCalFlex">
                                    <p>Ready to calculate your potential returns on Oil trades?</p>
                                    <Link to="/profit-calculator" className="becomePas">Profit Calculator</Link>
                                </div>
                                <div className="forexCalFlex">
                                    <p>Check the required margin for your Commodity positions.</p>
                                    <Link to="/margin-calculator" className="becomePas">Margin Calculator</Link>
                                </div>
                            </div>
                        </div>
                        <div className="view-widget-card">
                            <div id="tradingview-widget-oil" className="tradingview-widget-container"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="table-section">
                <div className="section-title">
                    <h3>OIL SPECIFICATIONS</h3>
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
                                <td className="symbol-cell">UKOil</td>
                                <td>Spot Brent Crude Oil</td>
                                <td>3</td>
                                <td>100 UKOil</td>
                                <td>0.01</td>
                                <td>20</td>
                                <td>0.01</td>
                                <td>CFD</td>
                                <td>USD</td>
                                <td>USD</td>
                                <td>100</td>
                                <td>00:00 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">USOil</td>
                                <td>Spot WTI Crude Oil</td>
                                <td>3</td>
                                <td>100 USOil</td>
                                <td>0.01</td>
                                <td>20</td>
                                <td>0.01</td>
                                <td>CFD</td>
                                <td>USD</td>
                                <td>USD</td>
                                <td>100</td>
                                <td>01:00 - 23:58:59</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="container" style={{ textAlign: 'center', padding: '40px 0' }}>
                <h2 className="titleSubTextspan" style={{ border: 'none', textAlign: 'center' }}>Commodity Markets</h2>
                <p className="description-text" style={{ fontStyle: 'normal' }}>Diverse range of commodities including metals and natural gas.</p>
            </div>

            <section className="about section-bg">
                <div className="container">
                    <div className="grid-2-col">
                        <div className="view-widget-card">
                            <div id="tradingview-widget-commodities" className="tradingview-widget-container"></div>
                        </div>
                        <div className="info-content-col">
                            <h3 className="titleSubTextspan">Commodity Overview</h3>
                            <p className="description-text">Traders and investors seeking exposure to commodity price fluctuations often take positions in commodity currency pairs.</p>
                            <div className="flexBtnforcalcul">
                                <div className="forexCalFlex">
                                    <p>Analyze spreads and profit potential for global commodities.</p>
                                    <Link to="/profit-calculator" className="becomePas">Profit Calculator</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="table-section">
                <div className="section-title">
                    <h3>COMMODITY LIST</h3>
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
                                <th>Calculation</th>
                                <th>Profit Currency</th>
                                <th>Margin Currency</th>
                                <th>Initial Margin</th>
                                <th>Trading Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="symbol-cell">Copper</td>
                                <td>Copper</td>
                                <td>4</td>
                                <td>25000 Copper</td>
                                <td>0.01</td>
                                <td>5</td>
                                <td>CFD</td>
                                <td>USD</td>
                                <td>USD</td>
                                <td>0.0280000</td>
                                <td>00:00 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">NG</td>
                                <td>Natural Gas</td>
                                <td>3</td>
                                <td>10000 NG</td>
                                <td>0.01</td>
                                <td>5</td>
                                <td>CFD</td>
                                <td>USD</td>
                                <td>USD</td>
                                <td>0.0650000</td>
                                <td>00:00 - 23:58:59</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <div className="container">
                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of restricted regions.</p>
                    <h6>Risk Warning:</h6>
                    <p>Commodity trading carries high volatility and risk. Ensure you understand the market mechanics before entering positions.</p>
                </div>
            </div>
        </div>
    );
};

export default OilCommodities;
