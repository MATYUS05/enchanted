import { contact } from '../../data/site'
import Heading from '../ui/Heading'
import Reveal from '../ui/Reveal'

export default function SendOff({ brief, likes, sendUrl }) {
  const rows = [
    ['Type', brief.kind],
    ['Tone', brief.tone],
    ['Color', brief.color],
    ['Occasion', brief.occasion],
    ['Looks you love', likes.join(', ')],
  ]

  return (
    <section id="contact" aria-labelledby="send-title" className="bg-raspberry text-cream">
      <div className="shell grid items-center gap-12 py-20 md:py-32 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Heading id="send-title" before="Let us" script="enchant" after="your day." scriptClassName="text-blush" />
          <p className="lede mt-6 max-w-[30ch]">
            Tell us your mood, occasion &amp; share your reference. We'll help you find the perfect bouquet.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto w-full max-w-md rounded-[2rem] bg-cream p-7 text-wine md:p-9">
          <p className="eyebrow text-raspberry">Your message to Enchanted</p>
          <dl className="mt-5 grid gap-3 border-y border-dashed border-wine/30 py-5">
            {rows.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-3 text-[0.9375rem]">
                <dt className="text-xs font-bold tracking-[0.14em] uppercase opacity-70">{label}</dt>
                <dd className={value ? 'font-bold' : 'opacity-50'}>{value || 'up to you ✿'}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 grid gap-3">
            <a
              href={sendUrl}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-wine px-6 text-sm font-bold tracking-[0.12em] text-cream uppercase transition-[scale,background-color] duration-150 hover:bg-raspberry active:scale-95"
            >
              Send on WhatsApp ♡
            </a>
            <a
              href={contact.instagramUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-wine px-4 text-xs font-bold tracking-[0.1em] whitespace-nowrap uppercase transition-colors hover:bg-wine hover:text-cream sm:text-sm"
            >
              Instagram · {contact.instagramHandle}
            </a>
            <a href="#vibe" className="justify-self-center border-b border-wine pb-0.5 text-sm">
              Change my picks ↑
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
