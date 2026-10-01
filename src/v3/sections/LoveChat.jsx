import { useEffect, useRef, useState } from 'react'
import emblem from '../../assets/img/logo-emblem-cream.png'
import { chatMessages } from '../../data/site'
import Heading from '../ui/Heading'
import Reveal from '../ui/Reveal'

const bubble = 'rounded-[0.3rem_1.2rem_1.2rem_1.2rem] bg-white px-4 py-2.5 text-left shadow-sm'

export default function LoveChat() {
  const [started, setStarted] = useState(false)
  const [shown, setShown] = useState(() =>
    matchMedia('(prefers-reduced-motion: reduce)').matches ? chatMessages.length : 0,
  )
  const [hearts, setHearts] = useState([])
  const phone = useRef(null)
  const typing = shown < chatMessages.length

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setStarted(true)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )
    observer.observe(phone.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || !typing) return
    const timer = setTimeout(() => setShown(shown + 1), 1100)
    return () => clearTimeout(timer)
  }, [started, typing, shown])

  const heart = (text) =>
    setHearts((current) => (current.includes(text) ? current.filter((item) => item !== text) : [...current, text]))

  return (
    <section id="love" aria-labelledby="love-title" className="text-wine">
      <div className="shell grid items-center gap-12 py-20 md:py-32 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Heading id="love-title" before="Made to" script="Enchanted!" />
          <p className="mt-5 max-w-md text-lg">Real messages from our customers. Tap one to ♡ it.</p>
        </Reveal>

        <div
          ref={phone}
          className="mx-auto w-[min(88vw,22rem)] overflow-hidden rounded-[2.75rem] border-[10px] border-wine bg-cream shadow-[0_1.5rem_3rem_rgb(60_10_30/0.25)]"
        >
          <div className="flex items-center gap-3 border-b border-wine/10 px-5 py-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-wine">
              <img src={emblem} alt="" width="406" height="558" loading="lazy" className="h-7 w-auto" />
            </span>
            <div>
              <p className="leading-tight font-bold">Enchanted</p>
              <p className="text-xs opacity-70">{typing && started ? 'typing…' : 'love notes'}</p>
            </div>
          </div>

          <ul aria-live="polite" className="grid min-h-[23rem] content-start justify-items-start gap-3 bg-blush/45 px-5 py-6">
            {chatMessages.slice(0, shown).map((message) => {
              const loved = hearts.includes(message.text)
              return (
                <li key={message.text} className="relative animate-pop">
                  <button
                    type="button"
                    aria-pressed={loved}
                    onClick={() => heart(message.text)}
                    className={`${bubble} cursor-pointer text-[0.9375rem] font-bold text-neutral-900 transition-[scale] duration-150 active:scale-95`}
                  >
                    {message.text}{' '}
                    <span className="ml-2 text-[0.6875rem] font-normal text-neutral-500">{message.time}</span>
                  </button>
                  {loved && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-2 -bottom-2 grid size-6 animate-pop place-items-center rounded-full bg-white text-xs text-raspberry shadow-sm"
                    >
                      ♥
                    </span>
                  )}
                </li>
              )
            })}
            {typing && started && (
              <li aria-hidden="true" className={`${bubble} flex gap-1.5 py-3.5`}>
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    style={{ animationDelay: `${dot * 150}ms` }}
                    className="size-2 animate-dot rounded-full bg-neutral-400"
                  />
                ))}
              </li>
            )}
            {!typing && (
              <li className="animate-pop justify-self-end rounded-[1.2rem_0.3rem_1.2rem_1.2rem] bg-wine px-4 py-2.5 text-[0.9375rem] font-bold text-cream">
                Your vision, enchanted by us ♡
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
