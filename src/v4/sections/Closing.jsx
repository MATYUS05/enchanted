import emblem from '../../assets/img/logo-emblem-cream.png'
import { contact } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function Closing() {
  return (
    <section id="contact" aria-labelledby="closing-title" className="velvet">
      <Reveal className="shell grid justify-items-center gap-6 py-24 text-center md:py-36">
        <img src={emblem} alt="" width="406" height="558" loading="lazy" className="w-12" />
        <h2 id="closing-title" className="font-script text-[clamp(3.5rem,9vw,7rem)] leading-[0.95]">
          Let us enchant your day.
        </h2>
        <p className="max-w-md text-[0.9375rem] text-cream/85">
          Tell us your mood, occasion &amp; share your reference. We'll help you find the perfect bouquet.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Button href={contact.whatsappUrl}>WhatsApp · {contact.whatsappDisplay}</Button>
          <Button href={contact.instagramUrl} variant="outline">
            Instagram · {contact.instagramHandle}
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
