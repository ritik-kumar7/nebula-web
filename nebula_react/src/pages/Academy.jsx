import React from 'react';
import '../Academy.css';

// Using available assets where possible
import imgForexMarket from '../assets/market_img/untitled_10-ai.png'; // Used for Advantages
import iconForex from '../assets/market_img/forex.png';
import iconLeverage from '../assets/market_img/gold-ingot.png';
import iconMargin from '../assets/market_img/bar-chart.png';
import iconSpread from '../assets/market_img/cryptocurrency.png';
import imgBidAsk from '../assets/market_img/cryoti.png';
import imgOrderTypes from '../assets/market_img/orderType.jpg';
import imgLimitOrder from '../assets/market_img/limiyOrder.png';
import imgBuySell from '../assets/market_img/buy_sell.png';
import imgStopLoss from '../assets/market_img/stopLoss.png';
import imgTrailingStop from '../assets/market_img/stoplossorder.png';
import imgCPI from '../assets/market_img/consumerprice.jpg';
import imgPPI from '../assets/market_img/ProducerPriceIndex.jpg';
import imgEmployment from '../assets/market_img/EmploymentIndicator.jpg';
import imgRetail from '../assets/market_img/RetailSalesIndex.jpg';
import imgHousing from '../assets/market_img/housingData.jpg';
import imgInterest from '../assets/market_img/intrestRate.jpg';

