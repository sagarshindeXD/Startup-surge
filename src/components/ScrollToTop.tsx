import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top of page or target section on route change
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Disable browser's native scroll restoration which can fight our logic
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const log = (msg: string) => {
      const mode = (import.meta as any)?.env?.MODE || (import.meta as any)?.env || 'development';
      if (mode !== 'production') console.debug('[ScrollToTop]', msg, { pathname, hash });
    };

    const setScrollTop = (y: number) => {
      try { window.scrollTo({ top: y, left: 0, behavior: 'auto' }); } catch {}
      try { (document.scrollingElement || document.documentElement).scrollTop = y; } catch {}
      try { document.documentElement.scrollTop = y; } catch {}
      try { document.body.scrollTop = y; } catch {}
    };

    const scrollTopHard = () => {
      setScrollTop(0);
      requestAnimationFrame(() => {
        setScrollTop(0);
        setTimeout(() => setScrollTop(0), 0);
      });
    };

    const scrollToHash = () => {
      const id = hash?.replace('#', '') ?? '';
      const el = id ? document.getElementById(id) || document.querySelector(hash as string) : null;
      if (el) {
        const rect = el.getBoundingClientRect();
        const absoluteTop = rect.top + window.pageYOffset;
        setScrollTop(absoluteTop);
        return true;
      }
      return false;
    };

    if (hash) {
      log('Immediate hash scroll');
      if (!scrollToHash()) {
        requestAnimationFrame(() => {
          scrollToHash();
        });
      }
      return;
    }

    log('Immediate top scroll');
    scrollTopHard();
  }, [pathname, hash]);

  // Additional delayed retries to account for page transition timings/layout shifts
  useEffect(() => {
    const log = (msg: string) => {
      const mode = (import.meta as any)?.env?.MODE || (import.meta as any)?.env || 'development';
      if (mode !== 'production') console.debug('[ScrollToTop]', msg, { pathname, hash });
    };

    const tryHash = () => {
      const id = hash?.replace('#', '') ?? '';
      const el = id ? document.getElementById(id) || document.querySelector(hash as string) : null;
      if (el) {
        const rect = el.getBoundingClientRect();
        const absoluteTop = rect.top + window.pageYOffset;
        try {
          window.scrollTo({ top: absoluteTop, left: 0, behavior: 'auto' });
        } catch {}
        try { (document.scrollingElement || document.documentElement).scrollTop = absoluteTop; } catch {}
        try { document.documentElement.scrollTop = absoluteTop; } catch {}
        try { document.body.scrollTop = absoluteTop; } catch {}
        return true;
      }
      return false;
    };

    const toTop = () => {
      try { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); } catch {}
      try { (document.scrollingElement || document.documentElement).scrollTop = 0; } catch {}
      try { document.documentElement.scrollTop = 0; } catch {}
      try { document.body.scrollTop = 0; } catch {}
    };

    const delays = [120, 250, 400, 800];
    const timers: number[] = [];

    delays.forEach((d) => {
      const t = window.setTimeout(() => {
        if (hash) {
          log(`Delayed hash scroll @${d}ms`);
          tryHash();
        } else {
          log(`Delayed top scroll @${d}ms`);
          toTop();
        }
      }, d) as unknown as number;
      timers.push(t);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [pathname, hash]);

  return null;
};

