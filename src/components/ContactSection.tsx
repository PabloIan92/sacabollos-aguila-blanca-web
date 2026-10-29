import React from 'react'
import { MessageCircle, Clock, MapPin, ShieldCheck } from 'lucide-react'

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-[#07090c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ffb800]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-[#ffb800]/15 text-[#ffb800] text-xs font-semibold uppercase tracking-wider">
              Diagnóstico Sin Cargo
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-3">
              ¿Tenés un bollo en tu auto?{' '}
              <span className="text-[#ffb800]">Escribinos ahora</span>
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base">
              Envianos una foto del daño por WhatsApp y nuestro perito te responde en el momento con el diagnóstico y presupuesto.
            </p>
          </div>

          {/* Big WhatsApp Action Button */}
          <div className="text-center mb-12">
            <a
              href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20les%20adjunto%20fotos%20del%20daño%20de%20mi%20auto%20para%20presupuestar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#ffb800] hover:bg-[#ffc933] text-black font-display font-black text-lg sm:text-xl uppercase tracking-wider shadow-2xl shadow-[#ffb800]/30 transition-all active:scale-95 group w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6 fill-black group-hover:scale-110 transition-transform" />
              <span>Enviar Fotos por WhatsApp</span>
            </a>
          </div>

          {/* 3 Info Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ffb800] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white block font-display uppercase tracking-wider">Horarios de Taller</strong>
                <p className="text-slate-400 mt-1">Lunes a Viernes: 08:00 a 18:30 hs</p>
                <p className="text-slate-400">Sábados: 08:30 a 13:00 hs</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white block font-display uppercase tracking-wider">Instalaciones</strong>
                <p className="text-slate-400 mt-1">Cabinas con pantallas de luz PDR</p>
                <p className="text-slate-400">Atención sin turno para peritajes</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white block font-display uppercase tracking-wider">Garantía Escrita</strong>
                <p className="text-slate-400 mt-1">Garantía de conformidad total</p>
                <p className="text-emerald-400 font-medium">Si no queda bien, no pagás</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
