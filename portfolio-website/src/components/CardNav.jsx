import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { FiExternalLink, FiMapPin, FiGithub, FiLinkedin, FiMail, FiTwitter, FiInstagram } from 'react-icons/fi';

const CardNav = ({
  items,
  ease = 'power3.out',
  hoverLabel = null,
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

  let desc = (
    <>
      I’m a full-stack developer studying CS and education at the{' '}
      <a
        href="https://siebelschool.illinois.edu/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          textDecoration: 'none',
          transition: 'opacity 0.2s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        <u>University of Illinois</u>
      </a>
      {' '}(UIUC). I build web apps with TypeScript, React, and Python, usually tools that make learning coding or math skills easier.
        <br></br>
        <br></br>
      Currently helping build the beta of{' '}
      <a
        href="https://butterflo.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          textDecoration: 'none',
          transition: 'opacity 0.2s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        <u>Butterflo</u>
      </a>
      's{' '}real estate platform this spring.
      I’m also leading a talented team developing a visual Python debugger for{' '}
      <a
        href="https://projectcodeuiuc.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{ 
          textDecoration: 'none',
          transition: 'opacity 0.2s ease-in-out',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
      >
        <u>Project: Code</u>
      </a>{' '}on campus.
      {/* Contact me at <a href="mailto:ronitr.dev@gmail.com" style={{ textDecoration: 'none', color: 'var(--text)' }}>ronitr.dev@gmail.com</a> ! */}
    </>
  );

  return (
    <div
      className="w-[95%] max-w-[1200px] z-[99] mx-auto relative mt-24 md:mt-2"
    >
      <div className="mb-8 md:mb-12 max-w-6xl mx-auto pt-0 px-4 sm:px-0">
        <div className="flex justify-between items-baseline gap-4">
          <h1 className="text-ui-28 sm:text-ui-36 md:text-ui-48 leading-[34px] sm:leading-[43px] md:leading-[58px] sm:tracking-tighter-px md:tracking-tighter-px font-display font-light mb-2 md:mb-4" style={{ color: 'var(--text-muted)' }}>
            Hi there, I'm <span className='font-bold'>Ronit Rout</span>!
          </h1>
          <div className="hidden sm:flex items-center gap-2">
            <FiMapPin className="text-ui-16 sm:text-ui-18 md:text-ui-20" />
            <p className="text-ui-16 sm:text-ui-18 md:text-ui-20 font-display" style={{ color: 'var(--text-muted)' }}>
              Illinois
            </p>
          </div>
        </div>
        <p className="text-ui-18 sm:text-ui-20 md:text-ui-22 leading-[34px] sm:leading-[38px] md:leading-[42px] whitespace-pre-wrap mt-2" style={{ color: 'var(--text-muted)' }}>
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
                border: `1px solid ${item.borderColor}80`,
                boxShadow: `0 5px 4px ${item.bgColor}99, inset 0 0 0 3px rgba(255, 255, 255, 0.25)`
              }}
            >
              <div className="nav-card-label font-normal text-ui-24 sm:text-ui-29 md:text-ui-34">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[4px]">
                {item.links?.map((lnk, i) => (
                  <div key={`${lnk.label}-${i}`} className="relative inline-block group w-fit">
                    <a
                      className="nav-card-link inline-flex items-center gap-[10px] no-underline transition-opacity duration-300 hover:opacity-45 text-ui-18 sm:text-ui-20 md:text-ui-23 cursor-pointer tracking-[-0.02em] leading-snug"
                      href={lnk.href}
                      {...(idx === 2 && !lnk.href?.startsWith('mailto:') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={lnk.ariaLabel}
                    >
                      {(() => {
                        const href = lnk.href || '';
                        if (href.startsWith('mailto:')) {
                          return <FiMail className="nav-card-link-icon shrink-0 text-ui-26" aria-hidden="true" />;
                        }
                        if (href.includes('github.com')) {
                          return <FiGithub className="nav-card-link-icon shrink-0 text-ui-26" aria-hidden="true" />;
                        }
                        if (href.includes('linkedin.com')) {
                          return <FiLinkedin className="nav-card-link-icon shrink-0 text-ui-26" aria-hidden="true" />;
                        }
                        return idx === 2 ? (
                          <FiExternalLink className="nav-card-link-icon shrink-0 text-ui-26" aria-hidden="true" />
                        ) : (
                          <GoArrowUpRight className="nav-card-link-icon shrink-0 text-ui-26" aria-hidden="true" />
                        );
                      })()}
                      {lnk.href?.startsWith('mailto:') ? (
                        <>
                          <span className="hidden md:inline">{lnk.label}</span>
                          <span className="md:hidden">Email</span>
                        </>
                      ) : (
                        lnk.label
                      )}
                    </a>
                    {lnk.href?.startsWith('mailto:') && (
                      <div className={`absolute left-[50%] bottom-full mb-2 px-3 py-[3px] bg-white text-gray-800 text-ui-16 font-display rounded-lg shadow-lg transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-gray-200 z-50 ${hoverLabel ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} style={{ transform: 'translateX(calc(-50% + 20px))' }}>
                        {hoverLabel ?? 'ronitr.dev@gmail.com'}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
                      </div>
                    )}
                  </div>
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