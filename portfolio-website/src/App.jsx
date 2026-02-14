import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CardNav from './components/CardNav';
import Me from './components/Me';
import { NAV_ITEMS } from './config/links';

const App = () => {
  const items = useMemo(() => NAV_ITEMS, []);

  // No dark mode — always light
  const isDark = false;

  return (
    <Routes>
      <Route path="/" element={<HomePage items={items} />} />
      <Route path="/me" element={<Me />} />
    </Routes>
  );
};

const HomePage = ({ items }) => {
  const [hoverLabel, setHoverLabel] = useState(null);
  return (
    <div className="page-bg">
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <CardNav
          items={items}
          ease="power3.out"
          hoverLabel={hoverLabel}
        />
      </div>
      
      <div className="relative z-10">
        <Education />
        <Experience />
        <Projects setHoverLabel={setHoverLabel} />
      </div>
    </div>
  );
};

export default App;