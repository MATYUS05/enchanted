import { looks } from '../../data/site'
import Label from '../ui/Label'
import Reveal from '../ui/Reveal'
import Tinted from '../ui/Tinted'

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-black/15">
      <div className="shell py-20 md:py-28">
        <Reveal className="mb-10 grid gap-5 md:mb-14">
          <Label>Gallery</Label>
          <h2 id="gallery-title" className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-tight font-bold">
            Made to Enchanted
          </h2>
        </Reveal>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-9 lg:grid-cols-4">
          {looks.map((look, i) => (
            <Reveal as="li" key={look.name} delay={(i % 4) * 80}>
              <Tinted src={look.src} alt={look.alt} width={look.width} height={look.height} className="aspect-3/4" />
              <h3 className="mt-3 font-display text-lg font-bold">{look.name}</h3>
            </Reveal>
          ))}
        </ul>

        <p className="mt-12 text-[0.8125rem] text-cream/65">
          Our photos are for inspiration. We'll try our best to make yours as close as it's seen.
        </p>
      </div>
    </section>
  )
}
