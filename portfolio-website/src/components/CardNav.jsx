import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { FiExternalLink } from 'react-icons/fi';

const CardNav = ({
  items,
  className = '',
  ease = 'power3.out',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const contentEl = navEl.querySelector('.card-nav-content');
    if (!contentEl) return 360;

    const wasVisible = contentEl.style.visibility;
    const wasPointerEvents = contentEl.style.pointerEvents;
    const wasPosition = contentEl.style.position;
    const wasHeight = contentEl.style.height;

    contentEl.style.visibility = 'visible';
    contentEl.style.pointerEvents = 'auto';
    contentEl.style.position = 'static';
    contentEl.style.height = 'auto';

    contentEl.offsetHeight;

    const topBar = 120;
    const padding = 29;
    const contentHeight = contentEl.scrollHeight;

    contentEl.style.visibility = wasVisible;
    contentEl.style.pointerEvents = wasPointerEvents;
    contentEl.style.position = wasPosition;
    contentEl.style.height = wasHeight;

    return topBar + contentHeight + padding;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 120, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 60, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.1, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    
    // Auto-open on mount with animation and glow effect
    setIsGlowing(true);
    const timer = setTimeout(() => {
      setIsGlowing(false);
      setIsExpanded(true);
      tl?.play(0);
    }, 600);

    return () => {
      clearTimeout(timer);
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  let greeting = "Hello! I'm";
  let name = "Ronit Rout";
  let desc = "I enjoy creating thoughtful software for the web.";

  return (
    <div
      className={`card-nav-container w-[95%] max-w-[1200px] z-[99] mx-auto ${className}`}
      style={{ 
        transform: 'scale(1)',
        transformOrigin: 'center top',
        transitionProperty: 'transform',
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease-out'
      }}
    >
      <nav
        ref={navRef}
        className={`card-nav glass-surface ${isExpanded ? 'open' : ''} ${isGlowing ? 'glowing' : ''} block h-[120px] p-7 md:p-10 relative rounded-md overflow-hidden will-change-[height]`}
        style={{
          boxShadow: isGlowing 
            ? '0 0 40px rgba(255, 255, 255, 0.5), 0 0 80px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2)'
            : undefined,
          transition: 'box-shadow 0.4s ease-out',
          animation: isGlowing 
            ? 'shake 0.15s infinite' 
            : (!isExpanded && !isHovering) 
              ? 'subtleShake 2.5s linear infinite'
              : 'none',
          animationDelay: isGlowing ? '0s' : undefined
        }}
      >
        <style>{`
          @keyframes shake {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-1px, -1px) rotate(-0.25deg); }
            50% { transform: translate(1px, 1px) rotate(0.25deg); }
            75% { transform: translate(-1px, 1px) rotate(-0.25deg); }
          }
         @keyframes subtleShake {
            0%   { transform: translateX(0) rotate(0); }

            /* soft irregular micro-movements */
            3%   { transform: translateX(-0.6px) rotate(-0.12deg); }
            5%   { transform: translateX(0.9px) rotate(0.18deg); }
            7%   { transform: translateX(-1.1px) rotate(-0.22deg); }
            9%   { transform: translateX(0.7px) rotate(0.14deg); }
            11%  { transform: translateX(0); }

            /* pause, but not dead */
            18%  { transform: translateX(0.2px); }

            /* second cluster, slightly different feel */
            21%  { transform: translateX(-0.8px) rotate(-0.16deg); }
            23%  { transform: translateX(1.2px) rotate(0.24deg); }
            26%  { transform: translateX(-0.9px) rotate(-0.18deg); }
            28%  { transform: translateX(0.6px) rotate(0.12deg); }
            31%  { transform: translateX(0); }

            /* longer rest */
            45%  { transform: translateX(0); }

            /* faint residual movement */
            48%  { transform: translateX(-0.4px) rotate(-0.08deg); }
            52%  { transform: translateX(0.5px) rotate(0.1deg); }
            56%  { transform: translateX(-0.3px); }
            60%  { transform: translateX(0); }

            100% { transform: translateX(0); }
          }

        `}</style>
        <div className="card-nav-top absolute inset-x-0 top-0 h-[120px] flex items-center justify-center px-4 md:px-6 z-[2]">
          <div className="logo-container flex flex-col items-center justify-center text-center px-2 md:px-4">
            <span className="logo text-[24px] sm:text-[32px] md:text-[50px] font-display leading-tight whitespace-normal md:whitespace-nowrap">{greeting} <span className='font-bold'>{name}</span></span>
            {desc && <span className="logo-desc text-[18px] sm:text-[20px] md:text-[23px] font-display mt-1 max-w-full break-words">{desc}</span>}
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[120px] bottom-0 p-4 md:p-6 flex flex-col font-display items-stretch gap-3 md:gap-[19px] justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end`}
          aria-hidden={!isExpanded}
        >
          {items.map((item, idx) => ( 
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-3 p-[24px_29px] md:p-[29px_34px] rounded-md min-w-0 flex-[1_1_auto] h-auto min-h-[96px] sm:min-h-[120px] md:h-full md:min-h-0 md:flex-[1_1_0%] transition-transform duration-300 hover:translate-y-[-5px]"
              ref={setCardRef(idx)}
              style={{ 
                background: `
                  linear-gradient(135deg, ${item.bgColor}e6 0%, ${item.bgColor}b3 50%, ${item.bgColor}cc 100%),
                  radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)
                `,
                color: item.textColor,
                boxShadow: `0 10px 8px ${item.bgColor}99, inset 0 0 0 4.2px rgba(255, 255, 255, 0.25)`
              }}
            >
              <div className="nav-card-label font-normal tracking-[-0.6px] text-[24px] sm:text-[29px] md:text-[34px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[4px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[10px] no-underline transition-opacity duration-300 hover:opacity-45 text-[18px] sm:text-[20px] md:text-[23px] cursor-pointer"
                    href={lnk.href}
                    {...(idx === 2 ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={lnk.ariaLabel}
                  >
                    {idx === 2 ? (
                      <FiExternalLink className="nav-card-link-icon shrink-0 text-[26px]" aria-hidden="true" />
                    ) : (
                      <GoArrowUpRight className="nav-card-link-icon shrink-0 text-[26px]" aria-hidden="true" />
                    )}
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;