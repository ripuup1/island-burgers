// Island Burgers & Bites — Order Page
"use client";

import { useReducer, useState, useCallback } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import MenuTabs from "@/components/order/MenuTabs";
import MenuGrid from "@/components/order/MenuGrid";
import CustomizationModal from "@/components/order/CustomizationModal";
import Cart from "@/components/order/Cart";
import Checkout from "@/components/order/Checkout";
import OrderConfirmation from "@/components/order/OrderConfirmation";
import type { MenuItem, CartItem, CartAction, MenuCategory } from "@/lib/types";

// Cart reducer — handles all cart state mutations
function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_QUANTITY": {
      return state.map((item) => {
        if (item.id !== action.payload.id) return item;
        const newQty = action.payload.quantity;
        // Recalculate item total based on new quantity
        const premiumTotal = item.selectedToppings
          .filter((t) => t.category === "premium")
          .reduce((sum, t) => sum + t.price, 0);
        return {
          ...item,
          quantity: newQty,
          itemTotal: (item.menuItem.price + premiumTotal) * newQty,
        };
      });
    }

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}

type OrderStep = "menu" | "checkout" | "confirmation";

export default function OrderPage() {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [step, setStep] = useState<OrderStep>("menu");
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("burgers");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    pickupTime: "asap",
  });

  const handleAddItem = useCallback((item: MenuItem) => {
    if (item.customizable) {
      setSelectedItem(item);
      setIsModalOpen(true);
    } else {
      // Non-customizable items go straight to cart
      const cartItem: CartItem = {
        id: `${item.id}-${Date.now()}`,
        menuItem: item,
        quantity: 1,
        selectedToppings: [],
        specialInstructions: "",
        itemTotal: item.price,
      };
      dispatch({ type: "ADD_ITEM", payload: cartItem });
    }
  }, []);

  const handleAddToCart = useCallback((cartItem: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: cartItem });
  }, []);

  const handleCheckout = useCallback(() => {
    setStep("checkout");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlePlaceOrder = useCallback(
    (details: {
      name: string;
      phone: string;
      email: string;
      pickupTime: string;
      notes: string;
    }) => {
      setOrderDetails({ name: details.name, pickupTime: details.pickupTime });
      setStep("confirmation");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  // Breadcrumb steps
  const steps = [
    { key: "menu", label: "Build Order" },
    { key: "checkout", label: "Review" },
    { key: "confirmation", label: "Confirmed" },
  ];

  const stepIndex = steps.findIndex((s) => s.key === step);

  return (
    <div className="min-h-screen bg-cream">
      {/* Compact header */}
      <header className="border-b border-charcoal/10 bg-charcoal">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex flex-col leading-none">
            <span className="font-heading text-xl tracking-wide sm:text-2xl">
              <span className="text-island-red">ISLAND BURGERS</span>
              <span className="text-sun-yellow">&nbsp;&amp;BITES</span>
            </span>
          </Link>

          <h1 className="hidden font-heading text-xl tracking-wide text-cream sm:block">
            ORDER ONLINE
          </h1>

          <a
            href="tel:9104586217"
            className="flex items-center gap-1.5 text-sm text-cream/70 transition-colors hover:text-cream"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">(910) 458-6217</span>
          </a>
        </div>

        {/* Progress bar */}
        <div className="mx-auto flex max-w-md items-center justify-center gap-2 px-4 pb-3">
          {steps.map((s, i) => (
            <div key={s.key} className="flex items-center gap-2">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  i <= stepIndex
                    ? "bg-island-red text-cream"
                    : "bg-cream/20 text-cream/50"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-xs ${
                  i <= stepIndex ? "text-cream" : "text-cream/40"
                }`}
              >
                {s.label}
              </span>
              {i < steps.length - 1 && (
                <div
                  className={`h-px w-8 ${
                    i < stepIndex ? "bg-island-red" : "bg-cream/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </header>

      {/* Confirmation view */}
      {step === "confirmation" && (
        <div className="px-4 sm:px-6">
          <OrderConfirmation
            items={cart}
            customerName={orderDetails.name}
            pickupTime={orderDetails.pickupTime}
          />
        </div>
      )}

      {/* Checkout view */}
      {step === "checkout" && (
        <div className="px-4 py-8 sm:px-6">
          <Checkout
            items={cart}
            onBack={() => setStep("menu")}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      )}

      {/* Menu browsing view */}
      {step === "menu" && (
        <>
          <MenuTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Menu items */}
              <div className="flex-1">
                <MenuGrid onAddItem={handleAddItem} />
              </div>

              {/* Cart sidebar (desktop) */}
              <div className="hidden w-80 shrink-0 lg:block">
                <Cart
                  items={cart}
                  dispatch={dispatch}
                  onCheckout={handleCheckout}
                  isDrawerOpen={isCartDrawerOpen}
                  onCloseDrawer={() => setIsCartDrawerOpen(false)}
                />
              </div>
            </div>
          </div>

          {/* Mobile cart drawer + floating button */}
          <div className="lg:hidden">
            <Cart
              items={cart}
              dispatch={dispatch}
              onCheckout={handleCheckout}
              isDrawerOpen={isCartDrawerOpen}
              onCloseDrawer={() => setIsCartDrawerOpen(!isCartDrawerOpen)}
            />
          </div>
        </>
      )}

      {/* Customization modal */}
      <CustomizationModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(null);
        }}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
