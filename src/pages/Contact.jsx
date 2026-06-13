import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp } from "../utils/animations";
import { serviceCategories } from "../data/services";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

if (!WEB3FORMS_KEY) {
  console.warn("[Marth Systems] VITE_WEB3FORMS_KEY is not set — contact form will not function.");
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    service: "",
    claimVolume: "",
    providerCount: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: "Marth Systems — New RCM/BPO Consultation Inquiry",
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      role: formData.role,
      service: formData.service || "Not specified",
      claim_volume: formData.claimVolume || "Not specified",
      provider_count: formData.providerCount || "Not specified",
      message: formData.message,
    };

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "", email: "", phone: "", organization: "", role: "",
          service: "", claimVolume: "", providerCount: "", message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Unable to send message. Please try again later.");
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Request a consultation with Marth Systems for full-cycle US healthcare RCM and BPO support. Let us discuss your revenue cycle and back-office needs."
        canonical="https://www.marth.systems/contact"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Book a Consultation</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Let us Talk About Your{" "}
              <span className="text-brand-blue">Revenue Cycle</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              Tell us about your practice or organization. We will schedule a
              no-obligation consultation to understand your current RCM and
              back-office workflows and discuss how we can support your team.
            </p>
          </div>
        </Container>
      </section>

      <Section id="consultation-form" background="alt">
        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6 lg:col-span-2"
          >
            <div>
              <h2 className="text-xl font-semibold text-ink">What to expect</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3 text-sm text-ink-secondary">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <MessageSquare size={14} />
                  </div>
                  <div>
                    <span className="font-medium text-ink">Confidential discovery call</span>
                    <br />
                    We will discuss your RCM operations, challenges, and goals.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-secondary">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Clock size={14} />
                  </div>
                  <div>
                    <span className="font-medium text-ink">Follow-up within 24 hours</span>
                    <br />
                    You will receive a summary and proposed next steps.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-secondary">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Clock size={14} />
                  </div>
                  <div>
                    <span className="font-medium text-ink">No commitment required</span>
                    <br />
                    Our consultations are informational. There is no obligation.
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-card border border-border bg-surface p-8 shadow-sm lg:col-span-3"
          >
            <h2 className="sr-only">Consultation Form</h2>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle2 size={28} className="text-emerald-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink">Inquiry submitted</h3>
                <p className="mt-2 max-w-sm text-sm text-ink-secondary">
                  Thanks for reaching out. We will review your message and follow up
                  within 24 hours.
                </p>
                <Button
                  variant="secondary"
                  size="md"
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  Send another inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      Business email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@practice.com"
                      className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="mb-1.5 block text-sm font-medium text-ink">
                      Organization / Practice name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="organization"
                      type="text"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your practice or organization"
                      className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-ink">
                      Your role
                    </label>
                    <input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Practice manager, billing manager, etc."
                      className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                      Service interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    >
                      <option value="">Select a service...</option>
                      {serviceCategories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.title}
                        </option>
                      ))}
                      <option value="multiple">Multiple / Not sure</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="claimVolume" className="mb-1.5 block text-sm font-medium text-ink">
                      Monthly claim volume <span className="text-ink-muted">(optional)</span>
                    </label>
                    <select
                      id="claimVolume"
                      value={formData.claimVolume}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    >
                      <option value="">Select volume...</option>
                      <option value="under-500">Under 500</option>
                      <option value="500-2000">500 — 2,000</option>
                      <option value="2000-5000">2,000 — 5,000</option>
                      <option value="5000-plus">5,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="providerCount" className="mb-1.5 block text-sm font-medium text-ink">
                      Number of providers <span className="text-ink-muted">(optional)</span>
                    </label>
                    <select
                      id="providerCount"
                      value={formData.providerCount}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    >
                      <option value="">Select count...</option>
                      <option value="1-5">1 — 5</option>
                      <option value="6-20">6 — 20</option>
                      <option value="21-50">21 — 50</option>
                      <option value="50-plus">50+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Tell us about your needs <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your RCM, billing, credentialing, or back-office needs..."
                    className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue resize-y"
                  />
                </div>

                <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
                  <p className="text-xs leading-relaxed text-amber-800">
                    <strong>Important:</strong> Please do not submit protected health information (PHI),
                    patient records, claim files, login credentials, or sensitive documents through
                    this form. After initial contact, we can arrange an appropriate secure intake
                    process if needed.
                  </p>
                </div>

                {status === "error" && (
                  <div role="alert" className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle size={16} className="shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Inquiry <ArrowRight size={18} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Section>
    </>
  );
}
