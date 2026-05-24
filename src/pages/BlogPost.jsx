import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Button } from "../components/ui";
import { Breadcrumb, TableOfContents, RelatedPosts } from "../components/blog";
import { getPost, getAllPosts, extractHeadings, formatDate } from "../utils/blog";
import { fadeUp, staggerContainer } from "../utils/animations";

const allPosts = getAllPosts();

function ProseHeading({ level, children, ...props }) {
  const id = String(children)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const Tag = `h${level}`;
  return <Tag id={id} {...props}>{children}</Tag>;
}

const proseComponents = {
  h2: ({ children, ...props }) => (
    <ProseHeading level={2} {...props} className="mt-10 mb-4 text-xl font-semibold text-ink lg:text-2xl">
      {children}
    </ProseHeading>
  ),
  h3: ({ children, ...props }) => (
    <ProseHeading level={3} {...props} className="mt-8 mb-3 text-lg font-semibold text-ink">
      {children}
    </ProseHeading>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 text-base leading-relaxed text-ink-secondary" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="mb-6 space-y-2" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }) => (
    <li className="flex items-start gap-2 text-base text-ink-secondary" {...props}>
      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue/60" />
      <span>{children}</span>
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-ink" {...props}>
      {children}
    </strong>
  ),
  hr: (props) => <hr className="my-10 border-border" {...props} />,
  blockquote: ({ children, ...props }) => (
    <blockquote className="my-6 border-l-2 border-brand-blue pl-4 italic text-ink-secondary" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, inline, ...props }) =>
    inline ? (
      <code className="rounded bg-surface-alt px-1.5 py-0.5 text-sm font-medium text-brand-blue" {...props}>
        {children}
      </code>
    ) : (
      <pre className="my-4 overflow-x-auto rounded-xl border border-border bg-surface-alt p-4 text-sm">
        <code {...props}>{children}</code>
      </pre>
    ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-brand-blue underline underline-offset-2 hover:text-brand-blue/80"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),
};

export default function BlogPost() {
  const { slug } = useParams();

  const post = getPost(slug);

  const headings = useMemo(() => {
    if (!post) return [];
    return extractHeadings(post.content);
  }, [post]);

  if (!post) {
    return (
      <section className="section-padding">
        <Container className="text-center">
          <h1 className="text-4xl leading-[1.15] sm:text-5xl lg:text-hero">Post not found</h1>
          <p className="mt-4 text-base text-ink-secondary sm:text-body">
            The article you're looking for doesn't exist.
          </p>
          <Button to="/blog" variant="secondary" size="lg" className="mt-8">
            Back to Blog
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image="/og/blog.png"
        canonical={`https://marth.systems/blog/${post.slug}`}
        article={{
          ...post,
          publishedTime: post.date,
        }}
        breadcrumbs={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article>
        <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
          <Container>
            <Breadcrumb
              paths={[
                { label: "Blog", to: "/blog" },
                { label: post.title },
              ]}
            />

            <motion.div
              variants={staggerContainer(0.1, 0.05)}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-[11px] font-medium text-brand-blue">
                  <Tag size={10} />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                  <Calendar size={11} />
                  {formatDate(post.date)}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                  <Clock size={11} />
                  {post.readTime}
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">{post.title}</motion.h1>
              <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-base text-ink-secondary sm:text-body">
                {post.excerpt}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-6 flex items-center gap-3 text-sm text-ink-muted">
                <span>By {post.author}</span>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        <section className="section-padding">
          <Container>
            <div className="grid gap-12 lg:grid-cols-4">
              <aside className="hidden lg:block">
                <TableOfContents headings={headings} />
              </aside>

              <div className="prose-custom min-w-0 lg:col-span-3 lg:max-w-3xl">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={proseComponents}
                >
                  {post.content}
                </ReactMarkdown>

                <div className="mt-12 border-t border-border pt-8">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                  >
                    <ArrowLeft size={14} />
                    Back to Blog
                  </Link>
                </div>

                <RelatedPosts posts={allPosts} currentSlug={slug} />
              </div>
            </div>
          </Container>
        </section>
      </article>
    </>
  );
}
