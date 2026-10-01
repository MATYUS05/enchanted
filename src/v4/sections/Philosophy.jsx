import { contact, pillars } from '../../data/site'
import Button from '../ui/Button'
import Label from '../ui/Label'
import Reveal from '../ui/Reveal'

export default function Philosophy() {
  return (
    <section id="story" aria-labelledby="story-title">
      <div className="shell grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-24">
        <Reveal className="grid content-start justify-items-start gap-6">
          <Label>About</Label>
          <h2 id="story-title" className="font-display text-[clamp(2.25rem,4.2vw,3.5rem)] leading-[1.08] font-bold">
            Handcrafted,
            <br />
            Uniquely Yours
          </h2>
          <Button href={contact.whatsappUrl} variant="outline" className="mt-2">
            Tell us your vision <span aria-hidden="true">→</span>
          </Button>
        </Reveal>

        <Reveal delay={120} className="grid content-start gap-6">
          <blockquote className="border-l border-cream/40 pl-6 font-display text-xl leading-snug italic md:text-2xl">
            "Each Enchanted bouquet is handcrafted, making every piece uniquely yours."
          </blockquote>
          <p className="max-w-md text-[0.9375rem] text-cream/75">
            Natural flower growth and availability may create slight variations. We'll always design it as close as
            possible to the reference.
          </p>
          <ul className="mt-2 grid gap-5 border-t border-cream/15 pt-6 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="grid content-start gap-1 text-[0.8125rem] text-cream/75">
                <strong className="font-display text-lg text-cream">{pillar.title}</strong>
                {pillar.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
