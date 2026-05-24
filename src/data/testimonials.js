import { caseStudies } from "./caseStudies";

export const testimonials = caseStudies.map((cs) => ({
  quote: cs.testimonial.quote,
  author: cs.testimonial.author,
  company: cs.title,
  industry: cs.industry,
  outcome: cs.outcomes[0],
}));

export const trustBadges = [
  {
    category: "Compliance & Security",
    items: [
      { name: "HIPAA-Conscious Framework", description: "Administrative, physical, and technical safeguards aligned with HIPAA Privacy and Security Rules." },
      { name: "SOC 2-Aligned Controls", description: "Security, availability, and confidentiality controls consistent with SOC 2 trust principles." },
      { name: "Data Encryption (AES-256)", description: "Data encrypted at rest and in transit using AES-256 and TLS 1.3 standards." },
      { name: "GDPR Readiness", description: "Processes designed to support GDPR compliance for European data subjects and operations." },
    ],
  },
  {
    category: "Operational Standards",
    items: [
      { name: "ISO 27001-Aligned ISMS", description: "Information security management framework aligned with ISO 27001 best practices." },
      { name: "Business Continuity Planning", description: "Documented BCP with defined RTOs/RPOs, regular testing, and failover procedures." },
      { name: "Vendor Risk Management", description: "Quarterly vendor assessments, sub-processor due diligence, and supply chain mapping." },
      { name: "Incident Response Protocol", description: "Structured IR plan with defined severity levels, escalation paths, and post-mortem reviews." },
    ],
  },
  {
    category: "Quality & Transparency",
    items: [
      { name: "Weekly Performance Reporting", description: "Standardized weekly reports covering KPIs, SLA adherence, trends, and action items." },
      { name: "Monthly Business Reviews", description: "Structured monthly reviews with leadership — performance data, strategic adjustments, and forward planning." },
      { name: "Real-Time Dashboard Access", description: "Client access to live operational dashboards showing queue status, throughput, and quality metrics." },
      { name: "Quarterly Audit Cycle", description: "Internal audits every quarter covering process compliance, data handling, and security controls." },
    ],
  },
];
