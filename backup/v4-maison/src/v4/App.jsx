import { contact } from '../data/site'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Closing from './sections/Closing'
import Collections from './sections/Collections'
import Customize from './sections/Customize'
import Gallery from './sections/Gallery'
import Hero from './sections/Hero'
import LoveNotes from './sections/LoveNotes'
import Philosophy from './sections/Philosophy'
import Signature from './sections/Signature'
import Button from './ui/Button'

const ribbon = ['Enchanted', 'Fresh Flowers', 'Enchanted', 'Artificial Flowers', 'Enchanted', 'Handcrafted', 'Enchanted', 'Made to Order']

export default function App({ toggle }) {
  return (
    <div id="top" className="overflow-x-clip bg-wine text-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-wine"
      >
        Skip to content
      </a>
      <Header toggle={toggle} />
      <main id="main">
        <Hero />
        <Philosophy />
        <div aria-hidden="true" className="overflow-hidden border-y border-cream/10 bg-black/25 py-3">
          <div className="flex w-max animate-marquee">
            {[...ribbon, ...ribbon].map((item, i) => (
              <span key={i} className="px-9 font-display text-sm font-bold whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
        <Collections />
        <Signature />
        <Gallery />
        <Customize />
        <LoveNotes />
        <Closing />
      </main>
      <Footer />
      <div className="pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex justify-center md:hidden">
        <Button href={contact.whatsappUrl} className="pointer-events-auto shadow-[0_0.75rem_2rem_rgb(0_0_0/0.5)]">
          Chat us on WhatsApp
        </Button>
      </div>
    </div>
  )
}
