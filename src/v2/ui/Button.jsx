const variants = {
  wine: 'bg-wine text-cream hover:border-wine-mid hover:bg-wine-mid',
  outline: 'text-wine hover:bg-wine hover:text-cream',
}

export default function Button({ href, variant = 'wine', className = '', children, ...props }) {
  return (
    <a
      href={href}
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2 border border-wine px-7 font-display text-lg font-medium tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
