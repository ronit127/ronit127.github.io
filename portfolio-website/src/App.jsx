import { useEffect, useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CardNav from './components/CardNav';
import Starry from './components/Starry';
import BackToTop from './components/BackToTop';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';
import Construction from './components/Construction';
import Me from './components/Me';
import { NAV_ITEMS } from './config/links';

const App = () => {
  const items = useMemo(() => NAV_ITEMS, []);

  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = window.localStorage?.getItem('prefers-dark');
      if (stored !== null) return stored === 'true';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains('dark'));
    update();
    const obs = new MutationObserver(mutations => {
      for (const m of mutations) {
        if (m.attributeName === 'class') { update(); break; }
      }
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('storage', update);
    return () => { obs.disconnect(); window.removeEventListener('storage', update); };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage items={items} isDark={isDark} />} />
      <Route path="/me" element={<Me />} />
    </Routes>
  );
};

const HomePage = ({ items, isDark }) => {
  return (
    <div className="page-bg">
      <DarkModeToggle />
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {isDark ? ( <Starry />) : ( null)}
        <CardNav
          items={items}
          ease="power3.out"
        />
      </div>
      
      <div className="relative z-10">
        <Education />
        <Experience />
        <Projects />
        <BackToTop />
        <Construction />
        <Footer />
      </div>
    </div>
  );
};

export default App;