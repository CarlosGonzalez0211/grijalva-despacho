import { CtaButton } from './WhatsAppButton'
import { WHATSAPP_DISPLAY } from '../config'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer id="contacto" className="bg-pine px-4 pb-8 pt-24 text-paper md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display text-[clamp(3rem,10.5vw,9.5rem)]">
            Hablemos de tus <span className="text-lime">impuestos.</span>
          </h2>
          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <CtaButton label="Abrir WhatsApp" />
            <span className="text-paper/60">{WHATSAPP_DISPLAY}</span>
          </div>
        </Reveal>
        <div className="mt-24 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-8 text-sm text-paper/50 md:flex-row md:items-center">
          <span className="display text-xl text-paper">
            Grijalva<span className="text-lime">.</span> <span className="font-sans text-sm font-normal tracking-normal text-paper/50">Despacho contable · Ciudad Juárez</span>
          </span>
          <span>
            © {new Date().getFullYear()} Todos los derechos reservados · Fotografías de{' '}
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-lime">Unsplash</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
