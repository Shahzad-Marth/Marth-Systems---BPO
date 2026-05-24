import { cn } from "../../utils/cn";

export default function TableOfContents({ headings }) {
  if (!headings || headings.length < 2) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-28">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
        On this page
      </h3>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                "block text-sm transition-colors hover:text-ink",
                h.level === 3 ? "pl-4 text-ink-muted" : "text-ink-secondary"
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
