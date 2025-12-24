
import { useEffect, useState } from 'react';

const Footer = () => {
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
    return () => { obs.disconnect(); };
  }, []);

  return (
    <footer
      className="relative w-full py-8"
      style={{
        backgroundColor: isDark ? '#1a1a2e' : '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className="relative z-10">
        <p 
          className="text-sm font-light"
          style={{
            color: isDark ? '#e0e0e0' : '#333333',
            opacity: 0.7,
            textAlign: 'center',
            margin: 0
          }}
        >
          © 2025 Ronit Rout. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
