import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Performance from './pages/Performance';
import Referral from './pages/Referral';
import Traffic from './pages/Traffic';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Traffic />} />
         <Route exact path="/performance" element={<Performance />} />
        <Route exact path="/referral" element={<Referral />} />
      </Routes>
    </>
  );
}

export default App;
