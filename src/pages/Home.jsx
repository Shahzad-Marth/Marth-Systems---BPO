import { SEO } from "../components/common";
import { Hero, TrustMetrics, RcmOverview, RcmPhases, Services, CredentialingEnrollment, Industries, CommonProblems, Workflow, TrustBadges, FinalCTA } from "../components/sections";
import { Section } from "../components/ui";

export default function Home() {
  return (
    <>
      <SEO
        title="Full-Cycle Healthcare RCM & BPO Services"
        description="Marth Systems provides full-cycle US healthcare RCM and BPO support, including eligibility verification, prior authorization, charge entry, claims support, payment posting, denial management, A/R follow-up, credentialing, payer enrollment, and healthcare back-office operations."
        canonical="https://www.marth.systems"
      />
      <Hero />
      <TrustMetrics />
      <RcmOverview />
      <RcmPhases />
      <Services />
      <CredentialingEnrollment />
      <Industries />
      <CommonProblems />
      <Workflow />
      <TrustBadges />
      <Section background="surface">
        <div className="rounded-card border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm leading-relaxed text-amber-800">
            <strong>Privacy and security note:</strong> Please do not submit protected health information (PHI),
            patient records, claim files, login credentials, or sensitive documents through this website.
            After initial contact, we can arrange an appropriate secure intake process if needed.
          </p>
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
