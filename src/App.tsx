import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
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
        <Services />
        <Process />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
