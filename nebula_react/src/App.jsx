import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Market from './pages/Market';
import Report from './pages/Report';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import AccountTypes from './pages/AccountTypes';
import Academy from './pages/Academy';
import Contact from './pages/Contact';
import MarginCalculator from './pages/MarginCalculator';
import ProfitCalculator from './pages/ProfitCalculator';
import Forex from './pages/Forex';
import Metals from './pages/Metals';
import OilCommodities from './pages/OilCommodities';
import SpotIndex from './pages/SpotIndex';
import Crypto from './pages/Crypto';
import ChannelPartner from './pages/ChannelPartner';
import EconomicCalendar from './pages/EconomicCalendar';
import MarketNews from './pages/MarketNews';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import TermsConditions from './pages/TermsConditions';
import './App.css'; // Default styles if any

import Footer from './components/Footer';
import TickerBar from './components/TickerBar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account-types" element={<AccountTypes />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/market" element={<Market />} />
        <Route path="/report" element={<Report />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/margin-calculator" element={<MarginCalculator />} />
        <Route path="/profit-calculator" element={<ProfitCalculator />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/metals" element={<Metals />} />
        <Route path="/oil-commodities" element={<OilCommodities />} />
        <Route path="/spot-index" element={<SpotIndex />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/channel-partner" element={<ChannelPartner />} />
        <Route path="/economic-calendar" element={<EconomicCalendar />} />
        <Route path="/market-news" element={<MarketNews />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <TickerBar />
      <Footer />
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
