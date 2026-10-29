import React from 'react'
import { CheckCircle2, ChevronRight, MessageCircle, Sparkles, Shield, Clock, Award } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Featured Luxury Hero Box with Gestión App Palette */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#123a6b] via-[#164379] to-[#1c4f8c] border-2 border-[#123a6b] shadow-ficha-lg text-white">
        {/* Subtle background image featuring iconic Argentine vehicle (Toyota Hilux) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/toyota-hilux.jpg"
            alt="Toyota Hilux con pintura original impecable"
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123a6b] via-[#123a6b]/85 to-transparent" />
        </div>

        <div className="relative z-10 p-6 sm:p-12 lg:p-16 max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-white/10 border border-white/25 backdrop-blur-sm text-xs font-mono font-bold uppercase tracking-wider text-sky-100 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#ffd166]" />
            <span>Técnica Artesanal PDR • Cero Masilla • Cero Repintado</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
            Tu auto sin bollos,{' '}
            <span className="text-[#ffd166]">
              cuidando su pintura de fábrica.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl font-sans">
            Desabollado artesanal para golpes de granizo, portazos y toques de estacionamiento. Devolvemos la forma original a la chapa sin lijar ni repintar, manteniendo el 100% del valor venal de tu vehículo.
          </p>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-[#ffd166] shrink-0" />
              <span>Conserva Pintura OEM</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>Listo en 24 a 48 hs</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm">
              <Award className="w-4 h-4 text-sky-200 shrink-0" />
              <span>Cubre tu Aseguradora</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20enviarles%20una%20foto%20de%20mi%20auto%20para%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#c0272d] hover:bg-[#a51d23] text-white font-display font-extrabold text-base uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[4px_4px_0_rgba(27,29,33,0.3)] transition-all active:scale-95 group"
            >
              <MessageCircle className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              <span>Enviar Foto por WhatsApp</span>
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#galeria"
              className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-white/30 transition-all text-center"
            >
              <span>Ver Fotos Antes y Después</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-sky-200 flex items-center gap-1.5 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>Diagnósticos preliminares en el momento enviando una foto o acercando la unidad.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
