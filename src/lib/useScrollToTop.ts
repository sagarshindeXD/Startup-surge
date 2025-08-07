import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from './utils';

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure the component has mounted
    const timer = setTimeout(() => {
      scrollToTop();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);
}
