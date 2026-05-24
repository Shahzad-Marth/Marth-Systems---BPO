import { blogPosts } from "../data/blog";

function stripFrontmatter(raw) {
  return raw.replace(/^---[\s\S]*?---\n*/, "");
}

const modules = import.meta.glob("/src/content/blog/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
});

export function getPost(slug) {
  const meta = blogPosts.find((p) => p.slug === slug);
  if (!meta) return null;

  const path = `/src/content/blog/${slug}.mdx`;
  const raw = modules[path];
  if (!raw) return null;

  const content = stripFrontmatter(raw);
  return { ...meta, content };
}

export function getAllPosts() {
  return blogPosts
    .map((meta) => {
      const raw = modules[`/src/content/blog/${meta.slug}.mdx`];
      if (!raw) return null;
      const content = stripFrontmatter(raw);
      return { ...meta, content };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function extractHeadings(content) {
  const headings = [];
  const lines = content.split("\n");

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)/);
    if (match) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      headings.push({ level, text, id });
    }
  }

  return headings;
}

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
