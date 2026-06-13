import { motion } from "framer-motion";
import { FileText, BarChart3, CheckCircle2, Shield, Headphones } from "lucide-react";
import { Section, SectionHeader } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";

const phases = [
  {
    icon: FileText,
    title: "Front-End RCM",
    description:
      "Patient registration, eligibility verification, prior authorization, referral coordination, and appointment scheduling support that sets the foundation for clean claims.",
    items: ["Eligibility & Benefits Verification", "Prior Authorization Support", "Referral Coordination", "Patient Scheduling Support"],
  },
  {
    icon: BarChart3,
    title: "Mid-Cycle RCM",
    description:
      "Charge entry, coding review, claim scrubbing, and claims submission support that converts patient encounters into clean, billable claims.",
    items: ["Charge Entry", "Claim Scrubbing & Editing", "Claims Submission", "Clearinghouse Rejection Follow-Up"],
  },
  {
    icon: CheckCircle2,
    title: "Back-End RCM",
    description:
      "Payment posting, ERA/EOB processing, denial management, A/R follow-up, and patient billing support to close the revenue cycle efficiently.",
    items: ["Payment Posting", "Denial Management & Appeals", "A/R Follow-Up", "Patient Billing Support"],
  },
  {
    icon: Shield,
    title: "Credentialing & Enrollment",
    description:
      "Provider credentialing, payer enrollment, CAQH management, and revalidation support to maintain active network participation.",
    items: ["Provider Credentialing", "Payer Enrollment", "CAQH Profile Management", "Revalidation Support"],
  },
  {
    icon: Headphones,
    title: "Healthcare BPO",
    description:
      "Administrative and back-office support including payer call handling, virtual assistant, data entry, and document management.",
    items: ["Call Center Support", "Virtual Assistant", "Data Entry", "Document Indexing"],
  },
];

const cardStagger = staggerContainer(0.1, 0.08);

export default function RcmOverview() {
  return (
    <Section background="alt">
      <SectionHeader
        badge="Full-Cycle Coverage"
        title="End-to-End Revenue Cycle and Back-Office Support"
        description="From patient intake through final reimbursement and credentialing — we support every phase of the healthcare revenue cycle with dedicated teams and documented processes."
      />

      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {phases.map((phase) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.title}
              variants={fadeUp}
              className="rounded-card border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-ink">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{phase.description}</p>
              <ul className="mt-4 space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-secondary">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand-blue/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
