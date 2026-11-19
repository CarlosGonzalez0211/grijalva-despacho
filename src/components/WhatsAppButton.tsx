import { ArrowUpRight, WhatsappLogo } from '@phosphor-icons/react'
import { wa } from '../config'

type Variant = 'lime' | 'pine'

export function CtaButton({ label = 'Escríbenos por WhatsApp', message, variant = 'lime' }: { label?: string; message?: string; variant?: Variant }) {
  const styles =
    variant === 'lime'
      ? 'bg-lime text-pine hover:bg-white'
      : 'bg-pine text-paper hover:bg-pine-2'
  const dot = variant === 'lime' ? 'bg-pine text-lime' : 'bg-lime text-pine'
  return (
    <a
      href={wa(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-5 rounded-full py-2.5 pl-8 pr-2.5 text-base font-bold transition-all duration-500 ease-out-soft active:scale-[0.98] ${styles}`}
    >
      {label}
      <span className={`grid size-12 place-items-center rounded-full transition-transform duration-500 ease-out-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${dot}`}>
        <ArrowUpRight size={20} weight="bold" />
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
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25d366] text-pine shadow-[0_10px_30px_-8px_rgba(0,0,0,.5)] transition-transform duration-500 ease-out-soft hover:scale-105 active:scale-95"
    >
      <WhatsappLogo size={30} weight="fill" />
    </a>
  )
}
