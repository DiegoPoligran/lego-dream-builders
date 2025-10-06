"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { CartItem } from "@/hooks/use-cart"

interface OrderSummaryProps {
  items: CartItem[]
}

export function OrderSummary({ items }: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 500000 ? 0 : 25000 // Envío gratis por compras mayores a $500,000
  const tax = Math.round(subtotal * 0.19) // IVA 19%
  const total = subtotal + shipping + tax

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle>Resumen del Pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Productos */}
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.product.id} className="flex items-center space-x-3">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={item.product.id === "1" ? "/images/deadpool.png" : item.product.image}
                  alt={item.product.name}
                  width={64}
                  height={64}
                  className="object-contain rounded-md"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">{item.product.name}</h4>
                <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
              </div>
              <div className="text-sm font-medium">{formatPrice(item.product.price * item.quantity)}</div>
            </div>
          ))}
        </div>

        <Separator />

        {/* Cálculos */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Envío</span>
            <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>IVA (19%)</span>
            <span>{formatPrice(tax)}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>

        {/* Información adicional */}
        <div className="text-xs text-gray-500 space-y-1">
          <p>• Envío gratis en compras superiores a $500,000</p>
          <p>• Tiempo de entrega: 3-5 días hábiles</p>
          <p>• Garantía de satisfacción 100%</p>
        </div>
      </CardContent>
    </Card>
  )
}
