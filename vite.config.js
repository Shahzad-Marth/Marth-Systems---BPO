import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { blogPosts } from "./src/data/blog.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://www.marth.systems";

const staticRoutes = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/services", priority: 0.9, changefreq: "weekly" },
  { path: "/services/full-cycle-rcm", priority: 0.8, changefreq: "monthly" },
  { path: "/services/front-end-rcm", priority: 0.8, changefreq: "monthly" },
  { path: "/services/mid-cycle-rcm", priority: 0.8, changefreq: "monthly" },
  { path: "/services/back-end-rcm", priority: 0.8, changefreq: "monthly" },
  { path: "/services/healthcare-bpo", priority: 0.8, changefreq: "monthly" },
  { path: "/services/medical-billing", priority: 0.8, changefreq: "monthly" },
  { path: "/services/claims-submission-support", priority: 0.8, changefreq: "monthly" },
  { path: "/services/charge-entry", priority: 0.8, changefreq: "monthly" },
  { path: "/services/payment-posting", priority: 0.8, changefreq: "monthly" },
  { path: "/services/eligibility-benefits-verification", priority: 0.8, changefreq: "monthly" },
  { path: "/services/prior-authorization-support", priority: 0.8, changefreq: "monthly" },
  { path: "/services/denial-management", priority: 0.8, changefreq: "monthly" },
  { path: "/services/ar-follow-up", priority: 0.8, changefreq: "monthly" },
  { path: "/services/aging-ar-cleanup", priority: 0.8, changefreq: "monthly" },
  { path: "/services/provider-credentialing", priority: 0.8, changefreq: "monthly" },
  { path: "/services/provider-enrollment", priority: 0.8, changefreq: "monthly" },
  { path: "/services/payer-enrollment", priority: 0.8, changefreq: "monthly" },
  { path: "/services/caqh-profile-management", priority: 0.8, changefreq: "monthly" },
  { path: "/services/pecos-medicare-enrollment", priority: 0.8, changefreq: "monthly" },
  { path: "/services/eft-era-enrollment", priority: 0.8, changefreq: "monthly" },
  { path: "/services/healthcare-virtual-assistant", priority: 0.8, changefreq: "monthly" },
  { path: "/services/healthcare-call-center-support", priority: 0.8, changefreq: "monthly" },
  { path: "/services/healthcare-data-entry", priority: 0.8, changefreq: "monthly" },
  { path: "/industries", priority: 0.8, changefreq: "monthly" },
  { path: "/industries/medical-practices", priority: 0.7, changefreq: "monthly" },
  { path: "/industries/provider-groups", priority: 0.7, changefreq: "monthly" },
  { path: "/industries/behavioral-health", priority: 0.7, changefreq: "monthly" },
  { path: "/industries/telehealth", priority: 0.7, changefreq: "monthly" },
  { path: "/industries/specialty-clinics", priority: 0.7, changefreq: "monthly" },
  { path: "/industries/billing-companies", priority: 0.7, changefreq: "monthly" },
  { path: "/process", priority: 0.7, changefreq: "monthly" },
  { path: "/why-marth-systems", priority: 0.8, changefreq: "monthly" },
  { path: "/contact", priority: 0.6, changefreq: "monthly" },
  { path: "/privacy", priority: 0.3, changefreq: "monthly" },
  { path: "/security", priority: 0.5, changefreq: "monthly" },
  { path: "/terms", priority: 0.3, changefreq: "monthly" },
  { path: "/blog", priority: 0.9, changefreq: "weekly" },
];

function priority(dateStr) {
  const age = Date.now() - new Date(dateStr).getTime();
  const days = age / 86400000;
  if (days < 30) return 0.7;
  if (days < 90) return 0.6;
  return 0.5;
}

function generateSitemap() {
  const urls = [
    ...staticRoutes.map(
      (r) =>
        `<url><loc>${BASE_URL}${r.path}</loc><priority>${r.priority}</priority><changefreq>${r.changefreq}</changefreq></url>`
    ),
    ...blogPosts.map(
      (p) =>
        `<url><loc>${BASE_URL}/blog/${p.slug}</loc><lastmod>${p.date}</lastmod><priority>${priority(p.date)}</priority><changefreq>monthly</changefreq></url>`
    ),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "sitemap-plugin",
      closeBundle() {
        const xml = generateSitemap();
        writeFileSync(resolve(__dirname, "dist/sitemap.xml"), xml, "utf-8");
        console.log("sitemap.xml generated");
      },
    },
  ],
  define: {
    global: "globalThis",
  },
});
