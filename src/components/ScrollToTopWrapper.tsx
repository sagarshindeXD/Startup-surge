import React from 'react';
import { useScrollToTop } from '../lib/useScrollToTop';

interface ScrollToTopWrapperProps {
  children: React.ReactNode;
}

export const ScrollToTopWrapper: React.FC<ScrollToTopWrapperProps> = ({ children }) => {
  useScrollToTop();
  
  return <>{children}</>;
};
