"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Product } from "@/data/products"

export interface CartItem {
  product: Product
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) => (i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i))
      }
      return [...prev, { product, quantity }]
    })
  }

  const removeFromCart = (productId: string) => setItems((prev) => prev.filter((i) => i.product.id !== productId))

  const clearCart = () => setItems([])

  return <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
