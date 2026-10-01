export default function SpinBadge({ className = '' }) {
  return (
    <div aria-hidden="true" className={`grid aspect-square place-items-center rounded-full bg-blush text-wine ${className}`}>
      <svg viewBox="0 0 200 200" className="col-start-1 row-start-1 w-full animate-turn fill-current text-[15px] font-bold">
        <defs>
          <path id="badge-ring" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
        </defs>
        <text>
          <textPath href="#badge-ring" textLength="470">
            YOUR VISION, ENCHANTED BY US ✦ YOUR VISION, ENCHANTED BY US ✦
          </textPath>
        </text>
      </svg>
      <span className="col-start-1 row-start-1 text-3xl leading-none">♡</span>
    </div>
  )
}
