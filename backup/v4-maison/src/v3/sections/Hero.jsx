import { useRef, useState } from 'react'
import heroBouquet from '../../assets/img/hero-bouquet.webp'
import { contact } from '../../data/site'

const glyphs = ['✿', '❀', '♡', '✿', '❀']
const tints = ['text-raspberry', 'text-cream', 'text-gold', 'text-wine', 'text-raspberry']

export default function Hero() {
  const [petals, setPetals] = useState([])
  const stage = useRef(null)
  const nextId = useRef(0)

  const tilt = (e) => {
    const box = stage.current.getBoundingClientRect()
    const x = (e.clientX - box.left) / box.width - 0.5
    const y = (e.clientY - box.top) / box.height - 0.5
    stage.current.style.setProperty('--ry', `${x * 24}deg`)
    stage.current.style.setProperty('--rx', `${y * -16}deg`)
  }

  const settle = () => {
    stage.current.style.setProperty('--ry', '0deg')
    stage.current.style.setProperty('--rx', '0deg')
  }

  const bloom = (e) => {
    if (e.target.closest('a') || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const box = stage.current.getBoundingClientRect()
    const burst = glyphs.flatMap((glyph, i) =>
      [0, 1].map((ring) => {
        const angle = (Math.PI * 2 * (i * 2 + ring)) / 10 + Math.random() * 0.6
        const reach = 60 + Math.random() * 120
        return {
          id: nextId.current++,
          glyph,
          tint: tints[(i + ring) % tints.length],
          x: e.clientX - box.left,
          y: e.clientY - box.top,
          dx: Math.cos(angle) * reach,
          dy: Math.sin(angle) * reach,
          spin: Math.random() * 360 - 180,
        }
      }),
    )
    setPetals((current) => [...current, ...burst])
  }

  const clear = (id) => setPetals((current) => current.filter((petal) => petal.id !== id))

  return (
    <section
      ref={stage}
      aria-labelledby="hero-title"
      onPointerMove={tilt}
      onPointerLeave={settle}
      onPointerDown={bloom}
      className="relative overflow-hidden text-center text-wine select-none"
    >
      <div className="shell grid justify-items-center pt-10 pb-16 md:pt-12 md:pb-24">
        <p className="eyebrow text-balance text-raspberry">Fresh &amp; artificial flowers · handcrafted · made to order</p>

        <h1 id="hero-title" className="shout mt-6 grid justify-items-center">
          <span className="drift-left text-[clamp(4rem,17vw,15rem)]">Arrange</span>
          <span className="relative z-20 -my-[0.12em] -rotate-3 font-script text-[clamp(3.25rem,11vw,9.5rem)] leading-none font-normal tracking-normal text-raspberry normal-case not-italic">
            for your
          </span>
          <span className="text-outline drift-right text-[clamp(2.5rem,10.6vw,9.4rem)] whitespace-nowrap">
            special one
          </span>
        </h1>

        <img
          src={heroBouquet}
          alt="Handcrafted bouquet of red roses, pink lilies and carnations in burgundy wrapping"
          width="435"
          height="580"
          fetchPriority="high"
          draggable="false"
          style={{ transform: 'perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))' }}
          className="relative z-10 -mt-[9vw] w-[min(68vw,25rem)] drop-shadow-soft transition-transform duration-200 ease-out md:-mt-[7vw]"
        />

        <p className="mt-6 rounded-full bg-wine px-4 py-2 text-xs font-bold tracking-[0.16em] text-cream uppercase">
          tap anywhere to bloom ✿
        </p>
        <p className="lede mt-6 max-w-[34ch] text-balance">
          Each <em>Enchanted</em> bouquet is handcrafted, making every piece uniquely yours.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="#vibe"
            className="inline-flex min-h-13 items-center rounded-full bg-raspberry px-7 text-sm font-bold tracking-[0.12em] text-cream uppercase transition-[scale,background-color] duration-150 hover:bg-wine active:scale-95"
          >
            Find your vibe ↓
          </a>
          <a
            href={contact.instagramUrl}
            className="inline-flex min-h-13 items-center rounded-full border-[1.5px] border-wine px-7 text-sm font-bold tracking-[0.12em] uppercase transition-colors hover:bg-wine hover:text-cream"
          >
            {contact.instagramHandle}
          </a>
        </div>
      </div>

      {petals.map((petal) => (
        <span
          key={petal.id}
          aria-hidden="true"
          onAnimationEnd={() => clear(petal.id)}
          style={{
            left: petal.x,
            top: petal.y,
            '--dx': `${petal.dx}px`,
            '--dy': `${petal.dy}px`,
            '--spin': `${petal.spin}deg`,
          }}
          className={`pointer-events-none absolute z-30 -translate-1/2 animate-petal text-3xl ${petal.tint}`}
        >
          {petal.glyph}
        </span>
      ))}
    </section>
  )
}
