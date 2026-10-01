import { useState } from 'react'
import { artificialReasons, creations } from '../../data/site'
import Heading from '../ui/Heading'
import Reveal from '../ui/Reveal'

const cards = [
  {
    label: 'Fresh flowers',
    title: 'Fresh',
    text: 'Real blooms, arranged by hand. Nature decides the little details, so no two bouquets are ever the same.',
    tone: 'bg-raspberry text-cream',
  },
  ...artificialReasons.map((reason, i) => ({
    label: 'Artificial flowers',
    ...reason,
    tone: ['bg-wine text-cream', 'bg-gold text-wine', 'bg-blush text-wine'][i],
  })),
]

const face = 'absolute inset-0 grid rounded-[1.75rem] p-5 text-left backface-hidden md:p-7'

export default function FlipCards() {
  const [flipped, setFlipped] = useState([])

  const flip = (title) =>
    setFlipped((current) => (current.includes(title) ? current.filter((item) => item !== title) : [...current, title]))

  return (
    <section id="flowers" aria-labelledby="flowers-title" className="bg-cream text-wine">
      <div className="shell py-20 md:py-32">
        <Reveal className="mb-12 md:mb-16">
          <Heading id="flowers-title" before="Fresh" script="or" after="forever?" />
          <p className="mt-5 max-w-md text-lg">Two ways to bloom. Tap a card to flip it.</p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
          {cards.map((card, i) => {
            const isFlipped = flipped.includes(card.title)
            return (
              <Reveal as="li" key={card.title} delay={i * 80}>
                <button
                  type="button"
                  aria-pressed={isFlipped}
                  onClick={() => flip(card.title)}
                  className="block aspect-[3/4.2] w-full cursor-pointer perspective-[1000px] sm:aspect-3/4"
                >
                  <span
                    className={`relative block size-full transition-transform duration-500 transform-3d ${isFlipped ? 'rotate-y-180' : 'hover:-rotate-y-12'}`}
                  >
                    <span className={`${face} content-between ${card.tone}`}>
                      <span className="text-[0.6875rem] font-bold tracking-[0.16em] uppercase opacity-80">
                        {card.label}
                      </span>
                      <span className="shout text-[clamp(1.25rem,2.6vw,2.15rem)]">{card.title}</span>
                      <span className="text-xs font-bold tracking-widest uppercase">flip ↻</span>
                    </span>
                    <span className={`${face} rotate-y-180 content-center border-[1.5px] border-wine bg-cream`}>
                      <span className="text-[0.9375rem] leading-snug md:text-lg">{card.text}</span>
                    </span>
                  </span>
                </button>
              </Reveal>
            )
          })}
        </ul>

        <Reveal className="mt-14 grid gap-8 md:mt-20 lg:grid-cols-2 lg:items-end">
          <p className="max-w-[18ch] font-display text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.15]">
            Your love may be a moment, but the <em className="text-raspberry">memory can last forever.</em>
          </p>
          <div className="grid gap-3">
            <p className="eyebrow text-raspberry">We make</p>
            <ul className="flex flex-wrap gap-2">
              {creations.map((creation) => (
                <li key={creation} className="pill">
                  {creation}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
