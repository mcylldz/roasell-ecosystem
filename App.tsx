import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TebriklerPage from './pages/TebriklerPage';

const YM_ID = 109599095;

const RouteTracker: React.FC = () => {
  const location = useLocation();
  const isInitial = useRef(true);
  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }
    const ym = (window as unknown as { ym?: (...args: unknown[]) => void }).ym;
    if (typeof ym === 'function') {
      ym(YM_ID, 'hit', window.location.href, { referer: document.referrer });
    }
  }, [location.pathname, location.search]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <RouteTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tebrikler" element={<TebriklerPage />} />
      </Routes>
    </Router>
  );
};

export default App;
