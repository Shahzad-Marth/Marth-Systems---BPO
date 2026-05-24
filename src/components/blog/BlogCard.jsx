import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { formatDate } from "../../utils/blog";

export default function BlogCard({ post }) {
  return (
    <article className="group rounded-card border border-border bg-surface p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card lg:p-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-[11px] font-medium text-brand-blue">
          <Tag size={10} />
          {post.category}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
          <Clock size={11} />
          {post.readTime}
        </span>
      </div>
      <Link to={`/blog/${post.slug}`}>
        <h2 className="text-lg font-semibold text-ink transition-colors group-hover:text-brand-blue lg:text-xl">
          {post.title}
        </h2>
      </Link>
      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-surface-alt px-2 py-0.5 text-[11px] text-ink-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3 text-xs text-ink-muted">{formatDate(post.date)}</div>
      <Link
        to={`/blog/${post.slug}`}
        className="mt-5 flex items-center gap-1 text-sm font-medium text-brand-blue opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:gap-2"
      >
        Read Article <ArrowRight size={14} />
      </Link>
    </article>
  );
}
