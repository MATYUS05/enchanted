import { contact, marqueeItems } from '../data/site'
import Footer from './layout/Footer'
import Header from './layout/Header'
import About from './sections/About'
import ClosingCta from './sections/ClosingCta'
import Customize from './sections/Customize'
import Flowers from './sections/Flowers'
import Hero from './sections/Hero'
import LoveNotes from './sections/LoveNotes'
import Button from './ui/Button'
import Marquee from './ui/Marquee'

export default function App({ toggle }) {
  return (
    <div id="top" className="overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-wine"
      >
        Skip to content
      </a>
      <Header toggle={toggle} />
      <main id="main">
        <Hero />
        <Marquee items={marqueeItems} />
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
          className="pointer-events-auto border-wine shadow-[0_0.75rem_2rem_rgb(30_4_14/0.45)]"
        >
          Chat us on WhatsApp <span aria-hidden="true">♡</span>
        </Button>
      </div>
    </div>
  )
}
