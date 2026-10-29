import React, { useState, useRef } from 'react'
import { Sparkles, MoveHorizontal, CheckCircle2, ShieldAlert } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  vehicle: string
  damageType: string
  timeTaken: string
  paintPreserved: string
  beforeDescription: string
  afterDescription: string
  badge: string
}

const CASES: CaseStudy[] = [
  {
    id: 'granizo',
    title: 'Impactos Severos de Granizo en Capot y Techo',
    vehicle: 'Volkswagen Amarok V6 — Capot y Techo de fábrica',
    damageType: 'Más de 70 impactos de granizo seco con nervaduras deformadas',
    timeTaken: '36 horas de trabajo artesanal',
    paintPreserved: '100% Pintura Original (0 masilla, 0 repintado)',
    beforeDescription: 'Superficie abollada con distorsión total del reflejo de luz. El perito del seguro inicialmente sugirió cambiar la pieza.',
    afterDescription: 'Restauración milimétrica con varillas PDR térmicas. Las líneas de luz vuelven a ser paralelas sin diferencia de tono.',
    badge: 'Granizo Seco Severo',
  },
  {
    id: 'portazo',
    title: 'Portazo en Estacionamiento con Pliegue en Nervadura',
    vehicle: 'Toyota Corolla Cross — Puerta Trasera Derecha',
    damageType: 'Golpe profundo con pliegue de chapa y tensión en nervio vivo',
    timeTaken: '4 horas en el mismo día',
    paintPreserved: '100% Barniz y Chapa de Fábrica',
    beforeDescription: 'Abolladura con sombra pronunciada sobre la línea de diseño. En chapa clásica implicaba masillar y repintar la puerta entera.',
    afterDescription: 'Destensado artesanal de la nervadura mediante palancas curvas. Se recuperó la geometría exacta sin desmontar la puerta.',
    badge: 'Toque de Estacionamiento',
  },
  {
    id: 'maniobra',
    title: 'Toque de Maniobra Urbana en Guardabarros Delantero',
    vehicle: 'BMW Serie 3 — Guardabarros Delantero de Aluminio',
    damageType: 'Abolladura amplia en panel de aluminio con filo comprometido',
    timeTaken: '1 día de precisión',
    paintPreserved: '100% Chapa Original de Aluminio intacta',
    beforeDescription: 'Deformación compleja en aleación de aluminio. Exige control térmico y tracción con ventosas especiales para no estirar el metal.',
    afterDescription: 'Acabado espejo impecable. La pieza supera la auditoría con medidor digital de micrones de pintura.',
    badge: 'Aluminio de Alta Gama',
  },
]

export const BeforeAfterSlider: React.FC = () => {
  const [activeCase, setActiveCase] = useState<CaseStudy>(CASES[0])
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
    <section id="comparativa" className="py-20 bg-[#090b0e] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123a6b]/60 border border-[#1c4f8c] text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ffb800]" />
            <span>Evidencia Real • Sin Trucos de Cámara</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Deslizá y mirá la diferencia.{' '}
            <span className="text-[#ffb800]">Antes y Después.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Arrastrá el control central para comparar cómo llega un auto golpeado y cómo queda tras la aplicación de la técnica PDR bajo nuestras pantallas de luz reflectométrica.
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CASES.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCase(item)
                setSliderPosition(50)
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCase.id === item.id
                  ? 'bg-[#1c4f8c] text-white shadow-lg border border-sky-400/50 scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {item.badge}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Slider Visual Box (7 Cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 select-none cursor-ew-resize bg-slate-900"
            >
              {/* "DESPUÉS" Layer (Background - Perfectly restored surface) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-sky-950 flex flex-col items-center justify-center p-6 text-center">
                {/* Simulated PDR straight light lines for restored surface */}
                <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(0deg,#00e5ff_0px,#00e5ff_2px,transparent_2px,transparent_24px)] pointer-events-none" />
                <div className="relative z-10 max-w-sm">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-xl">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/30 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                    Líneas de Luz Paralelas
                  </span>
                  <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
                    Superficie 100% Restaurada
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Reflectometría limpia. El metal recuperó su memoria elástica original. Cero diferencias de color o brillo con el resto del vehículo.
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/50 backdrop-blur-md text-emerald-300 font-display font-bold text-xs uppercase tracking-wider">
                  ✓ DESPUÉS (PDR Águila Blanca)
                </div>
              </div>

              {/* "ANTES" Layer (Clipped - Dented and deformed surface) */}
              <div
                className="absolute inset-0 overflow-hidden bg-gradient-to-tr from-zinc-950 via-stone-900 to-amber-950 flex flex-col items-center justify-center p-6 text-center"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                {/* Simulated PDR distorted wavy lines representing dent */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/30 via-transparent to-black pointer-events-none" />
                <div className="absolute inset-0 opacity-30 bg-[repeating-radial-gradient(circle_at_50%_50%,#ffb800_0px,#ffb800_2px,transparent_4px,transparent_18px)] pointer-events-none" />

                <div className="relative z-10 max-w-sm">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 shadow-xl">
                    <ShieldAlert className="w-9 h-9" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-red-500/30 text-red-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                    Deformación y Cráter
                  </span>
                  <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
                    Panel Dañado por Impactos
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    La luz se quiebra en curvas erráticas debido al hundimiento del metal bajo granizo o portazo.
                  </p>
                </div>

                <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-red-950/80 border border-red-500/50 backdrop-blur-md text-red-300 font-display font-bold text-xs uppercase tracking-wider">
                  ⚠️ ANTES (Impacto Original)
                </div>
              </div>

              {/* Slider Divider Line & Thumb */}
              <div
                className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#ffb800] text-black shadow-2xl flex items-center justify-center border-2 border-white">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-1.5">
              <MoveHorizontal className="w-4 h-4 text-[#ffb800]" />
              <span>Tocá o arrastrá el círculo amarillo para comparar ambos estados</span>
            </p>
          </div>

          {/* Details & Specs Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-[#ffb800] tracking-wider font-semibold">
                  Ficha de Caso Real
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold">
                  {activeCase.badge}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white uppercase leading-snug">
                {activeCase.title}
              </h3>
              <p className="text-sm font-semibold text-sky-400 mt-1">
                {activeCase.vehicle}
              </p>

              <div className="mt-5 space-y-3 border-t border-white/10 pt-4 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block font-medium">Diagnóstico de Entrada:</span>
                  <span className="text-slate-200 mt-0.5 block">{activeCase.beforeDescription}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Resultado Post-PDR:</span>
                  <span className="text-emerald-300 mt-0.5 block font-medium">{activeCase.afterDescription}</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Tiempo de Ejecución</span>
                  <span className="font-display text-base font-bold text-white">{activeCase.timeTaken}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Pintura Conservada</span>
                  <span className="font-display text-base font-bold text-[#ffb800]">100% Original</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#cotizador"
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-[#ffb800] text-white hover:text-black font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-white/10"
                >
                  <span>Quiero cotizar un arreglo similar para mi auto</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
