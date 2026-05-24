import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, SectionHeader, Section } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { serviceCategories } from "../../data/services";

const cardStagger = staggerContainer(0.12, 0.1);

function ServiceCard({ title, description, services, icon: Icon, to }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative rounded-card border border-border bg-surface p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{description}</p>

      <ul className="mt-6 space-y-2.5">
        {services.map((service) => (
          <li key={service} className="flex items-start gap-2.5 text-sm text-ink-secondary">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue/60" />
            {service}
          </li>
        ))}
      </ul>

      <Link
        to={to}
        className="mt-8 flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-300 group-hover:gap-2.5"
      >
        Learn More
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <Section background="alt">
      <SectionHeader
        badge="What We Do"
        title="Enterprise-Grade Operational Services"
        description="Purpose-built BPO solutions across three core domains — each designed to optimize workflows, reduce costs, and drive measurable results."
      />

      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {serviceCategories.map((category) => (
          <ServiceCard
            key={category.id}
            title={category.title}
            description={category.description}
            services={category.services}
            icon={category.icon}
            to={`/services#${category.id}`}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Button to="/services" variant="secondary" size="lg">
          View All Services
          <ArrowRight size={18} />
        </Button>
      </motion.div>
    </Section>
  );
}
