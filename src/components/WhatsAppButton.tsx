import { ArrowUpRight, WhatsappLogo } from '@phosphor-icons/react'
import { wa } from '../config'

export function CtaButton({ label = 'Escríbenos por WhatsApp', message, dark = false }: { label?: string; message?: string; dark?: boolean }) {
  return (
    <a
      href={wa(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-4 rounded-full py-2 pl-7 pr-2 text-[15px] font-semibold transition-all duration-500 ease-out-soft active:scale-[0.98] ${
        dark ? 'bg-sand text-pine hover:bg-white' : 'bg-pine text-paper hover:bg-pine-2'
      }`}
    >
      {label}
      <span className={`grid size-11 place-items-center rounded-full transition-transform duration-500 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${dark ? 'bg-pine text-sand' : 'bg-clay text-white'}`}>
        <ArrowUpRight size={18} weight="light" />
      </span>
    </a>
  )
}

export function FloatingWhatsApp() {
  return (
    <a
      href={wa()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#1f9d57] text-white shadow-[0_10px_30px_-8px_rgba(15,42,34,.5)] transition-transform duration-500 ease-out-soft hover:scale-105 active:scale-95"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}
