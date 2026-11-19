import Reveal from './Reveal'

export default function Statement() {
  return (
    <section className="bg-lime px-4 py-28 text-pine md:py-44">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="display text-[clamp(2.4rem,7.4vw,6.8rem)]">
            Tú te dedicas a tu negocio. Nosotros a que todo esté <span className="italic">al corriente.</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-14 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.14em]">
            {['SAT', 'IMSS', 'ISN', 'Nómina', 'Asesoría'].map((t) => (
              <li key={t} className="rounded-full border-2 border-pine px-5 py-2.5">{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
