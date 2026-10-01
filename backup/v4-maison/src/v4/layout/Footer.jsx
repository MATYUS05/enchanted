import lockup from '../../assets/img/logo-lockup-cream.png'
import { contact } from '../../data/site'

const year = new Date().getFullYear()
const link = 'border-b border-cream/30 pb-0.5 transition-colors hover:border-cream'

export default function Footer() {
  return (
    <footer className="bg-wine text-cream">
      <div className="grid justify-items-center gap-5 border-t border-cream/10 bg-black/25 px-5 pt-14 pb-28 text-center md:pb-14">
        <img src={lockup} alt="Enchanted" width="983" height="906" loading="lazy" className="w-32" />
        <p className="font-display text-xl italic">Your vision, enchanted by us.</p>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[0.8125rem]">
          <li>
            <a href={contact.instagramUrl} className={link}>
              Instagram {contact.instagramHandle}
            </a>
          </li>
          <li>
            <a href={contact.whatsappUrl} className={link}>
              WhatsApp {contact.whatsappDisplay}
            </a>
          </li>
        </ul>
        <p className="text-xs text-cream/60">© {year} Enchanted</p>
      </div>
    </footer>
  )
}
