import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";
import { advantages, philosophy } from "../data/whyUs";

const advStagger = staggerContainer(0.1, 0.1);

function AdvantageCard({ advantage }) {
  const Icon = advantage.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="rounded-card border border-border bg-surface p-7 shadow-sm lg:p-8"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink">{advantage.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{advantage.description}</p>
    </motion.div>
  );
}

function ProcessStep({ step }) {
  return (
    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-sm font-bold text-brand-blue">
        {step.step}
      </div>
      <div>
        <h3 className="font-semibold text-ink">{step.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-secondary">{step.description}</p>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <>
      <SEO
        title="Why Us"
        description="Discover why businesses choose Marth Systems — operational efficiency, scalable support, compliance-first processes, dedicated teams, and complete transparency."
        image="/og/why-us.png"
        canonical="https://marth.systems/why-us"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Why Marth Systems</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Operational Partnership,{" "}
              <span className="text-brand-blue">Not Just Outsourcing</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              We build and manage operations that integrate with your business —
              not bolt-on services that require constant oversight. Here's what
              makes our approach different.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact#consultation-form" size="lg">
                Book a Consultation <ArrowRight size={18} />
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section background="alt">
        <h2 className="sr-only">Our Advantages</h2>
        <motion.div
          variants={advStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {advantages.map((adv) => (
            <AdvantageCard key={adv.title} advantage={adv} />
          ))}
        </motion.div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Badge>Our Process</Badge>
          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-section-heading text-ink">{philosophy.heading}</h2>
          <p className="mt-4 text-base text-ink-secondary sm:text-body">
            We follow a structured four-phase approach to ensure every engagement
            delivers predictable results.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {philosophy.steps.map((step) => (
            <ProcessStep key={step.step} step={step} />
          ))}
        </div>
      </Section>

      <Section background="alt">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-section-heading text-ink">
            Ready to build operations that scale?
          </h2>
          <p className="mt-4 text-base text-ink-secondary sm:text-body">
            We'll start with a no-obligation operational assessment. You'll get a
            clear picture of where your operations stand and where they can improve.
          </p>
          <div className="mt-8">
            <Button to="/contact#consultation-form" size="lg">
              Book a Consultation <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
