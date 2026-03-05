// Island Burgers & Bites — FeaturedMenu
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const featuredItems = [
  {
    name: "Island Burger",
    tag: "Signature",
    description:
      "Our double smash with candied bacon, grilled onions, jalapenos, and special sauce. The one that started it all.",
    price: "$13.99",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&h=400&fit=crop",
  },
  {
    name: "Bacon Double",
    tag: "Fan Favorite",
    description:
      "The crowd favorite. Two patties, candied bacon, your choice of toppings. Absurdly good.",
    price: "$12.49",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=400&fit=crop",
  },
  {
    name: "Classic Philly",
    tag: "Must Try",
    description:
      "Shaved ribeye on the flat-top. Cheez Whiz or provolone. Peppers, onions. Pure.",
    price: "$11.99",
    image:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=600&h=400&fit=crop",
  },
  {
    name: "Handspun Shake",
    tag: "5 Flavors",
    description:
      "Thick. Real. Five flavors. The perfect ending to any meal.",
    price: "$5.99",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop",
  },
];

export default function FeaturedMenu() {
  return (
    <section id="menu" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-heading text-4xl tracking-wide text-island-red sm:text-5xl">
            WHAT TO ORDER
          </h2>
          <p className="mt-3 text-base text-charcoal/70 sm:text-lg">
            Not sure where to start? These are the ones people drive across the
            state for.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute top-3 left-3 rounded-full bg-sun-yellow px-3 py-1 text-xs font-bold text-charcoal">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-2xl tracking-wide text-charcoal">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-heading text-xl text-island-red">
                    {item.price}
                  </span>
                  <Link
                    href="/order"
                    className="rounded-full bg-island-red px-4 py-1.5 text-sm font-semibold text-cream transition-colors hover:bg-island-red-dark"
                  >
                    ADD TO ORDER
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
