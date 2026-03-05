// Island Burgers & Bites — MenuTabs
"use client";

import { useState, useEffect } from "react";
import { categories } from "@/lib/menuData";
import type { MenuCategory } from "@/lib/types";

interface MenuTabsProps {
  activeCategory: MenuCategory;
  onCategoryChange: (category: MenuCategory) => void;
}

export default function MenuTabs({
  activeCategory,
  onCategoryChange,
}: MenuTabsProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 120);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (categoryId: MenuCategory) => {
    onCategoryChange(categoryId);
    const el = document.getElementById(`category-${categoryId}`);
    if (el) {
      const offset = 140; // account for sticky header + tabs
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`sticky top-16 z-30 border-b border-charcoal/10 bg-cream transition-shadow duration-300 md:top-20 ${
        isSticky ? "shadow-md" : ""
      }`}
    >
      <div className="no-scrollbar mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleClick(cat.id)}
            className={`relative whitespace-nowrap px-4 py-3 font-heading text-base tracking-wide transition-colors sm:text-lg ${
              activeCategory === cat.id
                ? "text-island-red"
                : "text-charcoal/60 hover:text-charcoal"
            }`}
          >
            {cat.label}
            {activeCategory === cat.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-island-red" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
