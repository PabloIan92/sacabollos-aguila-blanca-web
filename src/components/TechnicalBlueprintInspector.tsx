import React, { useState } from 'react'
import { ShieldCheck, Crosshair, Cpu, CheckCircle2, FileText, ArrowRight } from 'lucide-react'

interface ZoneData {
  id: string
  name: string
  code: string
  material: string
  thickness: string
  tolerance: string
  pdrFeasibility: string
}

const ZONES: Record<string, ZoneData> = {
  capot: {
    id: 'capot',
    name: 'Panel Superior — Capot',
    code: 'PNL-01-HOOD',
    material: 'Aluminio 6000 / Acero Estampado OEM',
    thickness: '0.75 mm',
    tolerance: '±0.05 mm bajo luz estroboscópica',
    pdrFeasibility: '100% Viable (Sin corte térmico de estructura)',
  },
  techo: {
    id: 'techo',
    name: 'Techo Estructural & Nervaduras',
    code: 'PNL-02-ROOF',
    material: 'Acero de Alta Resistencia (HSS)',
    thickness: '0.80 mm',
    tolerance: '±0.02 mm (Conservación de rigidez torsional)',
    pdrFeasibility: '100% Viable (Preserva selladores de fábrica)',
  },
  puertas: {
    id: 'puertas',
    name: 'Paneles Laterales & Líneas de Cintura',
    code: 'PNL-03-DOORS',
    material: 'Chapa Electrogalvanizada',
    thickness: '0.70 mm',
    tolerance: '±0.04 mm en nervios vivos',
    pdrFeasibility: '100% Viable (Acceso por cavidad interior)',
  },
  guardabarros: {
    id: 'guardabarros',
    name: 'Guardabarros Delanteros / Traseros',
    code: 'PNL-04-FENDERS',
    material: 'Aleación Ligera de Estampación Profunda',
    thickness: '0.65 mm',
    tolerance: '±0.03 mm en bordes de pasarruedas',
    pdrFeasibility: '100% Viable (Técnica combinada palanca/ventosa)',
  },
  porton: {
    id: 'porton',
    name: 'Portón de Carga & Tapa Trasera',
    code: 'PNL-05-TAILGATE',
    material: 'Acero Prensado con Doble Nervadura',
    thickness: '0.85 mm',
    tolerance: '±0.05 mm en zonas de cierre',
    pdrFeasibility: '100% Viable (Sin desmontaje del cableado)',
  },
}

