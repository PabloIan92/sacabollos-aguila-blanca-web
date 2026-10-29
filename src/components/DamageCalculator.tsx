import React, { useState } from 'react'
import { Car, MessageCircle, ArrowRight, ShieldCheck, CheckSquare, Square } from 'lucide-react'

interface VehicleType {
  id: string
  name: string
  desc: string
}

const VEHICLE_TYPES: VehicleType[] = [
  { id: 'compacto', name: 'Sedán / Hatchback', desc: 'Compactos y medianos' },
  { id: 'suv', name: 'SUV / Pick-Up', desc: 'Hilux, Amarok, Ranger, Tracker, etc.' },
  { id: 'premium', name: 'Gama Alta / Coupé', desc: 'Aleaciones de aluminio y deportivos' },
]

const ZONES = [
  { id: 'capot', name: 'Capot' },
  { id: 'techo', name: 'Techo Completo' },
  { id: 'baul', name: 'Portón / Baúl' },
  { id: 'puertas', name: 'Puertas Laterales' },
  { id: 'guardabarros', name: 'Guardabarros' },
  { id: 'parantes', name: 'Parantes / Pilares' },
]

const DAMAGE_TYPES = [
  { id: 'granizo', name: 'Granizo (Múltiples impactos)', desc: 'Tormenta de granizo en varios paneles' },
  { id: 'portazo', name: 'Portazo / Golpe Estacionamiento', desc: '1 a 3 bollos puntuales' },
  { id: 'nervadura', name: 'Toque con Pliegue en Nervadura', desc: 'Línea de quiebre o filo afectado' },
]

const INSURANCE_OPTIONS = [
  { id: 'si', name: 'Sí, cubre mi seguro', desc: 'Tengo cobertura todo riesgo o granizo' },
  { id: 'no', name: 'Particular / Sin seguro', desc: 'Pago por mi cuenta con garantía' },
  { id: 'duda', name: 'Aún no hice la denuncia', desc: 'Necesito asesoramiento técnico previo' },
]

export const DamageCalculator: React.FC = () => {
  const [vehicle, setVehicle] = useState('suv')
  const [selectedZones, setSelectedZones] = useState<string[]>(['capot', 'techo'])
  const [damageType, setDamageType] = useState('granizo')
  const [insurance, setInsurance] = useState('si')
  const [carModel, setCarModel] = useState('')
  const [clientName, setClientName] = useState('')

  const toggleZone = (id: string) => {
    setSelectedZones((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const buildWhatsAppUrl = () => {
    const vehicleObj = VEHICLE_TYPES.find((v) => v.id === vehicle)
    const zonesStr = selectedZones.map((z) => ZONES.find((item) => item.id === z)?.name).join(', ')
    const damageObj = DAMAGE_TYPES.find((d) => d.id === damageType)
    const insuranceObj = INSURANCE_OPTIONS.find((i) => i.id === insurance)

    const message = `¡Hola equipo de Águila Blanca! 👋
Quisiera consultar presupuesto para una reparación artesanal PDR:

👤 Nombre: ${clientName || 'Cliente Particular'}
🚗 Vehículo: ${carModel || vehicleObj?.name}
🎯 Zonas con bollos: ${zonesStr || 'A definir'}
💥 Tipo de daño: ${damageObj?.name}
🛡️ Cobertura seguro: ${insuranceObj?.name}

📸 Te envío a continuación fotos del daño para que puedan darme un estimado preliminar. ¡Gracias!`

    return `https://wa.me/5491122334455?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="cotizador" className="py-20 bg-gradient-to-b from-[#090b0e] via-[#0d121c] to-[#090b0e] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffb800]/15 border border-[#ffb800]/30 text-xs font-semibold text-[#ffb800] uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Presupuestador Express</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Calculá tu Cotización <span className="text-[#ffb800]">en 3 Pasos</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Seleccioná las características de tu caso para generar la solicitud directa al perito por WhatsApp.
          </p>
        </div>

        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/70 border border-white/10 shadow-2xl backdrop-blur-xl">
          {/* Step 1: Tipo de Vehículo */}
          <div className="mb-8">
            <label className="block text-xs font-mono uppercase text-[#ffb800] font-bold tracking-wider mb-3">
              Paso 1 • Tipo de Vehículo
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {VEHICLE_TYPES.map((v) => (
                <button
                  type="button"
                  key={v.id}
                  onClick={() => setVehicle(v.id)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    vehicle === v.id
                      ? 'bg-[#1c4f8c]/40 border-[#ffb800] text-white shadow-lg'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <p className="font-display text-base font-bold uppercase">{v.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{v.desc}</p>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Marca, Modelo y Año (opcional)</label>
                <input
                  type="text"
                  placeholder="Ej: Toyota Hilux 2024 / VW Golf 2022"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ffb800]"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Tu Nombre (opcional)</label>
                <input
                  type="text"
                  placeholder="Ej: Martín"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#ffb800]"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Zonas Afectadas */}
          <div className="mb-8 border-t border-white/10 pt-6">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-mono uppercase text-[#ffb800] font-bold tracking-wider">
                Paso 2 • Zonas Afectadas con Bollos
              </label>
              <span className="text-xs text-slate-400">Seleccioná todas las que apliquen</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {ZONES.map((zone) => {
                const isSelected = selectedZones.includes(zone.id)
                return (
                  <button
                    type="button"
                    key={zone.id}
                    onClick={() => toggleZone(zone.id)}
                    className={`p-3.5 rounded-xl text-left border flex items-center gap-2.5 transition-all ${
                      isSelected
                        ? 'bg-[#123a6b]/60 border-sky-400 text-white shadow-md'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {isSelected ? (
                      <CheckSquare className="w-4 h-4 text-[#ffb800] shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm font-semibold">{zone.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step 3: Tipo de Daño y Seguro */}
          <div className="mb-8 border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase text-[#ffb800] font-bold tracking-wider mb-3">
                Paso 3 • Origen del Daño
              </label>
              <div className="space-y-2.5">
                {DAMAGE_TYPES.map((d) => (
                  <button
                    type="button"
                    key={d.id}
                    onClick={() => setDamageType(d.id)}
                    className={`w-full p-3 rounded-xl text-left border transition-all ${
                      damageType === d.id
                        ? 'bg-[#1c4f8c]/40 border-[#ffb800] text-white'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-bold">{d.name}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{d.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#ffb800] font-bold tracking-wider mb-3">
                ¿Interviene Compañía de Seguros?
              </label>
              <div className="space-y-2.5">
                {INSURANCE_OPTIONS.map((ins) => (
                  <button
                    type="button"
                    key={ins.id}
                    onClick={() => setInsurance(ins.id)}
                    className={`w-full p-3 rounded-xl text-left border transition-all ${
                      insurance === ins.id
                        ? 'bg-[#123a6b]/50 border-sky-400 text-white'
                        : 'bg-white/5 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-bold">{ins.name}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{ins.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button & Disclaimer */}
          <div className="border-t border-white/10 pt-6 text-center">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#ffb800] hover:bg-[#ffc933] text-black font-display font-extrabold text-base uppercase tracking-wider shadow-2xl shadow-[#ffb800]/30 transition-all active:scale-95 group"
            >
              <MessageCircle className="w-5 h-5 fill-black group-hover:scale-110 transition-transform" />
              <span>Enviar Consulta y Fotos por WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-xs text-slate-400 mt-3 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Presupuesto y diagnóstico preliminar 100% sin costo ni compromiso</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
