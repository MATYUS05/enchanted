import { pillars } from '../../data/site'
import Reveal from '../ui/Reveal'

const words = 'Each Enchanted bouquet is handcrafted, making every piece uniquely yours.'.split(' ')
const accents = ['Enchanted', 'uniquely', 'yours.']

export default function Story() {
  return (
    <section id="story" aria-label="About Enchanted" className="bg-cream">
      <div className="shell grid justify-items-center gap-10 py-24 text-center md:py-36">
        <p className="word-reveal shout max-w-5xl text-[clamp(2.25rem,6.6vw,5.5rem)] leading-[1.02]">
          {words.map((word, i) => (
            <span
              key={i}
              style={{ '--i': i }}
              className={
                accents.includes(word) ? 'font-display font-normal tracking-normal text-raspberry normal-case' : ''
              }
            >
              {word}{' '}
            </span>
          ))}
        </p>
        <Reveal className="grid justify-items-center gap-6">
          <ul className="flex flex-wrap justify-center gap-2">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="pill">
                {pillar.title}
              </li>
            ))}
          </ul>
          <p className="max-w-xl">
            Natural flower growth and availability may create slight variations. We'll always design it as close as
            possible to the reference.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
