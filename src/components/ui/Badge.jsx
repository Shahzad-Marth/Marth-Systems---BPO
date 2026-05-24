import { cn } from "../../utils/cn";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1 text-xs font-medium text-ink-secondary shadow-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
