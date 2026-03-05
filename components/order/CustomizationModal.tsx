// Island Burgers & Bites — CustomizationModal
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { freeToppings, premiumToppings } from "@/lib/menuData";
import type { MenuItem, Topping, CartItem } from "@/lib/types";

interface CustomizationModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export default function CustomizationModal({
  item,
  isOpen,
  onClose,
  onAddToCart,
}: CustomizationModalProps) {
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");

  // Reset state when a new item opens
  useEffect(() => {
    if (isOpen) {
      setSelectedToppings([]);
      setQuantity(1);
      setSpecialInstructions("");
    }
  }, [isOpen, item]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!item) return null;

  const toggleTopping = (topping: Topping) => {
    setSelectedToppings((prev) =>
      prev.find((t) => t.id === topping.id)
        ? prev.filter((t) => t.id !== topping.id)
        : [...prev, topping]
    );
  };

  const premiumTotal = selectedToppings
    .filter((t) => t.category === "premium")
    .reduce((sum, t) => sum + t.price, 0);

  const itemTotal = (item.price + premiumTotal) * quantity;

  const handleAdd = () => {
    const cartItem: CartItem = {
      id: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity,
      selectedToppings,
      specialInstructions,
      itemTotal,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] z-50 mx-auto max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl sm:inset-x-auto sm:max-h-[90vh]"
          >
            {/* Header image */}
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-t-2xl object-cover"
                sizes="512px"
              />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 rounded-full bg-charcoal/70 p-2 text-cream transition-colors hover:bg-charcoal"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {/* Item info */}
              <h2 className="font-heading text-3xl tracking-wide text-charcoal">
                {item.name}
              </h2>
              <p className="mt-1 text-sm text-charcoal/60">
                {item.description}
              </p>
              <p className="mt-2 font-heading text-xl text-island-red">
                ${item.price.toFixed(2)}
              </p>

              {/* Free toppings — only show for customizable items */}
              {item.customizable && (
                <>
                  <div className="mt-6">
                    <h3 className="font-heading text-lg tracking-wide text-charcoal">
                      TOPPINGS (FREE)
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {freeToppings.map((topping) => {
                        const isSelected = selectedToppings.some(
                          (t) => t.id === topping.id
                        );
                        return (
                          <button
                            key={topping.id}
                            onClick={() => toggleTopping(topping)}
                            className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                              isSelected
                                ? "border-island-red bg-island-red text-cream"
                                : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/40"
                            }`}
                          >
                            {topping.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Premium toppings */}
                  <div className="mt-6">
                    <h3 className="font-heading text-lg tracking-wide text-charcoal">
                      PREMIUM ADD-ONS
                    </h3>
                    <div className="mt-3 space-y-2">
                      {premiumToppings.map((topping) => {
                        const isSelected = selectedToppings.some(
                          (t) => t.id === topping.id
                        );
                        return (
                          <button
                            key={topping.id}
                            onClick={() => toggleTopping(topping)}
                            className={`flex w-full items-center justify-between rounded-lg border px-4 py-2.5 text-sm transition-all ${
                              isSelected
                                ? "border-island-red bg-island-red/5"
                                : "border-charcoal/10 hover:border-charcoal/20"
                            }`}
                          >
                            <span
                              className={
                                isSelected
                                  ? "font-medium text-charcoal"
                                  : "text-charcoal/70"
                              }
                            >
                              {topping.name}
                            </span>
                            <span className="text-island-red">
                              +${topping.price.toFixed(2)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* Special instructions */}
              <div className="mt-6">
                <h3 className="font-heading text-lg tracking-wide text-charcoal">
                  SPECIAL INSTRUCTIONS
                </h3>
                <textarea
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Anything we should know?"
                  className="mt-2 w-full rounded-lg border border-charcoal/20 p-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-island-red focus:ring-1 focus:ring-island-red focus:outline-none"
                  rows={2}
                />
              </div>

              {/* Quantity + Add button */}
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-3 rounded-full border border-charcoal/20 px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="rounded-full p-1 text-charcoal/60 transition-colors hover:bg-charcoal/5"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-8 text-center font-heading text-lg text-charcoal">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="rounded-full p-1 text-charcoal/60 transition-colors hover:bg-charcoal/5"
                    aria-label="Increase quantity"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 rounded-full bg-island-red py-3 font-heading text-lg tracking-wide text-cream transition-all hover:bg-island-red-dark hover:scale-[1.02]"
                >
                  ADD TO ORDER — ${itemTotal.toFixed(2)}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
