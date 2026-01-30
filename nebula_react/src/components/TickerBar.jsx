import React, { useEffect, useRef, memo } from 'react';

const TickerBar = () => {
    const containerRef = useRef(null);
    const scriptLoaded = useRef(false);

    useEffect(() => {
        // Prevent duplicate loading
        if (scriptLoaded.current) return;
        if (!containerRef.current) return;

        // Clear any existing content
        containerRef.current.innerHTML = '';

        // Create the widget container div that TradingView expects
        const widgetDiv = document.createElement('div');
        widgetDiv.className = 'tradingview-widget-container__widget';
        containerRef.current.appendChild(widgetDiv);

        // Create and configure the script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                {
                    proName: "FOREXCOM:NSXUSD",
                    title: "US 100"
                },
                {
                    proName: "FX_IDC:EURUSD",
                    title: "EUR/USD"
                },
                {
                    proName: "BITSTAMP:BTCUSD",
                    title: "Bitcoin"
                },
                {
                    proName: "BITSTAMP:ETHUSD",
                    title: "Ethereum"
                },
                {
                    proName: "FOREXCOM:SPXUSD",
                    title: "S&P 500"
                }
            ],
            showSymbolLogo: true,
            colorTheme: "dark",
            isTransparent: false,
            displayMode: "compact",
            locale: "en"
        });

        containerRef.current.appendChild(script);
        scriptLoaded.current = true;

        // Cleanup
        return () => {
            scriptLoaded.current = false;
        };
    }, []);

    return (
        <div className="ticker-bar-wrapper">
            <div className="ticker-bar-container">
                <div
                    className="tradingview-widget-container"
                    ref={containerRef}
                    style={{ width: '100%' }}
                >
                </div>
            </div>
        </div>
    );
};

export default memo(TickerBar);
