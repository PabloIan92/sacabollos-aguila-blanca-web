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
    vehicle: 'Pickup 4x4 — Pintura Original Conservada',
    damage: 'Más de 60 impactos de granizo seco con nervaduras deformadas.',
    beforeImg: '/images/hail-dent.jpg',
    afterImg: '/images/luxury-finish.jpg',
    time: '24 horas',
  },
  {
    id: 'case-2',
    title: 'Portazo en Nervadura Viva',
    vehicle: 'Sedán Ejecutivo — Puerta Delantera',
    damage: 'Golpe profundo de estacionamiento con pliegue marcado de chapa.',
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
    <section id="galeria" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#123a6b]/10 border border-[#123a6b]/20 text-xs font-mono font-bold uppercase tracking-wider text-[#123a6b] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#c0272d]" />
          <span>Evidencia Real</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#123a6b]">
          Fotos de <span className="text-[#c0272d]">Antes y Después</span>
        </h2>
        <p className="mt-3 text-[#475569] text-base sm:text-lg font-sans">
          Arrastrá el control hacia los lados para comprobar la precisión del acabado final.
        </p>
      </div>

      {/* Case Tabs */}
      <div className="flex justify-center gap-3 mb-8">
        {GALLERY_CASES.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveCase(item)
              setSliderPosition(50)
            }}
            className={`px-5 py-2.5 rounded-lg font-display uppercase tracking-wider text-xs sm:text-sm font-bold transition-all ${
              activeCase.id === item.id
                ? 'bg-[#123a6b] text-white shadow-md'
                : 'bg-white text-[#475569] border border-[#d3d9de] hover:bg-[#eef1f3]'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Comparison Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-7 border-2 border-[#d3d9de] shadow-ficha-lg">
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-[#d3d9de] shadow-inner bg-slate-900"
        >
          {/* DESPUÉS (Background) */}
          <img
            src={activeCase.afterImg}
            alt="Auto restaurado a la perfección"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded bg-[#123a6b] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md">
            ✓ DESPUÉS (Restaurado)
          </div>

          {/* ANTES (Foreground clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={activeCase.beforeImg}
              alt="Auto con granizo o bollo antes de reparar"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded bg-[#c0272d] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md">
              ⚠️ ANTES (Impacto)
            </div>
          </div>

          {/* Slider line & handle */}
          <div
            className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#123a6b] text-white shadow-xl flex items-center justify-center border-2 border-white">
              <MoveHorizontal className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Card info below image */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
          <div>
            <h3 className="font-display text-xl font-bold text-[#123a6b] uppercase">
              {activeCase.vehicle}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 font-sans">
              {activeCase.damage} • <strong className="text-[#3f7d4f] font-semibold">Tiempo: {activeCase.time}</strong>
            </p>
          </div>

          <a
            href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20consultar%20por%20un%20arreglo%20como%20el%20de%20la%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-[#c0272d] hover:bg-[#a51d23] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all shrink-0 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Cotizar Caso Similar</span>
          </a>
        </div>
      </div>
    </section>
  )
}
