import { pillars, storyPhotos } from '../../data/site'
import Polaroid from '../ui/Polaroid'
import Reveal from '../ui/Reveal'

const stackPosition = ['', 'z-1 mt-12 -ml-8', '-ml-8']

export default function About() {
  return (
    <section id="story" aria-labelledby="story-title" className="lily-wash">
      <div className="shell grid items-center gap-14 py-20 md:grid-cols-2 md:gap-20 md:py-32">
        <Reveal className="flex justify-center py-4">
          {storyPhotos.map((photo, i) => (
            <Polaroid key={photo.caption} {...photo} className={`min-w-0 flex-[0_1_15rem] ${stackPosition[i]}`} />
          ))}
        </Reveal>

        <Reveal delay={120} className="grid max-w-xl gap-6">
          <p className="eyebrow text-raspberry">About Enchanted</p>
          <h2 id="story-title" className="headline">
            Handcrafted flowers, <em>uniquely yours.</em>
          </h2>
          <p>
            Each <em>Enchanted</em> bouquet is handcrafted, making every piece uniquely yours. Natural flower growth
            and availability may create slight variations. We'll always design it as close as possible to the
            reference.
          </p>
          <ul className="grid gap-4 border-t border-wine/20 pt-6">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="grid gap-1 text-[0.9375rem] sm:grid-cols-[11rem_1fr] sm:gap-4">
                <strong className="pt-0.5 text-xs tracking-[0.16em] uppercase">{pillar.title}</strong>
                {pillar.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
