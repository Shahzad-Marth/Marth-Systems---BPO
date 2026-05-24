import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar, Footer } from "../components/layout";
import { SkipLink, StructuredData } from "../components/common";

export default function MainLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const retry = setInterval(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        clearInterval(retry);
      }
    }, 100);
    setTimeout(() => clearInterval(retry), 3000);
  }, [pathname, hash]);

  return (
    <>
      <StructuredData />
      <SkipLink />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main
          id="main-content"
          className="flex-1 outline-none"
          tabIndex={-1}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}
