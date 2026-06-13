import { motion } from "framer-motion";
import { FileX, Clock, Headphones, AlertCircle, FileText, BarChart3 } from "lucide-react";
import { Section, SectionHeader } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";

const problems = [
  {
    icon: FileX,
    title: "High Claim Denial Rates",
    description:
      "Denials from eligibility gaps, authorization issues, coding errors, and medical necessity criteria that go unresolved without dedicated follow-up and appeals support.",
  },
  {
    icon: Clock,
    title: "Growing Aging A/R",
    description:
      "Aging accounts receivable that piles up when there is no bandwidth for consistent payer follow-up, claim status investigation, and underpayment resolution.",
  },
  {
    icon: Headphones,
    title: "Administrative Overload",
    description:
      "Payer phone calls, portal follow-up, document management, and data entry consuming hours of clinical and billing staff time each day.",
  },
  {
    icon: AlertCircle,
    title: "Prior Authorization Delays",
    description:
      "Authorization requirements that delay patient procedures, expire before services are rendered, and create revenue gaps without dedicated tracking and follow-up.",
  },
  {
    icon: FileText,
    title: "Credentialing & Enrollment Gaps",
    description:
      "Providers not enrolled with key payers, CAQH profiles not attested, revalidation deadlines missed — leading to payment disruptions and network participation lapses.",
  },
  {
    icon: BarChart3,
    title: "Inconsistent Revenue Cycle Metrics",
    description:
      "No clear visibility into denial rates, aging trends, first-pass claim rates, or revenue cycle performance — making it difficult to identify problems or measure improvement.",
  },
];

const cardStagger = staggerContainer(0.08, 0.08);

export default function CommonProblems() {
  return (
    <Section>
      <SectionHeader
        badge="Common Challenges"
        title="Revenue Cycle Challenges We Help Solve"
        description="Healthcare practices and billing teams face recurring operational challenges that impact cash flow, staff productivity, and patient care. We help address each one with structured support."
      />

      <motion.div
        variants={cardStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {problems.map((problem) => {
          const Icon = problem.icon;
          return (
            <motion.div
              key={problem.title}
              variants={fadeUp}
              className="rounded-card border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-500">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-ink">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{problem.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
