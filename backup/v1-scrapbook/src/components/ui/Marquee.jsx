export default function Marquee({ items }) {
  const row = items.flatMap((item) => [item, '✿'])

  return (
    <div aria-hidden="true" className="overflow-hidden bg-blush py-3.5 text-wine">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...row, ...row].map((item, i) => (
          <span key={i} className="px-4 font-display text-xl whitespace-nowrap italic md:text-2xl">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
