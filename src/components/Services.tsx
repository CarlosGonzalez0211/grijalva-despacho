import { ArrowUpRight } from '@phosphor-icons/react'
import Reveal from './Reveal'
import { wa } from '../config'

type Service = { n: string; title: string; text: string; msg: string; img: string; alt: string; span: string }

const services: Service[] = [
  {
    n: '01',
    title: 'Presentación de impuestos',
    text: 'Declaraciones mensuales y anuales a tiempo y bien calculadas. Sin recargos ni multas.',
    msg: 'Hola, me interesa el servicio de presentación de impuestos.',
    img: '/images/firma.jpg',
    alt: 'Persona firmando un documento fiscal',
    span: 'md:col-span-7',
  },
  {
    n: '02',
    title: 'Constancia de situación fiscal y opinión de cumplimiento',
    text: 'Te las enviamos cuando las necesites: contratos, bancos, licitaciones o proveedores.',
    msg: 'Hola, necesito mi constancia de situación fiscal y/o mi opinión de cumplimiento.',
    img: '/images/documentos.jpg',
    alt: 'Documentos fiscales extendidos sobre una mesa',
    span: 'md:col-span-5',
  },
  {
    n: '03',
    title: 'Cálculo de nómina',
    text: 'Nómina, finiquitos, aguinaldo y reparto de utilidades (PTU) conforme a la ley.',
    msg: 'Hola, me interesa el cálculo de nómina (finiquito, aguinaldo o utilidades).',
    img: '/images/nomina.jpg',
    alt: 'Equipo de trabajo reunido en una mesa con laptops',
    span: 'md:col-span-5',
  },
  {
    n: '04',
    title: 'Pago de seguro social e ISN',
    text: 'Calculamos y gestionamos tus cuotas del IMSS y del Impuesto Sobre Nómina. Nunca se te pasa una fecha.',
    msg: 'Hola, me interesa el pago de seguro social e ISN.',
    img: '/images/negocio.jpg',
    alt: 'Dueña de un negocio atendiendo a una clienta en su local',
    span: 'md:col-span-7',
  },
  {
    n: '05',
    title: 'Asesoría fiscal',
    text: 'Resolvemos tus dudas, revisamos tu situación y te ayudamos a decidir con información clara.',
    msg: 'Hola, quisiera una asesoría fiscal.',
    img: '/images/asesoria.jpg',
    alt: 'Asesora mostrando un documento a un cliente en una oficina',
    span: 'md:col-span-12',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-paper px-4 py-24 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="inline-block rounded-full bg-pine px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Servicios</span>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)] text-pine">
            Todo para que cumplas, <span className="text-moss">sin dolor de cabeza.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-12">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 0.08} className={`${s.span} flex`}>
              <a
                href={wa(s.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex w-full flex-col justify-end overflow-hidden rounded-[2rem] bg-pine text-paper ${
                  s.span === 'md:col-span-12' ? 'min-h-[26rem] md:min-h-[30rem]' : 'min-h-[26rem] md:min-h-[34rem]'
                }`}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover opacity-70 transition-transform duration-[1200ms] ease-out-soft group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/55 to-transparent" />
                <div className="relative p-7 md:p-10">
                  <span className="display text-5xl text-lime md:text-6xl">{s.n}</span>
                  <h3 className="display mt-4 max-w-xl text-3xl md:text-[2.6rem] md:leading-[0.98]">{s.title}</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-paper/80">{s.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lime">
                    Cotizar por WhatsApp
                    <ArrowUpRight size={18} weight="bold" className="transition-transform duration-500 ease-out-soft group-hover:translate-x-1 group-hover:-translate-y-1" />
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
