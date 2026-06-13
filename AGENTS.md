# Marth Systems Website Rules

These rules apply only to `marth.systems` and `www.marth.systems`.

## Brand focus

Marth Systems is a full-cycle US Healthcare RCM and Healthcare BPO support company.

Primary positioning:

`Full-cycle US Healthcare RCM and Healthcare BPO support for practices, clinics, provider groups, billing teams, and healthcare organizations.`

Marth Systems must not look like a narrow credentialing-only or billing-only site. It should cover the full administrative revenue cycle and healthcare back-office workflow.

## Domain role

- `www.marth.systems` = canonical healthcare RCM/BPO website.
- `marth.systems` = redirect to `www.marth.systems`, if `www` is chosen as canonical.
- No free tools.
- No developer studio content.
- No Play Store app hub.
- No browser calculators or QR generators.
- No MS DevX Labs content.

## Allowed topics

Marth Systems may cover:

- full-cycle revenue cycle management
- healthcare BPO
- medical billing support
- front-end RCM
- mid-cycle RCM
- back-end RCM
- patient registration support
- demographics verification
- eligibility and benefits verification
- referral coordination support
- prior authorization support
- appointment scheduling support
- charge entry
- coding review support, only if capability is confirmed by the owner
- claim scrubbing workflow support
- clearinghouse rejection follow-up
- claims submission support
- payment posting
- ERA and EOB posting
- denial management
- rejection management
- appeals packet support
- A/R follow-up
- aging AR cleanup
- underpayment follow-up
- patient billing support
- reporting and analytics
- provider credentialing
- provider enrollment
- payer enrollment
- commercial payer enrollment
- Medicare enrollment support
- Medicaid enrollment support
- CAQH profile setup and maintenance
- PECOS support
- NPI and taxonomy support
- EFT/ERA enrollment support
- revalidation support
- payer roster management
- provider data management
- healthcare virtual assistant support
- healthcare call center support
- healthcare data entry
- document indexing
- payer call support
- SOP-based healthcare back-office operations
- QA workflows

## Disallowed topics

Do not create or promote these on Marth Systems:

- free online tools
- calculators
- QR code generators
- password generators
- developer tools
- AI utility hub pages
- MS DevX apps
- Play Store app pages
- portfolio pages for software development
- labs, previews, demos, or staging pages

## Important wording rule

Use `US Healthcare`, not `UHC Healthcare`, unless the owner explicitly asks for UnitedHealthcare-specific content.

Never imply official affiliation with:

- UnitedHealthcare
- UHC
- CMS
- Medicare
- Medicaid
- CAQH
- commercial payers

Allowed phrasing:

- payer-specific follow-up support
- commercial payer enrollment support
- Medicare enrollment support
- Medicaid enrollment support
- CAQH profile management support
- payer portal follow-up support

Disallowed phrasing:

- official UHC partner
- UnitedHealthcare certified
- CMS certified
- CAQH approved partner
- guaranteed payer approval
- guaranteed reimbursement
- guaranteed claim approval

## Claims policy

Never invent:

- client names
- testimonials
- reviews
- star ratings
- client logos
- case studies
- revenue increases
- denial reduction percentages
- clean claim rates
- HIPAA certifications
- payer partnerships
- official CMS/CAQH affiliation
- years in business
- provider count served
- staff count
- certifications

Only use facts already present in the repo or explicitly provided by the owner.

## Healthcare compliance language

Marth Systems provides administrative RCM/BPO support, not clinical care.

Do not claim:

- medical diagnosis
- clinical treatment
- legal advice
- medical advice
- HIPAA certified
- 100% HIPAA compliant
- guaranteed claim approval
- guaranteed reimbursement
- certified coders unless confirmed
- licensed billing experts unless confirmed

Safer wording:

- healthcare administrative support
- RCM workflow support
- HIPAA-conscious workflows
- secure intake process
- privacy-aware operations
- payer follow-up support
- claims administration support
- billing operations support
- BAA-ready only if confirmed by owner

