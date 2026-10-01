export default function Chip({ selected, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`min-h-11 cursor-pointer rounded-full border-[1.5px] border-wine px-5 text-sm font-bold tracking-wide uppercase transition-[background-color,color,scale] duration-150 active:scale-90 ${selected ? 'bg-wine text-cream' : 'text-wine hover:bg-wine/10'}`}
    >
      {children}
    </button>
  )
}
