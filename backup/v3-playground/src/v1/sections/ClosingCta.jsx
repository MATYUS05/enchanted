import pinkBouquet from '../../assets/img/cutout-pink.webp'
import { contact } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function ClosingCta() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="rosy relative overflow-hidden text-center">
      <div className="shell grid justify-items-center py-20 md:py-32">
        <img
          src={pinkBouquet}
          alt=""
          width="435"
          height="580"
          loading="lazy"
          className="mb-4 w-44 -rotate-[9deg] drop-shadow-cutout lg:absolute lg:right-[4vw] lg:-bottom-20 lg:mb-0 lg:w-[clamp(11rem,20vw,19rem)]"
        />
        <Reveal className="relative grid justify-items-center gap-7">
          <h2 id="cta-title" className="headline-script">
            Let us enchant your day.
          </h2>
          <p className="lede max-w-[30ch]">
            Tell us your mood, occasion &amp; share your reference. We'll help you find the perfect bouquet.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={contact.whatsappUrl}>WhatsApp · {contact.whatsappDisplay}</Button>
            <Button href={contact.instagramUrl} variant="ghost">
              Instagram · {contact.instagramHandle}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
