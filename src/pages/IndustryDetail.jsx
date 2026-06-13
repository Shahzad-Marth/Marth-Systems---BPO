import { useParams, Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { SEO } from "../components/common";
import { Container, Badge, Button, Section } from "../components/ui";
import { getIndustryPage } from "../data/industryContent";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = getIndustryPage(slug);

  if (!industry) {
    return (
      <div className="section-padding">
        <Container>
          <div className="py-20 text-center">
            <h1 className="text-2xl font-semibold text-ink">Industry page not found</h1>
            <p className="mt-2 text-sm text-ink-secondary">The industry page you are looking for does not exist.</p>
            <Button to="/industries" className="mt-6">
              View All Industries <ArrowRight size={18} />
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={industry.seoTitle}
        description={industry.seoDescription}
        canonical={industry.canonical}
        breadcrumbs={industry.breadcrumbs}
      />

      <section className="section-padding bg-gradient-to-br from-surface-blue-soft via-surface to-white">
        <Container>
          <div className="max-w-3xl">
            <Badge>Industry</Badge>
            <h1 className="mt-5 text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-hero">
              {industry.h1}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-body">
              {industry.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" size="lg">
                Request a Consultation <ArrowRight size={18} />
              </Button>
              <Button to="/industries" variant="secondary" size="lg">
                All Industries
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section background="alt">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-ink">Common challenges</h2>
            <ul className="mt-4 space-y-3">
              {industry.challenges.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-secondary">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                    <AlertTriangle size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-ink">How Marth Systems helps</h2>
            <ul className="mt-4 space-y-3">
              {industry.howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-secondary">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {industry.relatedServices.length > 0 && (
        <Section>
          <h2 className="text-xl font-semibold text-ink">Relevant services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {industry.relatedServices.map((rs) => (
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
            Ready to discuss your needs?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-secondary">
            Contact us for a no-obligation consultation.
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
