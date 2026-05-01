"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type SlowKenBurnsProps = {
  children: ReactNode;
  className?: string;
  active?: boolean;
};

export function SlowKenBurns({ children, className, active = true }: SlowKenBurnsProps) {
  const reduced = useReducedMotion();

  if (reduced || !active) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ scale: 1.0 }}
      animate={{ scale: 1.06 }}
      transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
    >
      {children}
    </motion.div>
  );
}
