import wordmark from '../../assets/img/logo-wordmark-cream.png'
import { contact } from '../../data/site'
import Button from '../ui/Button'

const links = [
  { label: 'About', href: '#story' },
  { label: 'Flowers', href: '#flowers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Love notes', href: '#love' },
]

export default function Header({ toggle }) {
  return (
    <header className="sticky top-0 z-40 border-b border-cream/10 bg-wine/80 text-cream backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#top">
          <img src={wordmark} alt="Enchanted" width="983" height="307" className="h-9 w-auto" />
        </a>

        <div className="flex items-center gap-6 lg:gap-9">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex gap-9 text-[0.8125rem]">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="border-b border-transparent py-2 transition-colors hover:border-cream/60">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {toggle}
          <div className="hidden md:block">
            <Button href={contact.whatsappUrl} variant="outline" className="min-h-10 px-5">
              Chat us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
