import React, { useEffect } from 'react';
import '../Report.css';

const Report = () => {

    useEffect(() => {
        // Load TradingView Widget
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
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
            "plotLineColorGrowing": "rgba(212, 168, 83, 1)",
            "plotLineColorFalling": "rgba(212, 168, 83, 1)",
            "gridLineColor": "rgba(240, 243, 250, 0)",
            "scaleFontColor": "rgba(224, 224, 224, 1)",
            "belowLineFillColorGrowing": "rgba(212, 168, 83, 0.12)",
            "belowLineFillColorFalling": "rgba(212, 168, 83, 0.12)",
            "belowLineFillColorGrowingBottom": "rgba(212, 168, 83, 0)",
            "belowLineFillColorFallingBottom": "rgba(212, 168, 83, 0)",
            "symbolActiveColor": "rgba(212, 168, 83, 0.12)",
            "tabs": [
                {
                    "title": "Crypto",
                    "symbols": [
                        { "s": "VANTAGE:BTCBCH" },
                        { "s": "VANTAGE:BTCETH" },
                        { "s": "VANTAGE:BTCLTC" },
                        { "s": "COINBASE:SOLUSD" },
                        { "s": "VANTAGE:ETHBCH" },
                        { "s": "COINBASE:BTCEUR" },
                        { "s": "BINANCE:ETHEUR" },
                        { "s": "BITSTAMP:BTCUSD" },
                        { "s": "BITSTAMP:ETHUSD" },
                        { "s": "COINBASE:ADAUSD" },
                        { "s": "BINANCE:DOTUSD" },
                        { "s": "VANTAGE:LNKUSD" },
                        { "s": "VANTAGE:MTCUSD" },
                        { "s": "COINBASE:UNIUSD" },
                        { "s": "KRAKEN:BCHUSD" }
                    ]
                }
            ]
        });

        const widgetContainer = document.getElementById('tradingview-widget');
        if (widgetContainer) {
            widgetContainer.appendChild(script);
        }

        return () => {
            if (widgetContainer) {
                widgetContainer.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="report-page-wrapper">
            <main className="report-content">
                <div className="section-header">
                    <h1 className="gradient-text" style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', marginBottom: '10px' }}>
                        Crypto Report</h1>
                    <p>Comprehensive Market Data and Analysis</p>
                </div>

                {/* Intro Section */}
                <section className="report-section">
                    <h3>Crypto - Forex Trading with <span>Nebula Financial Services Ltd</span></h3>
                    <p>
                        The crypto market is relatively newer, while forex trading has been in practice for much longer, ever since we have had different national currencies. Trading in cryptocurrencies comes with a higher degree of risk than forex trading. At Nebula Financial Services Ltd you can trade Bitcoin, Ethereum, Litecoin and Ripple with low margin, competitive financing and reliable trade executions.
                    </p>
                </section>

                {/* Additional Info / Widget Section */}
                <section className="report-section">
                    <div className="split-section">
                        <div className="split-content">
                            <h3>Additional Information</h3>
                            <p className="fst-italic">How to calculate Profit & Margin on Forex Currencies?</p>

                            <h4>Facts behind the Calculations</h4>
                            <div className="info-cards">
                                <div className="info-card">
                                    <p>Profit/Loss is always calculated on the last quoted currency of symbol.</p>
                                </div>
                                <div className="info-card">
                                    <p>Margin is always calculated on the first quoted currency of symbol.</p>
                                </div>
                            </div>
                        </div>
                        <div className="split-image">
                            <div id="tradingview-widget" className="widget-container"></div>
                        </div>
                    </div>
                </section>

                {/* Crypto Table I */}
                <section className="report-section">
                    <h3>CRYPTO I</h3>
                    <div className="report-table-container">
                        <table className="report-table">
                            <thead>
                                <tr>
                                    <th>Symbol</th>
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
                                    <th>Trading Hours (GMT+2)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>BTCXBN</td><td>Bitcoin vs Bitcoin Cash</td><td>3</td><td>1 BTC</td><td>0.00</td><td>0.01</td><td>10</td><td>0.01</td><td>forex no leverage</td><td>XBN</td><td>BTC</td><td>0.0300000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>BTCXET</td><td>Bitcoin vs Ethereum</td><td>4</td><td>1 BTC</td><td>0.00</td><td>0.01</td><td>10</td><td>0.01</td><td>forex no leverage</td><td>XET</td><td>BTC</td><td>0.0300000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>BTCXLC</td><td>Bitcoin vs Litecoin</td><td>3</td><td>1 BTC</td><td>0.00</td><td>0.01</td><td>10</td><td>0.01</td><td>forex no leverage</td><td>XLC</td><td>BTC</td><td>0.0300000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>SOLUSD</td><td>Solana</td><td>2</td><td>100 SOL</td><td>0.00</td><td>0.01</td><td>10</td><td>0.01</td><td>forex no leverage</td><td>USD</td><td>SOL</td><td>0.0300000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>XETXBN</td><td>Ethereum vs Bitcoin Cash</td><td>4</td><td>10 XET</td><td>0.00</td><td>0.01</td><td>10</td><td>0.01</td><td>forex no leverage</td><td>XBN</td><td>XET</td><td>0.0300000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>BTCEUR</td><td>BitCoin vs Euro</td><td>2</td><td>1 BTC</td><td>0.00</td><td>0.01</td><td>10</td><td>0.01</td><td>forex no leverage</td><td>EUR</td><td>BTC</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>XETEUR</td><td>Ethereum vs Euro</td><td>2</td><td>10 XET</td><td>0.00</td><td>0.01</td><td>10</td><td>0.01</td><td>forex no leverage</td><td>EUR</td><td>XET</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>BTCUSD</td><td>Bitcoin vs USD</td><td>2</td><td>1 BTC</td><td>0.00</td><td>0.01</td><td>10</td><td>0.01</td><td>cfd</td><td>USD</td><td>USD</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>ETHUSD</td><td>Etherium vs USD</td><td>2</td><td>1 ETH</td><td>0.01</td><td>0.01</td><td>10</td><td>0.01</td><td>cfd</td><td>USD</td><td>USD</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Crypto Table II */}
                <section className="report-section">
                    <h3>CRYPTO II</h3>
                    <div className="report-table-container">
                        <table className="report-table">
                            <thead>
                                <tr>
                                    <th>Symbol</th>
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
                                    <th>Trading Hours (GMT+2)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>ADAUSD</td><td>Cardano</td><td>4</td><td>1000 ADA</td><td>0.00</td><td>0.01</td><td>50</td><td>0.01</td><td>forex no leverage</td><td>USD</td><td>ADA</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>DOTUSD</td><td>Polkadot</td><td>3</td><td>100 DOT</td><td>0.00</td><td>0.01</td><td>50</td><td>0.01</td><td>forex no leverage</td><td>USD</td><td>DOT</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>LNKUSD</td><td>Chainlink</td><td>3</td><td>100 LNK</td><td>0.00</td><td>0.01</td><td>50</td><td>0.01</td><td>forex no leverage</td><td>USD</td><td>LNK</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>MTCUSD</td><td>Polygon</td><td>4</td><td>1000 MTC</td><td>0.00</td><td>0.01</td><td>50</td><td>0.01</td><td>forex no leverage</td><td>USD</td><td>MTC</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>UNIUSD</td><td>Uniswap</td><td>3</td><td>100 UNI</td><td>0.00</td><td>0.01</td><td>50</td><td>0.01</td><td>forex no leverage</td><td>USD</td><td>UNI</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                                <tr><td>XBNUSD</td><td>BitcoinCash/USD</td><td>2</td><td>1 XBN</td><td>0.01</td><td>0.01</td><td>50</td><td>0.01</td><td>cfd</td><td>USD</td><td>USD</td><td>0.5000000</td><td>00:00 - 23:58:59</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.</p>
                    <h6>Risk Warning:</h6>
                    <p>The financial products offered via this website include digitals, contracts for difference (CFDs), and other complex derivatives and financial products. Trading options may not be suitable for everyone. Trading CFDs carries a high level of risk since leverage can work both to your advantage and disadvantage. As a result, the products offered on this website may not be suitable for all investors because of the risk of losing all of your invested capital. You should never invest money that you cannot afford to lose, and never trade with borrowed money. Before trading in the complex financial products offered, please be sure to understand the risks involved and learn about Secure and responsible trading.</p>
                </div>

            </main>
        </div>
    );
};

export default Report;
