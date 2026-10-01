import wordmark from '../../assets/img/logo-wordmark-wine.png'
import { contact, navLinks } from '../../data/site'
import Button from '../ui/Button'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-wine/15 bg-cream/90 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-center gap-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-5 text-xs font-bold tracking-[0.18em] uppercase lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="border-b border-transparent py-2 transition-colors hover:border-wine">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#top">
          <img src={wordmark} alt="Enchanted" width="983" height="307" className="h-10 w-auto" />
        </a>

        <div className="hidden justify-self-end md:block">
          <Button href={contact.whatsappUrl} variant="outline" className="min-h-10 px-5 text-base">
            Chat us
          </Button>
        </div>
      </div>
    </header>
  )
}
