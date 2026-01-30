import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Instruments.css';

const Crypto = () => {
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
                    "title": "Crypto",
                    "symbols": [
                        { "s": "BITSTAMP:BTCUSD" },
                        { "s": "BITSTAMP:ETHUSD" },
                        { "s": "COINBASE:SOLUSD" },
                        { "s": "BINANCE:ADAUSD" },
                        { "s": "BINANCE:DOTUSD" },
                        { "s": "BINANCE:LINKUSD" }
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
                        <h2>Cryptocurrency</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>/</li>
                            <li>Instruments List</li>
                            <li>/</li>
                            <li>Crypto</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="section-title">
                <div className="container">
                    <p>The crypto market is relatively newer, while forex trading has been in practice for much longer. Trading in cryptocurrencies comes with a higher degree of risk than forex trading.</p>
                </div>
            </section>

            <section className="about section-bg">
                <div className="container">
                    <div className="grid-2-col">
                        <div className="info-content-col">
                            <h3 className="titleSubTextspan">Crypto Information</h3>
                            <p className="description-text">Calculate your profit and margin on major crypto pairs.</p>

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
                    <h3>CRYPTO LISTING</h3>
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
                                <td className="symbol-cell">BTCUSD</td>
                                <td>Bitcoin vs USD</td>
                                <td>2</td>
                                <td>1 BTC</td>
                                <td>0.01</td>
                                <td>10</td>
                                <td>CFD</td>
                                <td>USD</td>
                                <td>USD</td>
                                <td>0.5000000</td>
                                <td>00:00 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">ETHUSD</td>
                                <td>Ethereum vs USD</td>
                                <td>2</td>
                                <td>1 ETH</td>
                                <td>0.01</td>
                                <td>10</td>
                                <td>CFD</td>
                                <td>USD</td>
                                <td>USD</td>
                                <td>0.5000000</td>
                                <td>00:00 - 23:58:59</td>
                            </tr>
                            <tr>
                                <td className="symbol-cell">SOLUSD</td>
                                <td>Solana vs USD</td>
                                <td>2</td>
                                <td>100 SOL</td>
                                <td>0.01</td>
                                <td>10</td>
                                <td>CFD</td>
                                <td>USD</td>
                                <td>USD</td>
                                <td>0.5000000</td>
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
                    <p>Cryptocurrency markets are decentralized and non-regulated. Trading CFDs on cryptocurrencies involves significant risk.</p>
                </div>
            </div>
        </div>
    );
};

export default Crypto;