Every general contact form must show this PHI warning:

`Please do not submit protected health information (PHI), patient records, claim files, login credentials, or sensitive documents through this form. After initial contact, we can arrange an appropriate secure intake process if needed.`

## Required site architecture

Minimum pages:

```txt
/
/services
/services/full-cycle-rcm
/services/healthcare-bpo
/services/medical-billing
/services/ar-follow-up
/services/denial-management
/services/provider-credentialing
/services/provider-enrollment
/about
/contact
/privacy
/security
```

Recommended expanded pages:

```txt
/
/services
/services/full-cycle-rcm
/services/front-end-rcm
/services/mid-cycle-rcm
/services/back-end-rcm
/services/healthcare-bpo
/services/medical-billing
/services/claims-submission-support
/services/claim-scrubbing-support
/services/charge-entry
/services/payment-posting
/services/denial-management
/services/ar-follow-up
/services/aging-ar-cleanup
/services/eligibility-benefits-verification
/services/prior-authorization-support
/services/referral-coordination
/services/patient-scheduling-support
/services/patient-billing-support
/services/provider-credentialing
/services/provider-enrollment
/services/payer-enrollment
/services/caqh-profile-management
/services/pecos-medicare-enrollment
/services/eft-era-enrollment
/services/revalidation-support
/services/healthcare-virtual-assistant
/services/healthcare-call-center-support
/services/healthcare-data-entry
/industries
/industries/medical-practices
/industries/provider-groups
/industries/behavioral-health
/industries/mental-health
/industries/telehealth
/industries/specialty-clinics
/industries/billing-companies
/process
/why-marth-systems
/about
/contact
/privacy
/security
/blog
```

## SEO rules

Every public indexable page must have:

- crawlable server-rendered or statically rendered main content
- unique title
- unique meta description
- one clear H1
- canonical URL on `https://www.marth.systems`
- Open Graph metadata using `https://www.marth.systems`
- helpful internal links
- sitemap inclusion only if canonical and indexable
- structured data where appropriate
- mobile-friendly layout
- accessible forms and navigation
- no keyword stuffing
- no fake claims
- no placeholder pages

Title format:

`{Primary Keyword} | Marth Systems`

Homepage title:

`Full-Cycle Healthcare RCM & BPO Services | Marth Systems`

Homepage meta description:

`Marth Systems provides full-cycle US healthcare RCM and BPO support, including eligibility verification, prior authorization, charge entry, claims support, payment posting, denial management, A/R follow-up, credentialing, payer enrollment, and healthcare back-office operations.`

## Service page template

Every service page must include:

- H1
- short intro
- who this service is for
- common workflow challenges
- what Marth Systems supports
- workflow/process
- information needed from the client
- related services
- privacy/security note
- CTA

## Structured data

Use:

- Organization
- WebSite
- Service
- BreadcrumbList
- Article for blog posts

Do not use schema that implies Marth Systems provides clinical care.
Do not add fake ratings, reviews, aggregateRating, testimonials, or logos.

## Sitemap rules

`www.marth.systems/sitemap.xml` must include healthcare RCM/BPO pages only.

It must not include:

- tools pages
- MS DevX pages
- browser tools pages
- labs/previews
- `tools.marth.systems` URLs
- `tools.msdevx.com` URLs

## Privacy and security page rules

Privacy page must not contradict the contact form.

If the form collects name, email, phone, organization, service interest, or message, the privacy page must say so.

Privacy/security pages should explain:

- what the contact form collects
- how inquiries are used
- no PHI through general contact form
- secure intake after consultation
- cookie/analytics use, if any
- deletion request method
- formal healthcare data handling requires appropriate agreements

## Verification rules

Before final response, run:

```bash
npm run lint
npm run build
```

Then run:

```bash
rg "tools|calculator|MS Tools|MS DevX|Age Calculator|QR Code|Password Generator|Unit Converter|tools\.marth\.systems|tools\.msdevx\.com|UnitedHealthcare|UHC" .
```

Explain every remaining match.
