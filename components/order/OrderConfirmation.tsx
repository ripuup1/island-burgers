// Island Burgers & Bites — OrderConfirmation
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import type { CartItem } from "@/lib/types";

interface OrderConfirmationProps {
  items: CartItem[];
  customerName: string;
  pickupTime: string;
}

export default function OrderConfirmation({
  items,
  customerName,
  pickupTime,
}: OrderConfirmationProps) {
  const subtotal = items.reduce((sum, item) => sum + item.itemTotal, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  return (
    <div className="mx-auto max-w-lg py-12 text-center">
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <CheckCircle size={80} className="mx-auto text-green-500" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 font-heading text-4xl tracking-wide text-charcoal sm:text-5xl"
      >
        ORDER RECEIVED! 🍔
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-3 text-lg text-charcoal/70"
      >
        Thanks, {customerName}! Your order is being prepared.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-2 inline-block rounded-full bg-sun-yellow/20 px-5 py-2"
      >
        <span className="font-heading text-xl text-charcoal">
          Estimated pickup:{" "}
          {pickupTime === "asap" ? "15–20 minutes" : pickupTime}
        </span>
      </motion.div>

      {/* Order recap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="mt-8 rounded-xl bg-white p-6 text-left shadow-sm"
      >
        <h3 className="font-heading text-lg tracking-wide text-charcoal">
          YOUR ORDER
        </h3>
        <div className="mt-3 space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-sm text-charcoal/70"
            >
              <span>
                {item.quantity}x {item.menuItem.name}
              </span>
              <span>${item.itemTotal.toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-charcoal/10 pt-2" />
          <div className="flex justify-between font-heading text-lg text-charcoal">
            <span>TOTAL</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </motion.div>

      {/* Location + call info */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="mt-6 space-y-3"
      >
        <div className="flex items-center justify-center gap-2 text-sm text-charcoal/60">
          <MapPin size={16} className="text-island-red" />
          254 N Lake Park Blvd, Carolina Beach, NC 28428
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-charcoal/60">
          <Phone size={16} className="text-island-red" />
          Need to change something? Call{" "}
          <a href="tel:9104586217" className="font-medium text-island-red">
            (910) 458-6217
          </a>
        </div>
      </motion.div>

      {/* Back to home */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-charcoal px-8 py-3 font-heading text-lg tracking-wide text-cream transition-all hover:bg-charcoal/90"
        >
          BACK TO HOME
        </Link>
      </motion.div>
    </div>
  );
}
