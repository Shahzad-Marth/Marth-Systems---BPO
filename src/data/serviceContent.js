const BASE_CANONICAL = "https://www.marth.systems";

export const servicePages = [
  {
    slug: "full-cycle-rcm",
    title: "Full-Cycle Healthcare RCM Services",
    seoTitle: "Full-Cycle Healthcare RCM Services | Marth Systems",
    seoDescription:
      "End-to-end RCM support for US healthcare practices — eligibility verification, prior authorization, charge entry, claims, payment posting, denial management, and A/R follow-up.",
    h1: "Full-Cycle Healthcare RCM Services",
    intro:
      "Revenue cycle management touches every part of a healthcare practice's financial health — from the moment a patient schedules an appointment to the final resolution of a claim. Marth Systems provides full-cycle RCM support across front-end, mid-cycle, and back-end workflows, helping practices, clinics, and provider groups manage the administrative side of revenue with consistent processes and dedicated teams.",
    forWho: [
      "Medical practices managing patient intake, billing, and follow-up across multiple payers",
      "Provider groups coordinating RCM workflows across locations and specialties",
      "Billing teams looking for overflow or after-hours RCM support",
      "Healthcare organizations standardizing revenue cycle operations",
    ],
    problems: [
      "High denial rates from eligibility and authorization gaps",
      "Slow claim submission cycles and clearinghouse rejections",
      "Growing A/R with aging balances that go unresolved",
      "Inconsistent follow-up on underpayments and denials",
      "Administrative burden pulling clinical staff away from patient care",
    ],
    supports: [
      "Front-end RCM: patient registration, demographics verification, eligibility and benefits verification, referral coordination, prior authorization, appointment scheduling support",
      "Mid-cycle RCM: charge entry, coding review support, claim scrubbing, claims submission, clearinghouse rejection follow-up",
      "Back-end RCM: payment posting, ERA and EOB posting, denial management, appeals packet support, A/R follow-up, aging AR cleanup, underpayment follow-up, patient billing support",
    ],
    workflow: [
      "Understand your current revenue cycle — tools, workflows, team structure, and pain points",
      "Design a tailored support model with defined processes, SOPs, KPIs, and communication protocols",
      "Deploy a dedicated RCM team that works within your existing EHR and practice management systems",
      "Provide ongoing support with weekly reporting, monthly reviews, and continuous process optimization",
    ],
    infoNeeded: [
      "Current RCM workflow documentation and SOPs",
      "EHR and practice management system details",
      "Payer mix and claim volume information",
      "Common denial reasons and current denial rate",
      "Current A/R aging report",
    ],
    relatedServices: [
      { label: "Front-End RCM", path: "/services/front-end-rcm" },
      { label: "Mid-Cycle RCM", path: "/services/mid-cycle-rcm" },
      { label: "Back-End RCM", path: "/services/back-end-rcm" },
      { label: "Medical Billing", path: "/services/medical-billing" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Full-Cycle RCM", path: "/services/full-cycle-rcm" },
    ],
    canonical: `${BASE_CANONICAL}/services/full-cycle-rcm`,
  },
  {
    slug: "front-end-rcm",
    seoTitle: "Front-End Revenue Cycle Management | Marth Systems",
    seoDescription:
      "Front-end RCM support including patient registration, eligibility and benefits verification, prior authorization, referral coordination, and appointment scheduling.",
    h1: "Front-End Revenue Cycle Management Support",
    intro:
      "Front-end RCM sets the foundation for clean claims and timely reimbursement. Patient registration accuracy, eligibility verification, and prior authorization are critical steps that directly impact denial rates and cash flow. Marth Systems supports front-end RCM workflows to help practices capture accurate patient data and verify coverage before services are rendered.",
    forWho: [
      "Medical practices handling high volumes of patient intake and registration",
      "Clinics that need eligibility and benefits verification support",
      "Provider groups coordinating prior authorizations across multiple specialties",
      "Healthcare organizations reducing front-end administrative burden",
    ],
    problems: [
      "Incomplete or inaccurate patient registration data leading to claim denials",
      "Eligibility not verified before services, resulting in write-offs",
      "Prior authorization delays that postpone patient appointments",
      "Referral coordination falling through the cracks",
    ],
    supports: [
      "Patient registration and demographics verification",
      "Insurance eligibility and benefits verification",
      "Referral coordination support",
      "Prior authorization support and follow-up",
      "Appointment scheduling support",
      "Patient pre-visit communication and data collection",
    ],
    workflow: [
      "Review current front-end workflow and identify gaps in data capture",
      "Define verification protocols for eligibility, authorization, and referral requirements",
      "Deploy dedicated front-end RCM support integrated with your practice management system",
      "Monitor denial sources and adjust front-end processes to reduce preventable denials",
    ],
    infoNeeded: [
      "Current patient registration and verification workflow",
      "Practice management system details",
      "List of common payers and their verification requirements",
      "Common front-end denial reasons",
    ],
    relatedServices: [
      { label: "Full-Cycle RCM", path: "/services/full-cycle-rcm" },
      { label: "Mid-Cycle RCM", path: "/services/mid-cycle-rcm" },
      { label: "Eligibility & Benefits Verification", path: "/services/eligibility-benefits-verification" },
      { label: "Prior Authorization Support", path: "/services/prior-authorization-support" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Front-End RCM", path: "/services/front-end-rcm" },
    ],
    canonical: `${BASE_CANONICAL}/services/front-end-rcm`,
  },
  {
    slug: "mid-cycle-rcm",
    seoTitle: "Mid-Cycle Revenue Cycle Management | Marth Systems",
    seoDescription:
      "Mid-cycle RCM support including charge entry, coding review, claim scrubbing, and claims submission for healthcare practices and billing teams.",
    h1: "Mid-Cycle Revenue Cycle Management Support",
    intro:
      "Mid-cycle RCM is where charges become claims. Accurate charge entry, proper coding, and thorough claim scrubbing directly impact first-pass claim rates and reimbursement speed. Marth Systems supports mid-cycle RCM workflows to help practices submit clean claims the first time.",
    forWho: [
      "Medical practices managing charge capture and claim submission",
      "Billing teams looking for claim scrubbing and editing support",
      "Provider groups standardizing charge entry across specialties",
      "Healthcare organizations improving first-pass claim rates",
    ],
    problems: [
      "Charge entry errors leading to claim rejections",
      "Coding inaccuracies causing denials and underpayments",
      "Claim scrubbing gaps that allow errors to reach payers",
      "Clearinghouse rejections slowing down the revenue cycle",
    ],
    supports: [
      "Charge entry from encounter forms and super-bills",
      "Coding review support (subject to capability confirmation)",
      "Claim scrubbing and editing before submission",
      "Claims submission to clearinghouses and payers",
      "Clearinghouse rejection follow-up and correction",
    ],
    workflow: [
      "Review current charge capture and claim submission workflow",
      "Define claim scrubbing rules and quality checks",
      "Deploy dedicated billing support for charge entry, scrubbing, and submission",
      "Track first-pass claim rates and rejection patterns for continuous improvement",
    ],
    infoNeeded: [
      "Current charge entry and claim submission workflow",
      "Practice management and clearinghouse details",
      "Common claim rejection and denial reasons",
      "Charge capture documentation process",
    ],
    relatedServices: [
      { label: "Full-Cycle RCM", path: "/services/full-cycle-rcm" },
      { label: "Front-End RCM", path: "/services/front-end-rcm" },
      { label: "Medical Billing", path: "/services/medical-billing" },
      { label: "Charge Entry", path: "/services/charge-entry" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Mid-Cycle RCM", path: "/services/mid-cycle-rcm" },
    ],
    canonical: `${BASE_CANONICAL}/services/mid-cycle-rcm`,
  },
  {
    slug: "back-end-rcm",
    seoTitle: "Back-End Revenue Cycle Management | Marth Systems",
    seoDescription:
      "Back-end RCM support including payment posting, ERA/EOB processing, denial management, appeals, A/R follow-up, and patient billing.",
    h1: "Back-End Revenue Cycle Management Support",
    intro:
      "Back-end RCM is where revenue is realized. Payment posting, denial management, and A/R follow-up determine how quickly claims are converted to cash. Marth Systems supports back-end RCM workflows to help practices close the revenue cycle efficiently.",
    forWho: [
      "Medical practices managing payment posting and reconciliation",
      "Provider groups with growing A/R and aging balances",
      "Billing teams handling denial management and appeals",
      "Healthcare organizations improving cash flow and reducing write-offs",
    ],
    problems: [
      "Payment posting delays and reconciliation gaps",
      "Denials going unresolved due to lack of follow-up bandwidth",
      "Aging A/R with balances that grow older without resolution",
      "Underpayments that go unaddressed",
      "Patient billing inquiries consuming staff time",
    ],
    supports: [
      "Payment posting — ERA and EOB processing",
      "Denial management — tracking, categorization, and appeals packet support",
      "A/R follow-up across all aging buckets",
      "Aging AR cleanup and reconciliation",
      "Underpayment follow-up and resolution",
      "Patient billing support and statement processing",
      "Reporting and analytics on revenue cycle performance",
    ],
    workflow: [
      "Review current back-end RCM workflow and aging report",
      "Define follow-up protocols for denials, underpayments, and aging buckets",
      "Deploy dedicated back-end RCM team for posting, follow-up, and denial management",
      "Track resolution rates, aging trends, and cash flow improvement",
    ],
    infoNeeded: [
      "Current payment posting workflow and ERA setup",
      "A/R aging report with current aging buckets",
      "Common denial categories and current denial rate",
      "Follow-up workflow documentation and protocols",
    ],
    relatedServices: [
      { label: "Full-Cycle RCM", path: "/services/full-cycle-rcm" },
      { label: "Denial Management", path: "/services/denial-management" },
      { label: "A/R Follow-Up", path: "/services/ar-follow-up" },
      { label: "Payment Posting", path: "/services/payment-posting" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Back-End RCM", path: "/services/back-end-rcm" },
    ],
    canonical: `${BASE_CANONICAL}/services/back-end-rcm`,
  },
  {
    slug: "healthcare-bpo",
    seoTitle: "Healthcare BPO Services | Marth Systems",
    seoDescription:
      "Healthcare BPO support including call center, virtual assistant, data entry, document management, and back-office operations for US healthcare organizations.",
    h1: "Healthcare BPO Services for US Healthcare Teams",
    intro:
      "Healthcare organizations manage a high volume of administrative work that, while not clinical, is essential to operations. Phone calls from payers, document indexing, data entry, and scheduling support can consume hours of staff time each day. Marth Systems provides healthcare BPO support services designed to handle these administrative workflows efficiently and accurately.",
    forWho: [
      "Medical practices managing high volumes of payer phone calls",
      "Healthcare organizations needing document indexing and data entry support",
      "Provider groups extending administrative capacity without adding FTEs",
      "Billing teams looking for SOP-based back-office support",
    ],
    problems: [
      "Administrative tasks pull clinical and billing staff away from higher-value work",
      "Payer phone calls and portal follow-up consume hours each day",
      "Document management and indexing create backlogs",
      "Data entry errors from overworked administrative teams",
    ],
    supports: [
      "Healthcare call center support — payer phone and portal follow-up",
      "Healthcare virtual assistant support",
      "Healthcare data entry and document indexing",
      "Payer call support and issue tracking",
      "SOP-based healthcare back-office operations",
      "QA workflows and quality reviews",
    ],
    workflow: [
      "Review current administrative workflows and identify capacity gaps",
      "Define SOPs, quality benchmarks, and escalation paths",
      "Deploy dedicated BPO team for administrative and phone-based support",
      "Track throughput, accuracy, and resolution times with regular reporting",
    ],
    infoNeeded: [
      "Current administrative workflow documentation",
      "Volume estimates for phone calls, data entry, or document processing",
      "System and tool access requirements",
      "Existing SOPs or process documentation",
    ],
    relatedServices: [
      { label: "Full-Cycle RCM", path: "/services/full-cycle-rcm" },
      { label: "Healthcare Virtual Assistant", path: "/services/healthcare-virtual-assistant" },
      { label: "Healthcare Call Center Support", path: "/services/healthcare-call-center-support" },
      { label: "Healthcare Data Entry", path: "/services/healthcare-data-entry" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Healthcare BPO", path: "/services/healthcare-bpo" },
    ],
    canonical: `${BASE_CANONICAL}/services/healthcare-bpo`,
  },
  {
    slug: "medical-billing",
    seoTitle: "Medical Billing Support | Marth Systems",
    seoDescription:
      "Medical billing support including charge entry, claim scrubbing, claims submission, ERA/EOB posting, and patient billing for US healthcare practices.",
    h1: "Medical Billing Support",
    intro:
      "Medical billing is the operational engine of healthcare revenue. From charge entry to claim submission and payment posting, every step affects how quickly a practice gets paid. Marth Systems provides medical billing support services that work alongside your existing team and systems to improve claim accuracy and reduce administrative bottlenecks.",
    forWho: [
      "Medical practices managing in-house billing with overflow needs",
      "Billing companies looking for after-hours or overflow billing support",
      "Provider groups standardizing billing operations across locations",
      "Healthcare organizations improving billing workflow efficiency",
    ],
    problems: [
      "Charge entry backlogs delaying claim submission",
      "Claim errors that increase denial rates",
      "Clearinghouse rejections that need dedicated follow-up",
      "ERA and EOB posting consuming billing team time",
      "Patient billing inquiries and statement processing",
    ],
    supports: [
      "Charge entry from encounter forms and fee tickets",
      "Claim scrubbing and pre-submission editing",
      "Claims submission to clearinghouses and payers",
      "Clearinghouse rejection follow-up and resubmission",
      "ERA and EOB posting",
      "Patient billing support and statement processing",
      "Billing reporting and analytics",
    ],
    workflow: [
      "Review current billing workflow, systems, and claim metrics",
      "Define billing SOPs, quality checks, and turnaround targets",
      "Deploy dedicated billing support team integrated with your systems",
      "Track claim submission volume, first-pass rate, and payment cycle time",
    ],
    infoNeeded: [
      "Current billing workflow and system details",
      "Claim volume estimates and payer mix",
      "Common denial and rejection reasons",
      "EHR and practice management system access details",
    ],
    relatedServices: [
      { label: "Full-Cycle RCM", path: "/services/full-cycle-rcm" },
      { label: "Charge Entry", path: "/services/charge-entry" },
      { label: "Payment Posting", path: "/services/payment-posting" },
      { label: "Claims Submission Support", path: "/services/claims-submission-support" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Medical Billing", path: "/services/medical-billing" },
    ],
    canonical: `${BASE_CANONICAL}/services/medical-billing`,
  },
  {
    slug: "claims-submission-support",
    seoTitle: "Claims Submission Support | Marth Systems",
    seoDescription:
      "Medical claims submission support including claim scrubbing, clearinghouse management, rejection follow-up, and resubmission for healthcare practices.",
    h1: "Claims Submission Support",
    intro:
      "Claims submission is a high-volume, detail-intensive process. Errors that reach a clearinghouse or payer result in rejections, denials, and delayed reimbursement. Marth Systems provides claims submission support to help practices submit clean claims efficiently and follow up on rejections quickly.",
    forWho: [
      "Medical practices submitting high volumes of claims",
      "Billing teams managing clearinghouse rejections and corrections",
      "Provider groups coordinating claims across multiple locations",
      "Healthcare organizations improving first-pass claim acceptance",
    ],
    problems: [
      "Claim errors causing clearinghouse rejections",
      "Paper claims requiring manual processing",
      "Slow turnaround on claim corrections and resubmission",
      "Inconsistent follow-up on rejected claims",
    ],
    supports: [
      "Claim scrubbing before submission",
      "Electronic and paper claim submission",
      "Clearinghouse rejection management and correction",
      "Claim resubmission and follow-up",
      "Claim status inquiry support",
    ],
    workflow: [
      "Review current claims submission workflow and rejection patterns",
      "Define claim scrubbing rules and quality checks",
      "Deploy dedicated claims submission support team",
      "Track acceptance rates, rejection categories, and turnaround times",
    ],
    infoNeeded: [
      "Clearinghouse and billing system details",
      "Current claim volume and rejection rates",
      "Common rejection codes and reasons",
      "Claim submission workflow documentation",
    ],
    relatedServices: [
      { label: "Medical Billing", path: "/services/medical-billing" },
      { label: "Charge Entry", path: "/services/charge-entry" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Claims Submission Support", path: "/services/claims-submission-support" },
    ],
    canonical: `${BASE_CANONICAL}/services/claims-submission-support`,
  },
  {
    slug: "charge-entry",
    seoTitle: "Charge Entry Support | Marth Systems",
    seoDescription:
      "Medical charge entry support from encounter forms and super-bills, including coding review assistance and fee ticket processing for healthcare practices.",
    h1: "Charge Entry Support",
    intro:
      "Charge entry is the bridge between patient care and claim submission. Accurate charge capture from encounter forms, super-bills, and fee tickets ensures that every service rendered is billed correctly and promptly. Marth Systems provides charge entry support to help practices maintain accurate and timely charge capture.",
    forWho: [
      "Medical practices managing high volumes of daily encounters",
      "Billing teams needing charge entry overflow support",
      "Provider groups standardizing charge capture across locations",
      "Healthcare organizations reducing charge lag and missed charges",
    ],
    problems: [
      "Charge entry backlogs delaying claim submission",
      "Inaccurate charge capture leading to claim errors",
      "Missed charges from incomplete encounter documentation",
      "Coding errors affecting reimbursement",
    ],
    supports: [
      "Charge entry from encounter forms, super-bills, and fee tickets",
      "Coding review support (subject to capability confirmation)",
      "Charge reconciliation and missing charge follow-up",
      "Fee schedule management support",
    ],
    workflow: [
      "Review current charge capture process and documentation",
      "Define charge entry standards and quality checks",
      "Deploy dedicated charge entry support team",
      "Track charge lag, accuracy rates, and reconciliation metrics",
    ],
    infoNeeded: [
      "Current charge capture workflow and tools",
      "Encounter form and fee ticket templates",
      "Fee schedules and payer-specific charge requirements",
      "Charge lag reporting details",
    ],
    relatedServices: [
      { label: "Medical Billing", path: "/services/medical-billing" },
      { label: "Claims Submission Support", path: "/services/claims-submission-support" },
      { label: "Mid-Cycle RCM", path: "/services/mid-cycle-rcm" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Charge Entry", path: "/services/charge-entry" },
    ],
    canonical: `${BASE_CANONICAL}/services/charge-entry`,
  },
  {
    slug: "payment-posting",
    seoTitle: "Payment Posting Services | Marth Systems",
    seoDescription:
      "ERA and EOB payment posting, reconciliation, underpayment identification, and patient payment processing for US healthcare practices.",
    h1: "Payment Posting Services",
    intro:
      "Payment posting is where claims become revenue. Accurate and timely posting of ERA and EOB payments, patient payments, and adjustments ensures that your A/R is current and your revenue picture is accurate. Marth Systems provides payment posting support to help practices process payments efficiently and identify underpayments.",
    forWho: [
      "Medical practices managing high volumes of ERA and EOB postings",
      "Billing teams needing payment posting overflow support",
      "Provider groups reconciling payments across multiple locations",
      "Healthcare organizations identifying underpayments and denials",
    ],
    problems: [
      "Payment posting backlogs creating inaccurate A/R",
      "Slow reconciliation delaying revenue recognition",
      "Underpayments going undetected without payment comparison",
      "EOB and ERA discrepancies requiring investigation",
    ],
    supports: [
      "ERA auto-posting management and exception handling",
      "EOB manual posting",
      "Payment reconciliation and adjustment posting",
      "Underpayment identification and follow-up",
      "Patient payment posting",
      "Payment reporting and reconciliation reports",
    ],
    workflow: [
      "Review current payment posting workflow and ERA setup",
      "Define posting standards, exception handling, and reconciliation protocols",
      "Deploy dedicated payment posting support team",
      "Track posting timeliness, accuracy, and underpayment identification",
    ],
    infoNeeded: [
      "Current payment posting workflow and ERA setup details",
      "Practice management system information",
      "Common adjustment codes and write-off policies",
      "Payment reconciliation reporting requirements",
    ],
    relatedServices: [
      { label: "Medical Billing", path: "/services/medical-billing" },
      { label: "Back-End RCM", path: "/services/back-end-rcm" },
      { label: "Denial Management", path: "/services/denial-management" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Payment Posting", path: "/services/payment-posting" },
    ],
    canonical: `${BASE_CANONICAL}/services/payment-posting`,
  },
  {
    slug: "eligibility-benefits-verification",
    seoTitle: "Eligibility & Benefits Verification | Marth Systems",
    seoDescription:
      "Insurance eligibility and benefits verification support for US healthcare practices to reduce denials and verify coverage before services.",
    h1: "Eligibility & Benefits Verification",
    intro:
      "Eligibility and benefits verification is the first defense against claim denials. Verifying patient coverage, benefits, and financial responsibility before services are rendered prevents downstream claim issues and improves the patient financial experience. Marth Systems provides eligibility and benefits verification support for healthcare practices.",
    forWho: [
      "Medical practices verifying patient coverage before appointments",
      "Clinics reducing eligibility-related denials",
      "Provider groups managing high volumes of daily eligibility checks",
      "Healthcare organizations improving front-end revenue cycle accuracy",
    ],
    problems: [
      "Claim denials from eligibility not verified before services",
      "Patient financial responsibility not communicated upfront",
      "Coverage changes not caught during check-in",
      "Benefits verification consuming front desk staff time",
    ],
    supports: [
      "Insurance eligibility verification before patient appointments",
      "Benefits verification including copays, deductibles, and coinsurance",
      "Coverage limitation and exclusions identification",
      "Patient financial responsibility communication support",
    ],
    workflow: [
      "Review current eligibility verification process and denial sources",
      "Define verification protocols by payer and appointment type",
      "Deploy dedicated verification support integrated with scheduling",
      "Track eligibility-related denial reduction and verification accuracy",
    ],
    infoNeeded: [
      "Current eligibility verification workflow",
      "Practice management or scheduling system details",
      "List of common payers and verification methods",
      "Common eligibility-related denial codes",
    ],
    relatedServices: [
      { label: "Front-End RCM", path: "/services/front-end-rcm" },
      { label: "Full-Cycle RCM", path: "/services/full-cycle-rcm" },
      { label: "Prior Authorization Support", path: "/services/prior-authorization-support" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Eligibility & Benefits Verification", path: "/services/eligibility-benefits-verification" },
    ],
    canonical: `${BASE_CANONICAL}/services/eligibility-benefits-verification`,
  },
  {
    slug: "prior-authorization-support",
    seoTitle: "Prior Authorization Support | Marth Systems",
    seoDescription:
      "Prior authorization support and follow-up for healthcare practices to reduce procedure delays and authorization-related denials.",
    h1: "Prior Authorization Support",
    intro:
      "Prior authorization is one of the most time-consuming administrative tasks in healthcare. Delays in obtaining authorizations can postpone patient procedures and create revenue gaps. Marth Systems provides prior authorization support to help practices manage authorization workflows efficiently and reduce authorization-related denials.",
    forWho: [
      "Medical practices with high volumes of authorization requirements",
      "Specialty clinics managing complex prior authorization requests",
      "Provider groups coordinating authorizations across multiple specialties",
      "Healthcare organizations reducing authorization-related delays",
    ],
    problems: [
      "Prior authorization delays pushing procedure dates out",
      "Authorizations expiring before services are rendered",
      "Authorization-related denials that require retro review",
      "Verifying authorization status across multiple payer portals",
    ],
    supports: [
      "Prior authorization request preparation and submission",
      "Authorization status follow-up with payers",
      "Authorization expiration tracking and renewal reminders",
      "Authorization-related denial follow-up",
    ],
    workflow: [
      "Review current prior authorization workflow and request volume",
      "Define authorization submission protocols and tracking system",
      "Deploy dedicated authorization support team",
      "Track authorization turnaround times and denial rates",
    ],
    infoNeeded: [
      "Current prior authorization workflow and volume estimates",
      "Payer-specific authorization requirements documentation",
      "Common authorization-related denial codes",
      "Practice management or EHR system details",
    ],
    relatedServices: [
      { label: "Front-End RCM", path: "/services/front-end-rcm" },
      { label: "Eligibility & Benefits Verification", path: "/services/eligibility-benefits-verification" },
      { label: "Full-Cycle RCM", path: "/services/full-cycle-rcm" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Prior Authorization Support", path: "/services/prior-authorization-support" },
    ],
    canonical: `${BASE_CANONICAL}/services/prior-authorization-support`,
  },
  {
    slug: "denial-management",
    seoTitle: "Denial Management Services | Marth Systems",
    seoDescription:
      "Medical claim denial management and appeals support for US healthcare practices — tracking, categorization, appeals packet preparation, and underpayment follow-up.",
    h1: "Denial Management Services",
    intro:
      "Claim denials are a reality of healthcare revenue cycle management, but how they are managed makes the difference between recovered revenue and lost write-offs. Marth Systems provides denial management support including tracking, categorization, appeals preparation, and follow-up to help practices recover revenue and reduce future denial rates.",
    forWho: [
      "Medical practices managing high volumes of claim denials",
      "Billing teams needing dedicated denial follow-up support",
      "Provider groups reducing denial rates across multiple specialties",
      "Healthcare organizations improving denial recovery rates",
    ],
    problems: [
      "Denials going unresolved due to limited follow-up bandwidth",
      "Underpayments not identified or pursued",
      "Appeals packets not submitted within timely filing limits",
      "No centralized denial tracking or trend analysis",
      "Recurring denials from correctable process issues",
    ],
    supports: [
      "Denial tracking and categorization by reason code",
      "Root cause analysis support",
      "Appeals packet preparation and submission",
      "Underpayment follow-up and recovery",
      "Denial prevention workflow support",
      "Payer-specific follow-up protocols",
      "Denial trend reporting and analytics",
    ],
    workflow: [
      "Review current denial management workflow and recovery rates",
      "Categorize current denials and identify root causes",
      "Deploy dedicated denial management team with defined follow-up protocols",
      "Track recovery rates, denial trends, and prevention improvements",
    ],
    infoNeeded: [
      "Current denial management workflow",
      "Common denial codes and categories",
      "Payer-specific timely filing and appeal deadlines",
      "Current denial rate and recovery rate data",
    ],
    relatedServices: [
      { label: "Back-End RCM", path: "/services/back-end-rcm" },
      { label: "A/R Follow-Up", path: "/services/ar-follow-up" },
      { label: "Payment Posting", path: "/services/payment-posting" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Denial Management", path: "/services/denial-management" },
    ],
    canonical: `${BASE_CANONICAL}/services/denial-management`,
  },
  {
    slug: "ar-follow-up",
    seoTitle: "A/R Follow-Up Services | Marth Systems",
    seoDescription:
      "Accounts receivable follow-up support for US healthcare practices — aging AR cleanup, payer follow-up, claim status investigation, and underpayment resolution.",
    h1: "A/R Follow-Up Services",
    intro:
      "Accounts receivable follow-up is where revenue cycle management meets cash flow. Aging A/R balances that go unresolved become write-offs. Marth Systems provides A/R follow-up support to help practices reduce days in A/R, recover underpayments, and clean up aging balances.",
    forWho: [
      "Medical practices with growing A/R and aging balances",
      "Billing teams needing dedicated A/R follow-up support",
      "Provider groups cleaning up aged A/R across multiple locations",
      "Healthcare organizations improving cash flow and reducing write-offs",
    ],
    problems: [
      "Aged A/R balances that grow older without resolution",
      "Payer follow-up consuming staff time without consistent process",
      "Claim status inquiries not tracked or followed up systematically",
      "Underpayments and credit balances not resolved",
    ],
    supports: [
      "Aging AR review and prioritization",
      "Payer portal and phone follow-up on unpaid claims",
      "Claim status investigation and documentation",
      "Underpayment resolution and follow-up",
      "Credit balance resolution",
      "Aging report reconciliation and reporting",
    ],
    workflow: [
      "Review current A/R aging report and follow-up process",
      "Define follow-up protocols by aging bucket and payer",
      "Deploy dedicated A/R follow-up team with tracking system",
      "Track aging reduction, resolution rates, and cash flow improvement",
    ],
    infoNeeded: [
      "Current A/R aging report",
      "Current A/R follow-up workflow documentation",
      "Payer-specific follow-up requirements and contact information",
      "Write-off policies and thresholds",
    ],
    relatedServices: [
      { label: "Back-End RCM", path: "/services/back-end-rcm" },
      { label: "Denial Management", path: "/services/denial-management" },
      { label: "Aging AR Cleanup", path: "/services/aging-ar-cleanup" },
      { label: "Payment Posting", path: "/services/payment-posting" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "A/R Follow-Up", path: "/services/ar-follow-up" },
    ],
    canonical: `${BASE_CANONICAL}/services/ar-follow-up`,
  },
  {
    slug: "aging-ar-cleanup",
    seoTitle: "Aging AR Cleanup Services | Marth Systems",
    seoDescription:
      "Aging accounts receivable cleanup support for healthcare practices — aged A/R reconciliation, resolution, and reporting to reduce write-offs.",
    h1: "Aging A/R Cleanup Support",
    intro:
      "Aging accounts receivable — particularly balances over 90 or 120 days — requires dedicated attention to resolve before they become write-offs. Marth Systems provides aging A/R cleanup support to help practices reconcile aged balances, work through payer follow-up, and recover revenue that might otherwise be lost.",
    forWho: [
      "Medical practices with significant aged A/R balances",
      "Billing teams needing dedicated clean-up projects",
      "Provider groups acquiring or merging practices with aged A/R",
      "Healthcare organizations reducing write-offs and improving cash flow",
    ],
    problems: [
      "Aged A/R balances that have not been worked in months",
      "Credit balances that need research and resolution",
      "Inconsistent follow-up on accounts over 120 days",
      "Aged A/R reducing practice valuation",
    ],
    supports: [
      "Aged A/R reconciliation and categorization",
      "Payer follow-up on aged balances",
      "Claim status investigation for old claims",
      "Credit balance research and resolution",
      "Aging report cleanup and documentation",
    ],
    workflow: [
      "Review full A/R aging report and identify aged buckets",
      "Categorize aged balances by payer, date, and reason",
      "Deploy dedicated clean-up team with defined follow-up priorities",
      "Track resolution rates and recovery amounts",
    ],
    infoNeeded: [
      "Full A/R aging report with all aging buckets",
      "Current follow-up history on aged accounts",
      "Write-off policy and threshold details",
      "Payer contact and portal access information",
    ],
    relatedServices: [
      { label: "A/R Follow-Up", path: "/services/ar-follow-up" },
      { label: "Back-End RCM", path: "/services/back-end-rcm" },
      { label: "Denial Management", path: "/services/denial-management" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Aging AR Cleanup", path: "/services/aging-ar-cleanup" },
    ],
    canonical: `${BASE_CANONICAL}/services/aging-ar-cleanup`,
  },
  {
    slug: "provider-credentialing",
    seoTitle: "Provider Credentialing Services | Marth Systems",
    seoDescription:
      "Provider credentialing support including CAQH management, PECOS enrollment, NPI registration, and payer roster management for US healthcare providers.",
    h1: "Provider Credentialing Services",
    intro:
      "Provider credentialing is the process of verifying and documenting a provider's qualifications, experience, and background for payer network participation. Without active credentialing, providers cannot bill payers for services rendered. Marth Systems provides credentialing support to help providers navigate the credentialing process efficiently.",
    forWho: [
      "Healthcare providers joining new payer networks",
      "Medical practices onboarding new providers",
      "Provider groups managing credentialing across multiple providers",
      "Healthcare organizations maintaining active payer rosters",
    ],
    problems: [
      "Credentialing applications delayed by incomplete documentation",
      "CAQH profiles not kept current, causing payer enrollment issues",
      "Revalidation deadlines missed, disrupting network participation",
      "Payer roster management becoming complex with multiple providers",
    ],
    supports: [
      "CAQH profile setup, attestation, and maintenance",
      "PECOS enrollment support",
      "NPI and taxonomy registration",
      "Payer roster management and updates",
      "Revalidation tracking and support",
      "Provider data management and document collection",
    ],
    workflow: [
      "Review current credentialing status and pending applications",
      "Collect provider documentation and verify completeness",
      "Complete CAQH profiles, PECOS enrollment, and payer applications",
      "Track application status, follow up with payers, and maintain rosters",
    ],
    infoNeeded: [
      "Provider roster and current credentialing status",
      "Existing CAQH account information (if applicable)",
      "Provider demographics, licenses, DEA, and education documents",
      "Target payer network list",
    ],
    relatedServices: [
      { label: "Provider Enrollment", path: "/services/provider-enrollment" },
      { label: "Payer Enrollment", path: "/services/payer-enrollment" },
      { label: "CAQH Profile Management", path: "/services/caqh-profile-management" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Provider Credentialing", path: "/services/provider-credentialing" },
    ],
    canonical: `${BASE_CANONICAL}/services/provider-credentialing`,
  },
  {
    slug: "provider-enrollment",
    seoTitle: "Provider Enrollment Support | Marth Systems",
    seoDescription:
      "Provider enrollment support for commercial, Medicare, and Medicaid payer networks, including EFT/ERA enrollment and application management.",
    h1: "Provider Enrollment Support",
    intro:
      "Provider enrollment is the process of enrolling providers in payer networks so they can bill and receive reimbursement for covered services. Each payer has unique application requirements, timelines, and follow-up processes. Marth Systems provides enrollment support to help practices navigate payer enrollment across commercial, Medicare, and Medicaid plans.",
    forWho: [
      "Healthcare providers enrolling in commercial payer networks",
      "Medical practices completing Medicare and Medicaid enrollment",
      "Provider groups managing enrollment across multiple payers",
      "Healthcare organizations maintaining network participation",
    ],
    problems: [
      "Payer enrollment applications rejected for incomplete information",
      "Lengthy enrollment timelines without status visibility",
      "Medicare and Medicaid enrollment complexity",
      "EFT and ERA enrollment overlooked in the enrollment process",
      "Re-enrollment and updates not tracked systematically",
    ],
    supports: [
      "Commercial payer enrollment application preparation",
      "Medicare enrollment support",
      "Medicaid enrollment support",
      "EFT and ERA enrollment setup",
      "Contract follow-up with payers",
      "Payer application status tracking",
    ],
    workflow: [
      "Review current enrollment status and target payer list",
      "Prepare enrollment applications with complete provider information",
      "Submit applications and track status with payers",
      "Follow up on pending applications and maintain enrollment records",
    ],
    infoNeeded: [
      "Current payer enrollment status and target payer list",
      "Provider demographics and practice information",
      "Existing Medicare/Medicaid enrollment details (if applicable)",
      "Banking information for EFT enrollment",
    ],
    relatedServices: [
      { label: "Provider Credentialing", path: "/services/provider-credentialing" },
      { label: "Payer Enrollment", path: "/services/payer-enrollment" },
      { label: "EFT/ERA Enrollment", path: "/services/eft-era-enrollment" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Provider Enrollment", path: "/services/provider-enrollment" },
    ],
    canonical: `${BASE_CANONICAL}/services/provider-enrollment`,
  },
  {
    slug: "payer-enrollment",
    seoTitle: "Payer Enrollment Support | Marth Systems",
    seoDescription:
      "Payer enrollment support for commercial, Medicare, and Medicaid plans including application preparation, follow-up, and status tracking.",
    h1: "Payer Enrollment Support",
    intro:
      "Payer enrollment is a core component of provider network participation. Each commercial payer, Medicare, and Medicaid plan has specific enrollment requirements, timelines, and processes. Marth Systems provides payer enrollment support to help providers submit complete applications, track status, and resolve issues that delay network participation.",
    forWho: [
      "Healthcare providers enrolling in commercial payer networks",
      "Medical practices adding new payers to their participation list",
      "Provider groups managing enrollment across multiple payers",
      "Healthcare organizations expanding network participation",
    ],
    problems: [
      "Enrollment applications delayed by incomplete data or documentation",
      "Status updates not available from payers without follow-up",
      "Different enrollment processes for each payer",
      "Re-credentialing and re-enrollment deadlines not tracked",
    ],
    supports: [
      "Commercial payer enrollment application preparation and submission",
      "Application status tracking and follow-up",
      "Document collection and verification",
      "Re-enrollment and re-credentialing support",
    ],
    workflow: [
      "Identify target payers and review enrollment requirements",
      "Collect and verify all required provider documentation",
      "Complete and submit enrollment applications",
      "Track application status and follow up until active",
    ],
    infoNeeded: [
      "Target payer network list",
      "Provider demographics and practice information",
      "Existing enrollment details with current payers",
      "Provider licenses, certifications, and credentials",
    ],
    relatedServices: [
      { label: "Provider Enrollment", path: "/services/provider-enrollment" },
      { label: "Provider Credentialing", path: "/services/provider-credentialing" },
      { label: "CAQH Profile Management", path: "/services/caqh-profile-management" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Payer Enrollment", path: "/services/payer-enrollment" },
    ],
    canonical: `${BASE_CANONICAL}/services/payer-enrollment`,
  },
  {
    slug: "caqh-profile-management",
    seoTitle: "CAQH Profile Management | Marth Systems",
    seoDescription:
      "CAQH profile setup, maintenance, and attestation support for healthcare providers to streamline credentialing and payer enrollment.",
    h1: "CAQH Profile Management",
    intro:
      "The CAQH ProView application is used by most major payers to verify provider credentials and facilitate network enrollment. Keeping a CAQH profile current reduces credentialing delays and helps providers maintain active payer network participation. Marth Systems provides CAQH profile management support to help providers maintain accurate and up-to-date profiles.",
    forWho: [
      "Healthcare providers setting up their CAQH profile for the first time",
      "Medical practices managing CAQH profiles for multiple providers",
      "Provider groups maintaining credentialing data across teams",
      "Healthcare organizations streamlining payer enrollment data",
    ],
    problems: [
      "CAQH profiles not attested in 120-day cycle, causing payer notifications",
      "Profile information outdated, delaying credentialing applications",
      "Multiple providers with inconsistent CAQH data",
      "Attestation reminders not managed centrally",
    ],
    supports: [
      "CAQH ProView profile setup and initial data entry",
      "Quarterly attestation management",
      "Profile updates for license, DEA, and certification changes",
      "Document upload and verification",
      "Multi-provider CAQH portfolio management",
    ],
    workflow: [
      "Assess current CAQH profile status and completeness",
      "Enter or update provider data and upload required documents",
      "Set up attestation reminders and manage renewal cycle",
      "Monitor profile for payer access and update requests",
    ],
    infoNeeded: [
      "Provider demographics and practice information",
      "Licenses, DEA certificate, board certifications",
      "Education and training history",
      "Work history and hospital affiliations",
      "Existing CAQH account information (if applicable)",
    ],
    relatedServices: [
      { label: "Provider Credentialing", path: "/services/provider-credentialing" },
      { label: "PECOS Medicare Enrollment", path: "/services/pecos-medicare-enrollment" },
      { label: "Provider Enrollment", path: "/services/provider-enrollment" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "CAQH Profile Management", path: "/services/caqh-profile-management" },
    ],
    canonical: `${BASE_CANONICAL}/services/caqh-profile-management`,
  },
  {
    slug: "pecos-medicare-enrollment",
    seoTitle: "PECOS Medicare Enrollment Support | Marth Systems",
    seoDescription:
      "PECOS Medicare enrollment and maintenance support for healthcare providers and organizations participating in Medicare programs.",
    h1: "PECOS Medicare Enrollment Support",
    intro:
      "The Medicare Provider Enrollment, Chain, and Ownership System (PECOS) is the system used to enroll, revalidate, and maintain Medicare billing privileges. PECOS enrollment is required for any provider or supplier seeking to bill Medicare for covered services. Marth Systems provides PECOS enrollment support to help providers navigate the application, revalidation, and maintenance process.",
    forWho: [
      "Healthcare providers enrolling in Medicare for the first time",
      "Medical practices managing Medicare revalidation schedules",
      "Provider groups with multiple Medicare-enrolled providers",
      "Healthcare organizations maintaining Medicare billing privileges",
    ],
    problems: [
      "PECOS applications rejected due to incomplete or inaccurate data",
      "Revalidation deadlines missed, risking payment suspension",
      "Medicare enrollment process complexity and documentation requirements",
      "Change of information not updated in PECOS promptly",
    ],
    supports: [
      "PECOS enrollment application preparation and submission",
      "Medicare revalidation support",
      "Change of information updates in PECOS",
      "Document collection and verification for Medicare enrollment",
    ],
    workflow: [
      "Review current PECOS enrollment status and revalidation schedule",
      "Collect required documentation and verify accuracy",
      "Complete and submit enrollment or revalidation application",
      "Track application status and follow up with Medicare contractor",
    ],
    infoNeeded: [
      "Current PECOS enrollment status and details",
      "Provider demographics and practice information",
      "Medicare billing privileges history",
      "Revalidation notice or schedule (if applicable)",
    ],
    relatedServices: [
      { label: "Provider Enrollment", path: "/services/provider-enrollment" },
      { label: "Provider Credentialing", path: "/services/provider-credentialing" },
      { label: "EFT/ERA Enrollment", path: "/services/eft-era-enrollment" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "PECOS Medicare Enrollment", path: "/services/pecos-medicare-enrollment" },
    ],
    canonical: `${BASE_CANONICAL}/services/pecos-medicare-enrollment`,
  },
  {
    slug: "eft-era-enrollment",
    seoTitle: "EFT/ERA Enrollment Services | Marth Systems",
    seoDescription:
      "Electronic funds transfer (EFT) and electronic remittance advice (ERA) enrollment support for healthcare practices to streamline payment receipt.",
    h1: "EFT and ERA Enrollment Support",
    intro:
      "Electronic funds transfer (EFT) and electronic remittance advice (ERA) enrollment are essential for practices to receive payments and remittance information electronically from payers. Manual payment processing is slower, less secure, and more resource-intensive. Marth Systems provides EFT and ERA enrollment support to help practices set up electronic payment and remittance with their payers.",
    forWho: [
      "Medical practices setting up EFT and ERA with payers",
      "Billing teams transitioning from paper checks and EOBs",
      "Provider groups standardizing payment receipt across locations",
      "Healthcare organizations reducing manual payment processing",
    ],
    problems: [
      "Paper checks and EOBs slowing down payment posting",
      "EFT/ERA enrollment not completed with all payers",
      "Enrollment forms requiring payer-specific completion",
      "Tracking enrollment status across multiple payers",
    ],
    supports: [
      "EFT enrollment form preparation and submission",
      "ERA enrollment setup and coordination",
      "Enrollment status tracking and follow-up with payers",
      "Troubleshooting enrollment issues and rejections",
    ],
    workflow: [
      "Review current EFT/ERA status with active payers",
      "Identify payers where EFT/ERA is not yet set up",
      "Complete enrollment applications and submit to payers",
      "Track enrollment status and follow up until active",
    ],
    infoNeeded: [
      "Current EFT/ERA setup status with each payer",
      "Banking information for EFT enrollment",
      "Payer list with enrollment contact information",
      "Practice management system ERA setup requirements",
    ],
    relatedServices: [
      { label: "Provider Enrollment", path: "/services/provider-enrollment" },
      { label: "Payment Posting", path: "/services/payment-posting" },
      { label: "PECOS Medicare Enrollment", path: "/services/pecos-medicare-enrollment" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "EFT/ERA Enrollment", path: "/services/eft-era-enrollment" },
    ],
    canonical: `${BASE_CANONICAL}/services/eft-era-enrollment`,
  },
  {
    slug: "healthcare-virtual-assistant",
    seoTitle: "Healthcare Virtual Assistant | Marth Systems",
    seoDescription:
      "Healthcare virtual assistant support for administrative tasks, payer follow-up, data entry, and document management for US healthcare practices.",
    h1: "Healthcare Virtual Assistant Support",
    intro:
      "Healthcare practices manage a significant volume of administrative tasks that, while essential, take time away from clinical care and revenue cycle work. A healthcare virtual assistant can handle these tasks efficiently, freeing your in-house team for higher-value work. Marth Systems provides healthcare virtual assistant support for administrative and operational tasks.",
    forWho: [
      "Medical practices needing administrative task support",
      "Provider groups extending team capacity with virtual support",
      "Healthcare organizations delegating payer call and portal follow-up",
      "Billing teams needing administrative overflow handling",
    ],
    problems: [
      "Administrative tasks consuming staff time needed for clinical or billing work",
      "Payer phone calls and portal tasks going unmanaged",
      "Inbox management and document processing creating backlogs",
      "Task tracking and follow-up lacking consistency",
    ],
    supports: [
      "Payer portal and phone follow-up support",
      "Administrative data entry and document management",
      "Inbox management and task tracking",
      "Schedule coordination support",
      "Document indexing and file organization",
    ],
    workflow: [
      "Review current administrative tasks and identify delegation opportunities",
      "Define task list, SOPs, and communication protocols",
      "Deploy dedicated virtual assistant with defined work hours",
      "Track task completion, accuracy, and responsiveness",
    ],
    infoNeeded: [
      "List of administrative tasks for support",
      "System access requirements and permissions",
      "Existing SOPs or task documentation",
      "Preferred communication channels and schedules",
    ],
    relatedServices: [
      { label: "Healthcare BPO", path: "/services/healthcare-bpo" },
      { label: "Healthcare Data Entry", path: "/services/healthcare-data-entry" },
      { label: "Healthcare Call Center Support", path: "/services/healthcare-call-center-support" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Healthcare Virtual Assistant", path: "/services/healthcare-virtual-assistant" },
    ],
    canonical: `${BASE_CANONICAL}/services/healthcare-virtual-assistant`,
  },
  {
    slug: "healthcare-call-center-support",
    seoTitle: "Healthcare Call Center Support | Marth Systems",
    seoDescription:
      "Healthcare call center support including payer phone follow-up, patient scheduling, and administrative call handling for US healthcare organizations.",
    h1: "Healthcare Call Center Support",
    intro:
      "Healthcare organizations manage a high volume of phone-based administrative work — payer follow-up, claim status inquiries, authorization calls, and patient scheduling. These calls consume hours of staff time daily. Marth Systems provides healthcare call center support to handle phone-based administrative tasks efficiently.",
    forWho: [
      "Medical practices managing high volumes of payer phone calls",
      "Provider groups centralizing payer follow-up phone support",
      "Healthcare organizations handling patient scheduling and inquiry calls",
      "Billing teams needing after-hours phone support",
    ],
    problems: [
      "Payer hold times consuming staff hours each day",
      "Claim status phone calls going unreturned",
      "Patient scheduling calls not handled promptly",
      "Administrative phone tasks competing with clinical priorities",
    ],
    supports: [
      "Payer phone follow-up for claim status and inquiries",
      "Authorization and referral phone coordination",
      "Patient appointment scheduling and reminder calls",
      "Administrative call handling and routing",
      "Call documentation and tracking",
    ],
    workflow: [
      "Review current call volume and types of administrative calls",
      "Define call handling protocols and scripts",
      "Deploy dedicated call support team with defined hours",
      "Track call volume, resolution rates, and response times",
    ],
    infoNeeded: [
      "Current call volume estimates and call types",
      "Payer phone contact list and portal access information",
      "Call handling scripts or guidelines",
      "System access for scheduling or documentation",
    ],
    relatedServices: [
      { label: "Healthcare BPO", path: "/services/healthcare-bpo" },
      { label: "Healthcare Virtual Assistant", path: "/services/healthcare-virtual-assistant" },
      { label: "A/R Follow-Up", path: "/services/ar-follow-up" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Healthcare Call Center Support", path: "/services/healthcare-call-center-support" },
    ],
    canonical: `${BASE_CANONICAL}/services/healthcare-call-center-support`,
  },
  {
    slug: "healthcare-data-entry",
    seoTitle: "Healthcare Data Entry Services | Marth Systems",
    seoDescription:
      "Healthcare data entry and document indexing support for medical records, patient demographics, claims data, and administrative documents.",
    h1: "Healthcare Data Entry and Document Indexing Support",
    intro:
      "Healthcare organizations generate and manage large volumes of data — patient demographics, claims information, chart notes, and administrative documents. Accurate data entry and document indexing are essential for clean claims and efficient operations. Marth Systems provides healthcare data entry and document indexing support for practices and billing teams.",
    forWho: [
      "Medical practices managing high volumes of patient data entry",
      "Billing teams needing claims data entry support",
      "Healthcare organizations indexing and organizing medical documents",
      "Provider groups digitizing paper-based workflows",
    ],
    problems: [
      "Data entry backlogs delaying claim submission and patient processing",
      "Document indexing inconsistencies creating retrieval difficulties",
      "Manual data entry errors affecting downstream processes",
      "Chart preparation and document management consuming staff time",
    ],
    supports: [
      "Patient demographics data entry",
      "Claims data entry and verification",
      "Document indexing and organization",
      "Chart preparation and document scanning support",
      "Data validation and quality review",
    ],
    workflow: [
      "Review current data entry and document management workflows",
      "Define data entry standards, templates, and quality checks",
      "Deploy dedicated data entry team with system access",
      "Track entry volume, accuracy rates, and turnaround times",
    ],
    infoNeeded: [
      "Current data entry volume and workflow details",
      "Data templates and entry requirements",
      "Document types and indexing categories",
      "System access information",
    ],
    relatedServices: [
      { label: "Healthcare BPO", path: "/services/healthcare-bpo" },
      { label: "Healthcare Virtual Assistant", path: "/services/healthcare-virtual-assistant" },
      { label: "Medical Billing", path: "/services/medical-billing" },
    ],
    breadcrumbs: [
      { name: "Services", path: "/services" },
      { name: "Healthcare Data Entry", path: "/services/healthcare-data-entry" },
    ],
    canonical: `${BASE_CANONICAL}/services/healthcare-data-entry`,
  },
];

export function getServicePage(slug) {
  return servicePages.find((p) => p.slug === slug) || null;
}

export function getAllServiceSlugs() {
  return servicePages.map((p) => p.slug);
}
