import React from 'react';
import '../Market.css';

// Images
import imgForexMarket from '../assets/market_img/untitled_10-ai.png';
import iconForex from '../assets/market_img/forex.png';
import iconLeverage from '../assets/market_img/gold-ingot.png';
import iconMargin from '../assets/market_img/bar-chart.png';
import iconSpread from '../assets/market_img/cryptocurrency.png';
import imgBidAsk from '../assets/market_img/cryoti.png';
import imgOrderType from '../assets/market_img/orderType.jpg';
import imgLimitOrder from '../assets/market_img/limiyOrder.png';
import imgBuySell from '../assets/market_img/buy_sell.png';
import imgStopLoss from '../assets/market_img/stopLoss.png';
import imgStopLossTypes from '../assets/market_img/stoplossorder.png';
import imgCPI from '../assets/market_img/consumerprice.jpg';
import imgPPI from '../assets/market_img/ProducerPriceIndex.jpg';
import imgEmployment from '../assets/market_img/EmploymentIndicator.jpg';
import imgRetail from '../assets/market_img/RetailSalesIndex.jpg';
import imgHousing from '../assets/market_img/housingData.jpg';
import imgRates from '../assets/market_img/intrestRate.jpg';

const Market = () => {
    return (
        <div className="market-page-wrapper">
            {/* Main Content */}
            <main className="page-content">

                {/* Breadcrumbs equivalent */}
                <div className="section-header">
                    <h1 className="gradient-text">
                        Market</h1>
                    <p>Master the Global Markets with Nebula Finserv</p>
                </div>

                {/* 1. What is Forex Market */}
                <section className="content-section minimal-blur">
                    <div className="section-header">
                        <h3>What is <span>Forex Market</span></h3>
                        <p>The Forex market is where banks, businesses, governments, investors and traders come to exchange and
                            speculate on currencies. The Forex market is also referred to as the 'Fx market', 'Currency market',
                            'Foreign exchange currency market' or 'Foreign currency market', and it is the largest and most
                            liquid market in the world with an average daily turnover of $5.3 trillion.</p>
                    </div>
                </section>

                {/* 2. Advantages of Forex Trading */}
                <section className="content-section split-section">
                    <div className="split-image">
                        <img src={imgForexMarket} alt="Forex Trading" />
                    </div>
                    <div className="split-content">
                        <h3>Advantages of Forex Trading</h3>
                        <p>The Fx market is open 24 hours a day, 5 days a week with the most important world trading centers
                            being located in London, New York, Tokyo, Zurich, Frankfurt, Hong Kong, Singapore, Paris, and
                            Sydney. Forex is the largest market in the world, with daily volumes exceeding $5.3 trillion per
                            day.</p>
                        <p><strong>Trade whenever you want:</strong> There is no opening bell in the Forex market. You can enter
                            or exit a trade whenever you want from Sunday around 5pm EST to Friday around 4pm EST.</p>
                        <p><strong>Ease of access:</strong> You can fund your trading account with as little as $100 at many
                            retail brokers and begin trading the same day in some cases. Straight through order execution allows
                            you to trade at the click of a mouse.</p>
                        <p><strong>Commission-free trading:</strong> Many retail market-makers offer lower transaction costs
                            than stocks and commodities. Volatility allows traders to profit in any market condition.</p>
                    </div>
                </section>

                {/* 3. Forex Terminologies */}
                <section className="content-section">
                    <div className="section-header">
                        <h3>Forex Terminologies</h3>
                    </div>
                    <div className="market-card-grid">
                        {/* Card 1 */}
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <img src={iconForex} width="24" alt="Icon" />
                                </div>
                                <h3 className="card-title">PIP</h3>
                            </div>
                            <p className="card-description">The smallest increment of price movement a currency can make. For
                                example, 1 pip for the EUR/USD = 0.0001 and 1 pip for the USD/JPY = 0.01.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <img src={iconLeverage} width="24" alt="Icon" />
                                </div>
                                <h3 className="card-title">LEVERAGE</h3>
                            </div>
                            <p className="card-description">Leverage is the ability to gear your account into a position greater
                                than your total account margin. e.g. 100:1 leverage allows $1000 to control $100,000.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <img src={iconMargin} width="24" alt="Icon" />
                                </div>
                                <h3 className="card-title">MARGIN</h3>
                            </div>
                            <p className="card-description">The deposit required to open or maintain a position. Margin can be
                                "free" or "used". Used margin is for open positions, free margin for new ones.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="feature-card">
                            <div className="card-header">
                                <div className="card-icon">
                                    <img src={iconSpread} width="24" alt="Icon" />
                                </div>
                                <h3 className="card-title">SPREAD</h3>
                            </div>
                            <p className="card-description">The difference between the sell quote and the buy quote. To break even
                                on a trade, a position must move in direction of trade by amount equal to spread.</p>
                        </div>
                    </div>
                </section>

                {/* 4. Currency Pairs */}
                <section className="content-section totally-transparent">
                    <div className="section-header">
                        <h3>Currency <span>Pairs</span></h3>
                        <p>Base/Quote currencies</p>
                    </div>
                    <div className="text-block">
                        <p>The first currency in the pair (left) is the base currency, and the second (right) is the quote
                            currency. If you buy EUR/USD, the exchange rate tells you how much quote currency (USD) you need to
                            buy one unit of base currency (EUR).</p>
                    </div>
                </section>

                {/* 5. Bid-Ask Price */}
                <section className="content-section split-section">
                    <div className="split-content">
                        <h3>Bid-Ask Price</h3>
                        <p>If you sell the EUR/USD, the exchange rate tells you how much quote currency you receive for selling
                            one unit of base currency.</p>
                        <p><strong>Bid Price:</strong> The price at which the market will buy a specific currency pair from you.
                            You sell the base currency at the bid.</p>
                        <p><strong>Ask Price:</strong> The price at which the market will sell a specific currency pair to you.
                            You buy the base currency at the ask.</p>
                    </div>
                    <div className="split-image">
                        <img src={imgBidAsk} alt="Bid Ask" />
                    </div>
                </section>

                {/* 6. Order Types Intro: Long & Short */}
                <section className="content-section">
                    <div className="section-header">
                        <h3>Order <span>Types</span></h3>
                        <p>Long & Short</p>
                    </div>
                    <div className="text-block">
                        <p>In Forex, you can profit in both rising and falling markets. There is no structural market bias like
                            in stocks. "Fastest money is made in falling markets".</p>
                    </div>
                </section>

                {/* 7. Order Types Detail */}
                <section className="content-section split-section">
                    <div className="split-image">
                        <img src={imgOrderType} alt="Order Types" />
                    </div>
                    <div className="split-content">
                        <p><strong>LONG:</strong> Buying the market. You want the market to rise to sell back at a higher price.
                            Buying the first currency, selling the second.</p>
                        <p><strong>SHORT:</strong> Selling the market. You want the market to fall to buy back at a lower price.
                            Selling the first currency, buying the second.</p>
                        <h3 style={{ marginTop: '20px' }}>Market Order</h3>
                        <p>An order placed 'at the market' and executed instantly at the best available price.</p>
                    </div>
                </section>

                {/* 8. Limit & Stop Orders */}
                <section className="content-section split-section reverse totally-transparent">
                    <div className="split-image">
                        <img src={imgLimitOrder} alt="Limit Order" />
                    </div>
                    <div className="split-content">
                        <h3>Limit Order</h3>
                        <p>A limit entry order is placed to either buy below the current market price or sell above the current
                            market price.</p>
                        <p>Example: If EURUSD is at 1.3200 and you want to sell at 1.3250, you place a Limit Sell. It fills if
                            market rises to that level. Limit orders get better prices than current market.</p>
                    </div>
                </section>

                <section className="content-section split-section">
                    <div className="split-image">
                        <img src={imgBuySell} alt="Buy Sell" />
                    </div>
                    <div className="split-content">
                        <h3>Buy Stop & Sell Stop Order</h3>
                        <p>A stop-entry order is placed to buy above current market price or sell below it. Used for breakouts.
                            Example: Buy Stop placed above resistance.</p>
                    </div>
                </section>

                <section className="content-section split-section reverse totally-transparent">
                    <div className="split-image">
                        <img src={imgStopLoss} alt="Stop Loss" />
                    </div>
                    <div className="split-content">
                        <h3>Stop Loss Order</h3>
                        <p>Connected to a trade to prevent further losses if price moves beyond a specified level. Crucial for
                            risk management.</p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="section-header">
                        <h3>Trailing Stop Loss</h3>
                    </div>
                    <div className="text-block">
                        <p>Moves or 'trails' the current market price as trade moves in your favor. It considers a set distance
                            (e.g., 50 pips). Locks in profit while giving trade room to grow. Best for strong trends.</p>
                    </div>
                </section>

                <section className="content-section split-section">
                    <div className="split-image">
                        <img src={imgStopLossTypes} alt="Stop Loss Types" />
                    </div>
                    <div className="split-content">
                        <h3>Order Durations (GTC/GFD/OCO/OTO)</h3>
                        <p><strong>GTC (Good till Cancelled):</strong> Active until you cancel it.</p>
                        <p><strong>GFD (Good for the Day):</strong> Active until end of trading day (5pm EST).</p>
                        <p><strong>OCO (One Cancels Other):</strong> Two orders; identifying one cancels the other.</p>
                        <p><strong>OTO (One Triggers Other):</strong> Filling one order triggers another.</p>
                    </div>
                </section>

                {/* 9. Lot Sizes */}
                <section className="content-section totally-transparent">
                    <div className="section-header">
                        <h3>Lot <span>Sizes</span></h3>
                        <p>Positions are quoted in terms of 'lots'.</p>
                    </div>
                    <div className="split-section">
                        <div className="split-content">
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Lot</th>
                                            <th>Numbers of Units</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Standard</td>
                                            <td>100,000</td>
                                        </tr>
                                        <tr>
                                            <td>Mini</td>
                                            <td>10,000</td>
                                        </tr>
                                        <tr>
                                            <td>Micro</td>
                                            <td>1,000</td>
                                        </tr>
                                        <tr>
                                            <td>Nano</td>
                                            <td>100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="split-content">
                            <p><strong>Representation & Pip Value:</strong></p>
                            <p>Standard Lot (100k units): ~$10 per pip.</p>
                            <p>Mini Lot (10k units): ~$1 per pip.</p>
                            <p>Micro Lot (1k units): ~$0.10 per pip.</p>
                            <p>Nano Lot (100 units): ~$0.01 per pip.</p>
                        </div>
                    </div>
                </section>

                {/* 10. Major Econ Events */}
                <section className="content-section">
                    <div className="section-header">
                        <h3>Major Economical Events</h3>
                    </div>
                    <div className="market-card-grid">
                        <div className="feature-card">
                            <h3 className="card-title">GDP (Gross Domestic Product)</h3>
                            <p className="card-description">Biggest measure of overall economy. Released quarterly. Aggregate value
                                of all goods and services produced.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="card-title">Trade Balance</h3>
                            <p className="card-description">Difference between imports and exports. More exports than imports is
                                generally better for economic strength.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="card-title">NFP (Non-Farm Payroll)</h3>
                            <p className="card-description">Most important employment announcement. First Friday of month. Excludes
                                farm/non-profit jobs. Major market mover.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="card-title">FOMC</h3>
                            <p className="card-description">Federal Reserve branch determining monetary policy (interest rates).
                                Meets 8 times a year.</p>
                        </div>
                        <div className="feature-card">
                            <h3 className="card-title">Durable Goods</h3>
                            <p className="card-description">Spending on longer-term purchases ({">"}3 years). Insight into
                                manufacturing.</p>
                        </div>
                    </div>
                </section>

                {/* 11. More Indicators */}
                <section className="content-section split-section reverse">
                    <div className="split-image">
                        <img src={imgCPI} alt="CPI" />
                    </div>
                    <div className="split-content">
                        <h3>Consumer Price Index (CPI)</h3>
                        <p>Widely used measure of inflation. Cost of a bundle of consumer goods.</p>
                    </div>
                </section>

                <section className="content-section split-section">
                    <div className="split-image">
                        <img src={imgPPI} alt="PPI" />
                    </div>
                    <div className="split-content">
                        <h3>Producer Price Index (PPI)</h3>
                        <p>Change in prices received by domestic producers. Leading indicator for CPI.</p>
                    </div>
                </section>

                <section className="content-section split-section reverse totally-transparent">
                    <div className="split-image">
                        <img src={imgEmployment} alt="Employment" />
                    </div>
                    <div className="split-content">
                        <h3>Employment Indicator</h3>
                        <p>NFP, Unemployment rate, average hourly earnings. Crucial gauge of economic health.</p>
                    </div>
                </section>

                <section className="content-section split-section">
                    <div className="split-image">
                        <img src={imgRetail} alt="Retail" />
                    </div>
                    <div className="split-content">
                        <h3>Retail Sales Index</h3>
                        <p>Measures goods sold within retail industry. Consumer spending drives economy.</p>
                    </div>
                </section>

                <section className="content-section split-section reverse">
                    <div className="split-image">
                        <img src={imgHousing} alt="Housing" />
                    </div>
                    <div className="split-content">
                        <h3>Housing Data</h3>
                        <p>New home starts and existing sales. Residential construction is major economic stimulus.</p>
                    </div>
                </section>

                <section className="content-section split-section totally-transparent">
                    <div className="split-image">
                        <img src={imgRates} alt="Rates" />
                    </div>
                    <div className="split-content">
                        <h3>Interest Rates</h3>
                        <p>Main driver in Forex markets. Controlled by Central Banks (Fed) to manage inflation and growth.</p>
                    </div>
                </section>

                {/* Disclaimers */}
                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide services to residents of USA, UAE, North Korea, Iran,
                        Myanmar or sanctioned countries.</p>
                    <h6>Risk Warning:</h6>
                    <p>CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 70% of
                        retail investor accounts lose money when trading CFDs with this provider. You should consider whether
                        you understand how CFDs work and whether you can afford to take the high risk of losing your money.</p>
                </div>

            </main>
        </div>
    );
};

export default Market;
