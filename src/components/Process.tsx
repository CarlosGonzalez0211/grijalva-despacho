import Reveal from './Reveal'

const steps = [
  ['01', 'Nos escribes', 'Cuéntanos por WhatsApp qué necesitas. Sin citas ni formularios.'],
  ['02', 'Revisamos tu caso', 'Analizamos tu situación fiscal y te explicamos, en palabras claras, qué procede.'],
  ['03', 'Nos encargamos', 'Presentamos, calculamos y pagamos lo que corresponde, y te enviamos tus acuses.'],
  ['04', 'Te mantenemos al día', 'Te avisamos de fechas límite y cambios que te afecten, antes de que sean un problema.'],
]

export default function Process() {
  return (
    <section id="proceso" className="px-4 py-24 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <span className="inline-block rounded-full bg-pine/[0.07] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-moss">Cómo trabajamos</span>
          <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Cercanía <em className="italic text-clay">y claridad.</em>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-ink/65">
            Toda la comunicación es por WhatsApp: rápida, directa y con registro de todo lo que acordamos.
          </p>
        </Reveal>
        <ol className="divide-y divide-pine/10 border-y border-pine/10">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.06}>
              <li className="grid grid-cols-[auto_1fr] gap-x-8 py-8">
                <span className="font-display text-2xl font-light text-clay">{n}</span>
                <div>
                  <h3 className="font-display text-2xl">{t}</h3>
                  <p className="mt-2 leading-relaxed text-ink/65">{d}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
