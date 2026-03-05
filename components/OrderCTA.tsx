// Island Burgers & Bites — OrderCTA
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Smartphone, UtensilsCrossed } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  label: string;
  prefix: string;
  target: number;
  suffix: string;
}

const stats: StatItem[] = [
  {
    icon: Clock,
    label: "Avg wait without online order",
    prefix: "",
    target: 45,
    suffix: " min",
  },
  {
    icon: Smartphone,
    label: "Online order pickup",
    prefix: "~",
    target: 15,
    suffix: " min",
  },
  {
    icon: UtensilsCrossed,
    label: "Items on the menu",
    prefix: "",
    target: 25,
    suffix: "+",
  },
];

function AnimatedCounter({
  target,
  prefix,
  suffix,
  started,
}: {
  target: number;
  prefix: string;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let frame: number;
    const duration = 1500; // ms
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out curve for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function OrderCTA() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-island-red-dark py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl tracking-wide text-cream sm:text-5xl md:text-6xl"
        >
          SKIP THE LINE. ORDER ONLINE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-base text-cream/80 sm:text-lg"
        >
          We&apos;re busy. Like, really busy. Ordering online means your food is
          ready when you arrive.
        </motion.p>

        {/* Animated stats */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <stat.icon size={24} className="mb-2 text-sun-yellow" />
              <p className="font-heading text-2xl text-cream">
                <AnimatedCounter
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  started={started}
                />
              </p>
              <p className="text-[10px] leading-tight text-cream/60 sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            href="/order"
            className="mt-10 inline-block rounded-full bg-white px-10 py-4 font-heading text-xl tracking-wide text-island-red-dark transition-all hover:bg-cream hover:scale-105"
          >
            START YOUR ORDER
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
