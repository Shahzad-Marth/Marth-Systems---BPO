import { Link } from "react-router-dom";
import { Tag } from "lucide-react";
import { formatDate } from "../../utils/blog";

export default function RelatedPosts({ posts, currentSlug }) {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="border-t border-border pt-12">
      <h2 className="text-xl font-semibold text-ink">Related Articles</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group rounded-card border border-border bg-surface p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue/10 px-2 py-0.5 text-[10px] font-medium text-brand-blue">
                <Tag size={9} />
                {post.category}
              </span>
              <span className="text-[10px] text-ink-muted">{post.readTime}</span>
            </div>
            <h3 className="text-sm font-semibold text-ink transition-colors group-hover:text-brand-blue">
              {post.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-ink-muted line-clamp-2">{post.excerpt}</p>
            <div className="mt-2 text-[10px] text-ink-muted">{formatDate(post.date)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
