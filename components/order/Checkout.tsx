// Island Burgers & Bites — Checkout
"use client";

import { useState } from "react";
import { ArrowLeft, Phone } from "lucide-react";
import type { CartItem } from "@/lib/types";

interface CheckoutProps {
  items: CartItem[];
  onBack: () => void;
  onPlaceOrder: (orderDetails: {
    name: string;
    phone: string;
    email: string;
    pickupTime: string;
    notes: string;
  }) => void;
}

export default function Checkout({ items, onBack, onPlaceOrder }: CheckoutProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickupTime, setPickupTime] = useState("asap");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = items.reduce((sum, item) => sum + item.itemTotal, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (phone && !/^\(?[\d]{3}\)?[-.\s]?[\d]{3}[-.\s]?[\d]{4}$/.test(phone.replace(/\s/g, "")))
      newErrors.phone = "Enter a valid phone number";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onPlaceOrder({ name, phone, email, pickupTime, notes });
  };

  // Generate pickup time options (every 15 min for next 2 hours)
  const timeOptions: string[] = [];
  const now = new Date();
  for (let i = 1; i <= 8; i++) {
    const time = new Date(now.getTime() + i * 15 * 60 * 1000);
    timeOptions.push(
      time.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      {/* Back button */}
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 font-heading text-lg tracking-wide text-charcoal/70 transition-colors hover:text-charcoal"
      >
        <ArrowLeft size={18} />
        BACK TO MENU
      </button>

      <h2 className="font-heading text-3xl tracking-wide text-charcoal sm:text-4xl">
        CHECKOUT
      </h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Contact info */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-heading text-xl tracking-wide text-charcoal">
            YOUR INFO
          </h3>

          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-charcoal/70">
                Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:ring-1 focus:outline-none ${
                  errors.name
                    ? "border-island-red focus:border-island-red focus:ring-island-red"
                    : "border-charcoal/20 focus:border-island-red focus:ring-island-red"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-island-red">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-charcoal/70">
                Phone *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(910) 555-1234"
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:ring-1 focus:outline-none ${
                  errors.phone
                    ? "border-island-red focus:border-island-red focus:ring-island-red"
                    : "border-charcoal/20 focus:border-island-red focus:ring-island-red"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-island-red">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-charcoal/70">
                Email (optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className={`w-full rounded-lg border px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:ring-1 focus:outline-none ${
                  errors.email
                    ? "border-island-red focus:border-island-red focus:ring-island-red"
                    : "border-charcoal/20 focus:border-island-red focus:ring-island-red"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-island-red">{errors.email}</p>
              )}
            </div>
          </div>
        </div>

        {/* Pickup time */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-heading text-xl tracking-wide text-charcoal">
            PICKUP TIME
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setPickupTime("asap")}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                pickupTime === "asap"
                  ? "border-island-red bg-island-red text-cream"
                  : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/40"
              }`}
            >
              ASAP (~15 min)
            </button>
            {timeOptions.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => setPickupTime(time)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  pickupTime === time
                    ? "border-island-red bg-island-red text-cream"
                    : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/40"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Order notes */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-heading text-xl tracking-wide text-charcoal">
            ORDER NOTES
          </h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Allergies, special requests, etc."
            className="mt-3 w-full rounded-lg border border-charcoal/20 p-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-island-red focus:ring-1 focus:ring-island-red focus:outline-none"
            rows={2}
          />
        </div>

        {/* Payment */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-heading text-xl tracking-wide text-charcoal">
            PAYMENT
          </h3>
          <div className="mt-3 rounded-lg border border-sun-yellow/40 bg-sun-yellow/10 p-4">
            <p className="text-sm font-medium text-charcoal">
              Pay at pickup
            </p>
            <p className="mt-1 text-xs text-charcoal/60">
              Cash, credit, and debit accepted at the counter.
            </p>
          </div>
        </div>

        {/* Order summary */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="font-heading text-xl tracking-wide text-charcoal">
            ORDER SUMMARY
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
            <div className="flex justify-between text-sm text-charcoal/70">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-charcoal/70">
              <span>Tax (7%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-heading text-xl text-charcoal">
              <span>TOTAL</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Place order */}
        <button
          type="submit"
          className="w-full rounded-full bg-island-red py-4 font-heading text-xl tracking-wide text-cream transition-all hover:bg-island-red-dark hover:scale-[1.02]"
        >
          PLACE ORDER
        </button>

        <p className="flex items-center justify-center gap-2 text-center text-xs text-charcoal/50">
          <Phone size={12} />
          Questions? Call us at{" "}
          <a href="tel:9104586217" className="underline">
            (910) 458-6217
          </a>
        </p>
      </form>
    </div>
  );
}
