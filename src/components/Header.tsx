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
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full py-2 pl-7 pr-2 transition-all duration-500 ease-out-soft ${
          scrolled ? 'bg-pine/90 shadow-[0_10px_40px_-12px_rgba(0,0,0,.6)] ring-1 ring-white/10 backdrop-blur-xl' : 'bg-transparent'
        }`}
        aria-label="Principal"
      >
        <a href="#inicio" className="display text-2xl text-paper">
          Grijalva<span className="text-lime">.</span>
        </a>
        <ul className="hidden items-center gap-9 text-sm font-medium text-paper/80 md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a href={h} className="transition-colors hover:text-lime">{l}</a>
            </li>
          ))}
        </ul>
        <a href={wa()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-lime px-6 py-3 text-sm font-bold text-pine transition-colors duration-500 hover:bg-white">
          WhatsApp
        </a>
      </nav>
    </header>
  )
}
