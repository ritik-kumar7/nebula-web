import React, { useState, useEffect } from 'react';
import '../About.css';

const profitSymbolData = [
    // Major
    { tag: "Major", currency: "CHF", dataValue: 100000, value: "CADCHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
    { tag: "Major", currency: "JPY", dataValue: 100000, value: "CADJPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
    { tag: "Major", currency: "CAD", dataValue: 100000, value: "EURCAD", link: "https://www.google.com/search?q=cad+to+usd+conversion" },
    { tag: "Major", currency: "GBP", dataValue: 100000, value: "EURGBP", link: "https://www.google.com/search?q=gbp+to+usd+conversion" },
    { tag: "Major", currency: "JPY", dataValue: 100000, value: "EURJPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
    { tag: "Major", currency: "USD", dataValue: 100000, value: "EURUSD", link: "" },
    { tag: "Major", currency: "CAD", dataValue: 100000, value: "GBPCAD", link: "https://www.google.com/search?q=cad+to+usd+conversion" },
    { tag: "Major", currency: "CHF", dataValue: 100000, value: "GBPCHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
    { tag: "Major", currency: "JPY", dataValue: 100000, value: "GBPJPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
    { tag: "Major", currency: "USD", dataValue: 100000, value: "GBPUSD", link: "" },
    { tag: "Major", currency: "CAD", dataValue: 100000, value: "USDCAD", link: "https://www.google.com/search?q=cad+to+usd+conversion" },
    { tag: "Major", currency: "CHF", dataValue: 100000, value: "USDCHF", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
    { tag: "Major", currency: "JPY", dataValue: 100000, value: "USDJPY", link: "https://www.google.com/search?q=JPY+to+USD+conversion" },
    // ... and so on for all from the HTML ...
    { tag: "Gold", currency: "USD", dataValue: 100, value: "XAUUSD", link: "" },
    { tag: "Silver", currency: "USD", dataValue: 5000, value: "XAGUSD", link: "" },
    { tag: "Oil", currency: "USD", dataValue: 100, value: "UKOIL", link: "" },
    { tag: "Oil", currency: "USD", dataValue: 100, value: "USOIL", link: "" },
    { tag: "Spot", currency: "USD", dataValue: 1, value: "US30", link: "" },
    { tag: "Spot", currency: "AUD", dataValue: 1, value: "AUS200", link: "https://www.google.com/search?q=aud+to+usd+conversion" },
    { tag: "Spot", currency: "EUR", dataValue: 1, value: "EUSTX50", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    { tag: "Spot", currency: "EUR", dataValue: 1, value: "FRA40", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    { tag: "Spot", currency: "USD", dataValue: 1, value: "INDIA50", link: "" },
    { tag: "Spot", currency: "USD", dataValue: 1, value: "NAS100", link: "" },
    { tag: "Spot", currency: "USD", dataValue: 10, value: "SPX500", link: "" },
    { tag: "Spot", currency: "GBP", dataValue: 1, value: "UK100", link: "https://www.google.com/search?q=gbp+to+usd+conversion" },
    { tag: "Spot", currency: "USD", dataValue: 100, value: "USDX", link: "" },
    { tag: "Spot", currency: "USD", dataValue: 1000, value: "VIX", link: "" },
    { tag: "Spot", currency: "EUR", dataValue: 1, value: "GER40", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    // ... including Crypto
    { tag: "Crypto", currency: "USD", dataValue: 1, value: "BTCUSD", link: "" },
    { tag: "Crypto", currency: "USD", dataValue: 1, value: "ETHUSD", link: "" },
];

const ProfitCalculator = () => {
    const [securityFolder, setSecurityFolder] = useState('');
    const [symbol, setSymbol] = useState('');
    const [direction, setDirection] = useState('Buy');
    const [openPrice, setOpenPrice] = useState('');
    const [closePrice, setClosePrice] = useState('');
    const [lotSize, setLotSize] = useState('');
    const [conversionVal, setConversionVal] = useState('1');
    const [result, setResult] = useState('0');
    const [showConversion, setShowConversion] = useState(false);
    const [currencyLabel, setCurrencyLabel] = useState('');
    const [conversionLink, setConversionLink] = useState('');

    const filteredSymbols = profitSymbolData.filter(s => s.tag === securityFolder);

    const handleSymbolChange = (e) => {
        const val = e.target.value;
        const selected = profitSymbolData.find(s => s.value === val);
        setSymbol(val);
        if (selected) {
            setCurrencyLabel(selected.currency);
            setConversionLink(selected.link);
            if (selected.currency === 'USD') {
                setShowConversion(false);
                setConversionVal('1');
            } else {
                setShowConversion(true);
                setConversionVal('');
            }
        }
    };

    useEffect(() => {
        const selected = profitSymbolData.find(s => s.value === symbol);
        if (!selected || !openPrice || !closePrice || !lotSize || !conversionVal) {
            setResult('0');
            return;
        }

        let diff = parseFloat(closePrice) - parseFloat(openPrice);
        if (direction === 'Sell') {
            diff = parseFloat(openPrice) - parseFloat(closePrice);
        }

        const profitQuoted = diff * selected.dataValue * parseFloat(lotSize);
        const finalProfit = profitQuoted * parseFloat(conversionVal);
        setResult(finalProfit.toFixed(2));
    }, [symbol, direction, openPrice, closePrice, lotSize, conversionVal]);

    const reset = () => {
        setSecurityFolder('');
        setSymbol('');
        setDirection('Buy');
        setOpenPrice('');
        setClosePrice('');
        setLotSize('');
        setConversionVal('1');
        setResult('0');
        setShowConversion(false);
    };

    return (
        <div className="about-page-wrapper">
            <main className="page-content">
                <div className="section-header">
                    <h1 className="gradient-text">Profit Calculator</h1>
                    <p>Forex Trading with Nebula Financial Services Ltd</p>
                </div>

                <div className="calculator-container minimal-blur">
                    <div className="calculator-note">
                        <h3>Note</h3>
                        <p><i className="bi bi-check-circle-fill"></i> P/L is always calculated on the last quoted currency of symbol.</p>
                        <p><i className="bi bi-check-circle-fill"></i> Convert last quoted currency to USD for approx actual P/L.</p>
                    </div>

                    <div className="calculator-form">
                        <div className="input-group">
                            <label>Security Folder</label>
                            <select value={securityFolder} onChange={(e) => { setSecurityFolder(e.target.value); setSymbol(''); }}>
                                <option value="" disabled>Select Security Folder</option>
                                <option value="Major">Major</option>
                                <option value="Minor">Minor</option>
                                <option value="Exotic">Exotic</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Oil">Oil</option>
                                <option value="Spot">Spot Index</option>
                                <option value="Commodities">Commodities</option>
                                <option value="Crypto">Crypto</option>
                                <option value="CryptoII">Crypto II</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Symbol</label>
                            <select value={symbol} onChange={handleSymbolChange}>
                                <option value="" disabled>Select Symbol</option>
                                {filteredSymbols.map(s => (
                                    <option key={s.value} value={s.value}>{s.value}</option>
                                ))}
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Direction</label>
                            <select value={direction} onChange={(e) => setDirection(e.target.value)}>
                                <option value="Buy">Buy</option>
                                <option value="Sell">Sell</option>
                            </select>
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label>Opening Price</label>
                                <input type="number" value={openPrice} onChange={(e) => setOpenPrice(e.target.value)} placeholder="0" />
                            </div>
                            <div className="input-group">
                                <label>Closing Price</label>
                                <input type="number" value={closePrice} onChange={(e) => setClosePrice(e.target.value)} placeholder="0" />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Lot Size</label>
                            <input type="number" value={lotSize} onChange={(e) => setLotSize(e.target.value)} placeholder="0" />
                        </div>

                        {showConversion && (
                            <div className="input-group">
                                <p className="hint-text">
                                    Please check <a href={conversionLink} target="_blank" rel="noreferrer">{currencyLabel} to USD</a> conversion and enter below.
                                </p>
                                <label>Conversion Rate (to USD)</label>
                                <input type="number" value={conversionVal} onChange={(e) => setConversionVal(e.target.value)} placeholder="Enter rate" />
                            </div>
                        )}

                        <div className={`result-box ${parseFloat(result) >= 0 ? 'profit' : 'loss'}`}>
                            <label>P&L in USD</label>
                            <div className="result-value">${result}</div>
                        </div>

                        <button className="reset-btn" onClick={reset}>Reset</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfitCalculator;
