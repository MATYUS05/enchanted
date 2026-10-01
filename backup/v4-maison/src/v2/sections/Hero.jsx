import heroBouquet from '../../assets/img/hero-bouquet.webp'
import { contact } from '../../data/site'
import Button from '../ui/Button'

const caps = 'text-[clamp(2rem,9vw,3.25rem)] leading-[0.95] tracking-[0.04em] uppercase lg:text-[clamp(2.75rem,4.6vw,5rem)]'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="lily-wash text-center">
      <div className="shell grid justify-items-center pt-10 pb-16 md:pt-14 md:pb-24">
        <p className="eyebrow text-balance text-raspberry">Fresh &amp; artificial flowers · handcrafted · made to order</p>

        <div className="mt-6 grid items-center justify-items-center gap-x-10 lg:grid-cols-[1fr_auto_1fr]">
          <h1 id="hero-title" className="contents">
            <span className="font-script text-[clamp(5.5rem,16vw,12rem)] leading-[0.85] text-wine-mid lg:col-span-3">
              Arrange
            </span>
            <span className={`${caps} lg:justify-self-end lg:text-right`}>
              for <br className="max-lg:hidden" />
              your
            </span>
            <span className={`${caps} lg:col-start-3 lg:justify-self-start lg:text-left`}>
              special <br className="max-lg:hidden" />
              one
            </span>
          </h1>

          <div className="mt-10 w-[min(72vw,22rem)] rounded-t-full border border-wine/25 p-2 lg:col-start-2 lg:row-start-2 lg:mt-4">
            <div className="rosy aspect-3/4 rounded-t-full">
              <img
                src={heroBouquet}
                alt="Handcrafted bouquet of red roses, pink lilies and carnations in burgundy wrapping"
                width="435"
                height="580"
                fetchPriority="high"
                className="w-full translate-y-[9%] scale-110 rotate-3 drop-shadow-soft"
              />
            </div>
          </div>
        </div>

        <p className="lede mt-16 max-w-[34ch] text-balance">
          Each <em>Enchanted</em> bouquet is handcrafted, making every piece uniquely yours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={contact.whatsappUrl}>Chat us on WhatsApp</Button>
          <Button href={contact.instagramUrl} variant="outline">
            {contact.instagramHandle}
          </Button>
        </div>
      </div>
    </section>
  )
}
