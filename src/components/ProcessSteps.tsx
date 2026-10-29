import React from 'react'
import { Eye, FileCheck2, Wrench, Award, CheckCircle } from 'lucide-react'

const STEPS = [
  {
    step: '01',
    icon: Eye,
    title: 'Escaneo Óptico LED',
    desc: 'Colocamos el vehículo bajo pantallas de luz lineal especializada para mapear cada micro-deformación y tensión en la chapa.',
  },
  {
    step: '02',
    icon: FileCheck2,
    title: 'Presupuesto Transparente',
    desc: 'Confección del informe pericial digital. Lo enviamos por WhatsApp para tu aprobación inmediata o lo gestionamos directo con tu seguro.',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Restauración Milimétrica PDR',
    desc: 'Desabollado artesanal mediante varillas quirúrgicas y ventosas de tracción. Acompañamos la memoria elástica del metal sin dañar la pintura.',
  },
  {
    step: '04',
    icon: Award,
    title: 'Control Óptico y Garantía',
    desc: 'Verificación final bajo luz rasante 360° y entrega con Certificado de Conformidad Total de Águila Blanca.',
  },
]

export const ProcessSteps: React.FC = () => {
  return (
    <section id="proceso" className="py-20 bg-[#090b0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffb800]/10 border border-[#ffb800]/30 text-xs font-semibold text-[#ffb800] uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Método de Precisión Quirúrgica</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            El Proceso en <span className="text-[#ffb800]">4 Pasos Claros</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Combinamos técnica artesanal alemana con tecnología óptica para que sepas en todo momento cómo cuidamos tu auto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => {
            const IconComponent = s.icon
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ffb800]/40 transition-all group backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-extrabold text-white/20 group-hover:text-[#ffb800] transition-colors">
                    {s.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#1c4f8c]/40 text-sky-400 group-hover:bg-[#ffb800] group-hover:text-black flex items-center justify-center transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#ffb800] transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
