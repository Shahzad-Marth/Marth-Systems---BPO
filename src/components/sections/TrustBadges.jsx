import { motion } from "framer-motion";
import { Shield, Lock, FileCheck } from "lucide-react";
import { Section, SectionHeader } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { trustBadges } from "../../data/testimonials";

const categoryIcons = [Shield, Lock, FileCheck];

const cardStagger = staggerContainer(0.1, 0.1);

function BadgeItem({ name, description }) {
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-3">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
      <div>
        <div className="text-sm font-semibold text-ink">{name}</div>
        <div className="mt-0.5 text-xs leading-relaxed text-ink-muted">{description}</div>
      </div>
    </motion.div>
  );
}

function BadgeCategory({ category, items, icon: Icon }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-card border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:shadow-card"
    >
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-ink">{category}</h3>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <BadgeItem key={item.name} name={item.name} description={item.description} />
        ))}
      </div>
    </motion.div>
  );
}

export default function TrustBadges() {
  return (
    <Section background="surface">
      <SectionHeader
        badge="Trust & Compliance Infrastructure"
        title="Security, Privacy & Operational Standards"
        description="Every engagement is built on a foundation of documented policies, audited controls, and transparent reporting."
      />

      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {trustBadges.map((group, i) => (
          <BadgeCategory
            key={group.category}
            category={group.category}
            items={group.items}
            icon={categoryIcons[i] || Shield}
          />
        ))}
      </motion.div>
    </Section>
  );
}
