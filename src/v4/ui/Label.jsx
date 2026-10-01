export default function Label({ className = '', children }) {
  return (
    <p className={`flex items-center gap-4 text-xs tracking-[0.2em] text-cream/75 uppercase ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  )
}
