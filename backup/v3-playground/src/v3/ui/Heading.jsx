export default function Heading({ id, before, script, after, scriptClassName = 'text-raspberry', className = '' }) {
  return (
    <h2 id={id} className={`shout text-[clamp(2.75rem,9vw,7.5rem)] ${className}`}>
      {before}{' '}
      <span
        className={`inline-block -rotate-3 px-[0.08em] font-script text-[1.15em] leading-none font-normal tracking-normal normal-case not-italic ${scriptClassName}`}
      >
        {script}
      </span>{' '}
      {after}
    </h2>
  )
}
