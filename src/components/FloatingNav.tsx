import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NAV_ITEMS } from "@/lib/site-data";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-3 inset-x-0 z-50 px-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
          scrolled ? "glass-strong shadow-soft" : "glass",
        )}
      >
        <Link to="/" className="flex items-center gap-2.5 pl-2">
          <img src={logo} alt="Gender & Development Philippines" className="h-9 w-9 rounded-full object-cover shadow-glow" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-foreground">Gender &amp; Development</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Philippines</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((n) => {
            const active = pathname === n.to;
            return (
              <li key={n.id}>
                <Link
                  to={n.to}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full",
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {n.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/interactive"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full gradient-primary px-5 py-2 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition"
          >
            Explore Now
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-9 w-9 place-items-center rounded-full glass-strong"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-auto mt-2 max-w-7xl glass-strong rounded-3xl p-3"
          >
            <ul className="grid grid-cols-2 gap-1">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-primary/10"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
