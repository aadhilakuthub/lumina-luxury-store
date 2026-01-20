"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { products, Product } from "@/data/products";

export type CartItem = { id: number; quantity: number };

interface CartContextType {
  cart: CartItem[];
  products: Product[];
  updateQuantity: (id: number, delta: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(
    products.slice(0, 3).map((p) => ({ id: p.id, quantity: 1 }))
  );

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, products, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
