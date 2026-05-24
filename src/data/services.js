import { HeartPulse, Headphones, Briefcase } from "lucide-react";

export const serviceCategories = [
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare Operations",
    summary: "Revenue cycle management and clinical support services built for healthcare providers, payers, and medical organizations.",
    description:
      "We handle the full revenue cycle so your clinical team can focus on patients. From medical coding to denial management, our certified specialists work within your existing systems to improve cash flow and reduce administrative burden.",
    services: [
      "Medical Billing & Coding",
      "Revenue Cycle Management",
      "Eligibility Verification",
      "Prior Authorization",
      "Credentialing & Enrollment",
      "AR Follow-Up",
      "Denial Management",
    ],
    highlights: [
      "98% first-pass claim rate",
      "Certified medical coders on staff",
      "Direct EHR integration support",
      "Compliance-first workflows",
    ],
  },
  {
    id: "customer",
    icon: Headphones,
    title: "Customer Support",
    summary: "Multi-channel support operations that scale with your business — from live chat to technical support and CRM management.",
    description:
      "We design, staff, and manage customer support operations that deliver consistent experiences across every channel. Our teams integrate with your tools and workflows, scaling up or down as your volume demands.",
    services: [
      "Live Chat Support",
      "Email Support",
      "Technical Support",
      "CRM Management",
      "Customer Onboarding",
      "Order Processing",
    ],
    highlights: [
      "24/7 coverage across time zones",
      "Multi-channel ticket routing",
      "CRM integration (Salesforce, HubSpot, Zendesk)",
      "Quality assurance framework",
    ],
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business Operations",
    summary: "Back-office and administrative outsourcing designed to streamline workflows, reduce overhead, and accelerate growth.",
    description:
      "We take the operational tasks off your plate so your core team can focus on strategic work. Our virtual assistants, data specialists, and operations analysts handle everything from data entry to workflow optimization.",
    services: [
      "Virtual Assistance",
      "Data Entry & Management",
      "Administrative Support",
      "Workflow Optimization",
      "Accounts Payable / Receivable",
      "AI-Assisted Workflows",
    ],
    highlights: [
      "Dedicated operations analysts",
      "Process documentation & SOPs",
      "AI-augmented data processing",
      "Weekly reporting & transparency",
    ],
  },
];
