import { motion } from "framer-motion";
import heroIllustration from "@/assets/hero-illustration.png";
import { HERO_STATS } from "@/lib/site-data";
import { Play, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">

      <div className="blob animate-blob bg-primary/40 h-[420px] w-[420px] -top-20 -left-20" />
      <div className="blob animate-blob bg-primary-glow/40 h-[380px] w-[380px] top-40 -right-24" style={{ animationDelay: "-6s" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Understanding Gender · Empowering Society
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Understanding gender builds a <span className="gradient-text">better society.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Explore the history, development, challenges, and progress of gender equality in the
              Philippines through an interactive learning experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#introduction"
                className="inline-flex items-center gap-2 gradient-primary text-white rounded-full px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
              >
                Explore Topics <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#interactive"
                className="inline-flex items-center gap-2 glass-strong rounded-full px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white transition"
              >
                <span className="grid h-7 w-7 place-items-center rounded-full gradient-primary text-white">
                  <Play className="h-3 w-3 ml-0.5" />
                </span>
                Watch Overview
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {HERO_STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="glass rounded-2xl p-4 hover:-translate-y-1 transition"
                >
                  <s.icon className="h-5 w-5 text-primary mb-2" />
                  <div className="text-2xl font-bold tracking-tight">{s.value}</div>
                  <div className="text-[11px] text-muted-foreground leading-tight mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-full flex items-stretch lg:-mr-32 xl:-mr-48"
          >
            <div className="relative animate-float w-full flex items-center justify-center">
              <div className="absolute inset-0 gradient-primary rounded-[3rem] blur-3xl opacity-20" />
              <img
                src={heroIllustration}
                alt="Diverse Filipinos celebrating gender equality on a balanced scale"
                className="relative w-full max-w-[900px] lg:max-w-none lg:w-[145%] lg:scale-125 mx-auto"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-10 left-2 glass-strong rounded-2xl px-4 py-3 shadow-soft hidden sm:block"
            >
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Ranked</div>
              <div className="text-sm font-bold">#1 in SE Asia</div>
              <div className="text-[10px] text-muted-foreground">Gender Gap Index</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-10 right-2 glass-strong rounded-2xl px-4 py-3 shadow-soft hidden sm:block"
            >
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Since</div>
              <div className="text-sm font-bold">1937</div>
              <div className="text-[10px] text-muted-foreground">Women's Suffrage</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
