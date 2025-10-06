"use client"

import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductFiltersProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  priceRange: number[]
  onPriceRangeChange: (range: number[]) => void
  sortBy: string
  onSortChange: (sort: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
}: ProductFiltersProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Categories */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Categoría</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`cursor-pointer transition-colors ${
                      selectedCategory === category
                        ? "bg-primary-600 hover:bg-primary-700 text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => onCategoryChange(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Rango de Precio</label>
              <div className="space-y-2">
                <Slider
                  value={priceRange}
                  onValueChange={onPriceRangeChange}
                  max={5000000}
                  min={0}
                  step={50000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Ordenar por</label>
              <Select value={sortBy} onValueChange={onSortChange}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nombre A-Z</SelectItem>
                  <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                  <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  <SelectItem value="rating">Mejor Calificación</SelectItem>
                  <SelectItem value="pieces">Más Piezas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={() => {
                  onCategoryChange("Todos")
                  onPriceRangeChange([0, 5000000])
                  onSortChange("name")
                  onSearchChange("")
                }}
                className="w-full border-primary-200 text-primary-600 hover:bg-primary-50"
              >
                <Filter className="w-4 h-4 mr-2" />
                Limpiar Filtros
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
