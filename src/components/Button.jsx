import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 focus-visible:outline-2 disabled:opacity-50";

const variants = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-800 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(11,31,58,0.5)]",
  gold: "bg-gold text-navy-900 hover:bg-gold-soft hover:-translate-y-0.5",
  "outline-light":
    "border border-white/70 text-white hover:bg-white hover:text-navy-900 backdrop-blur-sm",
  "outline-navy": "border border-navy-900/30 text-navy-900 hover:border-navy-900 hover:bg-navy-900/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
