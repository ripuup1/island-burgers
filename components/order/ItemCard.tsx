// Island Burgers & Bites — ItemCard
"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import type { MenuItem } from "@/lib/types";

interface ItemCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export default function ItemCard({ item, onAdd }: ItemCardProps) {
  return (
    <div className="group flex gap-4 rounded-xl bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:p-4">
      {/* Photo */}
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-28">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="112px"
        />
        {item.badge && (
          <span className="absolute top-1 left-1 rounded-full bg-sun-yellow px-2 py-0.5 text-[10px] font-bold text-charcoal">
            {item.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-heading text-lg leading-tight tracking-wide text-charcoal sm:text-xl">
            {item.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-charcoal/60 sm:text-sm">
            {item.description}
          </p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-heading text-lg text-island-red">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAdd(item)}
            className="flex items-center gap-1.5 rounded-full bg-island-red px-3 py-1.5 text-xs font-semibold text-cream transition-all hover:bg-island-red-dark hover:scale-105 sm:px-4 sm:text-sm"
            aria-label={`Add ${item.name} to order`}
          >
            <Plus size={14} />
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
