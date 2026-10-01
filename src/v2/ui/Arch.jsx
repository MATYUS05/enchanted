export default function Arch({ src, alt, caption, width, height, frame = 'border-wine/25', className = '' }) {
  return (
    <figure className={className}>
      <div className={`rounded-t-full border p-1.5 ${frame}`}>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="block aspect-3/4 w-full rounded-t-full object-cover"
        />
      </div>
      {caption && <figcaption className="mt-3 text-center font-display text-lg italic">{caption}</figcaption>}
    </figure>
  )
}
