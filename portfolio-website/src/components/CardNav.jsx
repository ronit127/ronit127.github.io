import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { FiExternalLink, FiMapPin } from 'react-icons/fi';

const CardNav = ({
  items,
  className = '',
  ease = 'power3.out',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

    const padding = 29;
    const contentHeight = contentEl.scrollHeight;

    contentEl.style.visibility = wasVisible;
    contentEl.style.pointerEvents = wasPointerEvents;
    contentEl.style.position = wasPosition;
    contentEl.style.height = wasHeight;

    return contentHeight + padding;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 0, overflow: 'hidden' });
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
    
    const timer = setTimeout(() => {
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

  let desc = "I am a full-stack developer studying computer science and education at the University of Illinois (UIUC). I create thoughtfully designed web experiences with TypeScript, React, and Python, usually on tools that make learning and building easier. Otherwise, I enjoy exploring new genres of music while going on long walks.";
  return (
    <div
      className={`w-[95%] max-w-[1200px] z-[99] mx-auto relative ${className}`}
    >
      <div className="mb-8 md:mb-12 max-w-6xl mx-auto pt-4 sm:pt-6 md:pt-0 px-4 sm:px-0">
        <div className="flex justify-between items-baseline gap-4">
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] font-display font-light mb-2 md:mb-4" style={{ color: 'var(--text)', letterSpacing: '-0.05em', lineHeight: '1.2em' }}>
            Hi there, I'm <span className='font-bold'>Ronit</span>!
          </h1>
          <div className="hidden sm:flex items-center gap-2">
            <FiMapPin className="text-[16px] sm:text-[18px] md:text-[20px]" />
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-display" style={{ color: 'var(--text)', letterSpacing: '-0.05em' }}>
              Illinois , USA
            </p>
          </div>
        </div>
        <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-relaxed whitespace-pre-wrap mt-2" style={{ color: 'var(--text)' , letterSpacing: '-0.04em', lineHeight: '1.9em' }}>
          {desc}
        </p>
      </div>

      <nav
        ref={navRef}
        className={`${isExpanded ? 'open' : ''} block h-0 p-7 md:p-10 relative rounded-lg overflow-hidden will-change-[height]`}
      >
    
        <div
          className={`card-nav-content p-4 md:p-6 absolute left-0 right-0 top-[0px] bottom-0 flex flex-col font-display items-stretch gap-3 md:gap-[19px] justify-start z-[1] ${
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
                  linear-gradient(155deg, ${item.bgColor}e6 0%, ${item.bgColor}b3 50%, ${item.bgColor}cc 100%),
                  radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)
                `,
                color: item.textColor,
                border: `1.5px solid ${item.borderColor}80`,
                boxShadow: `0 5px 4px ${item.bgColor}99, inset 0 0 0 3.2px rgba(255, 255, 255, 0.25)`
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