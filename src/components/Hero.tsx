import { motion } from 'motion/react'
import { CheckCircle, FileText } from '@phosphor-icons/react'
import { CtaButton } from './WhatsAppButton'

const ease = [0.32, 0.72, 0, 1] as const

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-24 pt-36 md:pb-40 md:pt-48">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}
            className="inline-block rounded-full bg-pine/[0.07] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-moss">
            Despacho contable y fiscal
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mt-6 font-display text-[clamp(2.6rem,6.4vw,5.4rem)] font-light leading-[1.02] tracking-[-0.03em]">
            Tus impuestos en orden, <em className="font-normal italic text-clay">sin complicarte la vida.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
            Nos encargamos de tus declaraciones, tu nómina y tus obligaciones ante el SAT, el IMSS y el ISN. Tú te dedicas a tu negocio; nosotros a que todo esté al corriente.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton />
            <span className="text-sm text-ink/55">Respuesta directa, sin formularios.</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease }}
          className="rounded-[2rem] bg-pine/[0.06] p-1.5 ring-1 ring-pine/10">
          <div className="grain relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-pine p-8 text-paper shadow-[inset_0_1px_0_rgba(255,255,255,.1)]">
            <FileText size={32} weight="light" className="text-sand" />
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-sand/70">Estatus fiscal</p>
            <p className="mt-2 font-display text-3xl font-light leading-tight">Opinión de cumplimiento positiva</p>
            <ul className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm text-paper/80">
              {['Declaraciones al corriente', 'Constancia de situación fiscal vigente', 'Cuotas IMSS e ISN pagadas'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <CheckCircle size={20} weight="light" className="shrink-0 text-sand" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
