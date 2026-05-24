import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, CheckCircle2, Clock, Activity } from "lucide-react";
import { Container, Button, Badge } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";

const containerVariants = staggerContainer(0.12, 0.2);

function KpiCard({ value, label, trend, trendUp, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl border border-border bg-white px-4 py-3.5 shadow-sm"
    >
      <div className="text-xl font-bold tracking-tight text-ink">{value}</div>
      <div className="mt-0.5 flex items-center gap-1.5">
        <span className="text-xs text-ink-muted">{label}</span>
        <span className={`flex items-center gap-0.5 text-[11px] font-medium ${trendUp ? "text-emerald-600" : "text-red-500"}`}>
          <TrendingUp size={11} className={trendUp ? "" : "rotate-180"} />
          {trend}
        </span>
      </div>
    </motion.div>
  );
}

function TrendChart() {
  const points = [
    { x: 0, y: 60 },
    { x: 16, y: 35 },
    { x: 32, y: 48 },
    { x: 48, y: 20 },
    { x: 64, y: 30 },
    { x: 80, y: 12 },
    { x: 96, y: 22 },
    { x: 112, y: 8 },
    { x: 128, y: 18 },
    { x: 144, y: 4 },
    { x: 160, y: 10 },
    { x: 176, y: 2 },
  ];

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="rounded-xl bg-surface-alt p-4"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-semibold text-ink">Resolution Trend</span>
        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600">
          <TrendingUp size={12} />
          +18.5%
        </span>
      </div>
      <div className="relative h-16 w-full">
        <motion.svg
          viewBox="0 0 180 64"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d={pathD}
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
          />
          <motion.path
            d={`${pathD} L 180 64 L 0 64 Z`}
            fill="url(#gradient)"
            opacity={0.08}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </motion.div>
  );
}

function ActivityFeed() {
  const items = [
    { label: "Claim #2847", action: "Processed", time: "12:30", delay: 1.1 },
    { label: "Ticket #1034", action: "Resolved", time: "12:15", delay: 1.2 },
    { label: "Report — Q3", action: "Generated", time: "11:45", delay: 1.3 },
    { label: "Review — Audit", action: "Approved", time: "11:20", delay: 1.4 },
  ];

  return (
    <div className="rounded-xl border border-border bg-white p-4 shadow-sm">
      <div className="mb-2.5 flex items-center gap-2">
        <Activity size={13} className="text-ink-muted" />
        <span className="text-xs font-semibold text-ink">Activity Feed</span>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: item.delay, ease: "easeOut" }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-ink-muted">{item.label}</span>
              <span className="text-[11px] font-medium text-ink-secondary">{item.action}</span>
            </div>
            <span className="text-[11px] text-ink-muted">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DashboardMockup() {
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
              <Activity size={12} className="text-brand-blue" />
            </div>
            <span className="text-sm font-semibold text-ink">Operations Dashboard</span>
          </div>
          <div className="flex items-center gap-1 rounded-md border border-border px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-medium text-ink-muted">Live</span>
          </div>
        </motion.div>

        <div className="mb-3 grid grid-cols-3 gap-2.5">
          <KpiCard value="92.4%" label="Accuracy" trend="+2.1%" trendUp delay={0.5} />
          <KpiCard value="1,847" label="Processed" trend="+12.3%" trendUp delay={0.55} />
          <KpiCard value="3.2m" label="Avg. Time" trend="-8%" trendUp={false} delay={0.6} />
        </div>

        <div className="mb-3 grid grid-cols-2 gap-2.5">
          <TrendChart />
          <div className="space-y-2.5">
            <div className="rounded-xl border border-border bg-white p-3.5 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
                  <CheckCircle2 size={14} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">98.7%</div>
                  <div className="text-[11px] text-ink-muted">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-white p-3.5 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10">
                  <Clock size={14} className="text-brand-blue" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">24/7</div>
                  <div className="text-[11px] text-ink-muted">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ActivityFeed />
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
              Enterprise BPO Platform
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-6 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
            Operational Infrastructure for{" "}
            <span className="text-brand-blue">Healthcare & Customer Excellence</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-base leading-relaxed text-ink-secondary sm:text-body"
          >
            Enterprise BPO solutions combining AI-driven workflows, HIPAA-compliant
            processes, and deep domain expertise to reduce costs and accelerate
            growth across healthcare and customer operations.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/contact#consultation-form" size="lg">
              Book a Consultation
              <ArrowRight size={18} />
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.4)}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {[
              "HIPAA-Compliant Framework",
              "AI-Powered Workflows",
              "24/7 Operations",
              "99.5% Uptime SLA",
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
          <DashboardMockup />
        </motion.div>
      </Container>
    </section>
  );
}
