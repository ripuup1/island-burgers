// Island Burgers & Bites — Types

export interface Topping {
  id: string;
  name: string;
  price: number; // 0 for free toppings
  category: "free" | "premium";
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  customizable: boolean;
  featured?: boolean;
  badge?: string;
}

export type MenuCategory =
  | "burgers"
  | "cheesesteaks"
  | "hot-dogs"
  | "chicken"
  | "sides"
  | "shakes-drinks";

export interface CategoryInfo {
  id: MenuCategory;
  label: string;
}

export interface CartItem {
  id: string; // unique cart item id
  menuItem: MenuItem;
  quantity: number;
  selectedToppings: Topping[];
  specialInstructions: string;
  itemTotal: number;
}

export interface Order {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  pickupTime: string;
  orderNotes: string;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };
