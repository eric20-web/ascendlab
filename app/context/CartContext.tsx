"use client";

import { createContext, useState } from "react";

export const CartContext = createContext<any>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<any[]>([]);

  function addToCart(product: any) {
    setCart((currentCart) => [...currentCart, product]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}