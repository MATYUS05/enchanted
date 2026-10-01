import bloomBox from '../../assets/img/cutout-bloombox.webp'
import { contact, freshPhoto, storyPhoto } from '../../data/site'
import Button from '../ui/Button'
import Label from '../ui/Label'
import Reveal from '../ui/Reveal'
import Tinted from '../ui/Tinted'

const collections = [
  {
    tag: 'Fresh',
    title: 'Fresh Flowers',
    text: 'Real blooms, arranged by hand',
    photo: freshPhoto,
  },
  {
    tag: 'Artificial',
    title: 'Artificial Flowers',
    text: 'Long-lasting, timeless, meaningful',
    photo: storyPhoto,
  },
  {
    tag: 'Boxes',
    title: 'Boxes & Arrangements',
    text: 'For little moments, made special',
    photo: { src: bloomBox, alt: 'Bloom box with a teddy bear and baby blue roses', width: 652, height: 869 },
    contain: true,
  },
]

export default function Collections() {
  return (
    <section id="flowers" aria-labelledby="flowers-title">
      <div className="shell py-20 md:py-28">
        <Reveal className="mb-10 grid gap-5 md:mb-14">
          <Label>What we make</Label>
          <h2 id="flowers-title" className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-tight font-bold">
            Two Ways to Bloom
          </h2>
        </Reveal>

        <ul className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          {collections.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 100} className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <Tinted
                {...item.photo}
                className={`h-[24rem] lg:h-[30rem] ${item.contain ? '[&>img]:object-contain [&>img]:p-6' : ''}`}
              >
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-wine/90 to-transparent px-4 pt-10 pb-3 text-[0.6875rem] tracking-[0.18em] uppercase">
                  {item.tag}
                  <span aria-hidden="true">→</span>
                </span>
              </Tinted>
              <h3 className="mt-4 font-display text-xl font-bold">{item.title}</h3>
              <p className="text-[0.8125rem] text-cream/70">{item.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <Button href={contact.instagramUrl} variant="outline">
            See more on Instagram <span aria-hidden="true">→</span>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
