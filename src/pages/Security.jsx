import { motion } from "framer-motion";
import { Shield, Lock, FileText, Eye, Users, Server, ArrowRight } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";

const sections = [
  {
    icon: Lock,
    title: "No PHI Through General Contact Forms",
    content:
      "Our general contact form collects basic business information — name, email, phone, organization, role, and message. We explicitly ask that you do not submit protected health information (PHI), patient records, claim files, login credentials, or other sensitive documents through this form. This helps us maintain appropriate handling of personal information from the first point of contact.",
  },
  {
    icon: Shield,
    title: "Secure Intake Process",
    content:
      "After initial consultation, if healthcare operational data needs to be shared, we arrange an appropriate secure intake process. This may include encrypted file transfer, secure portals, or BAA-governed data sharing, depending on the requirements of your engagement.",
  },
  {
    icon: Server,
    title: "Data Encryption",
    content:
      "Data is encrypted in transit using TLS 1.3 and at rest using industry-standard encryption protocols. Administrative access to systems handling client data requires multi-factor authentication and is logged and audited.",
  },
  {
    icon: Users,
    title: "Least-Privilege Access",
    content:
      "Team members are granted access only to the systems and data required for their specific role. Access is reviewed regularly and revoked promptly when no longer needed. Role-based access controls are applied where supported by client systems.",
  },
  {
    icon: FileText,
    title: "Documented Standard Operating Procedures",
    content:
      "Every process we support is documented in a standard operating procedure (SOP). SOPs include workflow steps, data handling requirements, quality checks, escalation paths, and privacy safeguards. SOPs are reviewed and updated as processes evolve.",
  },
  {
    icon: Eye,
    title: "Transparency and Reporting",
    content:
      "Clients receive weekly performance reports and have access to real-time dashboards showing queue status, throughput, accuracy, and aging metrics. Monthly business reviews cover performance trends, quality scores, and strategic adjustments.",
  },
];

export default function Security() {
  return (
    <>
      <SEO
        title="Security"
        description="Marth Systems security practices — secure intake process, data encryption, least-privilege access, documented SOPs, and HIPAA-conscious workflows for healthcare RCM and BPO support."
        canonical="https://www.marth.systems/security"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Security</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Security and Privacy{" "}
              <span className="text-brand-blue">Practices</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-ink-secondary sm:text-body">
              We treat security and privacy as operational disciplines — not compliance
              checkboxes. Our practices are designed to protect client data, maintain
              confidentiality, and support HIPAA-conscious workflows.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              These practices apply to our administrative RCM and BPO support operations.
              They do not constitute clinical security or HIPAA certification.
            </p>
          </div>
        </Container>
      </section>

      <Section background="alt">
        <motion.div
          variants={staggerContainer(0.08, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-3xl space-y-10"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                variants={fadeUp}
                className="rounded-card border border-border bg-surface p-7 shadow-sm lg:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-ink">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            Have questions about security?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-secondary">
            We are transparent about our operational practices. Reach out if you
            would like to discuss our security protocols in more detail.
          </p>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Contact Us <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
