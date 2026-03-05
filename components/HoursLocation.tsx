// Island Burgers & Bites — HoursLocation
"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Navigation } from "lucide-react";

const hours = [
  { days: "Monday – Thursday", time: "11AM – 8PM" },
  { days: "Friday – Saturday", time: "11AM – 9PM" },
  { days: "Sunday", time: "11AM – 4PM" },
];

export default function HoursLocation() {
  return (
    <section id="contact" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center font-heading text-4xl tracking-wide text-charcoal sm:text-5xl"
        >
          FIND US
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-8 shadow-md"
          >
            <div className="mb-6 flex items-center gap-3">
              <Clock size={24} className="text-island-red" />
              <h3 className="font-heading text-2xl tracking-wide text-charcoal">
                HOURS
              </h3>
            </div>

            <div className="space-y-4">
              {hours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-center justify-between border-b border-charcoal/10 pb-3"
                >
                  <span className="text-sm font-medium text-charcoal/80 sm:text-base">
                    {row.days}
                  </span>
                  <span className="font-heading text-lg text-charcoal">
                    {row.time}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-charcoal/60">
              Outdoor deck seating available. First come, first served.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl bg-charcoal p-8 shadow-md"
          >
            <div className="mb-6 flex items-center gap-3">
              <MapPin size={24} className="text-island-red" />
              <h3 className="font-heading text-2xl tracking-wide text-cream">
                LOCATION
              </h3>
            </div>

            {/* Embedded Google Map */}
            <div className="mb-6 overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Island+Burgers+%26+Bites,254+N+Lake+Park+Blvd,Carolina+Beach,NC+28428"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Island Burgers & Bites location"
                className="aspect-[16/9] w-full"
              />
            </div>

            <p className="text-sm text-cream/70">
              Moved to our own standalone building in May 2025 — still on Lake
              Park Blvd, right in the heart of Carolina Beach.
            </p>

            <a
              href="https://maps.google.com/?q=254+N+Lake+Park+Blvd+Carolina+Beach+NC+28428"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-island-red px-6 py-2.5 font-heading text-lg tracking-wide text-cream transition-all hover:bg-island-red-dark hover:scale-105"
            >
              <Navigation size={18} />
              GET DIRECTIONS
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
