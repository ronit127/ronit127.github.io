import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(() => 
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  const [hasSpace, setHasSpace] = useState(true);

  useEffect(() => {
    const check = () => {
      setVisible(window.scrollY >= window.innerHeight);
      const isMobile = window.innerWidth < 640;
      const isZoomedIn = window.innerHeight < 600;
      setHasSpace(!isMobile && !isZoomedIn);
    };

    const onScroll = () => check();

    // If user clicks an in-page anchor, wait for the browser to jump then check
    const onDocClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (a) {
        setTimeout(check, 200);
      }
    };

    const onResize = () => check();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('click', onDocClick);

    // initial check
    check();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('click', onDocClick);
    };
  }, []);

  // Listen for dark mode toggle changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible || !hasSpace) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full transition-colors duration-300 ease-out hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        width: '52px',
        height: '52px',
        backgroundColor: isDark ? '#10142a' : '#f9f9f9',
        border: isDark ? '1px solid rgba(71, 85, 105, 0.5)' : '1px solid rgba(203, 213, 225, 0.8)',
        boxShadow: isDark 
          ? '0 4px 12px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.4)' 
          : '0 4px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        color: isDark ? '#f8fafc' : '#1e293b'
      }}
    >
      <FiArrowUp 
        size={20} 
        strokeWidth={2.5}
        className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
      />
    </button>
  );
}

export default BackToTop;