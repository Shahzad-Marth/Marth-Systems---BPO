import { motion } from "framer-motion";
import { Section, SectionHeader } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { philosophy } from "../../data/whyUs";

const containerStagger = staggerContainer(0.15, 0.1);

function TimelineStep({ step, isLast }) {
  return (
    <motion.div variants={fadeUp} className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-sm font-bold text-brand-blue">
          {step.step}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
      </div>
      <div className={isLast ? "" : "pb-10"}>
        <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Workflow() {
  return (
    <Section background="alt">
      <SectionHeader
        badge="How We Operate"
        title="From Assessment to Ongoing Optimization"
        description="A structured, transparent engagement model designed to deliver consistent support from day one."
      />

      <div className="mx-auto mt-14 max-w-2xl">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {philosophy.steps.map((step, i) => (
            <TimelineStep key={step.step} step={step} isLast={i === philosophy.steps.length - 1} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
