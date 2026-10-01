import { useState } from 'react'
import { briefLabel, briefUrl, emptyBrief } from './brief'
import Footer from './layout/Footer'
import Header from './layout/Header'
import FlipCards from './sections/FlipCards'
import Hero from './sections/Hero'
import LoveChat from './sections/LoveChat'
import SendOff from './sections/SendOff'
import Steps from './sections/Steps'
import Story from './sections/Story'
import SwipeDeck from './sections/SwipeDeck'
import VibeBuilder from './sections/VibeBuilder'

export default function App({ toggle }) {
  const [brief, setBrief] = useState(emptyBrief)
  const [likes, setLikes] = useState([])
  const sendUrl = briefUrl(brief, likes)
  const picked = Object.values(brief).filter(Boolean).length + likes.length

  const pick = (key, value) => setBrief((current) => ({ ...current, [key]: current[key] === value ? null : value }))
  const like = (name) => setLikes((current) => (current.includes(name) ? current : [...current, name]))

  return (
    <div id="top" className="overflow-x-clip bg-blush">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-wine focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Header toggle={toggle} sendUrl={sendUrl} picked={picked} />
      <main id="main">
        <Hero />
        <Story />
        <VibeBuilder brief={brief} onPick={pick} sendUrl={sendUrl} />
        <SwipeDeck likes={likes} onLike={like} onReset={() => setLikes([])} sendUrl={sendUrl} />
        <FlipCards />
        <Steps />
        <LoveChat />
        <SendOff brief={brief} likes={likes} sendUrl={sendUrl} />
      </main>
      <Footer />
      <div className="pointer-events-none fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 md:hidden">
        <a
          href={sendUrl}
          className="pointer-events-auto flex h-14 items-center justify-between gap-3 rounded-full bg-wine pr-2 pl-5 text-cream shadow-[0_0.75rem_2rem_rgb(30_4_14/0.45)]"
        >
          <span className="truncate text-sm font-bold">{briefLabel(brief, likes)}</span>
          <span className="shrink-0 rounded-full bg-blush px-4 py-2.5 text-xs font-bold tracking-[0.14em] text-wine uppercase">
            Send ♡
          </span>
        </a>
      </div>
    </div>
  )
}
