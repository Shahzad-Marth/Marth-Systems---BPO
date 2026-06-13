import { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Section } from "../ui";

const metrics = [
  { value: "24/7", label: "RCM and BPO Support Coverage", decimal: false },
  { value: 99, suffix: "%", label: "Claim Accuracy Target", decimal: false },
  { value: 6, suffix: "+", label: "Healthcare Practice Types Served", decimal: false },
  { value: 100, suffix: "%", label: "HIPAA-Conscious Operations", decimal: false },
];

function AnimatedMetric({ metric }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);
  const isStatic = typeof metric.value === "string";

  useEffect(() => {
    if (!isInView || isStatic || typeof metric.value !== "number") return;

    const target = metric.value;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step * 10) / 10, target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, isStatic, metric.value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold leading-none tracking-tight text-ink sm:text-5xl lg:text-6xl">
        {isStatic ? metric.value : count}
        {!isStatic && metric.suffix}
      </div>
      <div className="mt-2 text-sm text-ink-muted md:text-base">{metric.label}</div>
    </div>
  );
}

export default function TrustMetrics() {
  return (
    <Section background="alt">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map((metric) => (
          <AnimatedMetric key={metric.label} metric={metric} />
        ))}
      </motion.div>
    </Section>
  );
}
