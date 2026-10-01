import wordmark from '../../assets/img/logo-wordmark-cream.png'
import { contact, navLinks } from '../../data/site'
import Button from '../ui/Button'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-wine/90 text-cream backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-center gap-6 md:justify-between">
        <a href="#top">
          <img src={wordmark} alt="Enchanted" width="983" height="307" className="h-10 w-auto" />
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6 text-xs font-bold tracking-[0.18em] uppercase lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="border-b border-transparent py-2 transition-colors hover:border-blush">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href={contact.whatsappUrl} className="min-h-10 px-5">
            Chat us <span aria-hidden="true">♡</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
