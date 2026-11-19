import { CtaButton } from './WhatsAppButton'
import { WHATSAPP_DISPLAY } from '../config'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer id="contacto" className="px-4 pb-8 pt-24 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2.5rem] bg-pine px-8 py-20 text-center text-paper md:px-20 md:py-28">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Hablemos de tus impuestos, <em className="italic text-sand">hoy.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-paper/70">Mándanos un mensaje y te respondemos por WhatsApp.</p>
            <div className="mt-10 flex justify-center">
              <CtaButton dark label="Abrir WhatsApp" />
            </div>
            <p className="mt-6 text-sm text-paper/50">{WHATSAPP_DISPLAY}</p>
          </div>
        </Reveal>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 text-sm text-ink/50 md:flex-row">
          <span className="font-display text-lg text-ink">
            Grijalva<span className="text-clay">.</span> Despacho contable
          </span>
          <span>© {new Date().getFullYear()} Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
