const variants = {
  solid: 'bg-cream text-wine hover:bg-cream/85',
  outline: 'border border-cream/50 text-cream hover:border-cream hover:bg-cream hover:text-wine',
}

export default function Button({ href, variant = 'solid', className = '', children, ...props }) {
  return (
    <a
      href={href}
      {...props}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[0.8125rem] font-bold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
