import { motion } from "framer-motion";
import { Section, SectionHeader } from "../Section";
import { RESOURCES, CONTENT_REFERENCES } from "@/lib/site-data";
import { ExternalLink, Mail, BookMarked, Quote } from "lucide-react";
import { useState } from "react";

export function ResourcesSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <Section id="resources">
      <SectionHeader
        eyebrow="Resources"
        title={<>Keep <span className="gradient-text">learning</span></>}
        desc="Curated references for deeper reading — government, academic, international, and advocacy sources."
      />

      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {RESOURCES.map((cat, i) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass-strong rounded-3xl p-7"
          >
            <h3 className="text-lg font-bold mb-4">{cat.category}</h3>
            <ul className="space-y-2.5">
              {cat.items.map((it) => (
                <li key={it.name}>
                  <a
                    href={it.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl p-3 hover:bg-primary/5 transition group"
                  >
                    <span className="text-sm font-medium">{it.name}</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-12"
      >
        <div className="flex flex-col items-center text-center mb-8">
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            <BookMarked className="h-3.5 w-3.5" />
            Content References
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Sources <span className="gradient-text">cited across this site</span>
          </h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl">
            Academic literature, statutes, and reports that informed the content of each section.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {CONTENT_REFERENCES.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-strong rounded-3xl p-7"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Quote className="h-4 w-4" />
                </div>
                <h4 className="text-base font-bold">{cat.category}</h4>
              </div>
              <ul className="space-y-3">
                {cat.items.map((ref, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20"
                  >
                    {ref}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs text-center text-muted-foreground italic">
          Citations follow APA-style formatting. Some titles are paraphrased for clarity in this educational context.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 text-white gradient-primary shadow-glow"
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold">Learning, in your inbox.</h3>
          <p className="mt-3 text-white/85">
            Get a monthly digest of Philippine gender news, policy updates, and study guides.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSubscribed(true);
            }}
            className="mt-7 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-full bg-white/15 backdrop-blur border border-white/30 pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              {subscribed ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
        </div>
      </motion.div>
    </Section>
  );
}
