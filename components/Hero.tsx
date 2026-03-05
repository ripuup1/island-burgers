// Island Burgers & Bites — Hero
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://assets.simpleviewinc.com/simpleview/image/upload/w_1600,c_fill,q_auto,f_auto/crm/wilmingtonnc/Island-burger-CRM-only_B8F1F435-F430-6BAD-E273CC56D6AAFCFB-b8f1f23e937cfb4_b8f20143-9968-5be3-28d68b153a3a7c89.jpg"
        alt="Island Burgers & Bites smash burger"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />

      {/* Steam effect */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2">
        <div className="steam-line" style={{ left: 0 }} />
        <div className="steam-line" style={{ left: 20 }} />
        <div className="steam-line" style={{ left: 40 }} />
        <div className="steam-line" style={{ left: 60 }} />
        <div className="steam-line" style={{ left: 80 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Award badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 inline-block rounded-full border border-sun-yellow/50 bg-sun-yellow/10 px-5 py-2 backdrop-blur-sm"
        >
          <span className="text-sm font-semibold tracking-wide text-sun-yellow">
            NC&apos;s #1 Cheeseburger — Yelp &middot; Featured in Our State Magazine
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-heading text-4xl leading-none tracking-wide text-cream sm:text-6xl md:text-7xl lg:text-8xl"
        >
          THE BURGER
          <br />
          <span className="text-island-red">CAROLINA BEACH</span>
          <br />
          TALKS ABOUT.
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
        >
          Hand-pattied smash burgers. Philly cheesesteaks. Crinkle fries. Made
          fresh since 2017.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/order"
            className="rounded-full bg-island-red px-8 py-3.5 font-heading text-xl tracking-wide text-cream transition-all hover:bg-island-red-dark hover:scale-105"
          >
            ORDER ONLINE →
          </Link>
          <Link
            href="/#menu"
            className="rounded-full border-2 border-cream/60 px-8 py-3 font-heading text-xl tracking-wide text-cream transition-all hover:border-cream hover:bg-cream/10"
          >
            SEE THE MENU
          </Link>
        </motion.div>
      </div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-6 z-10 hidden text-xs text-cream/50 sm:block"
      >
        254 N Lake Park Blvd &middot; (910) 458-6217
      </motion.div>
    </section>
  );
}
