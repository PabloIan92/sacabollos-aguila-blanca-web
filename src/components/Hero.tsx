import React from 'react'
import { CheckCircle2, ChevronRight, MessageCircle, Sparkles, Shield, Clock, Award } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#07090c]">
      {/* Real High-Res Automotive Background Image with Luxury Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-car.jpg"
          alt="Vehículo de alta gama con pintura original impecable"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        {/* Cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-[#07090c]/70 to-[#07090c]/85" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#07090c]/60 to-[#07090c]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-slate-200 mb-6 shadow-xl">
            <Sparkles className="w-4 h-4 text-[#ffb800]" />
            <span>Técnica Artesanal PDR • Cero Masilla • Cero Repintado</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            Tu auto sin bollos,{' '}
            <span className="bg-gradient-to-r from-white via-[#ffd166] to-[#ffb800] bg-clip-text text-transparent">
              cuidando su pintura de fábrica.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            Reparamos golpes de granizo, portazos y toques de estacionamiento devolviendo la forma exacta al metal. Tu auto no pierde su valor original de reventa y queda impecable en tiempo récord.
          </p>

          {/* 3 Main Benefits */}
          <div className="mt-8 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
              <Shield className="w-4 h-4 text-[#ffb800]" />
              <span>Conserva la Pintura de Origen</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Listo en el Día o 48 hs</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
              <Award className="w-4 h-4 text-sky-400" />
              <span>Cubierto por Aseguradoras</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20enviarles%20una%20foto%20de%20mi%20auto%20para%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#ffb800] hover:bg-[#ffc933] text-black font-display font-extrabold text-base uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-2xl shadow-[#ffb800]/30 transition-all active:scale-95 group"
            >
              <MessageCircle className="w-5 h-5 fill-black group-hover:scale-110 transition-transform" />
              <span>Enviar Foto por WhatsApp</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#galeria"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 backdrop-blur-md transition-all text-center"
            >
              <span>Ver Trabajos Antes y Después</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Presupuestos y diagnósticos al instante enviando fotos o acercando el vehículo.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
