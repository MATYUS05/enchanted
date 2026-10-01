import { loveNotes } from '../../data/site'
import Polaroid from '../ui/Polaroid'
import Reveal from '../ui/Reveal'

const slide = 'w-[62%] shrink-0 snap-center md:w-auto'

function Chat({ messages, tilt }) {
  return (
    <div style={{ '--tilt': `${tilt}deg` }} className={`grid rotate-(--tilt) content-center justify-items-start gap-1.5 ${slide}`}>
      {messages.map((message) => (
        <p
          key={message.text}
          className="rounded-[0.25rem_1.1rem_1.1rem_1.1rem] bg-white px-3.5 py-2.5 text-left text-[0.9375rem] font-bold md:text-lg text-neutral-900 shadow-[0_0.5rem_1.5rem_rgb(60_10_30/0.16)]"
        >
          {message.text} <span className="ml-2 text-[0.6875rem] font-normal text-neutral-500">{message.time}</span>
        </p>
      ))}
    </div>
  )
}

export default function LoveNotes() {
  return (
    <section id="love" aria-labelledby="love-title" className="bg-cream text-center">
      <div className="shell py-20 md:py-32">
        <Reveal className="mb-10 grid justify-items-center gap-3 md:mb-16">
          <p className="eyebrow text-raspberry">Love notes from our customers</p>
          <h2 id="love-title" className="headline-script text-wine">
            Made to Enchanted!
          </h2>
        </Reveal>

        <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pt-6 pb-10 [scrollbar-width:none] md:mx-auto md:grid md:max-w-6xl md:grid-cols-4 md:items-center md:gap-12 md:overflow-visible md:p-0">
          {loveNotes.map((note) =>
            note.messages ? (
              <Chat key={note.messages[0].text} {...note} />
            ) : (
              <Polaroid key={note.caption} {...note} className={slide} />
            ),
          )}
        </div>

        <p className="mt-6 text-[0.8125rem] opacity-75 md:mt-14">
          Our photos are for inspiration. We'll try our best to make yours as close as it's seen.
        </p>
      </div>
    </section>
  )
}
