import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, Section } from "../ui";

export default function FinalCTA() {
  return (
    <Section
      className="border-t border-border"
      containerClassName="text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-section-heading text-ink">
          Build Smarter Operations with{" "}
          <span className="text-brand-blue">Marth Systems</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
          Partner with a BPO team that understands healthcare compliance,
          customer operations, and the infrastructure needed to scale.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact#consultation-form" size="lg">
            Book a Consultation
            <ArrowRight size={18} />
          </Button>
          <Button to="/services" variant="secondary" size="lg">
            Explore Services
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
