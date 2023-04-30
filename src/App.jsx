import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import FAQ from './pages/FAQ';
import Ask from './pages/Ask';
import ThankYou from './pages/ThankYou';
import Request from './pages/Request';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </>
  );
}

export default App;
