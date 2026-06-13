import { motion } from "framer-motion";
import { Scale, FileCheck, Briefcase, UserCheck, Copyright, AlertTriangle, CreditCard, Activity, Shield, Users, XCircle, Gavel, RefreshCw, Mail, ArrowRight } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp, staggerContainer } from "../utils/animations";

const sections = [
  {
    icon: FileCheck,
    title: "Introduction",
    content:
      'These Terms of Service ("Terms") govern your access to and use of the Marth Systems website and the RCM, healthcare BPO, and business process outsourcing services we provide. By using our website or engaging our services, you agree to be bound by these Terms. If you are entering into these Terms on behalf of an organization, you represent that you have the authority to bind that organization.',
  },
  {
    icon: Scale,
    title: "Acceptance of Terms",
    content:
      "By accessing www.marth.systems, submitting a contact form, booking a consultation, or entering into a service agreement with Marth Systems, you acknowledge that you have read, understood, and agree to these Terms. If you do not agree, please refrain from using our website or services.",
  },
  {
    icon: Briefcase,
    title: "Services Overview",
    content:
      "Marth Systems provides revenue cycle management and healthcare BPO support services including but not limited to eligibility verification, prior authorization, charge entry, claim scrubbing, claims submission, payment posting, denial management, A/R follow-up, provider credentialing, payer enrollment, and healthcare back-office administration. All services are delivered under the terms of a separate service agreement or statement of work.",
  },
  {
    icon: UserCheck,
    title: "User Responsibilities",
    content:
      "You agree to provide accurate and complete information when engaging with us, including during consultations and service onboarding. You are responsible for maintaining the confidentiality of any access credentials, ensuring that your team complies with applicable laws, and providing timely feedback and approvals necessary for service delivery. You must not use our website or services for any unlawful purpose.",
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    content:
      "All content on www.marth.systems — including text, graphics, logos, design elements, and proprietary methodologies — is the property of Marth Systems unless otherwise noted. You may not reproduce, distribute, or create derivative works without our written consent. Any materials, reports, or deliverables created specifically for your engagement remain your property upon full payment, subject to the terms of your service agreement.",
  },
  {
    icon: AlertTriangle,
    title: "Acceptable Use",
    content:
      "You agree not to use our website or services to transmit malware, engage in unauthorized access attempts, violate any applicable laws, or interfere with the operation of our systems. We reserve the right to suspend access or terminate services if we detect activity that poses a security risk or violates these Terms.",
  },
  {
    icon: CreditCard,
    title: "Payment & Billing",
    content:
      "Fees for services are outlined in your applicable service agreement or statement of work. Invoices are due within the payment terms specified in your agreement. Late payments may result in service suspension. All fees are exclusive of applicable taxes, which are your responsibility.",
  },
  {
    icon: Activity,
    title: "Service Availability",
    content:
      "We strive to maintain reliable service delivery and communication channels. However, we do not guarantee uninterrupted availability of our website or services due to planned maintenance, technical issues, or factors beyond our reasonable control. Service-level commitments, if any, will be defined in your specific service agreement.",
  },
  {
    icon: Shield,
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Marth Systems shall not be liable for indirect, incidental, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim arising under these Terms is limited to the amount paid by you for the specific service giving rise to the claim.",
  },
  {
    icon: Users,
    title: "Confidentiality",
    content:
      "Both parties agree to maintain the confidentiality of shared proprietary or sensitive information. Marth Systems implements administrative and technical safeguards to protect your data. Confidentiality obligations survive the termination of these Terms or any service agreement. Where healthcare information is involved, we follow HIPAA-conscious practices.",
  },
  {
    icon: Briefcase,
    title: "Third-Party Services",
    content:
      "Our services may integrate with third-party platforms, tools, or software you use. We are not responsible for the availability, security, or performance of third-party services. Any integration is provided as a convenience, and your use of third-party services remains subject to their respective terms.",
  },
  {
    icon: XCircle,
    title: "Termination",
    content:
      "Either party may terminate a service engagement in accordance with the notice period and terms specified in your service agreement. We reserve the right to terminate or suspend access to our website immediately for violations of these Terms.",
  },
  {
    icon: Gavel,
    title: "Governing Law",
    content:
      "These Terms are governed by the laws of the Commonwealth of Massachusetts, United States, without regard to its conflict of laws principles. Any disputes arising from these Terms or your use of our services shall be resolved in the state or federal courts located in Boston, Massachusetts.",
  },
  {
    icon: RefreshCw,
    title: "Updates to Terms",
    content:
      "We may update these Terms from time to time to reflect changes in our services, operational practices, or legal requirements. Material changes will be posted on this page with an updated effective date.",
  },
  {
    icon: Mail,
    title: "Contact Information",
    content: "",
    contact: true,
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Marth Systems Terms of Service — the terms governing use of our website and RCM, healthcare BPO, and revenue cycle management services."
        canonical="https://www.marth.systems/terms"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Legal</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Terms of <span className="text-brand-blue">Service</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              These terms govern the use of our website and the RCM and BPO
              support services we deliver.
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
                    {section.content && (
                      <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                        {section.content}
                      </p>
                    )}
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
                          <span className="font-medium text-ink">Phone:</span>{" "}
                          <a
                            href="tel:+923126097422"
                            className="text-brand-blue transition-colors hover:text-brand-blue/80"
                          >
                            +92 (312) 609-7422
                          </a>
                        </p>
                        <p>
                          <span className="font-medium text-ink">Address:</span>{" "}
                          Boston, MA &mdash; Lahore, PK
                        </p>
                        <p>
                          <span className="font-medium text-ink">Website:</span>{" "}
                          <a
                            href="https://www.marth.systems"
                            className="text-brand-blue transition-colors hover:text-brand-blue/80"
                          >
                            www.marth.systems
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
            Ready to work together?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-ink-secondary sm:text-body">
            Let us discuss how Marth Systems can support your revenue cycle
            and back-office operations.
          </p>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Request a Consultation <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
