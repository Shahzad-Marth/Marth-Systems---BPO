import { motion } from "framer-motion";
import { TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "../ui";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { philosophy } from "../../data/whyUs";

const containerStagger = staggerContainer(0.15, 0.1);

const kpiData = [
  { label: "Claims Processed", value: "12,847", change: "+12.3%", up: true },
  { label: "Avg. Resolution", value: "4.2m", change: "-18%", up: false },
  { label: "Accuracy Rate", value: "98.7%", change: "+1.2%", up: true },
  { label: "Active Queues", value: "3", change: "—", up: null },
];

function MiniChart() {
  const bars = [40, 65, 45, 78, 55, 82, 70, 90, 75, 95, 85, 92];

  return (
    <div className="flex h-24 items-end gap-1.5">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: h }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.04, ease: "easeOut" }}
          className="w-2.5 rounded-t-sm bg-brand-blue/60"
          style={{ opacity: 0.3 + (h / 100) * 0.7 }}
        />
      ))}
    </div>
  );
}

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      aria-hidden="true"
      className="rounded-card border border-border bg-white shadow-card"
    >
      <div className="border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50">
            <BarChart3 size={13} className="text-emerald-600" />
          </div>
          <span className="text-sm font-semibold text-ink">Operations Overview</span>
        </div>
      </div>

      <div className="space-y-3 p-5">
        <div className="grid grid-cols-2 gap-3">
          {kpiData.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="rounded-lg border border-border bg-surface-alt px-3.5 py-3"
            >
              <div className="text-xs text-ink-muted">{kpi.label}</div>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-ink">{kpi.value}</span>
                {kpi.change !== "—" && (
                  <span className={`flex items-center gap-0.5 text-[11px] font-medium ${kpi.up ? "text-emerald-600" : "text-red-500"}`}>
                    <TrendingUp size={11} className={kpi.up ? "" : "rotate-180"} />
                    {kpi.change}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="rounded-lg border border-border bg-surface-alt p-4"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-ink">Monthly Throughput</span>
            <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600">
              <ArrowUpRight size={11} />
              +18.5%
            </span>
          </div>
          <MiniChart />
        </motion.div>
      </div>
    </motion.div>
  );
}

function TimelineStep({ step, isLast }) {
  return (
    <motion.div variants={fadeUp} className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-sm font-bold text-brand-blue">
          {step.step}
        </div>
        {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
      </div>
      <div className={isLast ? "" : "pb-10"}>
        <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function Workflow() {
  return (
    <Section background="alt">
      <SectionHeader
        badge="How We Operate"
        title="From Assessment to Optimization"
        description="A structured, transparent operating model designed to deliver measurable results from day one."
      />

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {philosophy.steps.map((step, i) => (
            <TimelineStep key={step.step} step={step} isLast={i === philosophy.steps.length - 1} />
          ))}
        </motion.div>

        <DashboardMockup />
      </div>
    </Section>
  );
}
