import { steps } from '../../data/site'
import Heading from '../ui/Heading'
import Reveal from '../ui/Reveal'

const tones = ['bg-cream text-wine', 'bg-blush text-wine', 'bg-wine text-cream']

export default function Steps() {
  return (
    <section id="custom" aria-labelledby="custom-title" className="bg-gold text-wine">
      <div className="shell py-20 md:py-32">
        <Reveal className="mb-12 md:mb-16">
          <Heading id="custom-title" before="Let's" script="Customize!" scriptClassName="text-cream" />
        </Reveal>

        <ol className="mx-auto grid max-w-4xl gap-6 pb-10">
          {steps.map((step, i) => (
            <li
              key={step.title}
              style={{ top: `${5.5 + i * 1.75}rem` }}
              className={`sticky grid gap-3 rounded-[2rem] p-7 shadow-[0_-0.5rem_2rem_rgb(30_4_14/0.18)] md:grid-cols-[9rem_1fr] md:items-center md:gap-8 md:p-12 ${tones[i]}`}
            >
              <span aria-hidden="true" className="shout text-[clamp(4.5rem,12vw,9rem)]">
                {i + 1}
              </span>
              <div>
                <h3 className="shout text-[clamp(1.6rem,4vw,3rem)]">{step.title}</h3>
                <p className="mt-3 max-w-prose text-lg">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
