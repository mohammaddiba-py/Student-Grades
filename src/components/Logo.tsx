export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Architectural horizon icon */}
        <path
          d="M4 24L16 8L28 24"
          stroke="#C5A059"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 24V18M16 24V12M24 24V18"
          stroke="#C5A059"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line x1="4" y1="26" x2="28" y2="26" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-white text-base tracking-tight">HORIZON</span>
        <span className="font-display font-normal text-white/70 text-[0.625rem] tracking-[0.2em] uppercase">
          Properties
        </span>
      </div>
    </div>
  )
}
