import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { Button } from "../ui";
import { navLinks } from "../../data/navigation";
import { useScrollPosition, useLockBodyScroll } from "../../hooks";

const mobileListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function DesktopNavLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "relative px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "text-ink"
            : "text-ink-secondary hover:text-ink"
        )
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive && (
            <motion.span
              layoutId="nav-indicator"
              className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-brand-blue"
            />
          )}
        </>
      )}
    </NavLink>
  );
}

function MobileNavLink({ to, label, onClick }) {
  return (
    <motion.div variants={mobileItemVariants}>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          cn(
            "flex rounded-xl px-4 py-3 text-lg font-medium transition-colors",
            isActive
              ? "text-brand-blue bg-brand-blue/5"
              : "text-ink-secondary hover:text-ink hover:bg-surface-alt"
          )
        }
      >
        {label}
      </NavLink>
    </motion.div>
  );
}

export default function Navbar() {
  const scrolled = useScrollPosition(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useLockBodyScroll(mobileOpen);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/80 backdrop-blur-lg shadow-nav"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-container items-center justify-between px-6 lg:h-20"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-ink"
          aria-label="Marth Systems home"
        >
          <img
            src="/assets/favicon/favicon.ico"
            width={32} height={32} alt="Marth Systems logo"
            className="h-7 w-7"
          />
          <span className="inline">Marth</span>
          <span className="text-brand-blue"> Systems</span>
        </Link>

        <div className="hidden items-center lg:flex">
          {navLinks.map((link) => (
            <DesktopNavLink key={link.path} to={link.path} label={link.label} />
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <Button to="/contact" size="md">
            Book Consultation
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className={`rounded-lg p-2.5 text-ink transition-opacity lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          aria-label="Open main menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm lg:hidden"
            onClick={closeMobile}
          >
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-surface shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <span className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink">
                  <img
                      src="/assets/favicon/favicon.ico"
                      width={32} height={32} alt="Marth Systems logo"
                      className="h-7 w-7"
                    />
                    Marth Systems
                </span>
                <button
                  onClick={closeMobile}
                  className="rounded-lg p-2.5 text-ink transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  aria-label="Close menu"
                  autoFocus
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>

              <motion.div
                variants={mobileListVariants}
                initial="hidden"
                animate="visible"
                className="flex-1 overflow-y-auto px-4 py-6"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <MobileNavLink
                      key={link.path}
                      to={link.path}
                      label={link.label}
                      onClick={closeMobile}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="border-t border-border px-6 py-6"
              >
                <Button
                  to="/contact"
                  onClick={closeMobile}
                  size="lg"
                  className="w-full"
                >
                  Book Consultation
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
