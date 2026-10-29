import React from 'react'
import { ShieldCheck, FileCheck } from 'lucide-react'

const INSURERS = [
  'La Segunda',
  'San Cristóbal',
  'Federación Patronal',
  'Zurich Argentina',
  'Seguros Rivadavia',
  'Allianz',
  'Mercantil Andina',
  'Mapfre',
]

export const InsuranceTrustBar: React.FC = () => {
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-white border-2 border-[#d3d9de] p-4 sm:p-6 shadow-ficha flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-[#123a6b]/10 border border-[#123a6b]/20 flex items-center justify-center text-[#123a6b]">
            <FileCheck className="w-5 h-5 text-[#c0272d]" />
          </div>
          <div>
            <span className="font-display font-bold text-sm uppercase text-[#123a6b] tracking-wider block">
              Presupuestos Oficiales Homologados
            </span>
            <span className="text-xs text-[#64748b] font-sans">
              Aceptados por todas las compañías de seguros del país
            </span>
          </div>
        </div>

        {/* Insurers list */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs font-mono font-bold text-[#475569]">
          {INSURERS.map((ins, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded bg-[#eef1f3] border border-[#d3d9de] text-[#1b1d21] uppercase tracking-wide hover:border-[#123a6b] hover:text-[#123a6b] transition-colors"
            >
              {ins}
            </span>
          ))}
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#123a6b] text-white font-mono text-xs uppercase tracking-wide">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ffd166]" />
            <span>Y más</span>
          </span>
        </div>
      </div>
    </div>
  )
}
