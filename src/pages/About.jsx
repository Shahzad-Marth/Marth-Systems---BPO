import { motion } from "framer-motion";
import { ArrowRight, Target, Building2, Shield, Users, BarChart3 } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";

const focusAreas = [
  {
    icon: Target,
    title: "What We Do",
    description:
      "We provide full-cycle US healthcare RCM and BPO support — from eligibility verification and prior authorization to charge entry, claims submission, payment posting, denial management, A/R follow-up, credentialing, and payer enrollment. Our model combines dedicated teams, documented processes, and transparent reporting.",
  },
  {
    icon: Building2,
    title: "Who We Are",
    description:
      "Marth Systems was built by operators who understand that administrative support in healthcare is about accuracy, consistency, and compliance. Our team has deep experience across revenue cycle management, provider credentialing, payer enrollment, and healthcare back-office operations.",
  },
  {
    icon: Shield,
    title: "Our Approach",
    description:
      "We treat every engagement as an operational partnership. That means dedicated teams, documented SOPs, compliance-first processes, transparent reporting, and a continuous improvement mindset. We do not bolt on services — we integrate with your existing operations.",
  },
];

const values = [
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Consistent, trained teams that know your systems, payers, and process standards.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Weekly performance reports, real-time dashboards, and monthly business reviews.",
  },
  {
    icon: Shield,
    title: "Compliance-First",
    description: "HIPAA-conscious workflows and privacy-aware operational processes.",
  },
  {
    icon: Target,
    title: "Continuous Improvement",
    description: "Regular process reviews and optimization cycles built into every engagement.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Marth Systems provides full-cycle US healthcare RCM and BPO support for practices, clinics, provider groups, billing teams, and healthcare organizations."
        canonical="https://www.marth.systems/about"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>About</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Full-Cycle Healthcare RCM{" "}
              <span className="text-brand-blue">and BPO Support</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              Marth Systems provides US healthcare RCM and BPO support for practices,
              clinics, provider groups, billing teams, and healthcare organizations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" size="lg">
                Request a Consultation <ArrowRight size={18} />
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
            Ready to optimize your revenue cycle?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink-secondary sm:text-body">
            Let us talk about your RCM and back-office needs. We will show you
            how our approach can make a difference.
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
