import { Bank, Calculator, FileArrowDown, Scales, ShieldCheck } from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import Reveal from './Reveal'
import { wa } from '../config'

type Service = { icon: Icon; title: string; text: string; msg: string; span: string }

const services: Service[] = [
  {
    icon: Calculator,
    title: 'Presentación de impuestos',
    text: 'Declaraciones mensuales y anuales presentadas a tiempo y bien calculadas, para evitar recargos, multas y requerimientos.',
    msg: 'Hola, me interesa el servicio de presentación de impuestos.',
    span: 'md:col-span-7',
  },
  {
    icon: FileArrowDown,
    title: 'Constancia de situación fiscal y opinión de cumplimiento',
    text: 'Te las enviamos cuando las necesites, para contratos, licitaciones, bancos o proveedores.',
    msg: 'Hola, necesito mi constancia de situación fiscal y/o mi opinión de cumplimiento.',
    span: 'md:col-span-5',
  },
  {
    icon: Scales,
    title: 'Cálculo de nómina',
    text: 'Nómina quincenal o semanal, finiquitos, aguinaldo y reparto de utilidades (PTU) calculados conforme a la ley.',
    msg: 'Hola, me interesa el cálculo de nómina (finiquito, aguinaldo o utilidades).',
    span: 'md:col-span-5',
  },
  {
    icon: ShieldCheck,
    title: 'Pago de seguro social e ISN',
    text: 'Calculamos y gestionamos tus cuotas del IMSS y el Impuesto Sobre Nómina para que nunca se te pase una fecha.',
    msg: 'Hola, me interesa el pago de seguro social e ISN.',
    span: 'md:col-span-7',
  },
  {
    icon: Bank,
    title: 'Asesoría fiscal',
    text: 'Resolvemos tus dudas, revisamos tu situación y te ayudamos a tomar decisiones informadas sobre tus obligaciones y tu régimen.',
    msg: 'Hola, quisiera una asesoría fiscal.',
    span: 'md:col-span-12',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-paper-2 px-4 py-24 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="inline-block rounded-full bg-pine/[0.07] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-moss">Servicios</span>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Todo lo que tu negocio necesita para cumplir, <em className="italic text-clay">en un solo lugar.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-12">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08} className={s.span}>
              <a
                href={wa(s.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-[2rem] bg-pine/[0.05] p-1.5 ring-1 ring-pine/10 transition-colors duration-500 hover:bg-pine/[0.09]"
              >
                <div className="flex h-full flex-col rounded-[calc(2rem-0.375rem)] bg-paper p-8 shadow-[inset_0_1px_0_rgba(255,255,255,.8)] md:p-10">
                  <s.icon size={34} weight="light" className="text-clay" />
                  <h3 className="mt-8 font-display text-2xl font-normal leading-snug md:text-[1.7rem]">{s.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-ink/65">{s.text}</p>
                  <span className="mt-8 text-sm font-semibold text-moss transition-transform duration-500 ease-out-soft group-hover:translate-x-1">
                    Cotizar por WhatsApp →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
