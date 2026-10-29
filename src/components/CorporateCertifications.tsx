import React from 'react'
import { ShieldCheck, Award, FileCode2, Scale, Building, Download, CheckSquare } from 'lucide-react'

export const CorporateCertifications: React.FC = () => {
  return (
    <section className="py-24 bg-[#090c10] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#ffb800]/15 border border-[#ffb800]/40 text-[#ffb800] font-mono text-xs uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Estándares Industriales Tier-1</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Homologaciones Técnicas &{' '}
            <span className="text-[#ffb800]">Cumplimiento Corporativo</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Diseñado para cumplir con las exigencias de auditoría técnica, aseguramiento de calidad (QA) y acuerdos de nivel de servicio (SLA) de corporaciones multinacionales, concesionarias y operadores logísticos.
          </p>
        </div>

        {/* 4 Pillars of Enterprise Credibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-sky-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
              Preservación de Cataforesis OEM
            </h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
              No se aplican sopletes ni calor extremo destructivo. Las capas electroquímicas anticorrosivas del fabricante se mantienen 100% inalteradas.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] font-mono text-sky-400 font-semibold">
              Norma: ASTM B117 Salina
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-[#ffb800]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#ffb800]/10 border border-[#ffb800]/30 text-[#ffb800] flex items-center justify-center mb-5">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
              Auditoría Micrométrica Digital
            </h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
              Verificación previa y posterior con medidor de espesor de pintura por corrientes de Foucault. Tolerancia 0 micrones de variación contra panel virgen.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] font-mono text-[#ffb800] font-semibold">
              Espesor: 90 - 130 µm intacto
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
              <FileCode2 className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
              Trazabilidad por VIN / Chasis
            </h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
              Cada vehículo intervenido cuenta con registro fotográfico pericial digitalizado, detalle de horas hombre aplicadas y firma de conformidad técnica.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] font-mono text-emerald-400 font-semibold">
              Exportación: PDF / CSV pericial
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
              SLA Corporativo & Garantía
            </h3>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
              Compromiso de plazos de inmovilización reducidos para vehículos de servicio crítico. Despliegue de cuadrillas PDR para contingencias climáticas.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] font-mono text-amber-400 font-semibold">
              SLA: &lt; 48 hs garantizado
            </div>
          </div>
        </div>

        {/* Corporate Fleet Callout Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-[#101b2b] to-slate-950 border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs uppercase text-[#ffb800] tracking-widest font-bold">
              PROGRAMA DE PROVEEDORES HOMOLOGADOS
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white uppercase leading-snug">
              ¿Gestionás flotas corporativas o plantas logísticas?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Disponemos de contratos marco de mantenimiento estético, tarifarios unificados por baremo de panel y facturación corporativa electrónica para empresas del sector automotriz e industrial.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Facturación A/B con CUIT verificado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Póliza de Responsabilidad Civil de Taller</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <a
              href="https://wa.me/5491122334455?text=Hola,%20me%20comunico%20desde%20un%20departamento%20corporativo%20para%20solicitar%20condiciones%20marco%20y%20tarifario%20B2B."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#ffb800] hover:bg-[#ffc933] text-black font-display font-extrabold text-xs uppercase tracking-wider text-center shadow-xl active:scale-95 transition-all"
            >
              Contactar con Gerencia B2B
            </a>

            <a
              href="#cotizador"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-display font-bold text-xs uppercase tracking-wider text-center border border-slate-700 flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Solicitar Ficha Técnica PDR</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
