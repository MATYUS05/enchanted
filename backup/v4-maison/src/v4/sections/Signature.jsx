import { artificialReasons, contact } from '../../data/site'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function Signature() {
  return (
    <section aria-labelledby="why-title">
      <div className="velvet-bright grid min-h-[26rem] place-items-center px-5 py-16 md:min-h-[32rem]">
        <Reveal className="frost grid max-w-xl justify-items-center gap-5 px-8 py-12 text-center md:px-14">
          <p className="text-xs tracking-[0.2em] text-cream/80 uppercase">Why artificial?</p>
          <h2 id="why-title" className="font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.12] font-bold">
            Your love may be a moment, but the <em>memory can last forever.</em>
          </h2>
          <Button href={contact.whatsappUrl} variant="outline" className="mt-2">
            Arrange yours <span aria-hidden="true">→</span>
          </Button>
        </Reveal>
      </div>

      <div className="shell">
        <ul className="grid gap-8 py-14 md:grid-cols-3 md:gap-12 md:py-20">
          {artificialReasons.map((reason, i) => (
            <Reveal as="li" key={reason.title} delay={i * 100} className="grid content-start gap-2 border-t border-cream/20 pt-5">
              <h3 className="font-display text-2xl font-bold">{reason.title}</h3>
              <p className="text-[0.9375rem] text-cream/75">{reason.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
