import { steps, swatches, tones } from '../../data/site'
import Reveal from '../ui/Reveal'

export default function Customize() {
  return (
    <section id="custom" aria-labelledby="custom-title" className="rosy">
      <div className="shell py-20 md:py-32">
        <Reveal className="mb-14 grid justify-items-center gap-2 text-center md:mb-20">
          <h2 id="custom-title" className="headline-script">
            Let's Customize!
          </h2>
          <p aria-hidden="true" className="text-3xl leading-none text-blush">
            ♥
          </p>
        </Reveal>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 120}
              className="relative grid content-start gap-2.5 rounded-[1.25rem] border-[1.5px] border-blush/40 bg-wine-deep/90 px-7 pt-11 pb-8"
            >
              <span
                aria-hidden="true"
                className="absolute -top-6 left-1/2 grid size-11 -translate-x-1/2 place-items-center rounded-full bg-blush text-lg font-bold text-wine-deep"
              >
                {i + 1}
              </span>
              <h3 className="font-sans text-xl font-bold">{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 grid justify-items-center gap-5 text-center md:mt-20">
          <p className="eyebrow text-blush">Pick your vibe</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {tones.map((tone) => (
              <li key={tone} className="pill">
                {tone}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm">
            {swatches.map((swatch) => (
              <li key={swatch.name} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  style={{ background: swatch.color }}
                  className="size-6 rounded-full ring-2 ring-cream/35"
                />
                {swatch.name}
              </li>
            ))}
          </ul>
          <p className="text-[0.8125rem] opacity-75">
            Color selection is based on availability to ensure the best quality.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
