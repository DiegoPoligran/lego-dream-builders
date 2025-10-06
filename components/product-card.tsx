"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/data/products"
import { useCart } from "@/hooks/use-cart"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)

  return (
    <Card className="transition-transform hover:-translate-y-1 hover:shadow-lg border-gray-200 hover:border-primary-300">
      <CardHeader className="p-4 flex justify-center">
        <Image
          src={product.id === "1" ? "/images/deadpool.png" : product.image}
          alt={`LEGO ${product.name}`}
          width={300}
          height={300}
          className="object-contain rounded-md"
        />
      </CardHeader>

      <CardContent className="px-4">
        <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>

        <div className="flex items-baseline space-x-2 mt-1">
          <span className="text-primary-600 font-bold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <p className="text-xs text-gray-500 mt-2 line-clamp-2">{product.description}</p>
      </CardContent>

      <CardFooter className="px-4 pb-4">
        <Button
          disabled={!product.inStock}
          onClick={() => addToCart(product, 1)}
          className="w-full flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{product.inStock ? "Añadir al carrito" : "Agotado"}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
