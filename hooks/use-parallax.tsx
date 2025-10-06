"use client"

import { useEffect, useState } from "react"

export function useParallax() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Usar requestAnimationFrame para mejor performance
    let ticking = false
    const updateScrollY = () => {
      handleScroll()
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY)
        ticking = true
      }
    }

    window.addEventListener("scroll", requestTick, { passive: true })
    return () => window.removeEventListener("scroll", requestTick)
  }, [])

  return scrollY
}
