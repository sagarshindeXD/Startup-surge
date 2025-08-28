import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const SmoothScrolling = () => {
  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize Lenis with tuned configuration for smooth, stable scrolling
    const lenis = new Lenis({
      // Use lerp for frame-rate independent smoothing
      // Lower values = more smoothing, higher values = snappier
      lerp: prefersReducedMotion ? 0 : 0.05,
      duration: prefersReducedMotion ? 0 : undefined,
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 0.6,
      touchMultiplier: 0.9,
      easing: (t: number) => (prefersReducedMotion ? t : 1 - Math.pow(1 - t, 3)),
    });

    // Animation frame loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    // Start when document is visible to avoid catching up and jitter
    const onVisibility = () => {
      if (document.hidden) {
        lenis.stop();
        if (rafId) cancelAnimationFrame(rafId);
      } else {
        lenis.start();
        rafId = requestAnimationFrame(raf);
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    onVisibility();

    // Cleanup
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      document.removeEventListener('visibilitychange', onVisibility);
      lenis.destroy();
    };
  }, []);

  return null;
};