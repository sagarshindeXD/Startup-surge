import { useState } from 'react';

export function useLoadingAnimation() {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300); // Small delay to show the animation
  };

  const handleNavigation = (navigateFunction: () => void) => {
    startLoading();
    // Small delay to show loading state
    setTimeout(() => {
      navigateFunction();
      stopLoading();
    }, 150);
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
    handleNavigation
  };
}
