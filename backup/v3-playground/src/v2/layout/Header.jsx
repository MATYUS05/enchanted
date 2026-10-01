import wordmark from '../../assets/img/logo-wordmark-wine.png'
import { contact, navLinks } from '../../data/site'
import Button from '../ui/Button'

export default function Header({ toggle }) {
  return (
    <header className="sticky top-0 z-40 border-b border-wine/15 bg-cream/90 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-6 text-xs font-bold tracking-[0.18em] uppercase xl:gap-8">
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

        <div className="flex items-center gap-5 text-wine lg:justify-self-end">
          {toggle}
          <div className="hidden md:block">
            <Button href={contact.whatsappUrl} variant="outline" className="min-h-10 px-5 text-base">
              Chat us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
