/* eslint-disable react-refresh/only-export-components */

import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Industries = lazy(() => import("../pages/Industries"));
const WhyUs = lazy(() => import("../pages/WhyUs"));
const CaseStudies = lazy(() => import("../pages/CaseStudies"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogPost = lazy(() => import("../pages/BlogPost"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Terms = lazy(() => import("../pages/Terms"));
const NotFound = lazy(() => import("../pages/NotFound"));

function SuspenseWrapper({ children }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-pulse rounded-full bg-brand-blue/20" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
}

const wrap = (Component) => (
  <SuspenseWrapper>
    <Component />
  </SuspenseWrapper>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: wrap(Home) },
      { path: "about", element: wrap(About) },
      { path: "services", element: wrap(Services) },
      { path: "industries", element: wrap(Industries) },
      { path: "why-us", element: wrap(WhyUs) },
      { path: "case-studies", element: wrap(CaseStudies) },
      { path: "blog", element: wrap(Blog) },
      { path: "blog/:slug", element: wrap(BlogPost) },
      { path: "contact", element: wrap(Contact) },
      { path: "privacy", element: wrap(Privacy) },
      { path: "terms", element: wrap(Terms) },
      { path: "*", element: wrap(NotFound) },
    ],
  },
]);

export default router;
