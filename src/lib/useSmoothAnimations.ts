import { useEffect, useState } from 'react';

export function useSmoothAnimations() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getStaggerDelay = (index: number) => ({
    transitionDelay: `${index * 100}ms`,
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
  });

  const getFadeInStyle = (delay: number = 0) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
  });

  const getScaleInStyle = (delay: number = 0) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? 'scale(1)' : 'scale(0.9)',
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
  });

  return {
    isLoaded,
    getStaggerDelay,
    getFadeInStyle,
    getScaleInStyle
  };
}
