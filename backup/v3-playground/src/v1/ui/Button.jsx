const variants = {
  cream: 'border-cream bg-cream text-wine hover:border-blush hover:bg-blush',
  ghost: 'border-cream text-cream hover:bg-cream hover:text-wine',
}

export default function Button({ href, variant = 'cream', className = '', children, ...props }) {
  return (
    <a
      href={href}
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-[1.5px] px-6 text-[0.8125rem] font-bold tracking-[0.12em] uppercase transition-[translate,background-color,border-color,color] duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
