import Reveal from './Reveal'

const steps = [
  ['01', 'Nos escribes', 'Cuéntanos por WhatsApp qué necesitas. Sin citas ni formularios.'],
  ['02', 'Revisamos tu caso', 'Analizamos tu situación fiscal y te explicamos, en palabras claras, qué procede.'],
  ['03', 'Nos encargamos', 'Presentamos, calculamos y pagamos lo que corresponde, y te enviamos tus acuses.'],
  ['04', 'Te mantenemos al día', 'Te avisamos de fechas límite y cambios que te afecten, antes de que sean un problema.'],
]

export default function Process() {
  return (
    <section id="proceso" className="bg-pine px-4 py-24 text-paper md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="inline-block rounded-full bg-lime px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-pine">Cómo trabajamos</span>
          <h2 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">
            Cercanía, claridad y <span className="text-lime">todo por WhatsApp.</span>
          </h2>
        </Reveal>
        <ol className="mt-16 divide-y divide-white/15 border-y border-white/15">
          {steps.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.05}>
              <li className="grid items-baseline gap-x-10 gap-y-3 py-9 md:grid-cols-[8rem_1fr_1.2fr]">
                <span className="display text-6xl text-lime md:text-7xl">{n}</span>
                <h3 className="display text-3xl md:text-4xl">{t}</h3>
                <p className="leading-relaxed text-paper/70">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
