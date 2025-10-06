"use client"

import { useState, useMemo } from "react"
import { products, categories } from "@/data/products"
import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [priceRange, setPriceRange] = useState([0, 5000000])
  const [sortBy, setSortBy] = useState("name")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesPrice && matchesSearch
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "pieces":
          return b.pieces - a.pieces
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [selectedCategory, priceRange, sortBy, searchQuery])

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Catálogo de Productos LEGO</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra colección completa de sets LEGO. Desde superhéroes hasta arquitectura, tenemos el set
          perfecto para cada constructor.
        </p>
      </div>

      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        sortBy={sortBy}
        onSortChange={setSortBy}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No se encontraron productos que coincidan con los filtros seleccionados.
          </p>
        </div>
      )}
    </div>
  )
}
