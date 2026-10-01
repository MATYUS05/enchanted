import bloomBox from '../../assets/img/cutout-bloombox.webp'
import { artificialReasons, creations, freshPhoto, occasions } from '../../data/site'
import Arch from '../ui/Arch'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

const tile = 'rounded-[1.75rem] p-7 md:p-10'
const tileTitle = 'text-[clamp(2.25rem,4.2vw,3.5rem)] leading-none'

export default function Flowers() {
  return (
    <section id="flowers" aria-labelledby="flowers-title">
      <div className="shell py-20 md:py-32">
        <Reveal className="mb-10 grid gap-5 md:mb-14">
          <SectionLabel number="02">What we make</SectionLabel>
          <h2 id="flowers-title" className="headline">
            Two ways <em>to bloom</em>
          </h2>
        </Reveal>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-6">
          <Reveal as="article" className={`rosy flex flex-col lg:col-span-3 lg:row-span-2 ${tile}`}>
            <h3 className={tileTitle}>
              <em>Fresh</em> Flowers
            </h3>
            <p className="mt-4 max-w-[28ch] font-display text-xl leading-snug">
              Real blooms, arranged by hand. Nature decides the little details, so no two bouquets are ever the same.
            </p>
            <Arch {...freshPhoto} frame="border-cream/40" className="mt-8 w-[min(70%,18rem)] self-end lg:mt-auto" />
          </Reveal>

          <Reveal as="article" delay={100} className={`bg-peach lg:col-span-3 ${tile}`}>
            <h3 className={tileTitle}>
              <span className="font-semibold text-gold">why</span> <em>Artificial?</em>
            </h3>
            <dl className="mt-6 grid gap-5 sm:grid-cols-3">
              {artificialReasons.map((reason) => (
                <div key={reason.title} className="border-t border-wine/20 pt-3">
                  <dt className="font-bold tracking-wide uppercase italic">{reason.title}</dt>
                  <dd className="mt-1 text-[0.9375rem]">{reason.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal
            as="article"
            delay={160}
            className={`calla-wash relative flex min-h-64 items-center overflow-hidden border border-wine/15 lg:col-span-3 ${tile}`}
          >
            <p className="max-w-[55%] font-display text-2xl leading-tight font-semibold text-wine-mid md:text-3xl">
              Your love may be a moment, but the <em>memory can last forever.</em>
            </p>
            <img
              src={bloomBox}
              alt="Bloom box with a teddy bear and baby blue roses"
              width="652"
              height="869"
              loading="lazy"
              className="absolute -right-3 -bottom-6 w-[min(42%,14rem)] rotate-6"
            />
          </Reveal>

          <Reveal as="article" className={`border border-wine/15 lg:col-span-2 ${tile}`}>
            <p className="eyebrow text-raspberry">We make</p>
            <ol className="mt-4 divide-y divide-wine/15">
              {creations.map((creation, i) => (
                <li key={creation} className="flex items-baseline gap-4 py-2.5 font-display text-2xl">
                  <span className="font-sans text-xs font-bold tracking-widest text-raspberry">0{i + 1}</span>
                  {creation}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal as="article" delay={100} className={`bg-blush lg:col-span-4 ${tile}`}>
            <p className="eyebrow text-raspberry">Made for</p>
            <p className="mt-4 font-display text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.2] italic">
              {occasions.map((occasion, i) => (
                <span key={occasion}>
                  {i > 0 && (
                    <span aria-hidden="true" className="align-middle text-[0.5em] text-raspberry not-italic">
                      {' ✿ '}
                    </span>
                  )}
                  {occasion}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
