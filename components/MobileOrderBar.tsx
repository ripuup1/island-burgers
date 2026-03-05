// Island Burgers & Bites — MobileOrderBar
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileOrderBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly 1 viewport height)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed inset-x-0 bottom-0 z-30 border-t border-charcoal/10 bg-charcoal px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] lg:hidden"
        >
          <Link
            href="/order"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-island-red py-3 font-heading text-lg tracking-wide text-cream transition-all active:scale-95"
          >
            ORDER NOW — SKIP THE WAIT
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
