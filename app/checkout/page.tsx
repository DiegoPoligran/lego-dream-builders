"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { CheckoutForm } from "@/components/checkout-form"
import { OrderSummary } from "@/components/order-summary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, clearCart } = useCart()
  const { user } = useAuth()
  const [isProcessing, setIsProcessing] = useState(false)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Carrito Vacío</h2>
            <p className="text-gray-600 mb-4">No tienes productos en tu carrito.</p>
            <Button onClick={() => router.push("/")}>Volver a la Tienda</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Inicia Sesión</h2>
            <p className="text-gray-600 mb-4">Debes iniciar sesión para continuar con la compra.</p>
            <Button onClick={() => router.push("/")}>Volver a la Tienda</Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handlePaymentSuccess = () => {
    const orderId = crypto.randomUUID()
    clearCart()
    router.push(`/order-confirmation/${orderId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Finalizar Compra</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <CheckoutForm
              onPaymentSuccess={handlePaymentSuccess}
              isProcessing={isProcessing}
              setIsProcessing={setIsProcessing}
            />
          </div>
          <div>
            <OrderSummary items={items} />
          </div>
        </div>
      </div>
    </div>
  )
}
