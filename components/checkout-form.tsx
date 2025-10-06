"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Truck, Shield } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

interface CheckoutFormProps {
  onPaymentSuccess: () => void
  isProcessing: boolean
  setIsProcessing: (processing: boolean) => void
}

export function CheckoutForm({ onPaymentSuccess, isProcessing, setIsProcessing }: CheckoutFormProps) {
  const { user } = useAuth()
  const [shippingData, setShippingData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    department: "",
    postalCode: "",
  })

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const handleShippingChange = (field: string, value: string) => {
    setShippingData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePaymentChange = (field: string, value: string) => {
    setPaymentData((prev) => ({ ...prev, [field]: value }))
  }

  const simulatePayment = async () => {
    setIsProcessing(true)

    // Simular procesamiento de pago
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Simular éxito del pago (95% de probabilidad)
    const success = Math.random() > 0.05

    if (success) {
      onPaymentSuccess()
    } else {
      alert("Error en el procesamiento del pago. Intenta nuevamente.")
      setIsProcessing(false)
    }
  }

  const isFormValid = () => {
    const shippingValid = Object.values(shippingData).every((value) => value.trim() !== "")
    const paymentValid = Object.values(paymentData).every((value) => value.trim() !== "")
    return shippingValid && paymentValid
  }

  return (
    <div className="space-y-6">
      {/* Información de Envío */}
      <Card className="border-primary-200">
        <CardHeader>
          <CardTitle className="flex items-center text-primary-700">
            <Truck className="w-5 h-5 mr-2" />
            Información de Envío
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Nombre Completo</Label>
              <Input
                id="fullName"
                value={shippingData.fullName}
                onChange={(e) => handleShippingChange("fullName", e.target.value)}
                placeholder="Juan Pérez"
                className="focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={shippingData.email}
                onChange={(e) => handleShippingChange("email", e.target.value)}
                placeholder="juan@email.com"
                className="focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              value={shippingData.phone}
              onChange={(e) => handleShippingChange("phone", e.target.value)}
              placeholder="+57 300 123 4567"
              className="focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <Label htmlFor="address">Dirección</Label>
            <Input
              id="address"
              value={shippingData.address}
              onChange={(e) => handleShippingChange("address", e.target.value)}
              placeholder="Calle 123 #45-67"
              className="focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">Ciudad</Label>
              <Input
                id="city"
                value={shippingData.city}
                onChange={(e) => handleShippingChange("city", e.target.value)}
                placeholder="Bogotá"
                className="focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <Label htmlFor="department">Departamento</Label>
              <Select
                value={shippingData.department}
                onValueChange={(value) => handleShippingChange("department", value)}
              >
                <SelectTrigger className="focus:ring-primary-500 focus:border-primary-500">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cundinamarca">Cundinamarca</SelectItem>
                  <SelectItem value="antioquia">Antioquia</SelectItem>
                  <SelectItem value="valle">Valle del Cauca</SelectItem>
                  <SelectItem value="atlantico">Atlántico</SelectItem>
                  <SelectItem value="santander">Santander</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="postalCode">Código Postal</Label>
              <Input
                id="postalCode"
                value={shippingData.postalCode}
                onChange={(e) => handleShippingChange("postalCode", e.target.value)}
                placeholder="110111"
                className="focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Información de Pago */}
      <Card className="border-primary-200">
        <CardHeader>
          <CardTitle className="flex items-center text-primary-700">
            <CreditCard className="w-5 h-5 mr-2" />
            Información de Pago
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2 text-sm text-primary-700 bg-primary-50 p-3 rounded-lg">
            <Shield className="w-4 h-4" />
            <span>Simulación de Stripe - Usa datos ficticios</span>
          </div>

          <div>
            <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
            <Input
              id="cardName"
              value={paymentData.cardName}
              onChange={(e) => handlePaymentChange("cardName", e.target.value)}
              placeholder="Juan Pérez"
              className="focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <Label htmlFor="cardNumber">Número de Tarjeta</Label>
            <Input
              id="cardNumber"
              value={paymentData.cardNumber}
              onChange={(e) => handlePaymentChange("cardNumber", e.target.value)}
              placeholder="4242 4242 4242 4242"
              maxLength={19}
              className="focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Fecha de Vencimiento</Label>
              <Input
                id="expiryDate"
                value={paymentData.expiryDate}
                onChange={(e) => handlePaymentChange("expiryDate", e.target.value)}
                placeholder="MM/AA"
                maxLength={5}
                className="focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                value={paymentData.cvv}
                onChange={(e) => handlePaymentChange("cvv", e.target.value)}
                placeholder="123"
                maxLength={4}
                className="focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={simulatePayment}
        disabled={!isFormValid() || isProcessing}
        className="w-full h-12 text-lg bg-primary-600 hover:bg-primary-700 text-white"
      >
        {isProcessing ? "Procesando Pago..." : "Pagar Ahora"}
      </Button>
    </div>
  )
}
