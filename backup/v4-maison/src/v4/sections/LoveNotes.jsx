import { chatMessages } from '../../data/site'
import Label from '../ui/Label'
import Reveal from '../ui/Reveal'

export default function LoveNotes() {
  return (
    <section id="love" aria-labelledby="love-title" className="bg-black/15">
      <div className="shell py-20 md:py-28">
        <Reveal className="mb-10 grid gap-5 md:mb-14">
          <Label>Love notes</Label>
          <h2 id="love-title" className="font-display text-[clamp(2rem,3.6vw,3rem)] leading-tight font-bold">
            In Their Own Words
          </h2>
        </Reveal>

        <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {chatMessages.map((message, i) => (
            <Reveal as="li" key={message.text} delay={(i % 3) * 100}>
              <figure className="border-l border-cream/35 pl-6">
                <blockquote className="font-display text-2xl leading-snug italic md:text-[1.75rem]">
                  "{message.text}"
                </blockquote>
                <figcaption className="mt-3 text-xs tracking-[0.16em] text-cream/60 uppercase">
                  Customer chat · {message.time}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
