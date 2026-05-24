import { useEffect } from "react";
import { updateMeta, generateBreadcrumbSchema, generateArticleSchema, setDefaultOGImage } from "../../utils/seo";

const SCRIPT_ID = "structured-data";

function injectSchema(schema) {
  const id = `${SCRIPT_ID}-${schema["@type"]}`;
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
}

function removeSchema(type) {
  const el = document.getElementById(`${SCRIPT_ID}-${type}`);
  if (el) el.remove();
}

export default function SEO({ title, description, keywords, image, canonical, article, breadcrumbs }) {
  useEffect(() => {
    setDefaultOGImage();
    updateMeta({ title, description, keywords, image, canonical, article });

    if (breadcrumbs?.length) {
      injectSchema(generateBreadcrumbSchema(breadcrumbs));
    } else {
      removeSchema("BreadcrumbList");
    }

    if (article) {
      injectSchema(generateArticleSchema(article));
    } else {
      removeSchema("Article");
    }

    return () => {
      removeSchema("BreadcrumbList");
      removeSchema("Article");
      document.querySelectorAll('meta[property="article:tag"]').forEach((el) => el.remove());
    };
  }, [title, description, keywords, image, canonical, article, breadcrumbs]);

  return null;
}
