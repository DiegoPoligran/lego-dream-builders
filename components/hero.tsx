"use client"

import { useEffect, useState } from "react"
import { LegoBrick } from "@/components/lego-brick"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 relative overflow-hidden min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Texto principal con parallax sutil */}
        <div
          className="transform transition-transform duration-75"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Construye tu Mundo{" "}
            <span className="text-accent-400 animate-pulse-glow font-black text-5xl md:text-7xl inline-block transform hover:scale-110 transition-transform duration-300 drop-shadow-lg">
              LEGO
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Descubre aventuras infinitas con nuestra colección exclusiva de sets y figuras
          </p>
        </div>

        {/* Bricks LEGO centrales con parallax intermedio */}
        <div
          className="flex justify-center space-x-4 transform transition-transform duration-75"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <LegoBrick
            color="bg-accent-400"
            size="medium"
            studs={4}
            style={{
              transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`,
            }}
          />
          <LegoBrick
            color="bg-primary-500"
            size="medium"
            studs={6}
            style={{
              transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * -0.02}deg)`,
            }}
          />
          <LegoBrick
            color="bg-green-500"
            size="medium"
            studs={4}
            style={{
              transform: `translateY(${scrollY * 0.11}px) rotate(${scrollY * 0.03}deg)`,
            }}
          />
          <LegoBrick
            color="bg-accent-400"
            size="medium"
            studs={2}
            style={{
              transform: `translateY(${scrollY * 0.13}px) rotate(${scrollY * -0.01}deg)`,
            }}
          />
        </div>
      </div>

      {/* Capa de fondo con bricks LEGO de diferentes tamaños */}
      <div
        className="absolute inset-0 opacity-10 transform transition-transform duration-75"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-10 left-10">
          <LegoBrick color="bg-accent-400" size="large" studs={6} className="animate-pulse" />
        </div>
        <div className="absolute top-32 right-20">
          <LegoBrick color="bg-primary-400" size="medium" studs={4} className="animate-pulse delay-100" />
        </div>
        <div className="absolute bottom-20 left-32">
          <LegoBrick color="bg-green-400" size="small" studs={2} className="animate-pulse delay-200" />
        </div>
        <div className="absolute bottom-32 right-10">
          <LegoBrick color="bg-accent-400" size="large" studs={8} className="animate-pulse delay-300" />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <LegoBrick color="bg-primary-400" size="small" studs={1} className="animate-pulse delay-150" />
        </div>
        <div className="absolute top-1/3 right-1/3">
          <LegoBrick color="bg-green-400" size="medium" studs={6} className="animate-pulse delay-250" />
        </div>
      </div>

      {/* Capa de fondo adicional con bricks más grandes */}
      <div
        className="absolute inset-0 opacity-5 transform transition-transform duration-75"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-20 left-1/3">
          <LegoBrick color="bg-accent-400" size="large" studs={8} />
        </div>
        <div className="absolute bottom-40 right-1/4">
          <LegoBrick color="bg-primary-400" size="large" studs={6} />
        </div>
        <div className="absolute top-1/2 right-10">
          <LegoBrick color="bg-green-400" size="medium" studs={4} />
        </div>
        <div className="absolute bottom-10 left-1/2">
          <LegoBrick color="bg-accent-400" size="large" studs={8} />
        </div>
      </div>

      {/* Partículas flotantes con mini bricks */}
      <div
        className="absolute inset-0 opacity-20 transform transition-transform duration-75"
        style={{
          transform: `translateY(${scrollY * 0.7}px)`,
        }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={`mini-brick-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2000}ms`,
            }}
          >
            <LegoBrick
              color={i % 3 === 0 ? "bg-accent-400" : i % 3 === 1 ? "bg-primary-400" : "bg-green-400"}
              size="small"
              studs={Math.floor(Math.random() * 3) + 1}
              className="animate-ping"
            />
          </div>
        ))}
      </div>

      {/* Gradiente overlay para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/20 pointer-events-none"></div>
    </div>
  )
}
