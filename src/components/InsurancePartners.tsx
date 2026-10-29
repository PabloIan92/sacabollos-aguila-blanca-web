import React from 'react'
import { ShieldCheck, FileCheck, CheckCircle, ArrowUpRight } from 'lucide-react'

const INSURERS = [
  'La Segunda Seguros',
  'San Cristóbal',
  'Federación Patronal',
  'Zurich Argentina',
  'Seguros Rivadavia',
  'Sancor Seguros',
  'Allianz Argentina',
  'Mercantil Andina',
  'Mapfre',
  'Provincia Seguros',
]

export const InsurancePartners: React.FC = () => {
  return (
    <section id="aseguradoras" className="py-20 bg-[#0c1017] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123a6b]/50 border border-[#1c4f8c] text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ffb800]" />
            <span>Gestión Integral de Siniestros</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Tu seguro cubre el arreglo.{' '}
            <span className="text-[#ffb800]">Nosotros hacemos el trámite.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            No pierdas tiempo con formularios confusos ni peritajes incompletos. Confeccionamos el presupuesto oficial con baremos homologados y coordinamos la inspección técnica con tu aseguradora.
          </p>
        </div>

        {/* Benefits Grid for Insured Drivers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
              Presupuesto Oficial Digital
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Fotografías en alta definición de cada impacto bajo panel reflectométrico y presupuesto detallado listo para enviar a la compañía en menos de 2 horas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
              Derecho de Libre Elección
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Por ley de pólizas y derecho del asegurado, podés elegir libremente el taller donde reparar tu auto. Protegé la originalidad de tu vehículo sin imposiciones.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-[#ffb800]/20 text-[#ffb800] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
              Defensa del Peritaje
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              ¿El perito no contó todos los bollos del granizo? Tramitamos la ampliación oficial con respaldo técnico para que no tengas que pagar diferencias de tu bolsillo.
            </p>
          </div>
        </div>

        {/* Insurers Logo Pills / Badges */}
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10">
          <p className="text-center text-xs font-mono uppercase text-slate-400 tracking-wider mb-6">
            Presupuestos homologados compatibles con las principales aseguradoras del país
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {INSURERS.map((name, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#ffb800]/40 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#ffb800]" />
                <span>{name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#cotizador"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#ffb800] hover:text-[#ffc933] transition-colors"
            >
              <span>¿Tenés dudas sobre tu póliza o cobertura de granizo? Consultanos sin compromiso</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
