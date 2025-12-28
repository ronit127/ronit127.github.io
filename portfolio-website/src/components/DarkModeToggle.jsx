import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      const stored = window.localStorage?.getItem('prefers-dark');
      if (stored !== null) return stored === 'true';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });
  const [hasSpace, setHasSpace] = useState(true);

  useEffect(() => {
    const checkSpace = () => {
      const isMobile = window.innerWidth < 640;
      const isZoomedIn = window.innerHeight < 600;
      setHasSpace(!isMobile && !isZoomedIn);
    };

    const onResize = () => checkSpace();
    window.addEventListener('resize', onResize, { passive: true });
    checkSpace();

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    try {
      window.localStorage?.setItem('prefers-dark', dark ? 'true' : 'false');
    } catch (e) {}
    if (dark) {
      document.body.classList.add('dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  if (!hasSpace) return null;

  return (
    <div className="fixed bottom-8 left-8 z-[9999]">
      <button
        role="switch"
        aria-checked={dark}
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={() => setDark(d => !d)}
        className="group relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-500 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          backgroundColor: dark ? '#10142a' : '#f9f9f9',
          border: dark ? '1px solid rgba(71, 85, 105, 0.5)' : '1px solid rgba(203, 213, 225, 0.8)',
          focusRingColor: dark ? 'rgba(148, 163, 184, 0.5)' : 'rgba(100, 116, 139, 0.5)'
        }}
      >
        {/* Sun Icon */}
        <div 
          className="relative transition-all duration-500 ease-out"
          style={{
            opacity: dark ? 0.3 : 1,
            transform: dark ? 'rotate(180deg) scale(0.8)' : 'rotate(0deg) scale(1)',
            color: dark ? '#64748b' : '#f59e0b'
          }}
        >
          <FiSun size={18} strokeWidth={2.5} aria-hidden="true" />
        </div>

        {/* Toggle Track */}
        <div 
          className="relative h-5 rounded-full transition-all duration-500 ease-out"
          style={{
            width: '38px',
            backgroundColor: dark ? 'rgba(71, 85, 105, 0.6)' : 'rgba(226, 232, 240, 0.8)'
          }}
        >
          {/* Toggle Thumb */}
          <span
            className="absolute top-0.5 rounded-full transition-all duration-500 ease-out"
            style={{
              width: '16px',
              height: '16px',
              left: dark ? 'calc(100% - 18px)' : '2px',
              backgroundColor: dark ? '#ffffff' : '#1e293b',
              boxShadow: dark 
                ? '0 2px 4px rgba(0, 0, 0, 0.4)' 
                : '0 2px 4px rgba(0, 0, 0, 0.15)'
            }}
          />
        </div>

        {/* Moon Icon */}
        <div 
          className="relative transition-all duration-500 ease-out"
          style={{
            opacity: dark ? 1 : 0.3,
            transform: dark ? 'rotate(0deg) scale(1)' : 'rotate(-180deg) scale(0.8)',
            color: dark ? '#ffffff' : '#64748b'
          }}
        >
          <FiMoon size={18} strokeWidth={2.5} aria-hidden="true" />
        </div>
      </button>
    </div>
  );
}

export default DarkModeToggle;