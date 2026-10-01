import arrangement from '../../assets/img/cutout-arrangement.webp'
import pinkBouquet from '../../assets/img/cutout-pink.webp'
import heroBouquet from '../../assets/img/hero-bouquet.webp'
import { contact, steps, swatches, tones } from '../../data/site'
import Reveal from '../ui/Reveal'

const cutouts = [
  { src: heroBouquet, width: 435, height: 580 },
  { src: pinkBouquet, width: 435, height: 580 },
  { src: arrangement, width: 543, height: 724 },
]

const options = [
  { label: 'Size', value: 'Small · Medium · Large' },
  { label: 'Tone', value: tones.join(' · ') },
  { label: 'Color', value: swatches.map((swatch) => swatch.name).join(' · ') },
]

export default function Customize() {
  return (
    <section id="custom" aria-labelledby="custom-title">
      <div className="shell py-20 text-center md:py-28">
        <Reveal>
          <h2 id="custom-title" className="font-script text-[clamp(3.5rem,8vw,6rem)] leading-none">
            Let's Customize!
          </h2>
          <dl className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-3 border-b border-cream/20 pb-4 text-[0.8125rem]">
            {options.map((option) => (
              <div key={option.label} className="flex gap-2">
                <dt className="text-cream/60">{option.label}</dt>
                <dd>{option.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <ol className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="grid content-start justify-items-center gap-3">
              <img
                {...cutouts[i]}
                alt=""
                loading="lazy"
                className="h-64 w-auto drop-shadow-cutout transition-transform duration-500 hover:-translate-y-2 md:h-72"
              />
              <p className="mt-3 text-xs tracking-[0.2em] text-cream/65 uppercase">Step 0{i + 1}</p>
              <h3 className="font-display text-2xl font-bold">{step.title}</h3>
              <p className="max-w-[32ch] text-[0.9375rem] text-cream/80">{step.text}</p>
              <a
                href={contact.whatsappUrl}
                className="mt-3 inline-flex min-h-11 items-center border border-cream/50 px-6 text-xs tracking-[0.16em] uppercase transition-colors hover:bg-cream hover:text-wine"
              >
                Customize
              </a>
            </Reveal>
          ))}
        </ol>

        <p className="mt-12 text-[0.8125rem] text-cream/65">
          Color selection is based on availability to ensure the best quality.
        </p>
      </div>
    </section>
  )
}
