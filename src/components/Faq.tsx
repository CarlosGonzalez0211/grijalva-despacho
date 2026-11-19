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
    <section id="preguntas" className="bg-paper px-4 py-24 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <span className="inline-block rounded-full bg-pine px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Preguntas frecuentes</span>
          <h2 className="display mt-6 text-[clamp(2.6rem,6vw,5rem)] text-pine">Lo que más nos preguntan.</h2>
        </Reveal>
        <div className="divide-y-2 divide-pine border-y-2 border-pine">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl font-semibold tracking-tight text-pine md:text-2xl"
                >
                  {q}
                  <span className={`grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-500 ${isOpen ? 'bg-lime' : 'bg-pine text-lime'}`}>
                    <Plus size={20} weight="bold" className={`transition-transform duration-500 ease-out-soft ${isOpen ? 'rotate-45' : ''}`} />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ease-out-soft ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <p className="overflow-hidden leading-relaxed text-ink/70">
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
