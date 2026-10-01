export default function SectionLabel({ number, className = 'text-raspberry', children }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span className="font-display text-base tracking-normal normal-case italic">N° {number}</span>
      <span aria-hidden="true" className="h-px w-10 bg-current" />
      {children}
    </p>
  )
}
