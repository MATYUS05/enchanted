export default function VersionToggle({ version, versions, onSelect }) {
  return (
    <div
      role="group"
      aria-label="Design version"
      className="inline-flex items-center text-[0.6875rem] font-bold tracking-[0.12em] uppercase"
    >
      {versions.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={option === version}
          onClick={() => onSelect(option)}
          className={`min-h-9 cursor-pointer rounded-full border px-2.5 transition-opacity ${option === version ? 'border-current' : 'border-transparent opacity-55 hover:opacity-100'}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
