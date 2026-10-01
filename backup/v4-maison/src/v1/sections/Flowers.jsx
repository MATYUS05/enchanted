import bloomBox from '../../assets/img/cutout-bloombox.webp'
import { artificialReasons, creations, freshPhoto, occasions } from '../../data/site'
import Polaroid from '../ui/Polaroid'
import Reveal from '../ui/Reveal'

const panel = 'relative flex flex-col gap-5 overflow-hidden rounded-[1.75rem] p-7 md:p-12'
const panelTitle = 'text-[clamp(2.25rem,4.6vw,3.75rem)] leading-none'

function PillList({ label, items }) {
  return (
    <>
      <p className="font-display text-2xl whitespace-nowrap italic">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="pill">
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}

export default function Flowers() {
  return (
    <section id="flowers" aria-labelledby="flowers-title" className="bg-peach">
      <div className="shell py-20 md:py-32">
        <Reveal className="mb-12 grid justify-items-center gap-3 text-center md:mb-16">
          <p className="eyebrow text-raspberry">What we make</p>
          <h2 id="flowers-title" className="headline">
            Two ways <em>to bloom</em>
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 md:gap-8">
          <Reveal as="article" className={`rosy ${panel}`}>
            <h3 className={panelTitle}>
              <em>Fresh</em> Flowers
            </h3>
            <p className="max-w-[28ch] font-display text-xl leading-snug">
              Real blooms, arranged by hand. Nature decides the little details, so no two bouquets are ever the same.
            </p>
            <Polaroid {...freshPhoto} caption="fresh & in bloom" tilt={3} className="mt-4 w-[min(72%,20rem)] self-end" />
          </Reveal>

          <Reveal as="article" delay={120} className={`calla-wash border border-wine/15 ${panel}`}>
            <h3 className={panelTitle}>
              <span className="font-semibold text-gold">why</span> <em>Artificial?</em>
            </h3>
            <dl className="grid max-w-sm gap-4">
              {artificialReasons.map((reason) => (
                <div key={reason.title}>
                  <dt className="font-bold tracking-wide uppercase italic">{reason.title}</dt>
                  <dd className="text-[0.9375rem]">{reason.text}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-auto max-w-[52%] pt-6 font-display text-xl leading-tight font-semibold text-wine-mid md:max-w-[17rem] md:text-2xl">
              Your love may be a moment, but the <em>memory can last forever.</em>
            </p>
            <img
              src={bloomBox}
              alt="Bloom box with a teddy bear and baby blue roses"
              width="652"
              height="869"
              loading="lazy"
              className="absolute -right-4 -bottom-4 w-[min(46%,19rem)] rotate-6"
            />
          </Reveal>
        </div>

        <Reveal className="mt-12 grid items-baseline gap-x-6 gap-y-4 md:mt-16 md:grid-cols-[auto_1fr]">
          <PillList label="We make" items={creations} />
          <PillList label="Made for" items={occasions} />
        </Reveal>
      </div>
    </section>
  )
}
