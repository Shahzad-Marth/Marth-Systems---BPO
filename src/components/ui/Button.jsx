import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-sm focus-visible:ring-brand-blue",
  secondary:
    "bg-white text-ink border border-border hover:bg-surface-alt shadow-sm focus-visible:ring-border",
  ghost:
    "text-ink-secondary hover:text-ink focus-visible:ring-border",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-button font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className,
  type,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type || "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
