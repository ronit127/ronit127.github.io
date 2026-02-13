import { useState, useRef, useEffect } from 'react';
import visualDebuggerVideo from '../assets/data/images/VisualDebuggerDemo3.mkv';

export default function FeaturedProject() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function play() {
    const v = videoRef.current;
    if (!v || prefersReducedMotion) return;
    v.play().catch(() => {});
  }
  function pause() {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
  }

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      const v = videoRef.current;
      if (!v) return;
      if (entry.isIntersecting) {
        if (!v.src) {
          v.src = visualDebuggerVideo;
          try { v.load(); } catch {}
        }
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [prefersReducedMotion]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    function onPlay() { setIsPlaying(true); }
    function onPause() { setIsPlaying(false); }
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  function toggle(force = false) {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      if (prefersReducedMotion && !force) return;
      v.play().catch(() => {});
    } else v.pause();
  }

  return (
    <div className="mb-16">
      <div
        ref={containerRef}
        className="group relative rounded-lg overflow-hidden transition-transform duration-300 ease-out cursor-pointer focus-visible:ring-2 focus-visible:ring-accent-400"
        tabIndex={0}
        role="figure"
        aria-label="Featured project: Visual Debugger demo video; Enter/Space toggles playback"
        onClick={() => toggle(true)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(true); } }}
      >
          <div className="relative w-full aspect-[3/2] sm:aspect-video overflow-hidden border rounded-lg" style={{ borderColor: 'var(--surface-border)' }}>
          <video
            ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
            muted
            loop
            playsInline
            preload="metadata"
          />

          <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              type="button"
              title={isPlaying ? 'Pause video' : 'Play video'}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              onClick={(e) => { e.stopPropagation(); toggle(true); }}
              className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 hover:bg-slate-900/70 text-white transform transition duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
            >
              {isPlaying ? (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="px-2 py-3">
        <p className="font-display text-lg tracking-tight-px" style={{ color: 'var(--text-muted)' }}>
          <span className="font-medium" style={{ color: 'var(--text-strong)' }}>Featured Project</span>
          <span className="mx-2 opacity-90">·</span>
          Visual Debugger
        </p>
      </div>
    </div>
  );
}
