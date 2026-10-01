import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/sections/About'
import ClosingCta from './components/sections/ClosingCta'
import Customize from './components/sections/Customize'
import Flowers from './components/sections/Flowers'
import Hero from './components/sections/Hero'
import LoveNotes from './components/sections/LoveNotes'
import Button from './components/ui/Button'
import Marquee from './components/ui/Marquee'
import { contact, marqueeItems } from './data/site'

export default function App() {
  return (
    <div id="top" className="overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-wine"
      >
        Skip to content
      </a>
      <Header />
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
