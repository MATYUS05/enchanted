import wordmark from '../../assets/img/logo-wordmark-cream.png'

const links = [
  { label: 'Vibe', href: '#vibe' },
  { label: 'Swipe', href: '#swipe' },
  { label: 'Fresh or forever', href: '#flowers' },
  { label: 'Love notes', href: '#love' },
]

export default function Header({ toggle, sendUrl, picked }) {
  return (
    <header className="sticky top-3 z-40 px-3 md:px-6">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full bg-wine pr-2 pl-5 text-cream shadow-[0_0.75rem_2rem_rgb(30_4_14/0.3)]">
        <a href="#top">
          <img src={wordmark} alt="Enchanted" width="983" height="307" className="h-8 w-auto" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-7 text-xs font-bold tracking-[0.16em] uppercase">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="border-b border-transparent py-2 transition-colors hover:border-blush">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {toggle}
          <a
            href={sendUrl}
            className="hidden h-10 items-center gap-2 rounded-full bg-blush px-5 text-xs font-bold tracking-[0.14em] text-wine uppercase transition-colors hover:bg-cream md:inline-flex"
          >
            Send vibe
            {picked > 0 && (
              <span key={picked} className="grid size-5 animate-pop place-items-center rounded-full bg-wine text-[0.625rem] text-cream">
                {picked}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  )
}
