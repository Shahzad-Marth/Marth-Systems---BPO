import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";
import { industries } from "../data/industries";

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function IndustryDetailCard({ id, industry }) {
  const Icon = industry.icon;
  const slug = slugify(industry.name);

  return (
    <motion.div
      id={id}
      variants={fadeUp}
      className="rounded-card border border-border bg-surface p-8 shadow-sm lg:p-10 scroll-mt-24"
    >
      <div className="flex items-start gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-alt text-ink-secondary">
          <Icon size={24} />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-ink lg:text-2xl">{industry.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-secondary lg:text-base">
            {industry.description}
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-surface-alt p-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Challenge
              </h3>
              <p className="text-sm leading-relaxed text-ink-secondary">
                {industry.painPoints}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-brand-blue/5 p-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Our approach
              </h3>
              <p className="text-sm leading-relaxed text-ink-secondary">
                {industry.solution}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface-alt p-4">
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Outcomes
              </h3>
              <ul className="space-y-1.5">
                {industry.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ink-secondary">
                    <CheckCircle2 size={13} className="shrink-0 text-emerald-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <Link
              to={`/industries/${slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue/80"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries We Serve"
        description="Marth Systems serves medical practices, provider groups, behavioral health, telehealth, specialty clinics, and billing companies with full-cycle RCM and BPO support."
        canonical="https://www.marth.systems/industries"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Industries We Serve</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Healthcare RCM and BPO Support for{" "}
              <span className="text-brand-blue">Every Practice Type</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              Every healthcare organization has unique revenue cycle and administrative
              needs. We tailor our support to the specific workflows, payer requirements,
              and compliance considerations of each practice type.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" size="lg">
                Request a Consultation <ArrowRight size={18} />
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section background="alt">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-6"
        >
          {industries.map((industry) => (
            <IndustryDetailCard key={industry.id} id={industry.id} industry={industry} />
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
            Do not see your practice type?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink-secondary sm:text-body">
            We work with many types of healthcare organizations. Reach out and we
            will discuss how our RCM and BPO support applies to your specific context.
          </p>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Request a Consultation <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
