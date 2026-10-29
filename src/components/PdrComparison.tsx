import React from 'react'
import { Check, X, Award } from 'lucide-react'

export const PdrComparison: React.FC = () => {
  const comparisonRows = [
    {
      feature: 'Pintura y Barniz de Fábrica',
      pdr: '100% intacta. Mantiene la cataforesis anticorrosiva y elasticidad OEM.',
      traditional: 'Se lija, masilla y repinta. Pierde la textura y brillo de fábrica.',
      pdrGood: true,
    },
    {
      feature: 'Valor de Reventa del Vehículo',
      pdr: '0% desvalorización. Pasa la prueba del micrómetro de espesor en concesionarias.',
      traditional: 'Pérdida de hasta un 15% al 20% del valor comercial al detectarse repintado.',
      pdrGood: true,
    },
    {
      feature: 'Tiempos de Inmovilización',
      pdr: '24 a 48 hs para granizo promedio (mismo día para toques leves).',
      traditional: 'De 10 a 25 días hábiles debido a tiempos muertos de secado y cabina.',
      pdrGood: true,
    },
    {
      feature: 'Durabilidad y Estabilidad',
      pdr: 'Garantía total de por vida. El metal conserva su memoria; el bollo no vuelve.',
      traditional: 'Riesgo con los años de cuarteaduras en la masilla o ampollas por humedad.',
      pdrGood: true,
    },
    {
      feature: 'Garantía Oficial del Fabricante',
      pdr: 'Único método avalado por las automotrices que preserva la garantía de chapa.',
      traditional: 'Puede anular la garantía de perforación anticorrosiva de 0km.',
      pdrGood: true,
    },
    {
      feature: 'Impacto Ambiental',
      pdr: '100% Ecológico (Green Repair). Cero solventes tóxicos o químicos al aire.',
      traditional: 'Alto consumo energético en cabina y emisión de solventes y polvillo.',
      pdrGood: true,
    },
  ]

  return (
    <section id="beneficios" className="py-20 bg-[#0c1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffb800]/10 border border-[#ffb800]/30 text-xs font-semibold text-[#ffb800] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>La Decisión Inteligente para tu Auto</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            ¿Por qué nunca deberías repintar{' '}
            <span className="text-[#ffb800]">si podés evitarlo?</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            La pintura que viene del horno robotizado de fábrica es irrepetible. Con el sistema de desabollado artesanal PDR no se toca el color original.
          </p>
        </div>

        {/* Comparison Table for Tablet & Desktop */}
        <div className="hidden md:block rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-md">
          <div className="grid grid-cols-12 text-sm">
            {/* Header */}
            <div className="col-span-4 p-5 font-display text-base uppercase text-slate-400 font-bold bg-black/40 border-b border-white/10">
              Factor de Decisión
            </div>
            <div className="col-span-4 p-5 font-display text-base uppercase text-red-400 font-bold bg-red-950/20 border-b border-white/10 flex items-center gap-2">
              <X className="w-5 h-5 text-red-500" />
              <span>Chapa y Pintura Clásica</span>
            </div>
            <div className="col-span-4 p-5 font-display text-base uppercase text-[#ffb800] font-bold bg-[#123a6b]/40 border-b border-white/10 flex items-center gap-2">
              <Check className="w-5 h-5 text-[#ffb800]" />
              <span>PDR Águila Blanca</span>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, idx) => (
              <React.Fragment key={idx}>
                <div className="col-span-4 p-5 font-semibold text-white border-b border-white/5 flex items-center bg-black/20">
                  {row.feature}
                </div>
                <div className="col-span-4 p-5 text-slate-400 border-b border-white/5 bg-red-950/10 flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed">{row.traditional}</span>
                </div>
                <div className="col-span-4 p-5 text-slate-200 border-b border-white/5 bg-[#123a6b]/20 flex items-start gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed text-white">{row.pdr}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Cards view for Mobile screens */}
        <div className="md:hidden space-y-4">
          {comparisonRows.map((row, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-display text-base font-bold text-white uppercase mb-3">
                {row.feature}
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-[#123a6b]/30 border border-sky-500/30">
                  <div className="flex items-center gap-1.5 text-[#ffb800] font-bold font-display uppercase tracking-wider mb-1">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Águila Blanca (PDR)</span>
                  </div>
                  <p className="text-white leading-relaxed">{row.pdr}</p>
                </div>

                <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20">
                  <div className="flex items-center gap-1.5 text-red-400 font-bold font-display uppercase tracking-wider mb-1">
                    <X className="w-4 h-4 text-red-500" />
                    <span>Taller Tradicional</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{row.traditional}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#123a6b] via-[#1c4f8c] to-[#0c1a2e] border border-sky-400/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ffb800] text-black flex items-center justify-center shrink-0 shadow-lg">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
                Garantía Total de Conformidad
              </h4>
              <p className="text-xs sm:text-sm text-sky-100 mt-0.5">
                Si el bollo no desaparece por completo bajo nuestras luces de inspección, no pagás absolutamente nada.
              </p>
            </div>
          </div>

          <a
            href="#cotizador"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-black font-display font-bold text-xs uppercase tracking-wider shrink-0 text-center shadow-md active:scale-95 transition-all"
          >
            Quiero Proteger mi Auto
          </a>
        </div>
      </div>
    </section>
  )
}
