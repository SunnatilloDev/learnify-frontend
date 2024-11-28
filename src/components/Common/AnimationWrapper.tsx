"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

const AnimationWrapper = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        type: "spring",
        damping: 25,
        stiffness: 100,
      }}
      className={`w-full ${className}`}
    >
      <div className="opacity-0 invisible absolute">
        {children}
      </div>
      <div className={isInView ? "opacity-100 visible" : "opacity-0 invisible"}>
        {children}
      </div>
    </motion.div>
  );
};

export default AnimationWrapper;
