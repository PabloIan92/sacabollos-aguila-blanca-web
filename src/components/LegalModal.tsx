import React, { useEffect } from 'react'
import { X, ShieldCheck, Scale, FileText, Lock, CheckCircle2 } from 'lucide-react'

export type LegalTab = 'terminos' | 'privacidad' | 'consumidor' | 'seguridad'

interface LegalModalProps {
  isOpen: boolean
  initialTab?: LegalTab
  onClose: () => void
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'terminos',
  onClose,
}) => {
  const [activeTab, setActiveTab] = React.useState<LegalTab>(initialTab)

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[88vh] bg-white rounded-3xl shadow-2xl border-2 border-[#123a6b] flex flex-col overflow-hidden text-[#1b1d21]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#123a6b] to-[#1c4f8c] text-white flex items-center justify-between border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#ffd166]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
                Marco Legal y Seguridad de la Información
              </h3>
              <p className="text-xs text-sky-200 font-mono">
                Águila Blanca Sacabollos Artesanal • República Argentina
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#d3d9de] bg-[#f8fafc] px-4 pt-3 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('terminos')}
            className={`pb-3 px-4 font-display text-xs sm:text-sm uppercase tracking-wider font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'terminos'
                ? 'border-[#c0272d] text-[#c0272d]'
                : 'border-transparent text-[#64748b] hover:text-[#123a6b]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Términos y Garantía PDR</span>
          </button>

          <button
            onClick={() => setActiveTab('privacidad')}
            className={`pb-3 px-4 font-display text-xs sm:text-sm uppercase tracking-wider font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'privacidad'
                ? 'border-[#c0272d] text-[#c0272d]'
                : 'border-transparent text-[#64748b] hover:text-[#123a6b]'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacidad (Ley 25.326)</span>
          </button>

          <button
            onClick={() => setActiveTab('consumidor')}
            className={`pb-3 px-4 font-display text-xs sm:text-sm uppercase tracking-wider font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'consumidor'
                ? 'border-[#c0272d] text-[#c0272d]'
                : 'border-transparent text-[#64748b] hover:text-[#123a6b]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>Defensa del Consumidor</span>
          </button>

          <button
            onClick={() => setActiveTab('seguridad')}
            className={`pb-3 px-4 font-display text-xs sm:text-sm uppercase tracking-wider font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'seguridad'
                ? 'border-[#c0272d] text-[#c0272d]'
                : 'border-transparent text-[#64748b] hover:text-[#123a6b]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Ciberseguridad y Enlaces</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#334155] leading-relaxed font-sans">
          {activeTab === 'terminos' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-200">
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-base mb-1">
                  1. Naturaleza del Servicio Técnico PDR
                </h4>
                <p className="text-xs sm:text-sm text-[#334155]">
                  La técnica <strong>PDR (Paintless Dent Repair / Desabollado Artesanal)</strong> consiste en la restitución planimétrica de la chapa metálica mediante varillas de precisión y lectura lumínica sin aplicar masillas ni pintura. Se practica exclusivamente sobre paneles de carrocería con pintura de fábrica intacta.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-sm mb-1.5">
                  2. Validez de los Presupuestos Digitales
                </h4>
                <p className="text-xs text-[#475569]">
                  Los diagnósticos y presupuestos cotizados mediante fotos o videos enviados por WhatsApp tienen carácter estimativo preliminar. El presupuesto definitivo queda sujeto a la constatación presencial bajo pantalla de luz lineal en nuestro taller. La cotización tiene una vigencia de quince (15) días corridos desde su emisión.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-sm mb-1.5">
                  3. Paneles con Repintado Previo o Masilla
                </h4>
                <p className="text-xs text-[#475569]">
                  En caso de que el vehículo haya sido sometido con anterioridad a reparaciones tradicionales de chapa y pintura que incluyan masilla plástica o repintado no original (OEM), el técnico advertirá la condición al propietario previo al inicio del trabajo.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-sm mb-1.5">
                  4. Garantía de Conformidad por Escrito
                </h4>
                <p className="text-xs text-[#475569]">
                  Águila Blanca otorga garantía de conformidad técnica: si la chapa no recupera su geometría y acabado acordado conservando la pintura original, el cliente queda exento del cobro del servicio.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacidad' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <h4 className="font-display font-bold text-emerald-900 uppercase text-base mb-1">
                  Protección de Datos Personales (Ley 25.326)
                </h4>
                <p className="text-xs sm:text-sm text-[#334155]">
                  En cumplimiento de la <strong>Ley Nacional 25.326 de Protección de Datos Personales</strong> y directivas de la <strong>Agencia de Acceso a la Información Pública (AAIP)</strong> de la República Argentina, le informamos cómo protegemos sus datos.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-sm mb-1.5">
                  1. Finalidad del Tratamiento de Fotografías y Datos
                </h4>
                <p className="text-xs text-[#475569]">
                  Las fotos, videos, patentes y números de teléfono suministrados voluntariamente por el usuario a través de WhatsApp o contacto directo se utilizan única y exclusivamente para:
                </p>
                <ul className="text-xs text-[#475569] list-disc list-inside mt-2 space-y-1">
                  <li>Evaluar la viabilidad técnica del desabollado artesanal.</li>
                  <li>Emitir el presupuesto oficial requerido por el titular o su compañía de seguros.</li>
                  <li>Coordinar el turno y recepción de la unidad en taller.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-sm mb-1.5">
                  2. No Cesión a Terceros
                </h4>
                <p className="text-xs text-[#475569]">
                  Águila Blanca bajo ninguna circunstancia comercializa, arrienda, cede ni divulga imágenes ni datos personales a terceros, bases publicitarias o empresas externas.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-sm mb-1.5">
                  3. Derechos de Acceso, Rectificación y Supresión (ARCO)
                </h4>
                <p className="text-xs text-[#475569]">
                  El titular de los datos personales tiene la facultad de ejercer el derecho de acceso, rectificación, actualización y supresión de sus datos de forma gratuita conforme a lo establecido en el Art. 14 de la Ley 25.326, mediante solicitud enviada a nuestros canales oficiales.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'consumidor' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <h4 className="font-display font-bold text-amber-900 uppercase text-base mb-1">
                  Defensa de los Derechos del Consumidor (Ley 24.240)
                </h4>
                <p className="text-xs sm:text-sm text-[#334155]">
                  Garantizamos el estricto cumplimiento de la <strong>Ley 24.240 de Defensa del Consumidor</strong> y el Código Civil y Comercial de la Nación Argentina en todas las contrataciones.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-sm mb-1.5">
                  1. Derecho a la Información Clara y Veraz (Art. 4)
                </h4>
                <p className="text-xs text-[#475569]">
                  El cliente recibe información previa completa sobre las características técnicas de la intervención, tiempo de entrega estimado, costo total final y condiciones de facturación oficial para presentar ante aseguradoras.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-sm mb-1.5">
                  2. Emisión de Presupuesto Detallado (Art. 21)
                </h4>
                <p className="text-xs text-[#475569]">
                  Los presupuestos por escrito consignan nombre y domicilio del taller, descripción de las piezas afectadas, precio detallado de mano de obra y plazo de validez del presupuesto.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-sm mb-1.5">
                  3. Garantía Legal de Reparación
                </h4>
                <p className="text-xs text-[#475569]">
                  Conforme a los Arts. 11 a 17 de la Ley 24.240, toda intervención cuenta con garantía legal sobre los trabajos realizados en la chapa del vehículo.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'seguridad' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-300">
                <h4 className="font-display font-bold text-[#123a6b] uppercase text-base mb-1">
                  Estándares de Seguridad Cibernética y Navegación
                </h4>
                <p className="text-xs sm:text-sm text-[#334155]">
                  Implementamos directivas de seguridad para proteger a los usuarios frente a suplantación de identidad, ataques cibernéticos y fugas de información.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white border border-[#d3d9de]">
                  <div className="flex items-center gap-2 text-[#123a6b] font-bold font-mono mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Cifrado TLS 1.3 / HTTPS</span>
                  </div>
                  <p className="text-[#64748b]">
                    Toda la navegación está protegida mediante certificados SSL/TLS con HSTS de alta seguridad y precarga de dominio.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#d3d9de]">
                  <div className="flex items-center gap-2 text-[#123a6b] font-bold font-mono mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Headers de Seguridad Estrictos</span>
                  </div>
                  <p className="text-[#64748b]">
                    Cabeceras CSP, X-Frame-Options (protección contra clickjacking) y X-Content-Type-Options configuradas en el servidor.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#d3d9de]">
                  <div className="flex items-center gap-2 text-[#123a6b] font-bold font-mono mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Aislamiento de Enlaces Externos</span>
                  </div>
                  <p className="text-[#64748b]">
                    Todos los enlaces a WhatsApp y servicios externos cuentan con el atributo de seguridad <code className="bg-slate-200 px-1 rounded">rel="noopener noreferrer"</code>.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#d3d9de]">
                  <div className="flex items-center gap-2 text-[#123a6b] font-bold font-mono mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Sin Rastreadores Invasivos</span>
                  </div>
                  <p className="text-[#64748b]">
                    El sitio no utiliza cookies invasivas de terceros ni comercializa perfiles de navegación de los visitantes.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-[#f8fafc] border-t border-[#d3d9de] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748b]">
          <span className="font-mono">
            Última actualización: Octubre 2026 • República Argentina
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#123a6b] hover:bg-[#1c4f8c] text-white font-display uppercase tracking-wider font-bold transition-all text-xs w-full sm:w-auto"
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
