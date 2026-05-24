import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";
import { serviceCategories } from "../data/services";

function ServiceDetailCard({ category }) {
  const Icon = category.icon;

  return (
    <motion.div
      variants={fadeUp}
      id={category.id}
      className="rounded-card border border-border bg-surface p-8 shadow-sm lg:p-10"
    >
      <div className="flex items-start gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
          <Icon size={24} />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-ink lg:text-2xl">{category.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-secondary lg:text-base">
            {category.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Services
              </h3>
              <ul className="space-y-2">
                {category.services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-ink-secondary">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand-blue/60" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                By the numbers
              </h3>
              <ul className="space-y-2">
                {category.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-ink-secondary">
                    <CheckCircle2 size={13} className="shrink-0 text-emerald-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Enterprise BPO solutions across healthcare operations, customer support, and business back office — revenue cycle management, multi-channel support, and administrative outsourcing."
        image="/og/services.png"
        canonical="https://marth.systems/services"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>What We Do</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Operational Services Built for{" "}
              <span className="text-brand-blue">Scale and Precision</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              We design, manage, and optimize the business processes that keep your
              organization running — from revenue cycle management to customer
              support and back-office operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact#consultation-form" size="lg">
                Book a Consultation <ArrowRight size={18} />
              </Button>
              <Button to="/why-us" variant="secondary" size="lg">
                Why Marth Systems
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
          {serviceCategories.map((category) => (
            <ServiceDetailCard key={category.id} category={category} />
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
            Not sure which service fits your needs?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink-secondary sm:text-body">
            We'll assess your current operations and recommend a tailored approach.
            No commitment, no pressure.
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
