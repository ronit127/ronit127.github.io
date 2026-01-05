import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [isDark, setIsDark] = useState(() => 
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  const [hasSpace, setHasSpace] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

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
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full transition-colors duration-300 ease-out"
      style={{
        width: '44px',
        height: '44px',
        backgroundColor: isDark ? '#10142a' : '#f9f9f9',
        border: isDark 
            ? `1px solid ${isHovering ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)'}` 
            : `1px solid ${isHovering ? 'rgba(59, 130, 246, 0.7)' : 'rgba(148, 163, 184, 0.4)'}`,
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