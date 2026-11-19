import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MoreServices from './components/MoreServices'
import Statement from './components/Statement'
import Process from './components/Process'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { FloatingWhatsApp } from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MoreServices />
        <Statement />
        <Process />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
