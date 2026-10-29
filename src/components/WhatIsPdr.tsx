import React from 'react'
import { Sparkles, Check, X, ShieldCheck } from 'lucide-react'

export const WhatIsPdr: React.FC = () => {
  return (
    <section id="que-es" className="py-24 bg-[#090c10] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Image Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/images/pdr-light.jpg"
                alt="Técnico sacabollos trabajando con lámpara de reflexión y varillas PDR"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-[#ffb800] text-black font-display font-black text-xs uppercase tracking-wider mb-2 inline-block">
                  Artesanal & Quirúrgico
                </span>
                <p className="font-display text-xl font-bold text-white uppercase leading-snug">
                  Varillas de precisión y pantallas de luz lineal
                </p>
                <p className="text-xs text-slate-300 mt-1">
                  El metal recupera su memoria original sin una sola gota de pintura.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-[#123a6b] border border-sky-400/40 text-white shadow-2xl hidden sm:flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#ffb800]" />
              <div>
                <span className="block font-display text-base font-bold uppercase leading-none">100% Original</span>
                <span className="text-[11px] text-sky-200">Garantía de por vida</span>
              </div>
            </div>
          </div>

          {/* Text & Value Proposition (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffb800]/15 border border-[#ffb800]/30 text-xs font-semibold text-[#ffb800] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>El Secreto Mejor Guardado de las Automotrices</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              ¿Qué es un Sacabollos y por qué{' '}
              <span className="text-[#ffb800]">es mejor que pintar?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              La técnica <strong className="text-white">PDR (Paintless Dent Repair)</strong> consiste en reparar abolladuras desde el interior del panel utilizando herramientas artesanales de acero y lámparas de reflexión lineal.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              A diferencia del taller tradicional, <span className="text-white font-medium">no se lija el auto, no se aplica masilla plástica y no se repinta la pieza</span>. La pintura de fábrica es irrepetible en resistencia y elasticidad; al conservarla, tu vehículo mantiene el valor original de concesionaria.
            </p>

            {/* Quick 2-Column Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#ffb800] font-display font-bold text-sm uppercase mb-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Con Sacabollos Águila Blanca</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li>• Conserva el barniz y color original 100%</li>
                  <li>• Mantiene el valor de reventa al venderlo</li>
                  <li>• Reparación lista en el día o 24-48 horas</li>
                  <li>• Aprobado por todas las aseguradoras</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 font-display font-bold text-sm uppercase mb-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span>Con Chapa Tradicional</span>
                </div>
                <ul className="text-xs text-slate-400 space-y-1.5">
                  <li>• Se lija la pintura y se agrega masilla</li>
                  <li>• El auto se desvaloriza hasta un 20%</li>
                  <li>• Demora de 15 a 30 días en taller</li>
                  <li>• Riesgo de diferencias de tono bajo el sol</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
