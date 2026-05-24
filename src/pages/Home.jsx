import { SEO } from "../components/common";
import { Hero, TrustMetrics, Workflow, Services, Industries, TrustBadges, Testimonials, FinalCTA } from "../components/sections";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Enterprise-grade BPO and healthcare operations solutions. Revenue cycle management, customer support, and business process outsourcing by Marth Systems."
        image="/og/home.png"
        canonical="https://marth.systems"
      />
      <Hero />
      <TrustMetrics />
      <Workflow />
      <Services />
      <Industries />
      <TrustBadges />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
