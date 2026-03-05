// Island Burgers & Bites — Story
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://assets.simpleviewinc.com/simpleview/image/upload/crm/wilmingtonnc/Island-Burgers-mural-CRM-only_46A3D257-9D63-4E80-9CE929CC8EADCE10-46a3e56c-909d-cf45-c22456912689f7a8.jpg"
              alt="Island Burgers & Bites restaurant mural"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl tracking-wide text-charcoal sm:text-5xl">
              FROM A GAS STATION.
              <br />
              <span className="text-island-red">TO A LEGEND.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-charcoal/80 sm:text-lg">
              In 2012, brothers Kanwar and Ajay Singh moved from D.C. to
              Carolina Beach and bought Island Kwik Mart — a gas station and
              convenience store. Five years later, they squeezed a 200-square-foot
              kitchen inside it and started serving smash burgers.
            </p>

            <p className="mt-4 text-base leading-relaxed text-charcoal/80 sm:text-lg">
              Word spread fast. Lines wrapped around the building. Yelp named
              them the #1 Best Cheeseburger in North Carolina. Our State Magazine
              came calling. And in May 2025, they moved into their own standalone
              building — still on Lake Park Blvd, still making burgers the same
              way.
            </p>

            {/* Pull quote */}
            <blockquote className="mt-8 border-l-4 border-sun-yellow bg-sun-yellow/10 px-6 py-4 rounded-r-lg">
              <p className="text-base font-semibold italic text-charcoal sm:text-lg">
                &ldquo;As soon as we opened, we got a huge reaction from the
                locals — and we just kept building on that.&rdquo;
              </p>
            </blockquote>

            <Link
              href="/#contact"
              className="mt-8 inline-block font-heading text-lg tracking-wide text-island-red transition-colors hover:text-island-red-dark"
            >
              ABOUT US →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
