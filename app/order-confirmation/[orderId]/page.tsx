"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Truck, Home } from "lucide-react"

interface OrderConfirmationPageProps {
  params: { orderId: string }
}

export default function OrderConfirmationPage({ params }: OrderConfirmationPageProps) {
  const router = useRouter()
  const [orderId] = useState(params.orderId)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">¡Pago Exitoso!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 mb-2">Tu pedido ha sido procesado correctamente</p>
            <p className="text-sm text-gray-500">
              Número de orden: <span className="font-mono">{orderId}</span>
            </p>
          </div>

          {/* Estado del pedido */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Estado del Pedido</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Pago Confirmado</p>
                  <p className="text-sm text-gray-500">Tu pago ha sido procesado exitosamente</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Preparando Pedido</p>
                  <p className="text-sm text-gray-500">Estamos empacando tus productos LEGO</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-400">En Camino</p>
                  <p className="text-sm text-gray-400">Te notificaremos cuando sea enviado</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Home className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-400">Entregado</p>
                  <p className="text-sm text-gray-400">Tiempo estimado: 3-5 días hábiles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">¿Qué sigue?</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Recibirás un email de confirmación en los próximos minutos</li>
              <li>• Te notificaremos cuando tu pedido sea enviado</li>
              <li>• Podrás rastrear tu pedido con el número de orden</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <Button onClick={() => router.push("/")} className="flex-1">
              Seguir Comprando
            </Button>
            <Button variant="outline" onClick={() => window.print()} className="flex-1">
              Imprimir Recibo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
