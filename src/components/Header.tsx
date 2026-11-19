import { useEffect, useState } from 'react'
import { wa } from '../config'

const links = [
  ['Servicios', '#servicios'],
  ['Cómo trabajamos', '#proceso'],
  ['Preguntas', '#preguntas'],
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-4xl items-center justify-between rounded-full py-2 pl-6 pr-2 transition-all duration-500 ease-out-soft ${
          scrolled ? 'bg-paper/85 shadow-[0_8px_30px_-12px_rgba(15,42,34,.25)] ring-1 ring-pine/10 backdrop-blur-xl' : 'bg-transparent'
        }`}
        aria-label="Principal"
      >
        <a href="#inicio" className="font-display text-xl font-medium tracking-tight">
          Grijalva<span className="text-clay">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="text-ink/70 transition-colors hover:text-ink">{l}</a>
            </li>
          ))}
        </ul>
        <a href={wa()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-pine px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-500 hover:bg-pine-2">
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
