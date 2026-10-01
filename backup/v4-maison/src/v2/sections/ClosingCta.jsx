import arrangement from '../../assets/img/cutout-arrangement.webp'
import pinkBouquet from '../../assets/img/cutout-pink.webp'
import emblem from '../../assets/img/logo-emblem-wine.png'
import { contact } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const cutout = 'absolute w-[clamp(11rem,18vw,17rem)] max-lg:hidden'

export default function ClosingCta() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="relative overflow-hidden text-center">
      <div className="shell grid justify-items-center py-20 md:py-32">
        <img src={emblem} alt="" width="406" height="558" loading="lazy" className="mb-8 w-14" />
        <Reveal className="relative grid justify-items-center gap-7">
          <h2 id="cta-title" className="headline-script text-wine">
            Let us enchant your day.
          </h2>
          <p className="lede max-w-[30ch]">
            Tell us your mood, occasion &amp; share your reference. We'll help you find the perfect bouquet.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={contact.whatsappUrl}>WhatsApp · {contact.whatsappDisplay}</Button>
            <Button href={contact.instagramUrl} variant="outline">
              Instagram · {contact.instagramHandle}
            </Button>
          </div>
        </Reveal>
        <img
          src={pinkBouquet}
          alt=""
          width="435"
          height="580"
          loading="lazy"
          className={`${cutout} -bottom-16 left-[3vw] rotate-[8deg] drop-shadow-soft`}
        />
        <img
          src={arrangement}
          alt=""
          width="543"
          height="724"
          loading="lazy"
          className={`${cutout} right-[3vw] -bottom-12 -rotate-6`}
        />
      </div>
    </section>
  )
}
