"use client"

import type React from "react"

interface LegoBrickProps {
  color: string
  size?: "small" | "medium" | "large"
  studs?: number
  className?: string
  style?: React.CSSProperties
}

export function LegoBrick({ color, size = "medium", studs = 4, className = "", style }: LegoBrickProps) {
  const sizeClasses = {
    small: "w-12 h-8",
    medium: "w-16 h-12",
    large: "w-20 h-16",
  }

  const studSize = {
    small: "w-2 h-2",
    medium: "w-3 h-3",
    large: "w-4 h-4",
  }

  const renderStuds = () => {
    const studArray = []
    const studRows = studs === 4 ? 2 : studs === 6 ? 2 : 1
    const studCols = studs === 4 ? 2 : studs === 6 ? 3 : studs

    for (let row = 0; row < studRows; row++) {
      for (let col = 0; col < studCols; col++) {
        studArray.push(
          <div key={`${row}-${col}`} className={`${studSize[size]} bg-white/20 rounded-full border border-white/30`} />,
        )
      }
    }
    return studArray
  }

  return (
    <div
      className={`${sizeClasses[size]} ${color} rounded-lg shadow-lg transform hover:rotate-12 hover:scale-110 transition-all duration-300 relative overflow-hidden ${className}`}
      style={style}
    >
      {/* Superficie superior del brick */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-lg" />

      {/* Studs (círculos superiores) */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          studs === 4 ? "grid grid-cols-2 gap-1" : studs === 6 ? "grid grid-cols-3 gap-1" : "flex space-x-1"
        } p-2`}
      >
        {renderStuds()}
      </div>

      {/* Efecto de brillo */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-lg" />

      {/* Sombra interna */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/20 to-transparent rounded-b-lg" />
    </div>
  )
}
