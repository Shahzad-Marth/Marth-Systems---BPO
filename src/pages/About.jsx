import { motion } from "framer-motion";
import { ArrowRight, Target, Building2, Users, BarChart3, Shield } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";

const focusAreas = [
  {
    icon: Target,
    title: "What We Do",
    description:
      "We design and manage business processes for healthcare providers, SaaS companies, and high-growth businesses — from revenue cycle management and customer support to back-office administration. Our model combines dedicated teams, modern tooling, and continuous optimization.",
  },
  {
    icon: Building2,
    title: "Who We Are",
    description:
      "Marth Systems was built by operators who understand that great outsourcing isn't about cutting costs — it's about building better workflows. Our leadership team has deep experience across healthcare administration, customer operations, and business process management.",
  },
  {
    icon: Shield,
    title: "Our Approach",
    description:
      "We treat every engagement as an operational partnership. That means dedicated teams, transparent reporting, compliance-first processes, and a continuous improvement mindset. We don't bolt on services — we integrate with your existing operations.",
  },
];

const values = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Consistent, trained teams that know your systems and processes.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Weekly updates, real-time dashboards, and monthly business reviews.",
  },
  {
    icon: Shield,
    title: "Compliance-First",
    description: "HIPAA-conscious frameworks and security-first infrastructure.",
  },
  {
    icon: Target,
    title: "Continuous Improvement",
    description: "Regular process audits and optimization cycles built into every engagement.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Marth Systems is a modern BPO and operational solutions company specializing in healthcare revenue cycle management, customer support, and back-office operations."
        image="/og/about.png"
        canonical="https://marth.systems/about"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>About</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Building Smarter Operations{" "}
              <span className="text-brand-blue">From the Ground Up</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              Marth Systems is a modern BPO and operational solutions company.
              We help healthcare providers, SaaS businesses, and growing companies
              build operations that are efficient, scalable, and compliant.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact#consultation-form" size="lg">
                Book a Consultation <ArrowRight size={18} />
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section background="alt">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                variants={fadeUp}
                className="rounded-card border border-border bg-surface p-7 shadow-sm lg:p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <Icon size={20} />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-ink">{area.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{area.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-section-heading text-ink">How We Operate</h2>
          <p className="mt-4 text-base text-ink-secondary sm:text-body">
            Every engagement is built on the same foundation — dedicated teams,
            transparent processes, and a commitment to continuous improvement.
          </p>
        </motion.div>
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-alt text-ink-secondary">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      <Section background="alt">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-section-heading text-ink">
            Ready to build operations that scale?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink-secondary sm:text-body">
            Let's talk about your operational challenges. We'll show you how
            our approach can make a difference.
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
