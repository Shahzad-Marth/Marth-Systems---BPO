import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { getServicePage } from "../data/serviceContent";
import { BASE_URL, SITE_NAME } from "../utils/seo";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServicePage(slug);

  useEffect(() => {
    if (!service) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.seoDescription,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: BASE_URL,
      },
      url: service.canonical,
      areaServed: "US",
    };
    const id = "structured-data-Service";
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schema);
    return () => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
    };
  }, [service]);

  if (!service) {
    return (
      <div className="section-padding">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-2xl font-semibold text-ink">Service not found</h1>
            <p className="mt-2 text-sm text-ink-secondary">The service page you are looking for does not exist.</p>
            <Button to="/services" className="mt-6">
              View All Services <ArrowRight size={18} />
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        canonical={service.canonical}
        breadcrumbs={service.breadcrumbs}
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Service</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              {service.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-body">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" size="lg">
                Request a Consultation <ArrowRight size={18} />
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section background="alt">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-semibold text-ink">Who this service is for</h2>
              <ul className="mt-4 space-y-2">
                {service.forWho.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">Common workflow challenges</h2>
              <ul className="mt-4 space-y-2">
                {service.problems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-ink">What Marth Systems supports</h2>
              <ul className="mt-4 space-y-2">
                {service.supports.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <div className="rounded-card border border-border bg-surface p-7 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">Engagement workflow</h2>
              <div className="mt-5 space-y-4">
                {service.workflow.map((step, i) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-sm font-bold text-brand-blue">
                      {i + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-ink-secondary">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-card border border-border bg-surface p-7 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">Information needed to get started</h2>
              <ul className="mt-4 space-y-2">
                {service.infoNeeded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                    <Info size={14} className="mt-0.5 shrink-0 text-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {service.relatedServices.length > 0 && (
        <Section>
          <h2 className="text-xl font-semibold text-ink">Related services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.relatedServices.map((rs) => (
              <Link
                key={rs.path}
                to={rs.path}
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-ink-secondary transition-colors hover:border-brand-blue hover:text-brand-blue"
              >
                {rs.label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <Section background="alt">
        <div className="rounded-card border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm leading-relaxed text-amber-800">
            <strong>Privacy and security note:</strong> Please do not submit protected health information (PHI),
            patient records, claim files, login credentials, or sensitive documents through this website.
            After initial contact, we can arrange an appropriate secure intake process if needed.
          </p>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            Ready to discuss your RCM needs?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-secondary">
            Contact us for a no-obligation consultation. We will review your current operations and
            discuss how our support can help.
          </p>
          <div className="mt-8">
            <Button to="/contact" size="lg">
              Request a Consultation <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
