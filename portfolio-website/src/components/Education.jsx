import { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Education() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="education" className="py-1 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-10 rounded-xl glass-surface">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start md:gap-8 mb-6">
              <div className="flex flex-col gap-1">
                <h3 className="card-title leading-tight">
                  University of Illinois Urbana-Champaign
                </h3>
                <p className="text-lg font-display text-slate-700 leading-snug">
                  B.S. Computer Science and Learning Sciences
                </p>
              </div>

              <div className="flex flex-col gap-1 mt-4 md:mt-0 text-left md:text-right">
                <p className="text-base text-slate-700 leading-snug">Aug 2023 - May 2027</p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-2">
                  What I was Involved In
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'CS361 Course Assistant',
                    'Project: Code Project Lead',
                    'ACM Game Builders Dev',
                    'PointVR VR Team'
                  ].map((item) => {
                    const colors = ['#2D1B3E', '#3A2456', '#4A3362'];
                    const bgColor = colors[1];
                    return (
                      <span
                        key={item}
                        className="px-3 py-1 text-white rounded-sm text-sm font-normal whitespace-nowrap flex-shrink-0"
                        style={{
                          background: `${bgColor}b3`,
                          backdropFilter: 'blur(16px) saturate(180%)',
                          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                          border: `1.5px solid ${bgColor}50`,
                          boxShadow: `0px 1px 3px ${bgColor}66`
                        }}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-2">
                  Courses I Took
                </h4>
                
                {/* Carousel Container */}
                <div
                  ref={scrollRef}
                  className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory mb-3"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {[
                    'Database Systems',
                    'Software Design',
                    'Data Structures',
                    'Algorithms',
                    'Machine Learning',
                    'System Programming',
                    'Designing Software for Education',
                    'Programming Languages & Compilers',
                    'Probability & Statistics for CS',
                    'Computer Architecture',
                    'Human-Computer Interaction',
                    'Educational Game Design',
                    'Educational Technology Capstone',
                    'Digital Learning Environments'
                  ].map((course, idx) => {
                    const colors = ['#2D1B3E', '#3A2456', '#4A3362'];
                    const bgColor = colors[1];
                    return (
                      <span
                        key={course}
                        className="px-3 py-1 text-white rounded-sm text-sm font-normal whitespace-nowrap snap-start flex-shrink-0"
                        style={{
                          background: `${bgColor}b3`,
                          backdropFilter: 'blur(16px) saturate(180%)',
                          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                          border: `1.5px solid ${bgColor}50`,
                          boxShadow: `0px 1px 3px ${bgColor}66`
                        }}
                      >
                        {course}
                      </span>
                    );
                  })}
                </div>

                {/* Arrow Controls Below */}
                <div className="flex justify-between">
                  <button
                    onClick={() => scroll('left')}
                    className={`p-1 text-slate-600 hover:text-slate-900 transition-colors ${!canScrollLeft ? 'invisible' : ''}`}
                    aria-label="Scroll left"
                    disabled={!canScrollLeft}
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className={`p-1 text-slate-600 hover:text-slate-900 transition-colors ${!canScrollRight ? 'invisible' : ''}`}
                    aria-label="Scroll right"
                    disabled={!canScrollRight}
                  >
                    <FiChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
