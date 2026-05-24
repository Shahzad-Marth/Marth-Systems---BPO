import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Section, SectionHeader, Button } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { testimonials } from "../../data/testimonials";

const cardStagger = staggerContainer(0.12, 0.1);

function TestimonialCard({ quote, author, company, industry, outcome }) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative flex flex-col rounded-card border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:shadow-card"
    >
      <Quote size={22} className="text-brand-blue/20" />

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-secondary">
        "{quote}"
      </blockquote>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <div>
          <div className="text-sm font-semibold text-ink">{author}</div>
          <div className="text-xs text-ink-muted">{company} · {industry}</div>
        </div>
        {outcome && (
          <div className="text-right">
            <div className="text-[11px] font-medium text-emerald-600">Key Result</div>
            <div className="text-xs text-ink-muted">{outcome.metric}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <Section background="alt">
      <SectionHeader
        badge="Client Results"
        title="Measurable Outcomes Across Industries"
        description="The metrics and feedback from organizations that run their operations with Marth Systems."
      />

      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} {...t} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Button to="/case-studies" variant="secondary" size="lg">
          View Case Studies
          <ArrowRight size={18} />
        </Button>
      </motion.div>
    </Section>
  );
}
