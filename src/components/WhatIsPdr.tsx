import React from 'react'
import { Check, X, ShieldCheck, HelpCircle } from 'lucide-react'

export const WhatIsPdr: React.FC = () => {
  return (
    <section id="que-es" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-12 border-2 border-[#d3d9de] shadow-ficha relative overflow-hidden">
        {/* Subtle grid accent inside card */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#123a6b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Authentic PDR Process Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d3d9de] shadow-md group">
              <img
                src="/images/pdr-process-lamp.jpg"
                alt="Inspección de chapa y reflejo bajo luz lineal PDR en taller de sacabollos"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123a6b]/95 via-[#123a6b]/35 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-2.5 py-1 rounded bg-[#c0272d] text-white font-mono text-[10px] font-bold uppercase tracking-wider mb-2 inline-block shadow-sm">
                  100% Artesanal • Sin Masilla
                </span>
                <p className="font-display text-xl font-bold uppercase leading-tight">
                  Lámpara de Reflexión y Varillas Especiales
                </p>
                <p className="text-xs text-sky-100 mt-1 font-sans">
                  Trabajamos la memoria elástica de la chapa desde el interior con micropresión milimétrica.
                </p>
              </div>
            </div>

            {/* Tactile Badge */}
            <div className="absolute -top-3 -right-3 p-3.5 rounded-xl bg-[#123a6b] border-2 border-white text-white shadow-md hidden sm:flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#ffd166]" />
              <div>
                <span className="block font-display text-sm font-bold uppercase leading-none">Pintura de Fábrica</span>
                <span className="text-[10px] text-sky-200 font-mono">100% Intacta y Original</span>
              </div>
            </div>
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#eef1f3] border border-[#d3d9de] text-xs font-mono font-bold uppercase tracking-wider text-[#123a6b]">
              <HelpCircle className="w-3.5 h-3.5 text-[#c0272d]" />
              <span>¿Qué es la Técnica Sacabollos PDR?</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#123a6b] leading-[1.1]">
              ¿Por qué el Sacabollos es la mejor opción{' '}
              <span className="text-[#c0272d]">para tu auto en Argentina?</span>
            </h2>

            <p className="text-[#1b1d21] text-base leading-relaxed font-sans">
              La técnica <strong className="text-[#123a6b]">PDR (Paintless Dent Repair / Desabollado Artesanal)</strong> elimina abolladuras devolviendo el metal a su forma de fábrica mediante palancas de precisión y pantallas de lectura óptica.
            </p>

            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-sm text-[#334155] leading-relaxed">
              <p className="font-semibold text-[#123a6b] mb-1 font-display uppercase tracking-wide">
                El peligro de masillar y repintar en Argentina:
              </p>
              Cualquier concesionaria o comprador hoy mide la chapa con micrómetro o perito de seguro. Si tu auto fue masillado y repintado, <span className="font-bold text-[#c0272d]">pierde automáticamente entre un 15% y 20% de su valor venal</span>, además de notar diferencias de color bajo el sol. Con el sacabollos artesanal, la pintura original no se toca y el valor de reventa se mantiene al 100%.
            </div>

            {/* Side by side comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-sky-50/70 border-2 border-[#1c4f8c]/30 shadow-sm">
                <div className="flex items-center gap-2 text-[#123a6b] font-display font-bold text-sm uppercase mb-2.5">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>Sacabollos Águila Blanca</span>
                </div>
                <ul className="text-xs text-[#334155] space-y-2 font-sans font-medium">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Mantiene el barniz y color 100% de fábrica</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>0% de depreciación al vender o asegurar</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Reparación en 24 a 48 hs (vs 3 semanas de taller)</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Aceptado por todas las aseguradoras del país</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 shadow-sm">
                <div className="flex items-center gap-2 text-[#c0272d] font-display font-bold text-sm uppercase mb-2.5">
                  <X className="w-4 h-4 text-[#c0272d] stroke-[3]" />
                  <span>Taller Tradicional de Chapa</span>
                </div>
                <ul className="text-xs text-[#64748b] space-y-2 font-sans">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c0272d] font-bold">✕</span>
                    <span>Lijan el panel y rellenan con masilla plástica</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c0272d] font-bold">✕</span>
                    <span>Pérdida de valor de reventa comprobable</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c0272d] font-bold">✕</span>
                    <span>De 15 a 30 días con el auto parado en cabina</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#c0272d] font-bold">✕</span>
                    <span>Riesgo de diferencia de tono de pintura (piel de naranja)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
