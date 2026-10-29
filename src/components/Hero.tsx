import React from 'react'
import { CheckCircle2, ChevronRight, MessageCircle, Sparkles, Shield, Clock, Award, Star } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-10 sm:pt-10 sm:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Featured Luxury Hero Box with Gestión App Palette */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#123a6b] via-[#154278] to-[#1c4f8c] border-2 border-[#123a6b] shadow-ficha-lg text-white">
        {/* Subtle background image featuring iconic Argentine vehicle (Toyota Hilux) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/toyota-hilux.jpg"
            alt="Toyota Hilux con pintura original de fábrica impecable"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity"
          />
          {/* Subtle reflection light bar evoking PDR inspection lamps */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123a6b] via-[#123a6b]/90 to-transparent" />
        </div>

        <div className="relative z-10 p-6 sm:p-12 lg:p-16 max-w-3xl">
          {/* Official Workshop Seal Badge on Top Right of Hero */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 hidden md:flex flex-col items-center p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 shadow-xl">
            <img
              src="/assets/logo-aguila-blanca.jpg"
              alt="Sello Oficial Águila Blanca"
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain rounded-lg shadow-sm border border-white/20"
            />
            <span className="mt-2 text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase text-sky-100">
              Centro Técnico Oficial
            </span>
            <span className="text-[9px] text-[#ffd166] font-mono uppercase tracking-wider">
              ★ PDR Homologado ★
            </span>
          </div>

          {/* Trust Badge with Pulsing Live Status */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 backdrop-blur-md text-xs font-mono font-bold uppercase tracking-wider text-sky-100 mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <Sparkles className="w-4 h-4 text-[#ffd166]" />
            <span>Técnica Artesanal PDR • Cero Masilla • Cero Repintado</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.06]">
            Tu auto sin bollos,{' '}
            <span className="text-[#ffd166] drop-shadow-sm">
              cuidando su pintura original de fábrica.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl font-sans">
            Desabollado artesanal de alta precisión para golpes de granizo, toques de estacionamiento y portazos. Devolvemos el metal a su estado de fábrica sin lijar ni repintar, manteniendo el 100% del valor venal de tu vehículo.
          </p>

          {/* Key Trust Pillars */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <Shield className="w-5 h-5 text-[#ffd166] shrink-0" />
              <div>
                <span className="block text-white font-bold leading-tight">Pintura 100% OEM</span>
                <span className="text-[10px] text-sky-200 font-mono">Conserva el valor venal</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <Clock className="w-5 h-5 text-emerald-300 shrink-0" />
              <div>
                <span className="block text-white font-bold leading-tight">Listo en el Día</span>
                <span className="text-[10px] text-sky-200 font-mono">24 a 48 hs granizo</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <Award className="w-5 h-5 text-sky-200 shrink-0" />
              <div>
                <span className="block text-white font-bold leading-tight">Cubre tu Seguro</span>
                <span className="text-[10px] text-sky-200 font-mono">Presupuestos oficiales</span>
              </div>
            </div>
          </div>

          {/* High-Converting Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20quisiera%20enviarles%20una%20foto%20de%20mi%20auto%20para%20un%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pdr-primary px-7 py-3.5 rounded-lg text-white font-display font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-2.5 group"
            >
              <MessageCircle className="w-5 h-5 fill-white shrink-0" />
              <span>Pedir Presupuesto por WhatsApp</span>
              <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#galeria"
              className="btn-pdr-secondary px-6 py-3.5 rounded-lg text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 text-center"
            >
              <span>Ver Antes y Después Real</span>
            </a>
          </div>

          {/* Micro-Social Proof */}
          <div className="mt-5 pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-sky-200 font-mono">
            <div className="flex items-center gap-1 text-[#ffd166]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="ml-1 text-white font-bold font-sans">4.9 / 5</span>
            </div>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>Más de 2.000 vehículos reparados en el país</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
