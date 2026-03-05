// Island Burgers & Bites — OrderCTA
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Smartphone, UtensilsCrossed } from "lucide-react";

const stats = [
  {
    icon: Clock,
    label: "Avg wait without online order",
    value: "30–45 min",
  },
  {
    icon: Smartphone,
    label: "Online order pickup",
    value: "~15 min",
  },
  {
    icon: UtensilsCrossed,
    label: "Items on the menu",
    value: "25+",
  },
];

export default function OrderCTA() {
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <stat.icon size={24} className="text-sun-yellow" />
              <div className="text-left">
                <p className="font-heading text-2xl text-cream">{stat.value}</p>
                <p className="text-xs text-cream/60">{stat.label}</p>
              </div>
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
