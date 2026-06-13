import { motion } from "framer-motion";
import { FileText, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section, SectionHeader } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";

const phases = [
  {
    id: "front-end-rcm",
    icon: FileText,
    title: "Front-End RCM",
    tag: "Patient to Claim",
    description:
      "Front-end RCM sets the foundation for clean claims. We support patient registration, demographics verification, eligibility and benefits verification, referral coordination, prior authorization, and appointment scheduling — every step that happens before services are rendered.",
    supports: [
      "Patient registration and demographics verification",
      "Insurance eligibility and benefits verification",
      "Prior authorization support and follow-up",
      "Referral coordination",
      "Appointment scheduling support",
    ],
    link: "/services/front-end-rcm",
  },
  {
    id: "mid-cycle-rcm",
    icon: BarChart3,
    title: "Mid-Cycle RCM",
    tag: "Charge to Claim",
    description:
      "Mid-cycle RCM converts patient encounters into billable claims. We support charge entry from encounter forms, coding review, claim scrubbing, claims submission to clearinghouses, and clearinghouse rejection follow-up to ensure clean claims reach payers.",
    supports: [
      "Charge entry from encounter forms and super-bills",
      "Coding review support",
      "Claim scrubbing and pre-submission editing",
      "Claims submission to clearinghouses",
      "Clearinghouse rejection follow-up",
    ],
    link: "/services/mid-cycle-rcm",
  },
  {
    id: "back-end-rcm",
    icon: CheckCircle2,
    title: "Back-End RCM",
    tag: "Payment to Resolution",
    description:
      "Back-end RCM is where revenue is realized. We support payment posting, ERA and EOB processing, denial management and appeals, A/R follow-up across all aging buckets, aging AR cleanup, underpayment follow-up, and patient billing support.",
    supports: [
      "Payment posting — ERA and EOB processing",
      "Denial management and appeals packet support",
      "A/R follow-up across all aging buckets",
      "Aging AR cleanup and reconciliation",
      "Patient billing support",
    ],
    link: "/services/back-end-rcm",
  },
];

const cardStagger = staggerContainer(0.1, 0.08);

export default function RcmPhases() {
  return (
    <Section>
      <SectionHeader
        badge="The RCM Lifecycle"
        title="Every Phase of the Revenue Cycle, Covered"
        description="We break the revenue cycle into three operational phases — front-end, mid-cycle, and back-end — and support each one with dedicated specialists, documented processes, and consistent quality reviews."
      />

      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-6 lg:grid-cols-3"
      >
        {phases.map((phase) => {
          const Icon = phase.icon;
          return (
            <motion.div
              key={phase.id}
              variants={fadeUp}
              className="group relative rounded-card border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <Icon size={20} />
                </div>
                <span className="rounded-full bg-brand-blue/5 px-2.5 py-0.5 text-[11px] font-medium text-brand-blue">
                  {phase.tag}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-ink">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{phase.description}</p>

              <ul className="mt-5 space-y-2.5">
                {phase.supports.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue/60" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to={phase.link}
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
