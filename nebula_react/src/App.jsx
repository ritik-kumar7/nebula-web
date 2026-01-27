import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Market from './pages/Market';
import Report from './pages/Report';
import Portfolio from './pages/Portfolio';
import './App.css'; // Default styles if any

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/report" element={<Report />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
