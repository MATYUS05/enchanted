export default function Polaroid({ src, alt, caption, tilt = 0, width, height, className = '' }) {
  return (
    <figure
      style={{ '--tilt': `${tilt}deg` }}
      className={`rotate-(--tilt) rounded-lg bg-cream p-2.5 pb-0 text-wine shadow-photo transition-[rotate,scale] duration-300 hover:z-10 hover:scale-105 hover:rotate-0 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="block aspect-3/4 w-full rounded object-cover"
      />
      <figcaption className="pt-0.5 pb-1.5 text-center font-script text-[1.35rem] leading-tight whitespace-nowrap sm:text-[1.75rem]">{caption}</figcaption>
    </figure>
  )
}
