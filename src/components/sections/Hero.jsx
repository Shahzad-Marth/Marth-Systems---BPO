import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Shield, BarChart3 } from "lucide-react";
import { Container, Button, Badge } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";

const containerVariants = staggerContainer(0.12, 0.2);

function RCMCategorCard({ icon: Icon, title, items, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl border border-border bg-white p-4 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-blue/10 text-brand-blue">
          <Icon size={13} />
        </div>
        <span className="text-xs font-semibold text-ink">{title}</span>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-ink-muted">
            <span className="h-1 w-1 rounded-full bg-brand-blue/40" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function RCMOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      aria-hidden="true"
    >
      <div className="rounded-card border border-border bg-white p-5 shadow-xl shadow-black/5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-brand-blue/10">
              <BarChart3 size={12} className="text-brand-blue" />
            </div>
            <span className="text-sm font-semibold text-ink">Full-Cycle RCM Overview</span>
          </div>
          <div className="flex items-center gap-1 rounded-md border border-border px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-medium text-ink-muted">All Phases</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <RCMCategorCard
            icon={FileText}
            title="Front-End RCM"
            items={["Eligibility verification", "Prior authorization", "Referral coordination", "Patient scheduling"]}
            delay={0.5}
          />
          <RCMCategorCard
            icon={BarChart3}
            title="Mid-Cycle RCM"
            items={["Charge entry", "Claim scrubbing", "Claims submission", "Clearinghouse follow-up"]}
            delay={0.55}
          />
          <RCMCategorCard
            icon={CheckCircle2}
            title="Back-End RCM"
            items={["Payment posting", "Denial management", "A/R follow-up", "Patient billing"]}
            delay={0.6}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-3 flex items-center justify-center gap-4 rounded-lg bg-surface-alt p-3 text-xs text-ink-muted"
        >
          <span className="flex items-center gap-1.5">
            <Shield size={12} className="text-emerald-500" />
            HIPAA-Conscious Workflows
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-500" />
            Dedicated Teams
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5">
            <BarChart3 size={12} className="text-emerald-500" />
            Transparent Reporting
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-surface-blue-soft via-surface to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-brand-blue/5 blur-3xl"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10 flex min-h-screen flex-col items-center pt-28 lg:flex-row lg:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 pt-12 lg:pt-0 lg:pr-16"
        >
          <motion.div variants={fadeUp}>
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Full-Cycle US Healthcare RCM & BPO
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-6 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
            Full-Cycle US Healthcare{" "}
            <span className="text-brand-blue">RCM & BPO Support</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-ink-secondary sm:text-body"
          >
            Marth Systems helps healthcare practices, clinics, provider groups, and billing teams
            manage revenue cycle and back-office workflows from patient intake through claims,
            payment posting, denial management, A/R follow-up, credentialing, enrollment, and reporting.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/contact" size="lg">
              Request a Consultation
              <ArrowRight size={18} />
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              Explore RCM Services
            </Button>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.4)}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {[
              "HIPAA-Conscious Workflows",
              "Full-Cycle RCM Coverage",
              "Dedicated Support Teams",
              "Transparent Reporting",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-center gap-2 text-sm text-ink-muted"
              >
                <div className="h-1 w-1 rounded-full bg-emerald-400" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full max-w-xl flex-1 lg:mt-0"
        >
          <RCMOverview />
        </motion.div>
      </Container>
    </section>
  );
}
