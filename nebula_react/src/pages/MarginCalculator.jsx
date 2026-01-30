import React, { useState, useEffect } from 'react';
import '../About.css'; // Reusing common styles

const symbolData = [
    { tag: "Major", currency: "CAD", dataMargin: 0.1, dataValue: 100000, value: "CADCHF", link: "https://www.google.com/search?q=CAD+to+USD+conversion" },
    { tag: "Major", currency: "CAD", dataMargin: 0.014, dataValue: 100000, value: "CADJPY", link: "https://www.google.com/search?q=CAD+to+USD+conversion" },
    { tag: "Major", currency: "EUR", dataMargin: 0.014, dataValue: 100000, value: "EURCAD", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    { tag: "Major", currency: "EUR", dataMargin: 0.014, dataValue: 100000, value: "EURGBP", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    { tag: "Major", currency: "EUR", dataMargin: 0.014, dataValue: 100000, value: "EURJPY", link: "https://www.google.com/search?q=EUR+to+USD+conversion" },
    { tag: "Major", currency: "EUR", dataMargin: 0.0193, dataValue: 100000, value: "EURUSD", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    { tag: "Major", currency: "GBP", dataMargin: 0.014, dataValue: 100000, value: "GBPCAD", link: "https://www.google.com/search?q=gbp+to+usd+conversion" },
    { tag: "Major", currency: "GBP", dataMargin: 0.1, dataValue: 100000, value: "GBPCHF", link: "https://www.google.com/search?q=GBP+to+USD+conversion" },
    { tag: "Major", currency: "GBP", dataMargin: 0.017, dataValue: 100000, value: "GBPJPY", link: "https://www.google.com/search?q=GBP+to+USD+conversion" },
    { tag: "Major", currency: "GBP", dataMargin: 0.0165, dataValue: 100000, value: "GBPUSD", link: "https://www.google.com/search?q=GBP+to+USD+conversion" },
    { tag: "Major", currency: "USD", dataMargin: 0.014, dataValue: 100000, value: "USDCAD", link: "" },
    { tag: "Major", currency: "USD", dataMargin: 0.1, dataValue: 100000, value: "USDCHF", link: "" },
    { tag: "Major", currency: "USD", dataMargin: 0.014, dataValue: 100000, value: "USDJPY", link: "" },
    // Minor
    { tag: "Minor", currency: "AUD", dataMargin: 0.014, dataValue: 100000, value: "AUDCAD", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
    { tag: "Minor", currency: "AUD", dataMargin: 0.1, dataValue: 100000, value: "AUDCHF", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
    { tag: "Minor", currency: "AUD", dataMargin: 0.014, dataValue: 100000, value: "AUDJPY", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
    { tag: "Minor", currency: "AUD", dataMargin: 0.014, dataValue: 100000, value: "AUDNZD", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
    { tag: "Minor", currency: "AUD", dataMargin: 0.014, dataValue: 100000, value: "AUDUSD", link: "https://www.google.com/search?q=AUD+to+usd+conversion" },
    { tag: "Minor", currency: "CHF", dataMargin: 0.1, dataValue: 100000, value: "CHFJPY", link: "https://www.google.com/search?q=CHF+to+USD+conversion" },
    { tag: "Minor", currency: "EUR", dataMargin: 0.014, dataValue: 100000, value: "EURAUD", link: "https://www.google.com/search?q=EUR+to+usd+conversion" },
    { tag: "Minor", currency: "EUR", dataMargin: 0.1, dataValue: 100000, value: "EURCHF", link: "https://www.google.com/search?q=EUR+to+USD+conversion" },
    { tag: "Minor", currency: "EUR", dataMargin: 0.014, dataValue: 100000, value: "EURNZD", link: "https://www.google.com/search?q=EUR+to+usd+conversion" },
    { tag: "Minor", currency: "GBP", dataMargin: 0.014, dataValue: 100000, value: "GBPAUD", link: "https://www.google.com/search?q=GBP+to+usd+conversion" },
    { tag: "Minor", currency: "GBP", dataMargin: 0.014, dataValue: 100000, value: "GBPNZD", link: "https://www.google.com/search?q=GBP+to+usd+conversion" },
    { tag: "Minor", currency: "NZD", dataMargin: 0.014, dataValue: 100000, value: "NZDCAD", link: "https://www.google.com/search?q=NZD+to+usd+conversion" },
    { tag: "Minor", currency: "NZD", dataMargin: 0.1, dataValue: 100000, value: "NZDCHF", link: "https://www.google.com/search?q=NZD+to+USD+conversion" },
    { tag: "Minor", currency: "NZD", dataMargin: 0.014, dataValue: 100000, value: "NZDJPY", link: "https://www.google.com/search?q=NZD+to+USD+conversion" },
    { tag: "Minor", currency: "NZD", dataMargin: 0.0245, dataValue: 100000, value: "NZDUSD", link: "https://www.google.com/search?q=NZD+to+USD+conversion" },
    // Exotic
    { tag: "Exotic", currency: "EUR", dataMargin: 0.016, dataValue: 100000, value: "EURNOK", link: "https://www.google.com/search?q=EUR+to+usd+conversion" },
    { tag: "Exotic", currency: "EUR", dataMargin: 0.016, dataValue: 100000, value: "EURSEK", link: "https://www.google.com/search?q=EUR+to+usd+conversion" },
    { tag: "Exotic", currency: "USD", dataMargin: 0.0005, dataValue: 100000, value: "USDHKD", link: "" },
    { tag: "Exotic", currency: "USD", dataMargin: 0.016, dataValue: 100000, value: "USDNOK", link: "" },
    { tag: "Exotic", currency: "USD", dataMargin: 0.016, dataValue: 100000, value: "USDSEK", link: "" },
    { tag: "Exotic", currency: "USD", dataMargin: 0.05, dataValue: 100000, value: "USDZAR", link: "" },
    // Gold/Silver/Oil...
    { tag: "Gold", currency: "XAU", dataMargin: 0.03, dataValue: 100, value: "XAUUSD", link: "https://www.google.com/search?q=xau+to+usd+conversion" },
    { tag: "Silver", currency: "XAG", dataMargin: 0.15, dataValue: 5000, value: "XAGUSD", link: "https://www.google.com/search?q=XAG+to+usd+conversion" },
    { tag: "Oil", currency: "USD", dataMargin: 0.01, dataValue: 100, value: "UKOIL", link: "" },
    { tag: "Oil", currency: "USD", dataMargin: 0.01, dataValue: 100, value: "USOIL", link: "" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 260, value: "US30", link: "" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 150, value: "AUS200", link: "https://www.google.com/search?q=aud+to+usd+conversion" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 60, value: "EUSTX50", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 85, value: "FRA40", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 260, value: "INDIA50", link: "" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 260, value: "NAS100", link: "" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 200, value: "SPX500", link: "" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 150, value: "UK100", link: "https://www.google.com/search?q=gbp+to+usd+conversion" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 98, value: "USDX", link: "" },
    { tag: "Spot", currency: "BuySell", dataMargin: 0.00018, dataValue: 1000, value: "VIX", link: "" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 260, value: "GER40", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 100, value: "CHINA50", link: "" },
    { tag: "Spot", currency: "USD", dataMargin: 0.01, dataValue: 100, value: "ESP35", link: "https://www.google.com/search?q=eur+to+usd+conversion" },
    // Commodities
    { tag: "Commodities", currency: "BuySell", dataMargin: 0.00028, dataValue: 25000, value: "Copper", link: "" },
    { tag: "Commodities", currency: "BuySell", dataMargin: 0.00065, dataValue: 10000, value: "NG", link: "" },
    // Crypto
    { tag: "Crypto", currency: "BTC", dataMargin: 0.0003, dataValue: 1, value: "BTCXBN", link: "https://www.google.com/search?q=BTC+to+USD+conversion" },
    { tag: "Crypto", currency: "BTC", dataMargin: 0.0003, dataValue: 1, value: "BTCXET", link: "https://www.google.com/search?q=BTC+to+USD+conversion" },
    { tag: "Crypto", currency: "BTC", dataMargin: 0.0003, dataValue: 1, value: "BTCXLC", link: "https://www.google.com/search?q=BTC+to+USD+conversion" },
    { tag: "Crypto", currency: "BuySell", dataMargin: 0.0003, dataValue: 100, value: "SOLUSD", link: "" },
    { tag: "Crypto", currency: "ETH", dataMargin: 0.0003, dataValue: 10, value: "XETXBN", link: "https://www.google.com/search?q=ETH+to+USD+conversion" },
    { tag: "Crypto", currency: "BTC", dataMargin: 0.005, dataValue: 1, value: "BTCEUR", link: "https://www.google.com/search?q=btc+to+usd+conversion" },
    { tag: "Crypto", currency: "ETH", dataMargin: 0.005, dataValue: 10, value: "XETEUR", link: "https://www.google.com/search?q=eth+to+usd+conversion" },
    { tag: "Crypto", currency: "BuySell", dataMargin: 0.005, dataValue: 1, value: "BTCUSD", link: "" },
    { tag: "Crypto", currency: "ETH", dataMargin: 0.005, dataValue: 1, value: "ETHUSD", link: "https://www.google.com/search?q=ETH+to+USD+conversion" },
    // Crypto II
    { tag: "CryptoII", currency: "BuySell", dataMargin: 0.005, dataValue: 1000, value: "ADAUSD", link: "" },
    { tag: "CryptoII", currency: "BuySell", dataMargin: 0.005, dataValue: 100, value: "DOTUSD", link: "" },
    { tag: "CryptoII", currency: "BuySell", dataMargin: 0.005, dataValue: 100, value: "LNKUSD", link: "" },
    { tag: "CryptoII", currency: "BuySell", dataMargin: 0.005, dataValue: 1000, value: "MTCUSD", link: "" },
    { tag: "CryptoII", currency: "BuySell", dataMargin: 0.005, dataValue: 100, value: "UNIUSD", link: "" },
    { tag: "CryptoII", currency: "BuySell", dataMargin: 0.005, dataValue: 1, value: "XBNUSD", link: "" },
];

const MarginCalculator = () => {
    const [securityFolder, setSecurityFolder] = useState('');
    const [symbol, setSymbol] = useState('');
    const [leverage, setLeverage] = useState('50');
    const [lotSize, setLotSize] = useState('');
    const [conversionVal, setConversionVal] = useState('');
    const [result, setResult] = useState('0');
    const [showConversion, setShowConversion] = useState(false);
    const [currencyLabel, setCurrencyLabel] = useState('CHF');
    const [conversionLink, setConversionLink] = useState('');
    const [showLeverage, setShowLeverage] = useState(true);

    const filteredSymbols = symbolData.filter(s => s.tag === securityFolder);

    useEffect(() => {
        if (['Oil', 'Spot', 'Commodities', 'Crypto', 'CryptoII'].includes(securityFolder)) {
            setShowLeverage(false);
            setLeverage('1');
        } else {
            setShowLeverage(true);
        }
    }, [securityFolder]);

    const handleSymbolChange = (e) => {
        const val = e.target.value;
        const selected = symbolData.find(s => s.value === val);
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

    const calculateResult = () => {
        const selected = symbolData.find(s => s.value === symbol);
        if (!selected || !lotSize || !leverage || !conversionVal) {
            setResult('0');
            return;
        }

        // Logic from official site:
        // NettoValueOptionLot = getlotSizeValue * GetBuyerSelectedOption * getnetCountInputLot / getnetCountInput * 100;
        // getlotSizeValue = selected.dataMargin
        // GetBuyerSelectedOption = selected.dataValue
        // getnetCountInputLot = lotSize
        // getnetCountInput = leverage

        const marginInOriginal = (selected.dataMargin * selected.dataValue * parseFloat(lotSize)) / parseFloat(leverage) * 100;
        const finalResult = marginInOriginal * parseFloat(conversionVal);
        setResult(finalResult.toFixed(2));
    };

    useEffect(() => {
        calculateResult();
    }, [symbol, leverage, lotSize, conversionVal]);

    const reset = () => {
        setSecurityFolder('');
        setSymbol('');
        setLeverage('50');
        setLotSize('');
        setConversionVal('');
        setResult('0');
        setShowConversion(false);
    };

    return (
        <div className="about-page-wrapper">
            <main className="page-content">
                <div className="section-header">
                    <h1 className="gradient-text">Margin Calculator</h1>
                    <p>Forex Trading with Nebula Financial Services Ltd</p>
                </div>

                <div className="calculator-container minimal-blur">
                    <div className="calculator-note">
                        <h3>Note</h3>
                        <p><i className="bi bi-check-circle-fill"></i> Margin is Based on 1st Quoted Currency.</p>
                        <p><i className="bi bi-check-circle-fill"></i> Convert the 1st quoted currency to USD for approx answer.</p>
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

                        {showLeverage && (
                            <div className="input-group">
                                <label>Leverage</label>
                                <select value={leverage} onChange={(e) => setLeverage(e.target.value)}>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="150">150</option>
                                    <option value="200">200</option>
                                    <option value="300">300</option>
                                    <option value="400">400</option>
                                    <option value="500">500</option>
                                </select>
                            </div>
                        )}

                        <div className="input-group">
                            <label>Lot size</label>
                            <input type="number" value={lotSize} onChange={(e) => setLotSize(e.target.value)} placeholder="0" />
                        </div>

                        {showConversion && (
                            <div className="input-group">
                                <p className="hint-text">
                                    {currencyLabel === 'BuySell'
                                        ? "Check MT5 Market Watch and put current price below."
                                        : <span>Please check <a href={conversionLink} target="_blank" rel="noreferrer">{currencyLabel} to USD</a> conversion and enter below.</span>
                                    }
                                </p>
                                <label>Conversion Rate</label>
                                <input type="number" value={conversionVal} onChange={(e) => setConversionVal(e.target.value)} placeholder="Enter rate" />
                            </div>
                        )}

                        <div className="result-box">
                            <label>Used Margin (USD)</label>
                            <div className="result-value">${result}</div>
                        </div>

                        <button className="reset-btn" onClick={reset}>Reset</button>
                    </div>
                </div>

                <div className="disclaimer-box">
                    <h6>Disclaimers:</h6>
                    <p>Nebula Financial Services Ltd does not provide or facilitate business services or transactions to residents of... [See Footer for Details]</p>
                </div>
            </main>
        </div>
    );
};

export default MarginCalculator;
