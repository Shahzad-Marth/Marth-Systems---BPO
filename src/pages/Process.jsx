import { motion } from "framer-motion";
import { ArrowRight, Search, FileEdit, Play, BarChart3 } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";


const processSteps = [
  {
    icon: Search,
    title: "Discovery and assessment",
    description:
      "We begin by understanding your current revenue cycle operations — your workflows, tools, team structure, payer mix, claim volume, and pain points. This phase includes a review of your current RCM metrics, aging reports, denial patterns, and operational bottlenecks. No assumptions, no templates.",
    details: [
      "Current workflow and SOP review",
      "Systems and tool audit",
      "Payer mix and volume analysis",
      "Metrics baseline (denial rate, aging, first-pass rate)",
      "Pain point identification",
    ],
  },
  {
    icon: FileEdit,
    title: "Support model design",
    description:
      "Based on the assessment, we design a support model tailored to your operations. This includes process maps, team composition, key performance indicators, communication protocols, privacy safeguards, and escalation paths. Everything is defined before we begin.",
    details: [
      "Custom process maps and SOPs",
      "Team structure and role definition",
      "KPI and reporting framework",
      "Communication and escalation protocols",
      "Privacy and security safeguards",
    ],
  },
  {
    icon: Play,
    title: "Team deployment",
    description:
      "We onboard your dedicated support team, integrate with your existing systems, and begin operations with a structured ramp period. The ramp includes daily check-ins, quality reviews, and progressive handoff of workflows from your team to ours.",
    details: [
      "Team onboarding and training on your systems",
      "System integration and access setup",
      "Structured ramp with daily check-ins",
      "Quality review and calibration",
      "Progressive workflow transition",
    ],
  },
  {
    icon: BarChart3,
    title: "Ongoing optimization",
    description:
      "After deployment, we monitor performance continuously. Weekly reports cover throughput, accuracy, aging, and SLA adherence. Monthly business reviews with your leadership cover performance trends, strategic adjustments, and forward planning.",
    details: [
      "Weekly performance reports",
      "Monthly business reviews",
      "Continuous process optimization",
      "Quarterly strategic planning",
      "Ongoing quality assurance",
    ],
  },
];

const stagger = staggerContainer(0.12, 0.1);

export default function Process() {
  return (
    <>
      <SEO
        title="Our Process | Marth Systems"
        description="Marth Systems engagement process — discovery, support model design, team deployment, and ongoing optimization for healthcare RCM and BPO support."
        canonical="https://www.marth.systems/process"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Our Process</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              From Discovery to{" "}
              <span className="text-brand-blue">Ongoing Optimization</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-ink-secondary sm:text-body">
              We follow a structured four-phase engagement model designed to deliver
              consistent results from day one. Every engagement is tailored to your
              specific operations, workflows, and goals.
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
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-10"
        >
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="rounded-card border border-border bg-surface p-8 shadow-sm lg:p-10"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                        Phase {i + 1}
                      </span>
                    </div>
                    <h2 className="mt-1 text-xl font-semibold text-ink lg:text-2xl">
                      {step.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                      {step.description}
                    </p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {step.details.map((d) => (
                        <div
                          key={d}
                          className="flex items-center gap-2 text-sm text-ink-secondary"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue/60" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-secondary">
            Contact us for a no-obligation consultation. We will review your current
            operations and discuss how we can support your revenue cycle.
          </p>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Request a Consultation <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
