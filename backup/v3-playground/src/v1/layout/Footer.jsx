import emblem from '../../assets/img/logo-emblem-cream.png'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="grid justify-items-center gap-3 border-t border-blush/25 bg-wine px-5 pt-12 pb-28 text-center text-cream md:pb-12">
      <img src={emblem} alt="" width="406" height="558" loading="lazy" className="w-18" />
      <p className="font-display text-2xl italic">Your vision, enchanted by us.</p>
      <p className="text-[0.8125rem] opacity-75">© {year} Enchanted</p>
    </footer>
  )
}
