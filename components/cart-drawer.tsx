"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import Image from "next/image"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, removeFromCart, clearCart } = useCart()
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)

  if (!isMounted) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Carrito de Compras</DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="py-6 text-center">Tu carrito está vacío.</div>
        ) : (
          <div className="divide-y divide-gray-200 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex py-4 items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{item.product.name}</h3>
                    <p className="text-gray-500 text-xs">Cantidad: {item.quantity}</p>
                    <p className="text-gray-500 text-xs">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <DialogFooter className="mt-6 flex flex-col space-y-4">
            <div className="text-right text-lg font-semibold">Total: {formatPrice(totalPrice)}</div>
            <Button
              className="w-full"
              onClick={() => {
                onOpenChange(false)
                router.push("/checkout")
              }}
            >
              Finalizar Compra
            </Button>
            <Button variant="outline" className="w-full" onClick={clearCart}>
              Vaciar Carrito
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
