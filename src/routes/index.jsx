/* eslint-disable react-refresh/only-export-components */

import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const ServiceDetail = lazy(() => import("../pages/ServiceDetail"));
const Industries = lazy(() => import("../pages/Industries"));
const IndustryDetail = lazy(() => import("../pages/IndustryDetail"));
const WhyMarthSystems = lazy(() => import("../pages/WhyMarthSystems"));
const Process = lazy(() => import("../pages/Process"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogPost = lazy(() => import("../pages/BlogPost"));
const Contact = lazy(() => import("../pages/Contact"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Security = lazy(() => import("../pages/Security"));
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
      { path: "services/:slug", element: wrap(ServiceDetail) },
      { path: "industries", element: wrap(Industries) },
      { path: "industries/:slug", element: wrap(IndustryDetail) },
      { path: "why-marth-systems", element: wrap(WhyMarthSystems) },
      { path: "process", element: wrap(Process) },
      { path: "blog", element: wrap(Blog) },
      { path: "blog/:slug", element: wrap(BlogPost) },
      { path: "contact", element: wrap(Contact) },
      { path: "privacy", element: wrap(Privacy) },
      { path: "security", element: wrap(Security) },
      { path: "terms", element: wrap(Terms) },
      { path: "*", element: wrap(NotFound) },
    ],
  },
]);

export default router;
