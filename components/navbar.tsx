"use client"

import { useState } from "react"
import { ShoppingCart, User, Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { CartDrawer } from "@/components/cart-drawer"
import { AuthModal } from "@/components/auth-modal"

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { items } = useCart()
  const { user, logout } = useAuth()

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <nav className="bg-primary-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent-400 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">LEGO Store</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="pl-10 pr-4 py-2 rounded-lg text-gray-900 w-64 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>

              <Button
                variant="ghost"
                className="text-white hover:bg-primary-700 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-accent-400 text-white text-xs">{itemCount}</Badge>
                )}
              </Button>

              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Hola, {user.name}</span>
                  <Button variant="ghost" className="text-white hover:bg-primary-700" onClick={logout}>
                    Salir
                  </Button>
                </div>
              ) : (
                <Button variant="ghost" className="text-white hover:bg-primary-700" onClick={() => setIsAuthOpen(true)}>
                  <User className="w-5 h-5 mr-2" />
                  Iniciar Sesión
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-primary-500">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    className="pl-10 pr-4 py-2 rounded-lg text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-accent-400"
                  />
                </div>

                <Button
                  variant="ghost"
                  className="text-white hover:bg-primary-700 justify-start"
                  onClick={() => setIsCartOpen(true)}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Carrito ({itemCount})
                </Button>

                {user ? (
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm px-4">Hola, {user.name}</span>
                    <Button variant="ghost" className="text-white hover:bg-primary-700 justify-start" onClick={logout}>
                      Salir
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-primary-700 justify-start"
                    onClick={() => setIsAuthOpen(true)}
                  >
                    <User className="w-5 h-5 mr-2" />
                    Iniciar Sesión
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
      <AuthModal open={isAuthOpen} onOpenChange={setIsAuthOpen} />
    </>
  )
}
