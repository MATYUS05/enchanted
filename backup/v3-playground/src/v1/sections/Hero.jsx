import heroBouquet from '../../assets/img/hero-bouquet.webp'
import { contact } from '../../data/site'
import Button from '../ui/Button'
import SpinBadge from '../ui/SpinBadge'

const sticker =
  'absolute rounded-full px-3.5 py-1.5 text-[0.6875rem] font-bold tracking-[0.14em] text-wine uppercase shadow-lg'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="rosy">
      <div className="shell grid gap-12 pt-12 pb-20 md:min-h-[min(calc(100svh-4rem),52rem)] md:grid-cols-[1.2fr_1fr] md:items-center md:gap-8 md:py-16">
        <div className="grid justify-items-start gap-6">
          <p className="eyebrow text-balance text-blush">Fresh &amp; artificial flowers · handcrafted · made to order</p>
          <h1 id="hero-title" className="grid">
            <span className="-ml-[0.04em] font-script text-[clamp(6.5rem,21vw,15rem)] leading-[0.78] text-peach">
              Arrange
            </span>
            <span className="text-[clamp(1.75rem,5.4vw,4.25rem)] leading-[1.05] tracking-[0.06em] uppercase">
              for your
              <br />
              special one
            </span>
          </h1>
          <p className="lede max-w-[34ch]">
            Each <em>Enchanted</em> bouquet is handcrafted, making every piece uniquely yours.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={contact.whatsappUrl}>Chat us on WhatsApp</Button>
            <Button href={contact.instagramUrl} variant="ghost">
              {contact.instagramHandle}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-[min(78%,22rem)] md:w-[min(100%,27rem)]">
          <img
            src={heroBouquet}
            alt="Handcrafted bouquet of red roses, pink lilies and carnations in burgundy wrapping"
            width="435"
            height="580"
            fetchPriority="high"
            className="block w-full rotate-[5deg] animate-sway drop-shadow-cutout"
          />
          <SpinBadge className="absolute bottom-4 -left-6 w-[clamp(6.5rem,14vw,9rem)]" />
          <p className={`${sticker} top-[8%] -right-2 rotate-[9deg] bg-cream`}>made to order</p>
          <p className={`${sticker} top-[46%] -right-5 -rotate-[7deg] bg-gold`}>
            handcrafted <span aria-hidden="true">♡</span>
          </p>
        </div>
      </div>
    </section>
  )
}
