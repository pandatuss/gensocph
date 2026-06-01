import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
    >
      <span className="inline-block glass rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary mb-4">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {desc}
        </p>
      )}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-16 md:py-24 scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </section>
  );
}
