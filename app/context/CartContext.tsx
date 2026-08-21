"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

export const CartContext = createContext<any>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<any[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load cart from localStorage when the app starts
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("ascendlab-cart");

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart:", error);
    } finally {
      setHydrated(true);
    }
  }, []);

  // Save cart whenever it changes
  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem("ascendlab-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart:", error);
    }
  }, [cart, hydrated]);

  function addToCart(product: any) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1,
              }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(index: number) {
    setCart((currentCart) =>
      currentCart.filter((_, i) => i !== index)
    );
  }

  function increaseQuantity(index: number) {
    setCart((currentCart) =>
      currentCart.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(index: number) {
    setCart((currentCart) =>
      currentCart.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(
                1,
                (item.quantity || 1) - 1
              ),
            }
          : item
      )
    );
  }

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}