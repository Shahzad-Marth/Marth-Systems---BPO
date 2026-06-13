import {
  ArrowLeftRight,
  Headphones,
  Stethoscope,
  FileX,
  Clock,
  UserCheck,
  UserPlus,
} from "lucide-react";

export const serviceCategories = [
  {
    id: "rcm",
    icon: ArrowLeftRight,
    title: "Full-Cycle Revenue Cycle Management",
    summary:
      "End-to-end RCM support covering front-end patient intake through claims, payment posting, denial management, and A/R follow-up.",
    description:
      "We support the complete healthcare revenue cycle so your team can focus on patient care. From eligibility verification and prior authorization to charge entry, claim submission, payment posting, and denial management, our specialists work within your existing systems to improve cash flow and reduce administrative burden.",
    services: [
      "Eligibility & Benefits Verification",
      "Prior Authorization Support",
      "Charge Entry",
      "Claim Scrubbing & Submission",
      "Payment Posting",
      "Denial Management",
      "A/R Follow-Up",
    ],
    highlights: [
      "End-to-end revenue cycle coverage",
      "EHR and practice management integration",
      "HIPAA-conscious workflows",
      "Transparent reporting and analytics",
    ],
  },
  {
    id: "bpo",
    icon: Headphones,
    title: "Healthcare BPO",
    summary:
      "Administrative and back-office support for healthcare organizations, including call center, data entry, document management, and virtual assistant services.",
    description:
      "We provide healthcare-specific BPO services designed to streamline administrative operations. Our teams handle payer phone calls, document indexing, patient scheduling support, data entry, and administrative workflows so your clinical and billing teams can operate at peak efficiency.",
    services: [
      "Healthcare Call Center Support",
      "Healthcare Virtual Assistant",
      "Healthcare Data Entry",
      "Document Indexing & Management",
      "Payer Call Support",
      "SOP-Based Back-Office Operations",
      "QA Workflows",
    ],
    highlights: [
      "Healthcare-dedicated support teams",
      "Payer portal and phone support",
      "Secure document handling",
      "Weekly performance reporting",
    ],
  },
  {
    id: "billing",
    icon: Stethoscope,
    title: "Medical Billing",
    summary:
      "Claims submission, charge entry, claim scrubbing, and clearinghouse follow-up support for practices and billing teams.",
    description:
      "We support medical billing operations from charge capture through claim submission and follow-up. Our billing specialists handle claim scrubbing, clearinghouse rejection follow-up, ERA/EOB processing, and patient billing support, integrated with your existing practice management systems.",
    services: [
      "Charge Entry & Coding Review",
      "Claim Scrubbing Workflow",
      "Clearinghouse Rejection Follow-Up",
      "ERA & EOB Posting",
      "Patient Billing Support",
      "Reporting & Analytics",
    ],
    highlights: [
      "Claim scrubbing before submission",
      "Clearinghouse rejection management",
      "ERA auto-posting support",
      "Billing workflow documentation",
    ],
  },
  {
    id: "denial",
    icon: FileX,
    title: "Denial Management",
    summary:
      "Systematic denial tracking, root cause analysis, appeals packet preparation, and follow-up to recover underpayments and reduce denial rates.",
    description:
      "We support denial management workflows from identification through resolution. Our team tracks denial patterns, prepares appeals packets, follows up on underpayments, and works to reduce future denial rates through root cause analysis and process improvements.",
    services: [
      "Denial Tracking & Categorization",
      "Appeals Packet Support",
      "Underpayment Follow-Up",
      "Root Cause Analysis",
      "Denial Prevention Workflows",
      "Payer-Specific Follow-Up",
    ],
    highlights: [
      "Systematic denial categorization",
      "Appeals packet preparation",
      "Underpayment recovery support",
      "Trend reporting for prevention",
    ],
  },
  {
    id: "ar",
    icon: Clock,
    title: "A/R Follow-Up",
    summary:
      "Aging accounts receivable follow-up, payer call support, and cleanup of aged AR to improve cash flow and reduce write-offs.",
    description:
      "We support accounts receivable follow-up across all aging buckets. Our specialists work payer aging reports, handle phone and portal follow-up, resolve claim status inquiries, and support clean-up of aged AR to reduce days in A/R and improve overall revenue capture.",
    services: [
      "Aging AR Cleanup",
      "Payer Portal Follow-Up",
      "Claim Status Investigation",
      "Underpayment Resolution",
      "Credit Balance Resolution",
    ],
    highlights: [
      "Multi-bucket aging support",
      "Payer-specific follow-up protocols",
      "Aging report reconciliation",
      "Cash flow improvement focus",
    ],
  },
  {
    id: "credentialing",
    icon: UserCheck,
    title: "Provider Credentialing",
    summary:
      "Provider credentialing support including CAQH profile management, PECOS support, NPI and taxonomy setup, and payer roster management.",
    description:
      "We support provider credentialing workflows to help providers join payer networks efficiently. Our credentialing specialists assist with CAQH profile setup and maintenance, PECOS enrollment, NPI and taxonomy registration, and ongoing payer roster management and revalidation.",
    services: [
      "CAQH Profile Setup & Maintenance",
      "PECOS Support",
      "NPI & Taxonomy Registration",
      "Payer Roster Management",
      "Revalidation Support",
      "Provider Data Management",
    ],
    highlights: [
      "CAQH profile management",
      "PECOS enrollment support",
      "Payer roster maintenance",
      "Revalidation tracking",
    ],
  },
  {
    id: "enrollment",
    icon: UserPlus,
    title: "Provider Enrollment",
    summary:
      "Payer enrollment for commercial, Medicare, and Medicaid plans, including EFT/ERA setup and ongoing maintenance.",
    description:
      "We support provider enrollment across commercial payers, Medicare, Medicaid, and managed care plans. Our enrollment specialists handle application preparation, EFT and ERA enrollment, contract follow-up, and ongoing maintenance to ensure providers remain in-network and reimbursed promptly.",
    services: [
      "Commercial Payer Enrollment",
      "Medicare Enrollment Support",
      "Medicaid Enrollment Support",
      "EFT/ERA Enrollment",
      "Contract Follow-Up",
      "Ongoing Maintenance & Updates",
    ],
    highlights: [
      "Multi-payer enrollment support",
      "EFT/ERA setup assistance",
      "Payer application management",
      "Credentialing and enrollment coordination",
    ],
  },
];
