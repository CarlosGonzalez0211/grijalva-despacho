import {
  Bank,
  CalendarCheck,
  ChartLineUp,
  EnvelopeOpen,
  HardDrives,
  Lightbulb,
  MagnifyingGlass,
  Notebook,
  Receipt,
  ShieldCheck,
  UsersThree,
  WarningCircle,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'
import Reveal from './Reveal'
import { wa } from '../config'

type Item = { icon: Icon; title: string; text: string }

const items: Item[] = [
  { icon: Notebook, title: 'Contabilidad mensual', text: 'Registro y clasificación de tus ingresos y gastos.' },
  { icon: HardDrives, title: 'Contabilidad electrónica', text: 'Envío de catálogo y balanzas al SAT.' },
  { icon: CalendarCheck, title: 'Declaraciones mensuales y anual', text: 'ISR, IVA, retenciones y DIOT, en tiempo y forma.' },
  { icon: Receipt, title: 'Facturación electrónica (CFDI)', text: 'Emisión y control de tus facturas.' },
  { icon: Bank, title: 'Conciliaciones bancarias', text: 'Tus estados de cuenta cuadrados con tu contabilidad.' },
  { icon: ChartLineUp, title: 'Estados financieros', text: 'Balance y resultados explicados en lenguaje sencillo.' },
  { icon: EnvelopeOpen, title: 'Buzón tributario', text: 'Lo revisamos y te avisamos antes de que venza algo.' },
  { icon: WarningCircle, title: 'Requerimientos del SAT', text: 'Los atendemos y respondemos a tiempo.' },
  { icon: ShieldCheck, title: 'Defensa y autocorrección fiscal', text: 'Regularizamos tu situación ante la autoridad.' },
  { icon: MagnifyingGlass, title: 'Auditorías y revisiones', text: 'Revisamos tus cifras antes de que lo haga alguien más.' },
  { icon: UsersThree, title: 'IMSS e Infonavit', text: 'Altas, bajas, modificaciones y planeación de cuotas.' },
  { icon: Lightbulb, title: 'Consultoría contable', text: 'Decisiones de negocio apoyadas en tus números.' },
]

export default function MoreServices() {
  return (
    <section className="bg-pine-2 px-4 py-24 text-paper md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="inline-block rounded-full bg-lime px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-pine">También te ayudamos con</span>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">
            Y mucho más, <span className="text-lime">a tu medida.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70">
            ¿No ves lo que necesitas? Escríbenos: armamos el servicio según tu negocio.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <li key={it.title}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <a
                  href={wa(`Hola, me interesa el servicio de ${it.title.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[1.75rem] border border-white/15 p-7 transition-colors duration-500 ease-out-soft hover:border-lime hover:bg-lime hover:text-pine"
                >
                  <it.icon size={34} weight="light" className="text-lime transition-colors duration-500 group-hover:text-pine" />
                  <h3 className="display mt-10 text-2xl leading-[1.05] md:text-[1.7rem]">{it.title}</h3>
                  <p className="mt-3 leading-relaxed text-paper/65 transition-colors duration-500 group-hover:text-pine/80">{it.text}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
