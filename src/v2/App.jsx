import { contact } from '../data/site'
import Footer from './layout/Footer'
import Header from './layout/Header'
import About from './sections/About'
import ClosingCta from './sections/ClosingCta'
import Customize from './sections/Customize'
import Flowers from './sections/Flowers'
import Hero from './sections/Hero'
import LoveNotes from './sections/LoveNotes'
import Button from './ui/Button'

export default function App({ toggle }) {
  return (
    <div id="top" className="overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-wine focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Header toggle={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Flowers />
        <Customize />
        <LoveNotes />
        <ClosingCta />
      </main>
      <Footer />
      <div className="pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex justify-center md:hidden">
        <Button
          href={contact.whatsappUrl}
          className="pointer-events-auto border-cream/60 shadow-[0_0.75rem_2rem_rgb(30_4_14/0.45)]"
        >
          Chat us on WhatsApp
        </Button>
      </div>
    </div>
  )
}
