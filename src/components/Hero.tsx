import React from 'react'
import { ShieldCheck, Clock, FileText, CheckCircle2, ChevronRight, MessageCircle, Star, Sparkles } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#0c1017] via-[#0f172a] to-[#0b0d10]">
      {/* Background PDR reflection line simulation & glowing aura */}
      <div className="absolute inset-0 pdr-stripes opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#1c4f8c]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-[#ffb800]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top notification pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-slate-300">
            <span className="flex h-2 w-2 rounded-full bg-[#ffb800] animate-ping" />
            <span className="text-white">Alerta Granizo y Toques Urbanos:</span>
            <span className="text-[#ffb800]">Peritajes sin cargo en el día</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#123a6b]/50 border border-[#1c4f8c] text-xs font-medium text-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Presupuestos Oficiales para Aseguradoras</span>
          </div>
        </div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
            Recuperá la perfección de tu auto.{' '}
            <span className="bg-gradient-to-r from-white via-[#ffd166] to-[#ffb800] bg-clip-text text-transparent">
              Sin masilla ni repintar.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Especialistas en técnica <strong className="text-white font-semibold">PDR (Paintless Dent Repair)</strong>. 
            Reparación artesanal de granizo, portazos y abolladuras conservando el{' '}
            <span className="text-[#ffd166] font-semibold underline decoration-[#ffb800]/40 decoration-2 underline-offset-4">
              100% de la pintura original de fábrica
            </span>{' '}
            y el valor de reventa de tu vehículo.
          </p>

          {/* Key Value Badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200 leading-tight">
                Pintura OEM Intacta (Cero Masilla)
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200 leading-tight">
                Listo en 24/48 hs (vs semanas)
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200 leading-tight">
                Gestión con tu Seguro sin costo
              </span>
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cotizador"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-black bg-[#ffb800] hover:bg-[#ffc933] active:scale-95 rounded-xl flex items-center justify-center gap-2.5 shadow-xl shadow-[#ffb800]/25 transition-all font-display tracking-wider uppercase group"
            >
              <MessageCircle className="w-5 h-5 fill-black group-hover:scale-110 transition-transform" />
              <span>Cotizar Daño por WhatsApp</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#comparativa"
              className="w-full sm:w-auto px-7 py-4 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600/80 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#ffb800]" />
              <span>Ver Fotos Antes y Después</span>
            </a>
          </div>

          {/* Social Proof Stats Bar */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                +4.500
              </p>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                Autos Restaurados
              </p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-[#ffb800] tracking-tight">
                100%
              </p>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                Pintura Original Conservada
              </p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                24 a 48 hs
              </p>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                Tiempo Promedio Entrega
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-[#ffb800]">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                Calificación 5 Estrellas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