const Academy = () => {
    return (
        <div className="academy-page-wrapper">
            <main className="page-content">
                {/* Header Section */}
                <div className="section-header">
                    <h1 className="gradient-text">Academy</h1>
                    <p>Master the Global Markets with Nebula Finserv</p>
                </div>

                {/* What is Forex Market */}
                <section className="content-section minimal-blur">
                    <div className="section-header">
                        <h3>What is <span>Forex Market</span></h3>
                        <p>
                            The Forex market is where banks, businesses, governments, investors and traders come to exchange and speculate on currencies. The Forex market is also referred to as the 'Fx market', 'Currency market', 'Foreign exchange currency market' or 'Foreign currency market', and it is the largest and most liquid market in the world with an average daily turnover of $5.3 trillion.
                        </p>
                    </div>
                </section>

                {/* Advantages Section */}
                <section className="content-section split-section">
                    <div className="split-image">
                        <img src={imgForexMarket} alt="Forex Trading" />
                    </div>
                    <div className="split-content">
                        <h3>Advantages of Forex Trading</h3>
                        <p>The Fx market is open 24 hours a day, 5 days a week with the most important world trading centers being located in London, New York, Tokyo, Zurich, Frankfurt, Hong Kong, Singapore, Paris, and Sydney.</p>
                        <p><strong>Trade whenever you want:</strong> There is no opening bell in the Forex market. You can enter or exit a trade whenever you want from Sunday around 5pm EST to Friday around 4pm EST.</p>
                        <p><strong>Ease of access:</strong> You can fund your trading account with as little as $100 and begin trading the same day. Straight through order execution allows you to trade at the click of a mouse.</p>
                        <p>Fewer currency pairs to focus on, instead of getting lost trying to analyze thousands of stocks. Freedom to trade anywhere in the world with the only requirements being a laptop and internet connection.</p>
                    </div>
                </section>

                {/* Terminologies */}
                <section className="content-section grid-container">
                    <div className="section-header">
                        <h3>Forex Terminologies</h3>
                    </div>
                    <div className="market-card-grid">
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon"><img src={iconForex} width="24" alt="PIP" /></div>
                                <h3 className="card-title">PIP</h3>
                            </div>
                            <p className="card-description">The smallest increment of price movement a currency can make. Also called point or points. For example, 1 pip for the EUR/USD = 0.0001 and 1 pip for the USD/JPY = 0.01.</p>
                        </div>
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon"><img src={iconLeverage} width="24" alt="Leverage" /></div>
                                <h3 className="card-title">LEVERAGE</h3>
                            </div>
                            <p className="card-description">Leverage is the ability to gear your account into a position greater than your total account margin. e.g. 100:1 leverage allows $1000 to control $100,000.</p>
                        </div>
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon"><img src={iconMargin} width="24" alt="Margin" /></div>
                                <h3 className="card-title">MARGIN</h3>
                            </div>
                            <p className="card-description">The deposit required to open or maintain a position. Margin can be "free" or "used". Used margin is for open positions, free margin for new ones.</p>
                        </div>
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon"><img src={iconSpread} width="24" alt="Spread" /></div>
                                <h3 className="card-title">SPREAD</h3>
                            </div>
                            <p className="card-description">The difference between the sell quote and the buy quote. To break even on a trade, a position must move in direction of trade by amount equal to spread.</p>
                        </div>
                    </div>
                </section>

                {/* Currency Pairs */}
                <section className="content-section">
                    <div className="section-header">
                        <h3>Currency <span>Pairs</span></h3>
                        <h4>Base/Quote currencies</h4>
                        <p>The first currency in the pair that is located to the left of the slash mark is called the base currency, and the second currency of the pair that's located to the right of the slash market is called the counter or quote currency.</p>
                        <p>If you buy the EUR/USD (or any other currency pair), the exchange rate tells you how much you need to pay in terms of the quote currency to buy one unit of the base currency. In other words, in the example above, you have to pay 1.32105 U.S. dollars to buy 1 euro.</p>
                    </div>
                </section>

                {/* Bid-Ask Price */}
                <section className="content-section split-section reverse">
                    <div className="split-image">
                        <img src={imgBidAsk} alt="Bid Ask Price" />
                    </div>
                    <div className="split-content">
                        <h3>Bid-Ask Price</h3>
                        <p><strong>Bid Price:</strong> The bid is the price at which the market (or your broker) will buy a specific currency pair from you. Thus, at the bid price, a trader can sell the base currency to their broker.</p>
                        <p><strong>Ask Price:</strong> The ask price is the price at which the market (or your broker) will sell a specific currency pair to you. Thus, at the ask price you can buy the base currency from your broker.</p>
                    </div>
                </section>

                {/* Order Types: Long & Short */}
                <section className="content-section">
                    <div className="section-header">
                        <h3>Order <span>Types</span></h3>
                        <h4>Long & Short</h4>
                        <p>Another great thing about the Forex market is that you have more of a potential to profit in both rising and falling markets due to the fact that there is no market bias like the bullish bias of stocks.</p>
                    </div>
                    <div className="market-card-grid">
                        <div className="feature-card">
                            <h3 className="card-title">LONG</h3>
                            <p className="card-description">When we go long it means we are buying the market and so we want the market to rise so that we can then sell back our position at a higher price than we bought for.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="card-title">SHORT</h3>
                            <p className="card-description">When we go short it means we are selling the market and so we want the market to fall so that we can then buy back our position at a lower price than we sold it for.</p>
                        </div>
                    </div>
                </section>

                {/* Advanced Order Types */}
                <section className="content-section">
                    <div className="section-header">
                        <h3>Order Execution Models</h3>
                    </div>
                    <div className="market-card-grid">
                        <div className="feature-card">
                            <div className="card-image-content" style={{ marginBottom: '15px' }}>
                                <img src={imgOrderTypes} alt="Market Order" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <h3 className="card-title">Market Order</h3>
                            <p className="card-description">A market order is an order that is placed 'at the market' and it's executed instantly at the best available price.</p>
                        </div>
                        <div className="feature-card">
                            <div className="card-image-content" style={{ marginBottom: '15px' }}>
                                <img src={imgLimitOrder} alt="Limit Order" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <h3 className="card-title">Limit Order</h3>
                            <p className="card-description">A limit entry order is placed to either buy below the current market price or sell above the current market price. If the EURUSD is at 1.3200 and you want to sell at 1.3250, you place a limit sell order.</p>
                        </div>
                        <div className="feature-card">
                            <div className="card-image-content" style={{ marginBottom: '15px' }}>
                                <img src={imgBuySell} alt="Stop Entry" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <h3 className="card-title">Stop Entry Order</h3>
                            <p className="card-description">A stop-entry order is placed to buy above the current market price or sell below it. Used for breakouts of resistance or support areas.</p>
                        </div>
                    </div>
                </section>

                {/* Stop Loss & Trailing Stop */}
                <section className="content-section split-section">
                    <div className="split-content">
                        <h3>Stop Loss & Trailing Stop</h3>
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                            <img src={imgStopLoss} alt="Stop Loss" style={{ width: '45%', borderRadius: '10px' }} />
                            <img src={imgTrailingStop} alt="Trailing Stop" style={{ width: '45%', borderRadius: '10px' }} />
                        </div>
                        <p><strong>Stop Loss Order:</strong> An order connected to a trade to prevent further losses if the price moves beyond a level you specify. Most important order in Forex trading.</p>
                        <p><strong>Trailing Stop Loss:</strong> Moves or 'trails' the current market price as your trade moves in your favor. Helps lock in profit while giving the trade room to grow.</p>
                    </div>
                    <div className="split-image">
                        <div className="feature-card" style={{ padding: '20px' }}>
                            <p><strong>GTC (Good till Cancelled):</strong> Active until you cancel it.</p>
                            <p><strong>GFD (Good for the Day):</strong> Active until the end of the trading day.</p>
                            <p><strong>OCO (One Cancels Other):</strong> When one order executes, the other is cancelled.</p>
                            <p><strong>OTO (One Triggers Other):</strong> When one order executes, it triggers another.</p>
                        </div>
                    </div>
                </section>

                {/* Lot Sizes Table */}
                <section className="content-section">
                    <div className="section-header">
                        <h3>Lot <span>Sizes</span></h3>
                        <p>In Forex, positions are quoted in terms of 'lots'. Common sizes are standard, mini, micro, and nano.</p>
                    </div>
                    <div className="report-table-container">
                        <table className="report-table">
                            <thead>
                                <tr>
                                    <th>Lot Type</th>
                                    <th>Number of Units</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Standard</td><td>100,000</td></tr>
                                <tr><td>Mini</td><td>10,000</td></tr>
                                <tr><td>Micro</td><td>1,000</td></tr>
                                <tr><td>Nano</td><td>100</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Major Economical Events */}
                <section className="content-section grid-container">
                    <div className="section-header">
                        <h3>Major Economical Events</h3>
                    </div>
                    <div className="market-card-grid">
                        <div className="feature-card">
                            <div className="card-image-content" style={{ marginBottom: '15px' }}>
                                <img src={imgCPI} alt="CPI" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <h3 className="card-title">CPI & PPI</h3>
                            <p className="card-description">Consumer Price Index and Producer Price Index are widely used measures of inflation, tracking changes in the cost of goods and services.</p>
                        </div>
                        <div className="feature-card">
                            <div className="card-image-content" style={{ marginBottom: '15px' }}>
                                <img src={imgPPI} alt="PPI" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <h3 className="card-title">GDP</h3>
                            <p className="card-description">Gross Domestic Product is the biggest measure of the state of the economy, reflecting the aggregate value of all goods and services produced.</p>
                        </div>
                        <div className="feature-card">
                            <div className="card-image-content" style={{ marginBottom: '15px' }}>
                                <img src={imgEmployment} alt="NFP" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <h3 className="card-title">NFP</h3>
                            <p className="card-description">Non-Farm Payroll is a major employment indicator, reporting the number of new jobs created and unemployment rate on the first Friday of every month.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="card-title">FOMC</h3>
                            <p className="card-description">The Federal Open Market Committee determines the direction of Monetary Policy, including interest rate changes. It is the branch of the Federal Reserve Board that determines the direction of Monetary Policy.</p>
                        </div>
                    </div>
                </section>

                {/* Other Indicators */}
                <section className="content-section">
                    <div className="section-header">
                        <h3>Key Economic Indicators</h3>
                    </div>
                    <div className="market-card-grid">
                        <div className="feature-card">
                            <div className="card-image-content" style={{ marginBottom: '15px' }}>
                                <img src={imgRetail} alt="Retail Sales" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <h3 className="card-title">Retail Sales</h3>
                            <p className="card-description">Measures goods sold within the retail industry, a key gauge of consumer spending.</p>
                        </div>
                        <div className="feature-card">
                            <div className="card-image-content" style={{ marginBottom: '15px' }}>
                                <img src={imgHousing} alt="Housing Data" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <h3 className="card-title">Housing Data</h3>
                            <p className="card-description">Includes new home construction and existing sales, reflect economic stimulus and strength.</p>
                        </div>
                        <div className="feature-card">
                            <div className="card-image-content" style={{ marginBottom: '15px' }}>
                                <img src={imgInterest} alt="Interest Rates" style={{ width: '100%', borderRadius: '10px' }} />
                            </div>
                            <h3 className="card-title">Interest Rates</h3>
                            <p className="card-description">The main driver of Forex markets, gauged by the Fed to manage economic health.</p>
                        </div>
                    </div>
                </section>

                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of the USA, UAE, North korea, IRAN, MYANMAR or any other country that may be subject to any international sanctions.</p>
                </div>
            </main>
        </div>
    );
};

export default Academy;
