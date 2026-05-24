import { motion } from "framer-motion";
import { Shield, Mail, Cookie, Database, Lock, Eye, Bell, Trash2, FileText, ArrowRight } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";

const sections = [
  {
    icon: Shield,
    title: "Introduction",
    content:
      'Marth Systems ("Marth Systems," "we," "us") is committed to protecting the privacy and security of the individuals and organizations we serve. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit marth.systems or engage with our services. We treat data protection as a core operational principle \u2014 not a compliance checkbox.',
  },
  {
    icon: Eye,
    title: "Information We Collect",
    content:
      "We collect information you provide directly — such as your name, email address, phone number, company name, and details about your operational needs when you fill out a contact form, book a consultation, or communicate with us. We may also collect information automatically, including your IP address, browser type, device information, and how you interact with our website through analytics tools.",
  },
  {
    icon: FileText,
    title: "How We Use Information",
    content:
      "We use the information we collect to respond to your inquiries, provide our services, improve our website and service delivery, send relevant communications about our offerings, and ensure the security of our platform. Where healthcare operational data is involved, we follow HIPAA-conscious practices to maintain confidentiality and security.",
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    content:
      "We use cookies and similar tracking technologies to understand how our website is used, improve user experience, and analyze traffic patterns. You can control cookie preferences through your browser settings. We may use third-party analytics services such as Google Analytics to collect standard internet log information and visitor behavior data in aggregate form.",
  },
  {
    icon: Database,
    title: "Third-Party Services",
    content:
      "We may engage trusted third-party service providers to help us operate our website, manage communications, process inquiries, or analyze usage data. These providers are contractually bound to protect your information and may only use it for the specific services we engage them for. We do not sell your personal information to any third party.",
  },
  {
    icon: Lock,
    title: "Data Protection & Compliance",
    content:
      "We implement industry-standard administrative, technical, and physical safeguards to protect your information. Our security practices include encrypted data transmission, access controls, regular security assessments, and internal policies designed to protect against unauthorized access or disclosure. Where applicable, our processes are designed with HIPAA-conscious operational awareness for healthcare-related interactions.",
  },
  {
    icon: Bell,
    title: "Communication Preferences",
    content:
      "If you provide your contact information, we may send you updates about our services, industry insights, or operational best practices. You may opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly. We respect your preferences and will not send unrelated communications.",
  },
  {
    icon: Trash2,
    title: "Data Retention",
    content:
      "We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.",
  },
  {
    icon: Eye,
    title: "Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to access, correct, update, or request deletion of your personal information. You may also have the right to restrict processing, object to processing, or request data portability. To exercise any of these rights, please contact us at legal@marth.systems. We will respond to your request within the timeframe required by applicable law.",
  },
  {
    icon: Shield,
    title: "Children's Privacy",
    content:
      "Our website and services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected such information, we will take steps to delete it promptly.",
  },
  {
    icon: FileText,
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. Material changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
  },
  {
    icon: Mail,
    title: "Contact Us",
    content:
      "If you have questions about this Privacy Policy or how we handle your data, please reach out to us.",
    contact: true,
  },
];

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Marth Systems Privacy Policy — how we collect, use, and protect your information. We treat data protection as a core operational principle."
        canonical="https://marth.systems/privacy"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Legal</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Privacy <span className="text-brand-blue">Policy</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              We believe privacy is an operational discipline — not just a legal
              requirement. This policy outlines how we handle your information
              with the same care we apply to every process we manage.
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              Effective date: January 1, 2025
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
                    {section.contact && (
                      <div className="mt-4 space-y-1.5 text-sm text-ink-secondary">
                        <p>
                          <span className="font-medium text-ink">Email:</span>{" "}
                          <a
                            href="mailto:legal@marth.systems"
                            className="text-brand-blue transition-colors hover:text-brand-blue/80"
                          >
                            legal@marth.systems
                          </a>
                        </p>
                        <p>
                          <span className="font-medium text-ink">Website:</span>{" "}
                          <a
                            href="https://marth.systems"
                            className="text-brand-blue transition-colors hover:text-brand-blue/80"
                          >
                            marth.systems
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-section-heading text-ink">
            Have questions about your data?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink-secondary sm:text-body">
            We're transparent about how we operate — including how we handle
            your information. Reach out anytime.
          </p>
          <div className="mt-8">
            <Button to="/contact#consultation-form" size="lg">
              Contact Us <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
