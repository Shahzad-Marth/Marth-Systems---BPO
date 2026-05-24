/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          "blue-accent": "#3B82F6",
          navy: "#0F172A",
          emerald: "#10B981",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC",
          "blue-soft": "#EFF6FF",
        },
        ink: {
          DEFAULT: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
        },
        border: {
          DEFAULT: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["56px", { lineHeight: "1.1", fontWeight: "700" }],
        "section-heading": ["40px", { lineHeight: "1.2", fontWeight: "600" }],
        subheading: ["22px", { lineHeight: "1.4" }],
        body: ["18px", { lineHeight: "1.6" }],
        sm: ["14px", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "7rem",
        "section-md": "5rem",
        "section-sm": "4rem",
      },
      maxWidth: {
        container: "80rem",
      },
      borderRadius: {
        card: "1.5rem",
        button: "0.75rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover":
          "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04)",
        nav: "0 1px 3px 0 rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [],
};
