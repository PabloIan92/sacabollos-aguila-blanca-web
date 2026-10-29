import React, { useState, useRef } from 'react'
import { MoveHorizontal, Sparkles, MessageCircle, ShieldCheck, Clock } from 'lucide-react'

interface BeforeAfterCase {
  id: string
  title: string
  vehicle: string
  damage: string
  beforeImg: string
  afterImg: string
  time: string
  locationNote: string
}

const GALLERY_CASES: BeforeAfterCase[] = [
  {
    id: 'hilux',
    title: 'Toyota Hilux 4x4 (Zárate)',
    vehicle: 'Toyota Hilux 4x4 — Capot y Guardabarros',
    damage: 'Impactos múltiples de tormenta de granizo sobre la nervadura del capot original.',
    beforeImg: '/images/hilux-pdr-before.jpg',
    afterImg: '/images/hilux-pdr-after.jpg',
    time: '24 horas hábiles',
    locationNote: 'Mismo vehículo: la chapa recuperó su forma original sin lijar ni repintar el blanco de fábrica.',
  },
  {
    id: 'amarok',
    title: 'Volkswagen Amarok V6 (Pacheco)',
    vehicle: 'Volkswagen Amarok V6 — Puerta y Nervadura',
    damage: 'Portazo profundo de estacionamiento sobre el nervio lateral de la chapa.',
    beforeImg: '/images/amarok-pdr-before.jpg',
    afterImg: '/images/amarok-pdr-after.jpg',
    time: '4 horas en el mismo día',
    locationNote: 'Mismo vehículo: nervadura y reflejo recuperados 100% artesanal con pintura OEM.',
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

  const handleClickContainer = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  return (
    <section id="galeria" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#123a6b]/10 border border-[#123a6b]/20 text-xs font-mono font-bold uppercase tracking-wider text-[#123a6b] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#c0272d]" />
          <span>Evidencia Real • Mismo Vehículo</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#123a6b]">
          Casos Reales de <span className="text-[#c0272d]">Antes y Después</span>
        </h2>
        <p className="mt-3 text-[#475569] text-base sm:text-lg font-sans">
          Deslizá el control hacia los lados para comprobar cómo se recupera la chapa del mismo vehículo sin tocar la pintura.
        </p>
      </div>

      {/* Case Segmented Control for Hilux and Amarok */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-xl bg-[#e2e8f0] border border-[#cbd5e1] shadow-inner gap-1">
          {GALLERY_CASES.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCase(item)
                setSliderPosition(50)
              }}
              className={`px-5 py-2.5 rounded-lg font-display uppercase tracking-wider text-xs sm:text-sm font-bold transition-all duration-150 ${
                activeCase.id === item.id
                  ? 'bg-[#123a6b] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#123a6b] hover:bg-white/50'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-7 border-2 border-[#d3d9de] shadow-ficha-lg">
        <div
          ref={containerRef}
          onClick={handleClickContainer}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border-2 border-[#d3d9de] shadow-inner bg-slate-900"
        >
          {/* DESPUÉS (Background: Restored car) */}
          <img
            src={activeCase.afterImg}
            alt={`Mismo vehículo restaurado: ${activeCase.vehicle}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-[#123a6b]/90 backdrop-blur-md text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md border border-white/20">
            ✓ DESPUÉS (Restaurado sin masilla)
          </div>

          {/* ANTES (Foreground clipped: Exact same car with dents) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={activeCase.beforeImg}
              alt={`Mismo vehículo con daño previo: ${activeCase.vehicle}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-[#c0272d]/90 backdrop-blur-md text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md border border-white/20">
              ⚠️ ANTES (Impacto en la chapa)
            </div>
          </div>

          {/* Slider line & handle */}
          <div
            className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] cursor-ew-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#123a6b] text-white shadow-xl flex items-center justify-center border-2 border-white animate-pulse-subtle">
              <MoveHorizontal className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Card info below image */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-2">
          <div>
            <h3 className="font-display text-xl font-bold text-[#123a6b] uppercase">
              {activeCase.vehicle}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 font-sans">
              {activeCase.damage}
            </p>
            <p className="text-xs text-emerald-700 font-semibold mt-1 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{activeCase.locationNote}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0 w-full md:w-auto">
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#eef1f3] border border-[#d3d9de] text-xs font-mono font-bold text-[#123a6b]">
              <Clock className="w-4 h-4 text-[#c0272d]" />
              <span>{activeCase.time}</span>
            </div>

            <a
              href={`https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20vi%20el%20caso%20de%20la%20${encodeURIComponent(activeCase.vehicle)}%20y%20tengo%20un%20arreglo%20parecido.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pdr-primary px-4 py-2.5 rounded-lg text-white font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Cotizar Caso Similar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
