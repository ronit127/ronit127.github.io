import { useMemo } from 'react';

const Starry = ({ count = 30 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 1.5 + 0.5;
      const duration = 2 + Math.random() * 3;
      const delay = Math.random() * -10;
      
      const colorType = Math.random();
      let color = 'rgba(255, 255, 255, 0.9)';
      if (colorType > 0.8) color = 'rgba(210, 230, 255, 0.9)'; 
      else if (colorType > 0.6) color = 'rgba(255, 245, 220, 0.9)'; 

      return { left, top, size, duration, delay, color };
    });
  }, [count]);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes rotate-flare {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(180deg); }
        }

        .star-container {
          position: absolute;
          pointer-events: none;
          animation: shimmer var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        /* The core of the diamond */
        .star-diamond {
          position: absolute;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 4px 1px var(--star-color);
        }

        /* The horizontal flare line */
        .star-diamond::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--star-color), transparent);
          filter: blur(0.5px);
        }

        /* The vertical flare line */
        .star-diamond::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(90deg);
          width: 300%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--star-color), transparent);
          filter: blur(0.5px);
        }

        .starry-scene {
          background: radial-gradient(circle at center, rgba(15, 15, 30, 0) 0%, rgba(5, 5, 10, 0.4) 100%);
        }
      `}</style>

      <div className="starry-scene absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {stars.map((s, i) => (
          <div
            key={i}
            className="star-container"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              '--duration': `${s.duration}s`,
              '--delay': `${s.delay}s`,
              '--star-color': s.color,
            }}
          >
            <div 
              className="star-diamond" 
              style={{ width: `${s.size}px`, height: `${s.size}px` }} 
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Starry;