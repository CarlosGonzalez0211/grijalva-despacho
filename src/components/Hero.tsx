import { motion } from 'motion/react'
import { CtaButton } from './WhatsAppButton'

const ease = [0.32, 0.72, 0, 1] as const

const ticker = [
  'Presentación de impuestos',
  'Constancia de situación fiscal',
  'Opinión de cumplimiento',
  'Cálculo de nómina',
  'Finiquito · Aguinaldo · Utilidades',
  'IMSS e ISN',
  'Asesoría fiscal',
]

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-pine text-paper">
      <img
        src="/images/hero.jpg"
        alt="Contador capturando cifras en una calculadora sobre su escritorio"
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine via-pine/60 to-pine/30" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-4 pb-14 pt-40 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="display text-[clamp(3.2rem,11.5vw,10.5rem)]"
        >
          Tus impuestos,
          <br />
          <span className="text-lime">resueltos.</span>
        </motion.h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="max-w-md text-lg leading-relaxed text-paper/80"
          >
            Declaraciones, nómina, IMSS e ISN y asesoría fiscal. Nos encargamos del SAT para que tú te dediques a tu negocio.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45, ease }}>
            <CtaButton />
          </motion.div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-white/15 bg-pine/70 py-5 backdrop-blur-sm" aria-hidden="true">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-paper/70">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              {t}
              <span className="text-lime">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
