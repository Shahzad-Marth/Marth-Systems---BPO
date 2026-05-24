import { motion } from "framer-motion";
import { Button, SectionHeader, Section } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { industries } from "../../data/industries";

const cardStagger = staggerContainer(0.08, 0.1);

function IndustryCard({ icon: Icon, name, description }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-card border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card lg:p-8"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-alt">
        <Icon size={20} className="text-ink-secondary" />
      </div>
      <h3 className="text-lg font-semibold text-ink">{name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{description}</p>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <Section>
      <SectionHeader
        badge="Industries We Serve"
        title="Operational Infrastructure for Regulated & High-Growth Markets"
        description="Our BPO solutions are purpose-built for the industries that demand precision, compliance, and scale."
      />

      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {industries.map((industry) => (
          <IndustryCard
            key={industry.id}
            icon={industry.icon}
            name={industry.name}
            description={industry.description}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Button to="/industries" variant="secondary" size="lg">
          Explore All Industries
        </Button>
      </motion.div>
    </Section>
  );
}
