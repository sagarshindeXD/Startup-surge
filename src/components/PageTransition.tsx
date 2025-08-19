import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type PageTransitionProps = {
  children: React.ReactNode;
  pathname: string;
};

// Minimalists-inspired: fast, clean, subtle
const PageTransition: React.FC<PageTransitionProps> = ({ children, pathname }) => {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? { opacity: 1 } : { opacity: 0, y: 8 };
  const animate = prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 };
  const exit = prefersReduced ? { opacity: 1 } : { opacity: 0, y: -8 };
  const transition = prefersReduced ? { duration: 0 } : { duration: 0.22, ease: "easeOut" };

  return (
    <motion.div key={pathname} initial={initial} animate={animate} exit={exit} transition={transition}>
      {children}
    </motion.div>
  );
};

export default PageTransition;