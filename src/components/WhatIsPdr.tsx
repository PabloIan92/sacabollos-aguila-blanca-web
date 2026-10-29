import React from 'react'
import { Sparkles, Check, X, ShieldCheck } from 'lucide-react'

export const WhatIsPdr: React.FC = () => {
  return (
    <section id="que-es" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-6 sm:p-12 border-2 border-[#d3d9de] shadow-ficha">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image Box (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d3d9de] shadow-md group">
              <img
                src="/images/pdr-light.jpg"
                alt="Técnico sacabollos trabajando con lámpara de reflexión y varillas PDR"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123a6b]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="px-2.5 py-1 rounded bg-[#c0272d] text-white font-mono text-[10px] font-bold uppercase tracking-wider mb-2 inline-block shadow-sm">
                  100% Artesanal & Quirúrgico
                </span>
                <p className="font-display text-xl font-bold uppercase leading-tight">
                  Herramientas PDR y Lámparas de Luz Lineal
                </p>
                <p className="text-xs text-sky-100 mt-1 font-sans">
                  El metal recupera su memoria original sin aplicar una sola gota de pintura.
                </p>
              </div>
            </div>

            {/* Tactile Badge */}
            <div className="absolute -top-3 -right-3 p-3.5 rounded-xl bg-[#123a6b] border-2 border-white text-white shadow-md hidden sm:flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#ffd166]" />
              <div>
                <span className="block font-display text-sm font-bold uppercase leading-none">100% Original</span>
                <span className="text-[10px] text-sky-200 font-mono">Garantía de Fábrica</span>
              </div>
            </div>
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#eef1f3] border border-[#d3d9de] text-xs font-mono font-bold uppercase tracking-wider text-[#123a6b]">
              <Sparkles className="w-3.5 h-3.5 text-[#c0272d]" />
              <span>Conservación del Valor del Auto</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#123a6b] leading-tight">
              ¿Qué es un Sacabollos y por qué{' '}
              <span className="text-[#c0272d]">conviene más que pintar?</span>
            </h2>

            <p className="text-[#1b1d21] text-base leading-relaxed font-sans">
              La técnica <strong className="text-[#123a6b]">PDR (Paintless Dent Repair)</strong> consiste en reparar abolladuras trabajando el metal desde la parte interna del panel con palancas y varillas especiales, sin dañar la capa de pintura original.
            </p>

            <p className="text-[#475569] text-sm leading-relaxed font-sans">
              A diferencia de la chapa tradicional, <strong className="text-[#1b1d21]">no se lija la carrocería, no se usa masilla plástica ni se repinta</strong>. La pintura robotizada de fábrica es irrepetible en tono, brillo y protección anticorrosiva; al preservarla intacta, tu vehículo no sufre depreciación en el mercado.
            </p>

            {/* Side by side comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-sky-50/60 border-2 border-[#1c4f8c]/30 shadow-sm">
                <div className="flex items-center gap-2 text-[#123a6b] font-display font-bold text-sm uppercase mb-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>Con Sacabollos Águila Blanca</span>
                </div>
                <ul className="text-xs text-[#334155] space-y-1.5 font-sans font-medium">
                  <li className="flex items-center gap-1.5">• Mantiene el barniz y color 100% de fábrica</li>
                  <li className="flex items-center gap-1.5">• 0% de pérdida en el valor de reventa</li>
                  <li className="flex items-center gap-1.5">• Reparaciones en 24 a 48 hs (o en el día)</li>
                  <li className="flex items-center gap-1.5">• Aceptado por todas las compañías de seguro</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-red-50/40 border border-red-200 shadow-sm">
                <div className="flex items-center gap-2 text-[#c0272d] font-display font-bold text-sm uppercase mb-2">
                  <X className="w-4 h-4 text-[#c0272d] stroke-[3]" />
                  <span>Con Taller Tradicional</span>
                </div>
                <ul className="text-xs text-[#64748b] space-y-1.5 font-sans">
                  <li>• Se lija la chapa y se aplica masilla plástica</li>
                  <li>• El vehículo se desvaloriza hasta un 15% o 20%</li>
                  <li>• De 10 a 25 días de demora en taller</li>
                  <li>• Riesgo de cuarteado o diferencia de tono al sol</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
