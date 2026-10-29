import React, { useState, useRef } from 'react'
import { MoveHorizontal, Sparkles, MessageCircle } from 'lucide-react'

interface BeforeAfterCase {
  id: string
  title: string
  vehicle: string
  damage: string
  beforeImg: string
  afterImg: string
  time: string
}

const GALLERY_CASES: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Capot con Granizo Severo',
    vehicle: 'Pickup 4x4 — Pintura Original',
    damage: 'Más de 60 impactos de granizo seco con nervaduras comprometidas.',
    beforeImg: '/images/hail-dent.jpg',
    afterImg: '/images/luxury-finish.jpg',
    time: '24 horas',
  },
  {
    id: 'case-2',
    title: 'Portazo en Nervadura Viva',
    vehicle: 'Sedán Ejecutivo — Puerta Delantera',
    damage: 'Golpe profundo de estacionamiento con pliegue de chapa.',
    beforeImg: '/images/car-hood.jpg',
    afterImg: '/images/car-reflection.jpg',
    time: '4 horas',
  },
]

export const BeforeAfterGallery: React.FC = () => {
  const [activeCase, setActiveCase] = useState<BeforeAfterCase>(GALLERY_CASES[0])
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPosition(percent)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  return (
    <section id="galeria" className="py-24 bg-[#090c10] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffb800]/15 text-[#ffb800] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resultados Reales</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Fotos de <span className="text-[#ffb800]">Antes y Después</span>
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            Deslizá el control hacia los lados para comprobar cómo borramos el daño sin repintar el auto.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {GALLERY_CASES.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCase(item)
                setSliderPosition(50)
              }}
              className={`px-5 py-2.5 rounded-xl font-display uppercase tracking-wider text-xs sm:text-sm font-bold transition-all ${
                activeCase.id === item.id
                  ? 'bg-[#ffb800] text-black shadow-lg shadow-[#ffb800]/20 scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-700 shadow-inner bg-black"
          >
            {/* DESPUÉS (Background image) */}
            <img
              src={activeCase.afterImg}
              alt="Vehículo restaurado con pintura impecable"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-emerald-950/90 border border-emerald-500/50 backdrop-blur-md text-emerald-300 font-display font-bold text-xs uppercase tracking-wider shadow-lg">
              ✓ DESPUÉS (Restaurado)
            </div>

            {/* ANTES (Clipped foreground image) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={activeCase.beforeImg}
                alt="Vehículo con bollo o granizo antes de reparar"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-red-950/90 border border-red-500/50 backdrop-blur-md text-red-300 font-display font-bold text-xs uppercase tracking-wider shadow-lg">
                ⚠️ ANTES (Impacto)
              </div>
            </div>

            {/* Drag Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#ffb800] text-black shadow-2xl flex items-center justify-center border-2 border-white">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Details below photo */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
            <div>
              <h3 className="font-display text-xl font-bold text-white uppercase">
                {activeCase.vehicle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {activeCase.damage} • <strong className="text-emerald-400 font-medium">Tiempo de trabajo: {activeCase.time}</strong>
              </p>
            </div>

            <a
              href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20consultar%20por%20un%20arreglo%20como%20el%20de%20la%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#ffb800] hover:bg-[#ffc933] text-black font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Cotizar un caso como este</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
