import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/common";
import { Container, Badge, Section } from "../components/ui";
import { BlogCard } from "../components/blog";
import { getAllPosts } from "../utils/blog";
import { blogCategories } from "../data/blog";
import { fadeUp, staggerContainer } from "../utils/animations";

const allPosts = getAllPosts();

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Blog"
        description="Insights on BPO, healthcare operations, revenue cycle management, customer support, workflow automation, and operational excellence from Marth Systems."
        image="/og/blog.png"
        canonical="https://www.marth.systems/blog"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Blog</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Insights on{" "}
              <span className="text-brand-blue">Modern Operations</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              Practical perspectives on BPO, healthcare administration, customer
              support, and the operational systems that power growing businesses.
            </p>
          </div>
        </Container>
      </section>

      <Section background="alt">
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              activeCategory === "All"
                ? "border-brand-blue bg-brand-blue text-white"
                : "border-border bg-surface text-ink-muted hover:text-ink"
            }`}
          >
            All
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "border-brand-blue bg-brand-blue text-white"
                  : "border-border bg-surface text-ink-muted hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-ink-muted">No posts found in this category.</p>
          </div>
        ) : (
          <motion.div
            variants={staggerContainer(0.1, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </Section>
    </>
  );
}
