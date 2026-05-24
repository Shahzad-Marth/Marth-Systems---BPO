import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ paths }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-ink-muted">
      {paths.map((path, i) => {
        const isLast = i === paths.length - 1;
        return (
          <span key={path.label} className="flex items-center gap-2">
            {i > 0 && <ChevronRight size={12} aria-hidden="true" />}
            {isLast ? (
              <span className="text-ink-secondary" aria-current="page">
                {path.label}
              </span>
            ) : (
              <Link to={path.to} className="transition-colors hover:text-ink-secondary">
                {path.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
