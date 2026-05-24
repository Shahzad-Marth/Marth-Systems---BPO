import { motion } from "framer-motion";
import { ArrowRight, Home, BarChart3, TrendingUp, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common";
import { Container } from "../components/ui";

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/5 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-brand-blue/5 blur-3xl" />
    </div>
  );
}

function DashboardVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      aria-hidden="true"
      className="relative mx-auto max-w-md"
    >
      <div className="rounded-2xl border border-border bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="ml-2 text-xs font-medium text-ink-muted">
            operations/marth.systems
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-medium text-ink-muted">
                System Status
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-ink">
                  All Systems Operational
                </span>
              </div>
            </div>
            <Activity size={18} className="text-ink-muted/40" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-surface-alt p-3">
              <div className="text-[10px] text-ink-muted">Uptime</div>
              <div className="mt-0.5 flex items-center gap-1 text-sm font-bold text-ink">
                <TrendingUp size={11} className="text-emerald-500" />
                99.9%
              </div>
            </div>
            <div className="rounded-lg bg-surface-alt p-3">
              <div className="text-[10px] text-ink-muted">Response</div>
              <div className="mt-0.5 text-sm font-bold text-ink">124ms</div>
            </div>
            <div className="rounded-lg bg-surface-alt p-3">
              <div className="text-[10px] text-ink-muted">Active</div>
              <div className="mt-0.5 text-sm font-bold text-ink">847</div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-1.5 text-[11px] text-ink-muted">
            <BarChart3 size={12} />
            <span>Route analysis completed — 0 issues found</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="absolute -bottom-2 -right-2 rounded-xl border border-border bg-emerald-50 px-3 py-2 shadow-sm"
      >
        <div className="flex items-center gap-2 text-[11px] font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Route resolved
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function NotFound() {
  return (
    <>
      <SEO
        title="404"
        description="The page you requested could not be found."
        image="/og/home.png"
        canonical="https://marth.systems/404"
      />

      <section className="relative min-h-[85vh] flex items-center section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white overflow-hidden">
        <GridBackground />

        <Container>
          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] font-medium text-brand-blue"
              >
                <Activity size={11} />
                404 — Route Not Found
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6 text-7xl leading-[0.95] tracking-tight text-ink sm:text-8xl lg:text-[7rem]"
              >
                404
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-2xl font-semibold leading-snug text-ink"
              >
                Page Not Found
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-3 max-w-md text-base leading-relaxed text-ink-secondary"
              >
                The page you're looking for may have been moved, deleted, or
                never existed.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-button bg-brand-blue px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-brand-blue-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                >
                  <Home size={15} />
                  Return Home
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-button border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all duration-200 hover:bg-surface-alt hover:border-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
                >
                  Explore Services
                  <ArrowRight size={15} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 flex items-center gap-2 text-xs text-ink-muted"
              >
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Need help?{" "}
                <Link
                  to="/contact"
                  className="font-medium text-brand-blue transition-colors hover:text-brand-blue-accent"
                >
                  Contact our team
                </Link>
              </motion.div>
            </motion.div>

            <div className="hidden lg:block">
              <DashboardVisual />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
