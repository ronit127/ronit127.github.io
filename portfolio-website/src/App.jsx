import { useEffect, useState, useMemo } from 'react';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CardNav from './components/CardNav';
import Starry from './components/Starry';
import BackToTop from './components/BackToTop';
import DarkModeToggle from './components/DarkModeToggle';
import Footer from './components/Footer';
import Construction from './components/Construction';

const App = () => {
  const items = useMemo(() => [
    {
      label: "About",
      bgColor: "#2D1B3E",
      textColor: "#fff",
      links: [
        { label: "Education", href: "#education", ariaLabel: "About Education" },
        { label: "Experience", href: "#experience", ariaLabel: "About Experience" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#3A2456",
      textColor: "#fff",
      links: [
        { label: "View Portfolio", href: "#projects", ariaLabel: "View Portfolio" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#4A3362", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:ronitr.dev@gmail.com", ariaLabel: "Email me" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ronit-rout/", ariaLabel: "LinkedIn" },
        { label: "GitHub", href: "https://github.com/ronit127", ariaLabel: "GitHub" }
      ]
    }
  ], []);

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
    <div className="page-bg">
      <DarkModeToggle />
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {isDark ? ( <Starry />) : ( null)}
        <CardNav
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
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