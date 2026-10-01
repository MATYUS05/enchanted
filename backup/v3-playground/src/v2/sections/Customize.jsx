import { steps, swatches, tones } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

export default function Customize() {
  return (
    <section id="custom" aria-labelledby="custom-title" className="rosy scallop">
      <div className="shell py-24 md:py-36">
        <Reveal className="mb-14 grid justify-items-center gap-5 text-center md:mb-20">
          <SectionLabel number="03" className="text-blush">
            How it works
          </SectionLabel>
          <h2 id="custom-title" className="headline-script">
            Let's Customize!
          </h2>
        </Reveal>

        <ol className="grid md:grid-cols-3 md:divide-x md:divide-blush/25">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 120}
              className="grid content-start gap-3 py-7 max-md:border-t max-md:border-blush/25 md:px-10 md:py-0 md:first:pl-0 md:last:pr-0"
            >
              <span aria-hidden="true" className="font-display text-[5.5rem] leading-none text-blush italic">
                {i + 1}
              </span>
              <h3 className="font-sans text-xl font-bold">{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-14 grid justify-items-center gap-5 border-t border-blush/25 pt-12 text-center md:mt-20">
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
