import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiMapPin, FiArrowDown } from 'react-icons/fi';

const L = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline transition-opacity duration-200 hover:opacity-70"
  >
    {children}
  </a>
);

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
      I'm a third-year studying CS and education at <L href="https://siebelschool.illinois.edu/">UIUC</L>. I build web apps with TypeScript, React, Python and AWS integrations, usually tools that make learning coding or math skills easier.
      <br /><br />
      I'll be interning at <L href="https://www.rivian.com/">Rivian</L> this summer working as an AI software engineer. Currently helping build the beta of <L href="https://butterflo.com/">Butterflo</L>'s real estate platform this spring.
      I'm also leading a talented team developing a visual Python debugger for <L href="https://projectcodeuiuc.org">Project: Code</L> on campus. 
      Reach out!{' — '}<L href="mailto:ronitr.dev@gmail.com">email</L>, <L href="https://www.linkedin.com/in/ronit-rout/">LinkedIn</L>, <L href="https://github.com/ronit127">GitHub</L>.
    </>
  );

  return (
    <div
      className="w-[95%] max-w-[1200px] z-[99] mx-auto relative mt-10 md:mt-14"
    >
      <div className="mb-8 md:mb-12 max-w-6xl mx-auto pt-0 px-4 sm:px-0">
        <div>
          <h1 className="text-ui-28 sm:text-ui-36 md:text-ui-48 leading-[34px] sm:leading-[43px] md:leading-[58px] sm:tracking-tighter-px md:tracking-tighter-px font-display font-light mb-0 md:mb-4" style={{ color: 'var(--text-muted)' }}>
            Hi there, I&apos;m <span className='font-bold'>Ronit Rout</span>!
          </h1>
        </div>
        <p className="text-ui-18 sm:text-ui-20 md:text-ui-24 leading-[34px] sm:leading-[38px] md:leading-[42px] whitespace-pre-wrap mt-2" style={{ color: 'var(--text-muted)' }}>
          {desc}
        </p>
      </div>

      <nav
        ref={navRef}
        className={`${isExpanded ? 'open' : ''} block h-0 p-7 md:p-10 relative rounded-lg overflow-hidden will-change-[height]`}
      >
    
        <div
          className={`card-nav-content p-4 md:p-6 absolute left-0 right-0 top-[0px] bottom-0 flex flex-col font-display items-stretch gap-3 md:gap-[19px] justify-center z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-center`}
          aria-hidden={!isExpanded}
        >
          {items.map((item, idx) => (
            <a
              key={`${item.label}-${idx}`}
              href={item.href}
              className="nav-card select-none relative flex flex-col p-[16px_20px] sm:p-[20px_24px] md:p-[24px_34px] rounded-md min-w-0 flex-[1_1_auto] h-[73px] sm:h-[82px] md:h-[96px] md:flex-[1_1_0%] transition-all duration-300 hover:translate-y-[-5px] hover:brightness-75 no-underline"
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
              <div className="nav-card-label font-normal text-ui-18 sm:text-ui-24 md:text-ui-34 flex items-center gap-2">
                <FiArrowDown className="shrink-0" aria-hidden="true" />
                {item.label}
              </div>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;