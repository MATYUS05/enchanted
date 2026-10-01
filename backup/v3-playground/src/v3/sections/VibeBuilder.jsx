import pinkBouquet from '../../assets/img/cutout-pink.webp'
import { occasions, swatches, tones } from '../../data/site'
import Chip from '../ui/Chip'
import Heading from '../ui/Heading'
import Reveal from '../ui/Reveal'

const kinds = [
  {
    name: 'Fresh',
    hint: 'Real blooms, arranged by hand. Nature decides the little details, so no two bouquets are ever the same.',
  },
  { name: 'Artificial', hint: 'No wilting, no worries. Keep your bouquet as a beautiful reminder of the moment.' },
]

const tints = {
  Soft: (color) => `color-mix(in oklab, ${color} 45%, white)`,
  Bright: (color) => color,
  Bold: (color) => `color-mix(in oklab, ${color} 72%, #5e142f)`,
}

function Question({ number, title, children }) {
  return (
    <fieldset className="grid gap-4 border-t border-wine/20 pt-6">
      <legend className="float-left flex w-full items-baseline gap-3 pb-4 text-xl font-bold uppercase italic">
        <span className="text-sm text-raspberry not-italic">0{number}</span>
        {title}
      </legend>
      {children}
    </fieldset>
  )
}

function Slot({ value }) {
  return (
    <span
      className={`inline-block border-b-2 border-dashed border-raspberry px-1 ${value ? 'animate-pop text-raspberry' : 'text-wine/35'}`}
    >
      {value ?? '· · ·'}
    </span>
  )
}

export default function VibeBuilder({ brief, onPick, sendUrl }) {
  const picked = Object.values(brief).filter(Boolean).length
  const base = swatches.find((swatch) => swatch.name === brief.color)?.color ?? 'var(--color-blush)'
  const background = brief.tone ? tints[brief.tone](base) : base
  const kind = kinds.find((option) => option.name === brief.kind)

  return (
    <section id="vibe" aria-labelledby="vibe-title" className="bg-peach text-wine">
      <div className="shell py-20 md:py-32">
        <Reveal className="mb-12 md:mb-16">
          <Heading id="vibe-title" before="Find your" script="vibe" />
          <p className="mt-5 max-w-md text-lg">Tap what feels right. We'll turn it into a message you can send us.</p>
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_24rem] lg:gap-16">
          <div className="grid gap-9">
            <Question number={1} title="Fresh or forever?">
              <div className="flex flex-wrap gap-2">
                {kinds.map((option) => (
                  <Chip
                    key={option.name}
                    selected={brief.kind === option.name}
                    onClick={() => onPick('kind', option.name)}
                  >
                    {option.name}
                  </Chip>
                ))}
              </div>
              {kind && (
                <p key={kind.name} className="max-w-md animate-pop text-[0.9375rem]">
                  {kind.hint}
                </p>
              )}
            </Question>

            <Question number={2} title="Pick a tone">
              <div className="flex flex-wrap gap-2">
                {tones.map((tone) => (
                  <Chip key={tone} selected={brief.tone === tone} onClick={() => onPick('tone', tone)}>
                    {tone}
                  </Chip>
                ))}
              </div>
            </Question>

            <Question number={3} title="Pick a color">
              <div className="flex flex-wrap gap-3">
                {swatches.map((swatch) => (
                  <button
                    key={swatch.name}
                    type="button"
                    aria-pressed={brief.color === swatch.name}
                    aria-label={swatch.name}
                    title={swatch.name}
                    onClick={() => onPick('color', swatch.name)}
                    style={{ background: swatch.color }}
                    className={`size-12 cursor-pointer rounded-full ring-wine ring-offset-2 ring-offset-peach transition-[scale,box-shadow] duration-150 active:scale-90 ${brief.color === swatch.name ? 'scale-110 ring-[3px]' : 'ring-1 hover:scale-105'}`}
                  />
                ))}
              </div>
              <p className="text-[0.8125rem] opacity-75">
                Color selection is based on availability to ensure the best quality.
              </p>
            </Question>

            <Question number={4} title="What's the occasion?">
              <div className="flex flex-wrap gap-2">
                {occasions.map((occasion) => (
                  <Chip
                    key={occasion}
                    selected={brief.occasion === occasion}
                    onClick={() => onPick('occasion', occasion)}
                  >
                    {occasion}
                  </Chip>
                ))}
              </div>
            </Question>
          </div>

          <aside
            aria-live="polite"
            style={{ background }}
            className="grid gap-5 rounded-[2rem] p-5 transition-[background] duration-500 lg:sticky lg:top-24"
          >
            <img
              key={picked}
              src={pinkBouquet}
              alt=""
              width="435"
              height="580"
              loading="lazy"
              className="mx-auto -mt-14 w-44 animate-pop drop-shadow-soft"
            />
            <div className="grid gap-4 rounded-[1.5rem] bg-cream p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-raspberry">Your vibe</p>
                <p className="text-xs font-bold tracking-widest">{picked}/4</p>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-wine/15">
                <div
                  style={{ width: `${picked * 25}%` }}
                  className="h-full rounded-full bg-raspberry transition-[width] duration-300"
                />
              </div>
              <p className="font-display text-[1.75rem] leading-[1.35]">
                A <Slot key={brief.tone ?? 'tone'} value={brief.tone} />{' '}
                <Slot key={brief.color ?? 'color'} value={brief.color} />{' '}
                <Slot key={brief.kind ?? 'kind'} value={brief.kind} /> bouquet
                <br />
                for <Slot key={brief.occasion ?? 'occasion'} value={brief.occasion} />
              </p>
              <a
                href={sendUrl}
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-wine px-6 text-sm font-bold tracking-[0.12em] text-cream uppercase transition-[scale,background-color] duration-150 hover:bg-raspberry active:scale-95"
              >
                Send this vibe ♡
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
