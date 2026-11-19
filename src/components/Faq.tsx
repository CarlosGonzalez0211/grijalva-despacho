import { useState } from 'react'
import { Plus } from '@phosphor-icons/react'
import Reveal from './Reveal'

const faqs = [
  ['¿Qué necesito para empezar?', 'Escríbenos por WhatsApp. Según el servicio te pediremos tu RFC y algunos documentos básicos; te indicamos exactamente cuáles.'],
  ['¿Atienden personas físicas y empresas?', 'Sí. Trabajamos con personas físicas, profesionistas independientes y empresas que necesitan cumplir con el SAT, el IMSS y el ISN.'],
  ['¿Qué es la opinión de cumplimiento?', 'Es el documento del SAT que indica si estás al corriente en tus obligaciones fiscales. Con frecuencia te la piden clientes, bancos y dependencias para contratar contigo.'],
  ['¿Pueden calcular un finiquito o el aguinaldo?', 'Sí. Calculamos finiquitos, aguinaldo y reparto de utilidades (PTU) con base en la Ley Federal del Trabajo.'],
  ['¿Cómo se comunican conmigo?', 'Por WhatsApp. Ahí recibes tus documentos, acuses y recordatorios, y puedes resolver dudas cuando las tengas.'],
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="preguntas" className="bg-paper-2 px-4 py-24 md:py-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="inline-block rounded-full bg-pine/[0.07] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-moss">Preguntas frecuentes</span>
          <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] md:text-5xl">Lo que más nos preguntan</h2>
        </Reveal>
        <div className="mt-12 divide-y divide-pine/10 border-y border-pine/10">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl md:text-2xl"
                >
                  {q}
                  <Plus size={22} weight="light" className={`shrink-0 text-clay transition-transform duration-500 ease-out-soft ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-out-soft ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden leading-relaxed text-ink/65">
                    <span className="block pb-6">{a}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
