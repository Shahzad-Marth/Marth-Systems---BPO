import { SITE_CONFIG, OG_IMAGE_BASE } from "../components/seo/seoConfig";

const BASE_URL = SITE_CONFIG.url;
const SITE_NAME = SITE_CONFIG.name;

let ogImageSet = false;

export function setDefaultOGImage() {
  if (ogImageSet) return;
  setMeta("og:image", `${BASE_URL}${OG_IMAGE_BASE}/home.png`);
  setMeta("og:image:width", "1200");
  setMeta("og:image:height", "630");
  setMeta("og:image:alt", SITE_CONFIG.ogImageAlt);
  setMeta("twitter:image", `${BASE_URL}${OG_IMAGE_BASE}/home.png`);
  ogImageSet = true;
}

export function updateMeta({ title, description, keywords, image, canonical, article }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — ${SITE_CONFIG.tagline}`;

  document.title = fullTitle;

  const desc = description || SITE_CONFIG.description;

  setMeta("description", desc);
  setMeta("keywords", Array.isArray(keywords) ? keywords.join(", ") : "");
  setMeta("og:title", fullTitle);
  setMeta("og:description", desc);
  setMeta("og:url", canonical || window.location.href);
  setMeta("og:site_name", SITE_NAME);
  setMeta("twitter:title", fullTitle);
  setMeta("twitter:description", desc);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:site", SITE_CONFIG.twitterHandle);

  if (image) {
    setMeta("og:image", `${BASE_URL}${image}`);
    setMeta("og:image:width", "1200");
    setMeta("og:image:height", "630");
    setMeta("twitter:image", `${BASE_URL}${image}`);
  } else {
    setDefaultOGImage();
  }

  if (canonical) {
    setCanonical(canonical);
  }

  if (article) {
    setMeta("og:type", "article");
    setMeta("article:published_time", article.publishedTime);
    setMeta("article:author", article.author || SITE_NAME);
    if (article.tags?.length) {
      article.tags.forEach((tag) => {
        let el = document.querySelector(`meta[property="article:tag"][content="${tag}"]`);
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute("property", "article:tag");
          el.setAttribute("content", tag);
          document.head.appendChild(el);
        }
      });
    }
  } else {
    setMeta("og:type", "website");
    removeArticleTags();
  }
}

function setMeta(name, content) {
  if (!content) return;
  const attr = name.includes(":") ? "property" : "name";
  const selector = attr === "property" ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeAttr(attr, value) {
  document.querySelectorAll(`meta[${attr}="${value}"]`).forEach((el) => el.remove());
}

function removeArticleTags() {
  removeAttr("property", "article:published_time");
  removeAttr("property", "article:author");
  removeAttr("property", "article:tag");
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/assets/favicon/favicon.ico`,
    description: SITE_CONFIG.description,
    foundingDate: "2024",
    address: { "@type": "PostalAddress", streetAddress: "Boston, MA — Lahore, PK" },
    contactPoint: { "@type": "ContactPoint", telephone: "+92-312-609-7422", contactType: "sales" },
    sameAs: ["https://www.linkedin.com/in/marthsystems", "https://x.com/Marthsystems"],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
  };
}

export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export function generateArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.description,
    author: { "@type": "Organization", name: post.author || SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: `${BASE_URL}/favicon.svg` },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${post.slug}` },
  };
}

export { BASE_URL, SITE_NAME };
