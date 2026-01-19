"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname} // triggers animation on route change
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }} // remove y movement on exit to avoid double blink
      transition={{ duration: 0.5 }}
      className="flex flex-col flex-grow"
    >
      {children}
    </motion.div>
  );
}
