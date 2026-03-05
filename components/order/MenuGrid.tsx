// Island Burgers & Bites — MenuGrid
"use client";

import { categories } from "@/lib/menuData";
import { menuItems } from "@/lib/menuData";
import ItemCard from "./ItemCard";
import type { MenuItem } from "@/lib/types";

interface MenuGridProps {
  onAddItem: (item: MenuItem) => void;
}

export default function MenuGrid({ onAddItem }: MenuGridProps) {
  return (
    <div className="space-y-10">
      {categories.map((cat) => {
        const items = menuItems.filter((item) => item.category === cat.id);
        if (items.length === 0) return null;

        return (
          <section key={cat.id} id={`category-${cat.id}`}>
            <h2 className="mb-4 font-heading text-2xl tracking-wide text-charcoal sm:text-3xl">
              {cat.label.toUpperCase()}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} onAdd={onAddItem} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
