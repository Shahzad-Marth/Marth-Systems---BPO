import { motion } from "framer-motion";
import { UserCheck, UserPlus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, SectionHeader } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";

const services = [
  {
    icon: UserCheck,
    title: "Provider Credentialing",
    description:
      "CAQH profile setup and maintenance, PECOS enrollment, NPI and taxonomy registration, payer roster management, and revalidation support to keep providers actively participating in payer networks.",
    items: ["CAQH Profile Management", "PECOS Support", "NPI & Taxonomy Registration", "Payer Roster Management", "Revalidation Support"],
    link: "/services/provider-credentialing",
  },
  {
    icon: UserPlus,
    title: "Provider Enrollment",
    description:
      "Commercial, Medicare, and Medicaid payer enrollment, EFT and ERA setup, contract follow-up, and ongoing maintenance to ensure providers can bill and receive reimbursement from every contracted payer.",
    items: ["Commercial Payer Enrollment", "Medicare Enrollment Support", "Medicaid Enrollment Support", "EFT/ERA Enrollment", "Contract Follow-Up"],
    link: "/services/provider-enrollment",
  },
];

export default function CredentialingEnrollment() {
  return (
    <Section background="alt">
      <SectionHeader
        badge="Network Participation"
        title="Credentialing and Payer Enrollment Support"
        description="Maintaining active payer network participation is critical for reimbursement. We support credentialing and enrollment workflows from initial application through ongoing maintenance and revalidation."
      />

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 md:grid-cols-2"
      >
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group rounded-card border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{service.description}</p>

              <ul className="mt-6 space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue/60" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to={service.link}
                className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-300 group-hover:gap-2.5"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
