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

  const hazardColor = '#f59e0b'; // Sun color from DarkModeToggle
  const bgColor = isDark ? '#1a1a2e' : '#f5f5f5';
  const textColor = isDark ? '#e0e0e0' : '#333333';

  return (
    <footer
      className="relative w-full overflow-hidden py-8"
      style={{
        backgroundColor: bgColor,
      }}
    >
        
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            ${hazardColor},
            ${hazardColor} 10px,
            transparent 10px,
            transparent 20px
          )`
        }}
      />

      <div className="relative z-10 overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'scroll 30s linear infinite',
            width: 'fit-content'
          }}
        >
          {[...Array(4)].map((_, idx) => (
            <span
              key={idx}
              className="mx-8 text-xl sm:text-2xl md:text-3xl font-normal font-thin uppercase"
              style={{
                color: textColor,
                textShadow: `0 2px 4px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}`
              }}
            >
               UNDER CONSTRUCTION • NEW FEATURES ON THE WAY 
            </span>
          ))}
        </div>
      </div>

    

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
