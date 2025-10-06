import { Suspense } from "react"
import { ProductCatalog } from "@/components/product-catalog"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Cargando productos...</div>}>
          <ProductCatalog />
        </Suspense>
      </main>
    </div>
  )
}
