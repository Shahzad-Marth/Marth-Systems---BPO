import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import { footerLinks, contactInfo, socialLinks } from "../../data/navigation";
import { Container } from "../ui";

function SocialIcon({ label }) {
  const cls = "h-5 w-5 fill-current";
  switch (label) {
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "Twitter":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

function FooterLink({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
      >
        {label}
      </Link>
    </li>
  );
}

function FooterColumn({ heading, links }) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
        {heading}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <FooterLink key={link.label} to={link.path} label={link.label} />
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block text-xl font-bold tracking-tight text-white">
              Marth<span className="text-brand-blue"> Systems</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
              Enterprise BPO solutions for healthcare and business operations —
              combining deep domain expertise with modern operational rigor.
            </p>
          </div>
          <FooterColumn heading="Company" links={footerLinks.company} />
          <FooterColumn heading="Services" links={footerLinks.services} />
          <FooterColumn heading="Industries" links={footerLinks.industries} />
          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
                >
                  <Phone size={14} className="text-white/30 shrink-0" aria-hidden="true" />
                  {contactInfo.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-white/60">
                <MapPin size={14} className="text-white/30 shrink-0" aria-hidden="true" />
                {contactInfo.address}
              </li>
            </ul>
            <h3 className="mb-4 mt-7 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
              Social
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                  aria-label={link.label === "Twitter" ? "X" : link.label}
                >
                  <SocialIcon label={link.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/5">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {year} Marth Systems. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Security-first infrastructure &mdash; HIPAA-conscious operational framework.
          </p>
          <nav aria-label="Legal links" className="flex gap-5">
            {footerLinks.resources.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-xs text-white/40 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  );
}
