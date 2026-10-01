import emblem from '../../assets/img/logo-emblem-cream.png'
import { pillars, storyPhoto } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

export default function About() {
  return (
    <section id="story" aria-labelledby="story-title" className="bg-peach">
      <div className="shell grid items-center gap-14 py-20 md:py-32 lg:grid-cols-[auto_1fr] lg:gap-24">
        <Reveal className="relative mx-auto w-[min(70vw,19rem)]">
          <div className="rounded-full border border-wine/30 p-2">
            <img
              src={storyPhoto.src}
              alt={storyPhoto.alt}
              width={storyPhoto.width}
              height={storyPhoto.height}
              loading="lazy"
              className="block aspect-3/4 w-full rounded-full object-cover"
            />
          </div>
          <span className="absolute -right-3 bottom-6 grid size-24 place-items-center rounded-full bg-wine shadow-photo">
            <img src={emblem} alt="" width="406" height="558" loading="lazy" className="h-14 w-auto" />
          </span>
        </Reveal>

        <Reveal delay={120} className="grid gap-7">
          <SectionLabel number="01">About Enchanted</SectionLabel>
          <h2 id="story-title" className="text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.08] tracking-tight text-balance">
            Each <em>Enchanted</em> bouquet is handcrafted, making every piece <em>uniquely yours.</em>
          </h2>
          <p className="max-w-xl">
            Natural flower growth and availability may create slight variations. We'll always design it as close as
            possible to the reference.
          </p>
          <ul className="grid gap-6 border-t border-wine/20 pt-7 sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <li key={pillar.title} className="grid content-start gap-1.5 text-[0.9375rem]">
                <span className="font-display text-2xl text-raspberry italic">0{i + 1}</span>
                <strong className="text-xs tracking-[0.16em] uppercase">{pillar.title}</strong>
                {pillar.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
