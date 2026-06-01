import { motion } from "framer-motion";
import { Section, SectionHeader } from "../Section";
import { TIMELINE, HISTORY_INTRO, HISTORY_EVOLUTION, HISTORY_CONCLUSION } from "@/lib/site-data";
import { CheckCircle2 } from "lucide-react";

export function HistorySection() {
  return (
    <Section id="history">
      <SectionHeader
        eyebrow="History"
        title={<>A timeline of <span className="gradient-text">gender in the Philippines</span></>}
        desc="From the egalitarian baranganic societies to today's contested but progressive landscape."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-12 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="gradient-text">Overview</span>
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {HISTORY_INTRO}
        </p>
      </motion.div>

      <div className="relative">

        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />

        <div className="space-y-10">
          {TIMELINE.map((t, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={t.era}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 items-center ${
                  left ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 md:pl-0 ${left ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-strong rounded-3xl p-6 hover:shadow-glow transition group">
                    <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{t.years}</div>
                    <h3 className="text-xl font-bold mb-3">{t.era}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2">
                  <div className="h-4 w-4 rounded-full gradient-primary ring-4 ring-background shadow-glow" />
                </div>
                <div className="hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <div className="glass-strong rounded-3xl p-8 md:p-10">
          <h3 className="text-xl font-bold mb-6 text-center">Evolution of Gender in the Philippines</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {HISTORY_EVOLUTION.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mt-16 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="gradient-text">Looking forward</span>
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {HISTORY_CONCLUSION}
        </p>
      </motion.div>
    </Section>
  );
}
