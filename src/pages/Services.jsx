import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";
import { serviceCategories } from "../data/services";

function slugify(title) {
  const map = {
    "Full-Cycle Revenue Cycle Management": "full-cycle-rcm",
    "Healthcare BPO": "healthcare-bpo",
    "Medical Billing": "medical-billing",
    "Denial Management": "denial-management",
    "A/R Follow-Up": "ar-follow-up",
    "Provider Credentialing": "provider-credentialing",
    "Provider Enrollment": "provider-enrollment",
  };
  return map[title] || title.toLowerCase().replace(/\s+/g, "-");
}

function ServiceDetailCard({ category }) {
  const Icon = category.icon;
  const slug = slugify(category.title);

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
                Highlights
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

          <div className="mt-6">
            <Link
              to={`/services/${slug}`}
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

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Healthcare RCM & BPO Services"
        description="Full-cycle US healthcare RCM and BPO services — front-end RCM, medical billing, denial management, A/R follow-up, provider credentialing, provider enrollment, and healthcare BPO."
        canonical="https://www.marth.systems/services"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>What We Do</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Healthcare RCM{" "}
              <span className="text-brand-blue">& BPO Services</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              Revenue cycle management and healthcare back-office support for
              practices, clinics, provider groups, billing teams, and healthcare
              organizations — from patient intake through final reimbursement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" size="lg">
                Request a Consultation <ArrowRight size={18} />
              </Button>
              <Button to="/process" variant="secondary" size="lg">
                Our Process
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
        <div className="rounded-card border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm leading-relaxed text-amber-800">
            <strong>Privacy and security note:</strong> Please do not submit protected health information (PHI),
            patient records, claim files, login credentials, or sensitive documents through this website.
            After initial contact, we can arrange an appropriate secure intake process if needed.
          </p>
        </div>
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
            We will assess your current revenue cycle operations and recommend a
            tailored approach. No commitment, no pressure.
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
