import Reveal from './Reveal'

const facts = [
  ['Pequeñas y grandes', 'Del negocio familiar a la empresa con plantilla grande.'],
  ['Ciudad Juárez', 'Conocemos la ciudad y a quienes la hacen trabajar.'],
  ['Trato directo', 'Hablas con quien lleva tu caso, sin intermediarios.'],
]

export default function About() {
  return (
    <section id="nosotros" className="bg-paper px-4 py-24 md:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_1fr] md:gap-20">
        <Reveal>
          <span className="inline-block rounded-full bg-pine px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-lime">Nosotros</span>
          <div className="mt-8 flex items-end gap-4">
            <span className="display text-[clamp(7rem,20vw,15rem)] leading-[0.8] text-pine">30<span className="text-lime [-webkit-text-stroke:3px_var(--color-pine)]">+</span></span>
            <span className="display pb-3 text-3xl leading-[0.95] text-pine md:pb-6 md:text-5xl">años de<br />experiencia</span>
          </div>
          <h2 className="display mt-10 max-w-xl text-3xl text-moss md:text-[2.6rem] md:leading-[1]">
            Cuidando las cuentas de los negocios de Ciudad Juárez.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Llevamos más de tres décadas acompañando a empresas de Ciudad Juárez, desde el comercio de la esquina hasta compañías grandes. Hemos visto cambiar la ley, el SAT y la ciudad, y en todo ese tiempo seguimos trabajando igual: hablamos claro, respondemos rápido y tratamos tus obligaciones como si fueran nuestras.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <img
              src="/images/nosotros.jpg"
              alt="Dos personas revisando un formato fiscal sobre una mesa"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-6 left-4 right-4 rounded-[1.5rem] bg-lime p-6 text-pine shadow-[0_20px_40px_-20px_rgba(10,31,24,.5)] md:-left-8 md:right-auto md:max-w-xs">
              <p className="display text-2xl leading-[1]">Experiencia que se nota en tus números.</p>
            </div>
          </div>
        </Reveal>
      </div>

      <ul className="mx-auto mt-24 grid max-w-6xl gap-px overflow-hidden rounded-[2rem] bg-pine/15 md:mt-32 md:grid-cols-3">
        {facts.map(([t, d]) => (
          <li key={t} className="bg-paper p-8 md:p-10">
            <h3 className="display text-2xl text-pine md:text-3xl">{t}</h3>
            <p className="mt-3 leading-relaxed text-ink/65">{d}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
