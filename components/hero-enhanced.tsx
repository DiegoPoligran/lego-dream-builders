"use client"

import { useParallax } from "@/hooks/use-parallax"
import { LegoBrick } from "@/components/lego-brick"

export function HeroEnhanced() {
  const scrollY = useParallax()

  const legoBricks = [
    { color: "bg-accent-400", studs: 4, label: "Creatividad" },
    { color: "bg-primary-500", studs: 6, label: "Aventura" },
    { color: "bg-green-500", studs: 4, label: "Construcción" },
    { color: "bg-red-500", studs: 2, label: "Diversión" },
  ]

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Texto principal con parallax sutil */}
        <div
          className="transform transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.1}px) scale(${1 - scrollY * 0.0001})`,
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="inline-block">Construye tu Mundo</span>{" "}
            <span
              className="text-accent-400 animate-pulse-glow font-black text-5xl md:text-8xl inline-block transform hover:scale-110 transition-all duration-500 drop-shadow-2xl"
              style={{
                transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.01}deg)`,
              }}
            >
              LEGO
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
            style={{
              transform: `translateY(${scrollY * 0.08}px)`,
            }}
          >
            Explora aventuras infinitas, construye historias épicas y da vida a tu imaginación
          </p>
        </div>

        {/* Bricks LEGO temáticos con parallax y rotación */}
        <div
          className="flex justify-center space-x-6 mt-8"
          style={{
            transform: `translateY(${scrollY * 0.15}px) rotateX(${scrollY * 0.02}deg)`,
          }}
        >
          {legoBricks.map((brick, index) => (
            <div key={brick.label} className="flex flex-col items-center space-y-2">
              <LegoBrick
                color={brick.color}
                size="large"
                studs={brick.studs}
                className="hover:scale-125 hover:-translate-y-2"
                style={{
                  transform: `translateY(${scrollY * (0.1 + index * 0.02)}px) rotate(${scrollY * 0.05 * (index + 1)}deg)`,
                  animationDelay: `${index * 100}ms`,
                }}
              />
              <span className="text-xs opacity-70 font-medium">{brick.label}</span>
            </div>
          ))}
        </div>

        {/* Texto adicional con call to action */}
        <div
          className="mt-8"
          style={{
            transform: `translateY(${scrollY * 0.12}px)`,
          }}
        >
          <p className="text-lg opacity-80 mb-4">Desde superhéroes hasta arquitectura épica</p>
          <div className="flex justify-center space-x-4 text-sm opacity-70">
            <span>✨ Calidad Premium</span>
            <span>🚚 Envío Gratis</span>
            <span>🎁 Sets Exclusivos</span>
          </div>
        </div>
      </div>

      {/* Múltiples capas de bricks LEGO para profundidad */}
      {/* Capa 1 - Bricks medianos */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.01}deg)`,
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={`brick1-${i}`}
            className="absolute"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 200}ms`,
            }}
          >
            <LegoBrick
              color="bg-accent-400"
              size="medium"
              studs={Math.floor(Math.random() * 4) + 2}
              className="animate-pulse"
            />
          </div>
        ))}
      </div>

      {/* Capa 2 - Bricks grandes */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0002})`,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={`brick2-${i}`}
            className="absolute"
            style={{
              top: `${15 + i * 20}%`,
              right: `${15 + i * 15}%`,
              animationDelay: `${i * 300}ms`,
            }}
          >
            <LegoBrick color="bg-primary-400" size="large" studs={6} className="animate-pulse" />
          </div>
        ))}
      </div>

      {/* Capa 3 - Bricks especiales */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.6}px) rotateY(${scrollY * 0.02}deg)`,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={`brick3-${i}`}
            className="absolute"
            style={{
              bottom: `${20 + i * 25}%`,
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 400}ms`,
            }}
          >
            <LegoBrick color="bg-green-400" size="large" studs={8} className="animate-pulse" />
          </div>
        ))}
      </div>

      {/* Mini bricks flotantes */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.8}px)`,
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={`mini-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2000}ms`,
              animationDuration: `${2000 + Math.random() * 3000}ms`,
            }}
          >
            <LegoBrick
              color={i % 3 === 0 ? "bg-accent-400" : i % 3 === 1 ? "bg-primary-400" : "bg-green-400"}
              size="small"
              studs={Math.floor(Math.random() * 2) + 1}
              className="animate-ping"
            />
          </div>
        ))}
      </div>

      {/* Overlay gradiente para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-800/10 to-primary-900/30 pointer-events-none" />
    </div>
  )
}
