import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";
import { caseStudies } from "../data/caseStudies";

function CaseStudyCard({ study }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-card border border-border bg-surface shadow-sm"
    >
      <div className="p-8 lg:p-10">
        <Badge className="mb-4">{study.industry}</Badge>
        <h2 className="text-xl font-semibold text-ink lg:text-2xl">{study.title}</h2>
        <p className="text-sm text-ink-muted">{study.subtitle}</p>

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Challenge
            </h3>
            <p className="text-sm leading-relaxed text-ink-secondary">{study.challenge}</p>
          </div>
          <div>
            <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Our solution
            </h3>
            <p className="text-sm leading-relaxed text-ink-secondary">{study.solution}</p>
          </div>
          <div>
            <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Key improvements
            </h3>
            <ul className="space-y-1">
              {study.improvements.map((imp) => (
                <li key={imp} className="flex items-start gap-2 text-sm text-ink-secondary">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                  {imp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {study.outcomes.map((outcome) => (
            <div key={outcome.metric} className="rounded-xl border border-border bg-surface-alt p-4">
              <div className="text-sm font-bold text-ink">{outcome.metric}</div>
              <div className="text-xs text-ink-muted">{outcome.detail}</div>
            </div>
          ))}
        </div>

        <blockquote className="mt-6 border-l-2 border-brand-blue pl-4">
          <p className="text-sm italic leading-relaxed text-ink-secondary">
            "{study.testimonial.quote}"
          </p>
          <footer className="mt-1.5 text-xs font-medium text-ink-muted">
            — {study.testimonial.author}
          </footer>
        </blockquote>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="See how Marth Systems transforms operations for healthcare providers, e-commerce brands, and SaaS companies through real-world BPO case studies."
        image="/og/case-studies.png"
        canonical="https://marth.systems/case-studies"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Case Studies</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Real Results,{" "}
              <span className="text-brand-blue">Real Operations</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              See how we've helped healthcare practices, e-commerce brands, and
              SaaS companies transform their operations — with measurable outcomes
              and lasting improvements.
            </p>
          </div>
        </Container>
      </section>

      <Section background="alt">
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-8"
        >
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-section-heading text-ink">
            Ready to write your own case study?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink-secondary sm:text-body">
            Let's talk about your operational challenges. We'll show you what a
            partnership with Marth Systems could look like.
          </p>
          <div className="mt-8">
            <Button to="/contact#consultation-form" size="lg">
              Book a Consultation <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
