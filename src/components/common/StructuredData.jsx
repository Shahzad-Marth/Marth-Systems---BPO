import { useEffect } from "react";
import { generateOrganizationSchema, generateWebsiteSchema } from "../../utils/seo";

export default function StructuredData() {
  useEffect(() => {
    const schemas = [generateOrganizationSchema(), generateWebsiteSchema()];
    schemas.forEach((schema) => {
      const id = `structured-data-${schema["@type"]}`;
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = id;
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(schema);
    });

    return () => {
      schemas.forEach((schema) => {
        const el = document.getElementById(`structured-data-${schema["@type"]}`);
        if (el) el.remove();
      });
    };
  }, []);

  return null;
}
