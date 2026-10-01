import emblem from '../../assets/img/logo-emblem-cream.png'
import { chatMessages, contact, galleryPhotos } from '../../data/site'
import Arch from '../ui/Arch'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'

export default function LoveNotes() {
  return (
    <section id="love" aria-labelledby="love-title" className="bg-peach">
      <div className="shell py-20 md:py-32">
        <Reveal className="mb-12 grid justify-items-center gap-5 text-center md:mb-16">
          <SectionLabel number="04">Love notes</SectionLabel>
          <h2 id="love-title" className="headline-script text-wine">
            Made to Enchanted!
          </h2>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-white shadow-photo">
            <div className="flex items-center gap-3 border-b border-wine/10 px-5 py-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-wine">
                <img src={emblem} alt="" width="406" height="558" loading="lazy" className="h-7 w-auto" />
              </span>
              <div>
                <p className="leading-tight font-bold">Enchanted</p>
                <p className="text-xs opacity-70">love notes from our customers</p>
              </div>
            </div>
            <ul className="grid justify-items-start gap-2 bg-blush/45 px-5 py-6">
              {chatMessages.map((message) => (
                <li
                  key={message.text}
                  className="rounded-[0.25rem_1.1rem_1.1rem_1.1rem] bg-white px-3.5 py-2 text-[0.9375rem] font-bold text-neutral-900 shadow-sm"
                >
                  {message.text}{' '}
                  <span className="ml-2 text-[0.6875rem] font-normal text-neutral-500">{message.time}</span>
                </li>
              ))}
            </ul>
            <a
              href={contact.whatsappUrl}
              className="flex items-center justify-between px-5 py-4 text-sm font-bold tracking-[0.12em] text-wine uppercase transition-colors hover:bg-blush/50"
            >
              Send us yours <span aria-hidden="true">→</span>
            </a>
          </Reveal>

          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:p-0">
            {galleryPhotos.map((photo, i) => (
              <Arch
                key={photo.caption}
                {...photo}
                className={`w-[55%] shrink-0 snap-center md:w-auto ${i % 2 ? 'md:mt-16' : ''}`}
              />
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-[0.8125rem] opacity-75 md:mt-16">
          Our photos are for inspiration. We'll try our best to make yours as close as it's seen.
        </p>
      </div>
    </section>
  )
}
