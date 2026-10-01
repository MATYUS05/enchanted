import { useRef, useState } from 'react'
import { looks } from '../../data/site'
import Heading from '../ui/Heading'
import Reveal from '../ui/Reveal'

const threshold = 90
const flight = 280
const round =
  'grid size-16 cursor-pointer place-items-center rounded-full text-2xl transition-[scale,background-color] duration-150 active:scale-90'

export default function SwipeDeck({ likes, onLike, onReset, sendUrl }) {
  const [index, setIndex] = useState(0)
  const [drag, setDrag] = useState(0)
  const [leaving, setLeaving] = useState(0)
  const [dragging, setDragging] = useState(false)
  const origin = useRef(0)
  const done = index >= looks.length

  const decide = (direction) => {
    if (leaving || done) return
    setLeaving(direction)
    setTimeout(() => {
      if (direction > 0) onLike(looks[index].name)
      setIndex(index + 1)
      setLeaving(0)
      setDrag(0)
    }, flight)
  }

  const grab = (e) => {
    if (leaving) return
    e.currentTarget.setPointerCapture(e.pointerId)
    origin.current = e.clientX
    setDragging(true)
  }

  const move = (e) => {
    if (dragging) setDrag(e.clientX - origin.current)
  }

  const release = () => {
    if (!dragging) return
    setDragging(false)
    if (Math.abs(drag) > threshold) decide(Math.sign(drag))
    else setDrag(0)
  }

  const restart = () => {
    onReset()
    setIndex(0)
  }

  const pull = leaving ? leaving * threshold : drag

  return (
    <section id="swipe" aria-labelledby="swipe-title" className="rosy">
      <div className="shell grid items-center gap-12 py-20 md:py-32 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Heading id="swipe-title" before="Swipe the" script="looks" scriptClassName="text-blush" />
          <p className="mt-5 max-w-md text-lg">
            Right if you love it, left if it's not you. The ones you love go straight into your message.
          </p>
          <p className="mt-4 text-[0.8125rem] opacity-75">
            Our photos are for inspiration. We'll try our best to make yours as close as it's seen.
          </p>
        </Reveal>

        <div className="grid justify-items-center gap-7">
          <div className="relative aspect-[3/4.3] w-[min(76vw,20rem)]">
            {done ? (
              <div className="grid size-full animate-pop content-center justify-items-center gap-4 rounded-[1.75rem] bg-cream p-6 text-center text-wine">
                <p className="shout text-4xl">
                  {likes.length ? `${likes.length} looks loved` : 'No match yet'}
                </p>
                {likes.length > 0 && <p className="text-[0.9375rem]">{likes.join(' · ')}</p>}
                {likes.length > 0 && (
                  <a
                    href={sendUrl}
                    className="inline-flex min-h-12 items-center rounded-full bg-wine px-6 text-sm font-bold tracking-[0.12em] text-cream uppercase transition-colors hover:bg-raspberry"
                  >
                    Send to Enchanted ♡
                  </a>
                )}
                <button
                  type="button"
                  onClick={restart}
                  className="min-h-11 cursor-pointer border-b border-wine text-sm font-bold tracking-[0.12em] uppercase"
                >
                  Swipe again ↻
                </button>
              </div>
            ) : (
              looks
                .slice(index, index + 3)
                .map((look, depth) => {
                  const top = depth === 0
                  return (
                    <figure
                      key={look.name}
                      onPointerDown={top ? grab : undefined}
                      onPointerMove={top ? move : undefined}
                      onPointerUp={top ? release : undefined}
                      onPointerCancel={top ? release : undefined}
                      style={
                        top
                          ? {
                              transform: leaving
                                ? `translateX(${leaving * 150}%) rotate(${leaving * 26}deg)`
                                : `translateX(${drag}px) rotate(${drag / 18}deg)`,
                              transition: dragging ? 'none' : `transform ${flight}ms ease`,
                              zIndex: 3,
                            }
                          : {
                              transform: `translateY(${depth * 0.9}rem) scale(${1 - depth * 0.05})`,
                              transition: `transform ${flight}ms ease`,
                              zIndex: 3 - depth,
                            }
                      }
                      className={`absolute inset-0 grid grid-rows-[1fr_auto] rounded-[1.75rem] bg-cream p-2.5 text-wine shadow-photo select-none ${top ? 'cursor-grab touch-pan-y active:cursor-grabbing' : ''}`}
                    >
                      <img
                        src={look.src}
                        alt={look.alt}
                        width={look.width}
                        height={look.height}
                        draggable="false"
                        className="size-full min-h-0 rounded-[1.25rem] object-cover"
                      />
                      <figcaption className="px-2 pt-3 pb-2 text-left font-bold tracking-wide uppercase">
                        {look.name}
                      </figcaption>
                      {top && (
                        <>
                          <span
                            aria-hidden="true"
                            style={{ opacity: Math.max(0, Math.min(1, pull / threshold)) }}
                            className="shout absolute top-8 left-6 -rotate-12 rounded-xl border-4 border-raspberry bg-cream/85 px-3 py-1.5 text-2xl text-raspberry"
                          >
                            Love ♡
                          </span>
                          <span
                            aria-hidden="true"
                            style={{ opacity: Math.max(0, Math.min(1, -pull / threshold)) }}
                            className="shout absolute top-8 right-6 rotate-12 rounded-xl border-4 border-wine bg-cream/85 px-3 py-1.5 text-2xl"
                          >
                            Not me
                          </span>
                        </>
                      )}
                    </figure>
                  )
                })
                .reverse()
            )}
          </div>

          {!done && (
            <div className="flex items-center gap-6">
              <button
                type="button"
                aria-label="Not for me"
                onClick={() => decide(-1)}
                className={`${round} border-[1.5px] border-cream hover:bg-cream hover:text-wine`}
              >
                ✕
              </button>
              <p className="text-xs font-bold tracking-widest tabular-nums">
                {index + 1} / {looks.length}
              </p>
              <button
                type="button"
                aria-label="Love it"
                onClick={() => decide(1)}
                className={`${round} bg-blush text-raspberry hover:bg-cream`}
              >
                ♥
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
