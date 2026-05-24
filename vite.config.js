import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { blogPosts } from "./src/data/blog.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://marth.systems";

const staticRoutes = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.7, changefreq: "monthly" },
  { path: "/services", priority: 0.9, changefreq: "monthly" },
  { path: "/industries", priority: 0.8, changefreq: "monthly" },
  { path: "/why-us", priority: 0.8, changefreq: "monthly" },
  { path: "/case-studies", priority: 0.7, changefreq: "monthly" },
  { path: "/blog", priority: 0.9, changefreq: "weekly" },
  { path: "/contact", priority: 0.6, changefreq: "monthly" },
  { path: "/privacy", priority: 0.3, changefreq: "monthly" },
  { path: "/terms", priority: 0.3, changefreq: "monthly" },
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
