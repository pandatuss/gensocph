import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { FloatingNav } from "./FloatingNav";
import { ScrollProgress } from "./ScrollProgress";
import { Footer } from "./Footer";

export function PageShell({
  eyebrow,
  title,
  description,
  icon: Icon,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  icon?: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <FloatingNav />

      <section className="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden">
        <div className="blob animate-blob bg-primary/30 h-[360px] w-[360px] -top-24 -left-20" />
        <div
          className="blob animate-blob bg-primary-glow/30 h-[320px] w-[320px] top-20 -right-24"
          style={{ animationDelay: "-6s" }}
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground font-medium">{eyebrow}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-6 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
              {Icon && <Icon className="h-3.5 w-3.5" />}
              {eyebrow}
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              {title}
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {children}
      </motion.div>

      <Footer />
    </main>
  );
}
