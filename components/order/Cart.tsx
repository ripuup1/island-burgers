// Island Burgers & Bites — Cart
"use client";

import { Minus, Plus, Trash2, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { CartItem, CartAction } from "@/lib/types";

interface CartProps {
  items: CartItem[];
  dispatch: React.Dispatch<CartAction>;
  onCheckout: () => void;
  // Mobile drawer controls
  isDrawerOpen: boolean;
  onCloseDrawer: () => void;
}

function CartContent({
  items,
  dispatch,
  onCheckout,
}: Omit<CartProps, "isDrawerOpen" | "onCloseDrawer">) {
  const subtotal = items.reduce((sum, item) => sum + item.itemTotal, 0);
  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <ShoppingBag size={48} className="text-charcoal/20" />
        <p className="mt-4 font-heading text-xl text-charcoal/40">
          Your order is empty.
        </p>
        <p className="mt-1 text-sm text-charcoal/30">
          Don&apos;t let it stay that way. 🍔
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Items */}
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-charcoal/10 bg-white p-3"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-heading text-base tracking-wide text-charcoal">
                  {item.menuItem.name}
                </h4>
                {item.selectedToppings.length > 0 && (
                  <p className="mt-0.5 text-xs text-charcoal/50">
                    {item.selectedToppings.map((t) => t.name).join(", ")}
                  </p>
                )}
                {item.specialInstructions && (
                  <p className="mt-0.5 text-xs italic text-charcoal/40">
                    &quot;{item.specialInstructions}&quot;
                  </p>
                )}
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: item.id })
                }
                className="ml-2 p-1 text-charcoal/30 transition-colors hover:text-island-red"
                aria-label={`Remove ${item.menuItem.name}`}
              >
                <Trash2 size={14} />
              </button>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full border border-charcoal/15 px-1 py-0.5">
                <button
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QUANTITY",
                      payload: {
                        id: item.id,
                        quantity: Math.max(1, item.quantity - 1),
                      },
                    })
                  }
                  className="rounded-full p-0.5 text-charcoal/50 hover:bg-charcoal/5"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-5 text-center text-sm font-medium text-charcoal">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch({
                      type: "UPDATE_QUANTITY",
                      payload: { id: item.id, quantity: item.quantity + 1 },
                    })
                  }
                  className="rounded-full p-0.5 text-charcoal/50 hover:bg-charcoal/5"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
              <span className="font-heading text-base text-charcoal">
                ${item.itemTotal.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="mt-6 space-y-2 border-t border-charcoal/10 pt-4">
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

      {/* Checkout button */}
      <button
        onClick={onCheckout}
        className="mt-6 w-full rounded-full bg-island-red py-3 font-heading text-lg tracking-wide text-cream transition-all hover:bg-island-red-dark"
      >
        PROCEED TO CHECKOUT
      </button>
    </>
  );
}

export default function Cart({
  items,
  dispatch,
  onCheckout,
  isDrawerOpen,
  onCloseDrawer,
}: CartProps) {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-36 rounded-2xl bg-cream p-5 shadow-md">
          <h3 className="mb-4 font-heading text-2xl tracking-wide text-charcoal">
            YOUR ORDER ({itemCount})
          </h3>
          <CartContent
            items={items}
            dispatch={dispatch}
            onCheckout={onCheckout}
          />
        </div>
      </div>

      {/* Mobile floating button */}
      {itemCount > 0 && (
        <button
          onClick={onCloseDrawer}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-island-red px-6 py-3 font-heading text-lg text-cream shadow-lg transition-all hover:bg-island-red-dark lg:hidden"
          aria-label="View cart"
        >
          <ShoppingBag size={20} />
          VIEW CART ({itemCount})
        </button>
      )}

      {/* Mobile drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 lg:hidden"
              onClick={onCloseDrawer}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-cream p-5 shadow-2xl lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-heading text-2xl tracking-wide text-charcoal">
                  YOUR ORDER ({itemCount})
                </h3>
                <button
                  onClick={onCloseDrawer}
                  className="rounded-full p-2 text-charcoal/50 hover:bg-charcoal/5"
                  aria-label="Close cart"
                >
                  <X size={20} />
                </button>
              </div>
              <CartContent
                items={items}
                dispatch={dispatch}
                onCheckout={() => {
                  onCloseDrawer();
                  onCheckout();
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
