import React from 'react'
import { Sparkles, Check, X, ShieldCheck } from 'lucide-react'

export const WhatIsPdr: React.FC = () => {
  return (
    <section id="que-es" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-12 border-2 border-[#d3d9de] shadow-ficha">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Authentic PDR Process Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d3d9de] shadow-md group">
              <img
                src="/images/pdr-process-lamp.jpg"
                alt="Inspección de chapa y reflejo bajo luz lineal PDR en taller de sacabollos"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123a6b]/95 via-[#123a6b]/30 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-2.5 py-1 rounded bg-[#c0272d] text-white font-mono text-[10px] font-bold uppercase tracking-wider mb-2 inline-block shadow-sm">
                  100% Artesanal • Sin Masilla
                </span>
                <p className="font-display text-xl font-bold uppercase leading-tight">
                  Varillas de Acero Quirúrgico y Luz Lineal
                </p>
                <p className="text-xs text-sky-100 mt-1 font-sans">
                  El desabollado se realiza desde la cara interna de la chapa. No usamos masilla, no lijamos y no repintamos la pieza.
                </p>
              </div>
            </div>

            {/* Tactile Badge */}
            <div className="absolute -top-3 -right-3 p-3.5 rounded-xl bg-[#123a6b] border-2 border-white text-white shadow-md hidden sm:flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#ffd166]" />
              <div>
                <span className="block font-display text-sm font-bold uppercase leading-none">Pintura de Origen</span>
                <span className="text-[10px] text-sky-200 font-mono">100% Intacta</span>
              </div>
            </div>
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#eef1f3] border border-[#d3d9de] text-xs font-mono font-bold uppercase tracking-wider text-[#123a6b]">
              <Sparkles className="w-3.5 h-3.5 text-[#c0272d]" />
              <span>¿Qué es la Técnica Sacabollos PDR?</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#123a6b] leading-tight">
              ¿Por qué el Sacabollos es la mejor opción{' '}
              <span className="text-[#c0272d]">para tu auto en Argentina?</span>
            </h2>

            <p className="text-[#1b1d21] text-base leading-relaxed font-sans">
              La técnica <strong className="text-[#123a6b]">PDR (Paintless Dent Repair / Sacabollos Artesanal)</strong> desaboya el metal acompañando su elasticidad original mediante micropresión con palancas especiales y pantallas de luz reflectométrica.
            </p>

            <p className="text-[#475569] text-sm leading-relaxed font-sans">
              En Argentina, repintar un capot o una puerta en un taller común significa que al vender el auto cualquier perito o comprador detecta la masilla con micrómetro y te baja el precio de reventa. <strong className="text-[#1b1d21]">Con el sacabollos artesanal, la pintura de fábrica se conserva intacta y tu auto sigue valiendo exactamente lo mismo.</strong>
            </p>

            {/* Side by side comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-sky-50/60 border-2 border-[#1c4f8c]/30 shadow-sm">
                <div className="flex items-center gap-2 text-[#123a6b] font-display font-bold text-sm uppercase mb-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>Sacabollos Águila Blanca</span>
                </div>
                <ul className="text-xs text-[#334155] space-y-1.5 font-sans font-medium">
                  <li className="flex items-center gap-1.5">• Mantiene el barniz y color 100% de fábrica</li>
                  <li className="flex items-center gap-1.5">• 0% de depreciación al vender la unidad</li>
                  <li className="flex items-center gap-1.5">• Listo en el día o 24-48 hs (vs semanas)</li>
                  <li className="flex items-center gap-1.5">• Reconocido por todas las aseguradoras</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-red-50/40 border border-red-200 shadow-sm">
                <div className="flex items-center gap-2 text-[#c0272d] font-display font-bold text-sm uppercase mb-2">
                  <X className="w-4 h-4 text-[#c0272d] stroke-[3]" />
                  <span>Taller Tradicional de Chapa</span>
                </div>
                <ul className="text-xs text-[#64748b] space-y-1.5 font-sans">
                  <li>• Lijan la chapa y rellenan con masilla plástica</li>
                  <li>• El auto pierde entre 15% y 20% de valor venal</li>
                  <li>• De 15 a 30 días parado esperando turno y cabina</li>
                  <li>• Con los años la masilla se cuartea o cambia de tono</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
