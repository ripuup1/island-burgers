// Island Burgers & Bites — Gallery
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  {
    src: "https://assets.simpleviewinc.com/simpleview/image/upload/w_400,h_400,c_fill,q_auto,f_auto/crm/wilmingtonnc/Island-burger-CRM-only_B8F1F435-F430-6BAD-E273CC56D6AAFCFB-b8f1f23e937cfb4_b8f20143-9968-5be3-28d68b153a3a7c89.jpg",
    alt: "Island Burgers smash burger",
  },
  {
    src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=400&fit=crop",
    alt: "Juicy burger with jalapenos",
  },
  {
    src: "https://assets.simpleviewinc.com/simpleview/image/upload/w_400,h_400,c_fill,q_auto,f_auto/crm/wilmingtonnc/Island-Burgers-two-burgers-CRM_BF9F460B-AEEB-B892-CAB399633A20F0D6-bf9f429dc99b0e8_bf9f4ba0-c8e5-ad75-0b07f55e9242ead4.png",
    alt: "Two Island Burgers smash burgers",
  },
  {
    src: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=400&fit=crop",
    alt: "Philly cheesesteak",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=400&fit=crop",
    alt: "Burgers on the grill",
  },
  {
    src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop",
    alt: "Handspun milkshake",
  },
  {
    src: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=400&fit=crop",
    alt: "Bacon cheeseburger",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop",
    alt: "Food spread on a table",
  },
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=400&fit=crop",
    alt: "Smash burger on brioche",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
    alt: "Carolina Beach sunset",
  },
];

// Duplicate for seamless loop
const allPhotos = [...photos, ...photos];

export default function Gallery() {
  return (
    <section className="overflow-hidden bg-charcoal py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center font-heading text-4xl tracking-wide text-cream"
      >
        THE VIBES
      </motion.h2>

      <div className="overflow-hidden">
        <div className="animate-gallery flex w-max gap-3">
          {allPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative h-48 w-48 shrink-0 overflow-hidden rounded-lg sm:h-56 sm:w-56 md:h-64 md:w-64"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
