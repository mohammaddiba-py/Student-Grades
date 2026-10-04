import { Link } from "react-router-dom";

export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 30V15L20 6l12 9v15"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      />
      <path
        d="M14 30v-8h12v8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      />
      <path d="M5 31h30" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="text-gold" />
    </svg>
  );
}

export default function Logo({ tone = "light" }) {
  const text = tone === "light" ? "text-white" : "text-navy-900";
  const sub = tone === "light" ? "text-white/70" : "text-slate-body";
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Horizon Properties — Home">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-bold tracking-[0.18em] ${text}`}>HORIZON</span>
        <span className={`mt-1 text-[9px] font-medium tracking-[0.42em] ${sub}`}>PROPERTIES</span>
      </span>
    </Link>
  );
}