export const TechnicalBlueprintInspector: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<ZoneData>(ZONES.capot)

  return (
    <section className="py-24 bg-[#07090c] relative border-t border-slate-800">
      {/* Background CAD grid */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-950/80 border border-sky-500/40 text-sky-400 font-mono text-xs uppercase tracking-widest mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Planimetría Técnica CAD • Inspección Estructural</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Inspección de Deformación <span className="text-[#ffb800]">por Componente</span>
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl font-sans">
              Protocolo de evaluación milimétrica para flotas corporativas y peritajes de aseguradoras bajo tolerancias de fabricante OEM.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-slate-500 uppercase">Norma de Calibración:</span>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-400 font-bold">
              ISO 9001:2026 / I-CAR PDR-01
            </span>
          </div>
        </div>

        {/* Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left CAD Schematic Diagram (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-800/80 pb-3 mb-6">
              <span>ESQUEMA DE CARROCERÍA: PICKUP / SEDÁN EJECUTIVO</span>
              <span className="text-sky-400 flex items-center gap-1">
                <Crosshair className="w-3.5 h-3.5" />
                <span>INTERACTIVO</span>
              </span>
            </div>

            {/* Interactive SVG Car Blueprint View */}
            <div className="relative py-4 flex items-center justify-center">
              <svg
                viewBox="0 0 680 320"
                className="w-full h-auto max-h-[340px] stroke-slate-600 fill-slate-900/40"
              >
                {/* Car Silhouette Wireframe (Cenital + Lateral Perspective) */}
                <path
                  d="M 120 70 L 220 50 L 460 50 L 560 70 L 610 110 L 630 160 L 610 210 L 560 250 L 460 270 L 220 270 L 120 250 L 70 210 L 50 160 L 70 110 Z"
                  strokeWidth="2"
                  className="stroke-slate-700"
                />

                {/* Windshield & Rear glass */}
                <path d="M 220 70 L 270 90 L 270 230 L 220 250 Z" strokeWidth="1.5" className="stroke-slate-600 fill-slate-950/60" />
                <path d="M 430 90 L 470 70 L 470 250 L 430 230 Z" strokeWidth="1.5" className="stroke-slate-600 fill-slate-950/60" />

                {/* Zone: Capot */}
                <g
                  onClick={() => setSelectedZone(ZONES.capot)}
                  className="cursor-pointer group"
                >
                  <polygon
                    points="70,115 210,75 210,245 70,205"
                    className={`transition-all duration-200 ${
                      selectedZone.id === 'capot'
                        ? 'fill-[#ffb800]/25 stroke-[#ffb800] stroke-[2.5]'
                        : 'fill-sky-950/20 hover:fill-sky-800/30 stroke-sky-500/50 stroke-1'
                    }`}
                  />
                  <text x="140" y="165" textAnchor="middle" className="text-[11px] font-mono fill-white font-bold select-none">
                    CAPOT [PNL-01]
                  </text>
                </g>

                {/* Zone: Techo */}
                <g
                  onClick={() => setSelectedZone(ZONES.techo)}
                  className="cursor-pointer group"
                >
                  <polygon
                    points="280,95 420,95 420,225 280,225"
                    className={`transition-all duration-200 ${
                      selectedZone.id === 'techo'
                        ? 'fill-[#ffb800]/25 stroke-[#ffb800] stroke-[2.5]'
                        : 'fill-sky-950/20 hover:fill-sky-800/30 stroke-sky-500/50 stroke-1'
                    }`}
                  />
                  <text x="350" y="165" textAnchor="middle" className="text-[11px] font-mono fill-white font-bold select-none">
                    TECHO [PNL-02]
                  </text>
                </g>

                {/* Zone: Puertas Laterales Superior */}
                <g
                  onClick={() => setSelectedZone(ZONES.puertas)}
                  className="cursor-pointer group"
                >
                  <polygon
                    points="230,55 460,55 420,90 270,90"
                    className={`transition-all duration-200 ${
                      selectedZone.id === 'puertas'
                        ? 'fill-[#ffb800]/25 stroke-[#ffb800] stroke-[2.5]'
                        : 'fill-sky-950/20 hover:fill-sky-800/30 stroke-sky-500/50 stroke-1'
                    }`}
                  />
                  <text x="350" y="78" textAnchor="middle" className="text-[10px] font-mono fill-slate-300 font-bold select-none">
                    PUERTAS IZQ [PNL-03]
                  </text>
                </g>

                {/* Zone: Puertas Laterales Inferior */}
                <g
                  onClick={() => setSelectedZone(ZONES.puertas)}
                  className="cursor-pointer group"
                >
                  <polygon
                    points="270,230 420,230 460,265 230,265"
                    className={`transition-all duration-200 ${
                      selectedZone.id === 'puertas'
                        ? 'fill-[#ffb800]/25 stroke-[#ffb800] stroke-[2.5]'
                        : 'fill-sky-950/20 hover:fill-sky-800/30 stroke-sky-500/50 stroke-1'
                    }`}
                  />
                  <text x="350" y="252" textAnchor="middle" className="text-[10px] font-mono fill-slate-300 font-bold select-none">
                    PUERTAS DER [PNL-03]
                  </text>
                </g>

                {/* Zone: Guardabarros Frontal */}
                <g
                  onClick={() => setSelectedZone(ZONES.guardabarros)}
                  className="cursor-pointer group"
                >
                  <polygon
                    points="120,68 220,53 210,75 70,115 55,140 100,100"
                    className={`transition-all duration-200 ${
                      selectedZone.id === 'guardabarros'
                        ? 'fill-[#ffb800]/25 stroke-[#ffb800] stroke-[2.5]'
                        : 'fill-sky-950/20 hover:fill-sky-800/30 stroke-sky-500/50 stroke-1'
                    }`}
                  />
                  <text x="120" y="90" textAnchor="middle" className="text-[9px] font-mono fill-slate-300 font-bold select-none">
                    GUARDAB. [PNL-04]
                  </text>
                </g>

                {/* Zone: Portón / Baúl */}
                <g
                  onClick={() => setSelectedZone(ZONES.porton)}
                  className="cursor-pointer group"
                >
                  <polygon
                    points="480,75 560,70 610,110 630,160 610,210 560,250 480,245 440,228 440,92"
                    className={`transition-all duration-200 ${
                      selectedZone.id === 'porton'
                        ? 'fill-[#ffb800]/25 stroke-[#ffb800] stroke-[2.5]'
                        : 'fill-sky-950/20 hover:fill-sky-800/30 stroke-sky-500/50 stroke-1'
                    }`}
                  />
                  <text x="540" y="165" textAnchor="middle" className="text-[11px] font-mono fill-white font-bold select-none">
                    PORTÓN [PNL-05]
                  </text>
                </g>
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded bg-[#ffb800]" />
                <span className="text-white">Panel Activo:</span> {selectedZone.name}
              </span>
              <span className="text-slate-500">Haz clic sobre cualquier panel para auditar especificaciones</span>
            </div>
          </div>

          {/* Right Spec Card & Engineering Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-mono text-xs text-[#ffb800] font-bold tracking-wider">
                  {selectedZone.code}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/50 text-emerald-400 text-[10px] font-mono font-bold">
                  APROBADO OEM
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white uppercase mt-3">
                {selectedZone.name}
              </h3>

              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="p-2.5 rounded bg-black/50 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Material de Panel:</span>
                  <span className="text-white font-semibold">{selectedZone.material}</span>
                </div>
                <div className="p-2.5 rounded bg-black/50 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Espesor Promedio:</span>
                  <span className="text-sky-300 font-semibold">{selectedZone.thickness}</span>
                </div>
                <div className="p-2.5 rounded bg-black/50 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Tolerancia Óptica:</span>
                  <span className="text-white font-semibold">{selectedZone.tolerance}</span>
                </div>
                <div className="p-2.5 rounded bg-black/50 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Factibilidad PDR:</span>
                  <span className="text-emerald-400 font-bold">{selectedZone.pdrFeasibility}</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300 mb-4">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sin lijado, sin quemado de chapa, sin masa de relleno químico.</span>
                </div>

                <a
                  href="#cotizador"
                  className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-[#ffb800] text-slate-200 hover:text-black font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-slate-700"
                >
                  <FileText className="w-4 h-4" />
                  <span>Solicitar Peritaje Técnico Formal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Corporate Tier-1 Badge */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/40 to-slate-900 border border-sky-800/40 flex items-center gap-3 text-xs">
              <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-slate-300">
                <strong className="text-white block font-medium">Baremos Homologados para Flotas:</strong>
                Informes periciales exportables compatibles con sistemas de gestión corporativa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
