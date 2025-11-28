import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { FiExternalLink } from 'react-icons/fi';

const CardNav = ({
  items,
  className = '',
  ease = 'power3.out',
  menuColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 100;
        const padding = 24;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 360;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 100, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

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

    return () => {
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

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  let greeting = "Hello! I'm";
  let name = "Ronit Rout";
  let desc = "I'm a student developer who enjoys creating thoughtful, and easy-to-use software.";

  return (
    <div
      className={`card-nav-container w-[95%] max-w-[1200px] z-[99] mx-auto ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[100px] p-10 relative rounded-xl overflow-hidden will-change-[height]`}
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.28)',
          border: '0px solid rgba(62, 62, 62, 0.4)',
          boxShadow: `0px 1px 2px grey`,
        }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[100px] flex items-center justify-between px-6 z-[2]">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[8px] order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div
              className={`hamburger-line w-[40px] h-[3px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? 'translate-y-[5.5px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[40px] h-[3px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? '-translate-y-[5.5px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>

          <div className="logo-container flex flex-col items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none text-center">
            <span className="logo text-[32px] md:text-[42px] font-display leading-tight">{greeting} <span className='font-bold'>{name}</span></span>
            {desc && <span className="logo-desc text-[14px] md:text-[16px] font-normal text-slate-600 mt-1">{desc}</span>}
          </div>

        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[100px] bottom-0 p-6 flex flex-col items-stretch gap-4 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-[16px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-3 p-[24px_28px] rounded-xl min-w-0 flex-[1_1_auto] h-auto min-h-[100px] md:h-full md:min-h-0 md:flex-[1_1_0%] transition-transform duration-300 hover:translate-y-[-4px]"
              ref={setCardRef(idx)}
              style={{ 
                background: `
                  linear-gradient(135deg, ${item.bgColor}e6 0%, ${item.bgColor}b3 50%, ${item.bgColor}cc 100%),
                  radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)
                `,
                color: item.textColor,
                backdropFilter: 'blur(16px) saturate(180%)',
                WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: '3.5px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: `0 8px 7px ${item.bgColor}99`
              }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[24px] md:text-[28px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[4px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[8px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-45 text-[17px] md:text-[19px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    {idx === 2 ? (
                      <FiExternalLink className="nav-card-link-icon shrink-0 text-[22px]" aria-hidden="true" />
                    ) : (
                      <GoArrowUpRight className="nav-card-link-icon shrink-0 text-[22px]" aria-hidden="true" />
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
