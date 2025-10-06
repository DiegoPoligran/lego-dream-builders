"use client"

import { useEffect, useState, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.5, className = "" }: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`transform transition-transform duration-75 ${className}`}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
      }}
    >
      {children}
    </div>
  )
}
