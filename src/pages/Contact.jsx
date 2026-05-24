import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MessageSquare, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { fadeUp } from "../utils/animations";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

if (!WEB3FORMS_KEY) {
  console.warn("[Marth Systems] VITE_WEB3FORMS_KEY is not set — contact form will not function.");
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    service: "",
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
      subject: "Marth Systems - BPO | New Consultation Inquiry",
      from_name: formData.name,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      service: formData.service || "Not specified",
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
        setFormData({ name: "", company: "", email: "", service: "", message: "" });
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
        description="Book a consultation with Marth Systems. Let's discuss how we can help optimize your healthcare, customer support, or back-office operations."
        image="/og/contact.png"
        canonical="https://marth.systems/contact"
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Book a Consultation</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              Let's Talk About{" "}
              <span className="text-brand-blue">Your Operations</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-body">
              Tell us about your operational needs. We'll schedule a no-obligation
              consultation to understand your current workflows and identify where
              we can add value.
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
                    <span className="font-medium text-ink">30-minute discovery call</span>
                    <br />
                    We'll discuss your operations, pain points, and goals.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-secondary">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Clock size={14} />
                  </div>
                  <div>
                    <span className="font-medium text-ink">Follow-up within 24 hours</span>
                    <br />
                    You'll receive a summary of our conversation and proposed next steps.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm text-ink-secondary">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Clock size={14} />
                  </div>
                  <div>
                    <span className="font-medium text-ink">No commitment required</span>
                    <br />
                    Our consultations are informational. There's no obligation to move forward.
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
                  Thanks for reaching out. We'll review your message and follow up
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
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                  />

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
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                    Service interested in
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue"
                  >
                    <option value="">Select a service...</option>
                    <option value="healthcare">Healthcare Operations</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="business-ops">Business Operations</option>
                    <option value="multiple">Multiple / Not sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your operational needs..."
                    className="w-full rounded-lg border border-border bg-surface-alt px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue resize-y"
                  />
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
