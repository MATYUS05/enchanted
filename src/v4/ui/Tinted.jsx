export default function Tinted({ src, alt, width, height, className = '', children }) {
  return (
    <div className={`group relative overflow-hidden bg-black/20 ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-wine opacity-70 mix-blend-color transition-opacity duration-500 group-hover:opacity-0"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-wine/25 transition-opacity duration-500 group-hover:opacity-0"
      />
      {children}
    </div>
  )
}
