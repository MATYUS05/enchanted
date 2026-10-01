import heroBouquet from '../../assets/img/hero-bouquet.webp'
import { contact } from '../../data/site'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="velvet relative overflow-hidden">
      <img
        src={heroBouquet}
        alt="Handcrafted bouquet of red roses, pink lilies and carnations in burgundy wrapping"
        width="435"
        height="580"
        fetchPriority="high"
        className="relative mx-auto block w-[min(80vw,25rem)] pt-8 drop-shadow-cutout lg:absolute lg:top-1/2 lg:left-[40%] lg:h-[90%] lg:w-auto lg:-translate-y-1/2 lg:pt-0"
      />
      <div className="glass-blocks relative z-10 -mt-28 px-5 pt-32 pb-28 md:px-10 md:pb-14 lg:mt-0 lg:flex lg:min-h-[min(calc(100svh-4rem),48rem)] lg:w-[47%] lg:items-end lg:pt-24 lg:pr-12 lg:pb-20 lg:pl-[max(2.5rem,calc((100vw-84rem)/2+2.5rem))]">
        <div className="grid justify-items-start gap-5">
          <p className="text-xs tracking-[0.2em] uppercase">Enchanted • Fresh &amp; Artificial Flowers</p>
          <h1
            id="hero-title"
            className="max-w-[12ch] font-display text-[clamp(2.75rem,5.4vw,4.75rem)] leading-[1.02] font-bold"
          >
            Arrange for Your Special One
          </h1>
          <p className="max-w-sm text-[0.9375rem] text-cream/85">
            Each <em>Enchanted</em> bouquet is handcrafted, making every piece uniquely yours.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 max-md:hidden">
            <Button href={contact.whatsappUrl}>Chat us on WhatsApp</Button>
            <a
              href={contact.instagramUrl}
              className="border-b border-cream/40 pb-0.5 text-[0.8125rem] transition-colors hover:border-cream"
            >
              {contact.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
