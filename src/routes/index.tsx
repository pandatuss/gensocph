import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, Play, Sparkles, Landmark, Heart, Briefcase, GraduationCap,
  Tv, Scale, Globe, BookOpen, Layers, Zap, Trophy, ChevronDown,
} from "lucide-react";
import { FloatingNav } from "@/components/FloatingNav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Footer } from "@/components/Footer";
import { HERO_STATS } from "@/lib/site-data";
import heroIllustration from "@/assets/hero-illustration.png";
import artRainbow from "@/assets/artwork-rainbow-united.png";
import artWorkInProgress from "@/assets/artwork-work-in-progress.png";
import artOurBodies from "@/assets/artwork-our-bodies.png";
import artEqualOpportunities from "@/assets/artwork-equal-opportunities.png";
import artUpliftingNarratives from "@/assets/artwork-uplifting-narratives.png";
import artBuildTogether from "@/assets/artwork-build-together.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gender & Development Philippines — Understanding Gender, Empowering Society" },
      {
        name: "description",
        content:
          "An interactive educational platform exploring gender, equality, laws, family, labor, academe, and media in the Philippines.",
      },
      { property: "og:title", content: "Gender & Development Philippines" },
      {
        property: "og:description",
        content:
          "Understanding Gender, Empowering Society — explore the history, laws, and progress of gender equality in the Philippines.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const FEATURED = [
  { to: "/history", label: "History", icon: Landmark, tone: "from-purple-200/60 to-indigo-200/60", desc: "From babaylan to modern movements." },
  { to: "/gad", label: "Gender & Development", icon: Sparkles, tone: "from-purple-200/60 to-indigo-200/60", desc: "The GAD framework in action." },
  { to: "/family", label: "Filipino Family", icon: Heart, tone: "from-purple-200/60 to-indigo-200/60", desc: "Tradition meets modern households." },
  { to: "/labor", label: "Labor Market", icon: Briefcase, tone: "from-purple-200/60 to-indigo-200/60", desc: "Work, wages, and the gender gap." },
  { to: "/academe", label: "Academe", icon: GraduationCap, tone: "from-purple-200/60 to-indigo-200/60", desc: "Schools as battlegrounds & bridges." },
  { to: "/media", label: "Media", icon: Tv, tone: "from-purple-200/60 to-indigo-200/60", desc: "How media tells gender." },
  { to: "/laws", label: "Laws & Policies", icon: Scale, tone: "from-purple-200/60 to-indigo-200/60", desc: "The Philippine legal framework." },
  { to: "/resources", label: "Resources", icon: BookOpen, tone: "from-purple-200/60 to-indigo-200/60", desc: "Government, academic & advocacy." },
] as const;

const INTERACTIVE_PREVIEW = [
  { icon: Layers, title: "Swipe Cards", desc: "Tinder-style learning deck for bite-sized gender facts." },
  { icon: Zap, title: "Fun Fact Generator", desc: "Random Philippine gender trivia at the press of a button." },
  { icon: Trophy, title: "Knowledge Quiz", desc: "10-question assessment with scoring & achievements." },
];

const ARTWORKS = [
  { title: "We are a rainbow. We are united", artist: "Jihad Chraa Ouarhrari", img: artRainbow },
  { title: "Work in Progress", artist: "Joseph Fowler", img: artWorkInProgress },
  { title: "Our Bodies, Our Rule", artist: "Ronan Lynam", img: artOurBodies },
  { title: "Equal Opportunities", artist: "Lucía Sancho Hernández", img: artEqualOpportunities },
  { title: "Acting for Equal means … uplifting all narratives", artist: "Naimah Thomas", img: artUpliftingNarratives },
  { title: "We Build It Together", artist: "Kim Nguyen for OBI x Fine Acts", img: artBuildTogether },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <FloatingNav />

      <section className="relative pt-10 pb-4 md:pt-12 md:pb-6 overflow-hidden">
        <div className="blob animate-blob bg-primary/40 h-[420px] w-[420px] -top-20 -left-20" />
        <div className="blob animate-blob bg-primary-glow/40 h-[380px] w-[380px] top-40 -right-24" style={{ animationDelay: "-6s" }} />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-[45fr_55fr] gap-10 items-center min-h-[80vh]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-primary mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Understanding Gender · Empowering Society
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Understanding gender builds a <span className="gradient-text">better society.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl lg:hidden">
                A premium educational platform exploring the history, laws, family, labor, academe, and media
                of gender equality in the Philippines — one focused topic at a time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/history"
                  className="inline-flex items-center gap-2 gradient-primary text-white rounded-full px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
                >
                  Start Exploring <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/interactive"
                  className="inline-flex items-center gap-2 glass-strong rounded-full px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-white transition"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full gradient-primary text-white">
                    <Play className="h-3 w-3 ml-0.5" />
                  </span>
                  Interactive Center
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 relative z-10">
                {HERO_STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="bg-white border border-border rounded-2xl p-4 text-foreground hover:-translate-y-1 transition shadow-sm"
                  >
                    <s.icon className="h-5 w-5 mb-2 text-primary" />
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
              className="relative hidden lg:block h-full min-h-[600px] lg:min-h-[700px]"
            >

              <motion.div
                aria-hidden
                className="absolute -top-8 -left-6 h-32 w-32 rounded-full gradient-primary opacity-30 blur-2xl"
                animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="absolute bottom-4 -right-4 h-40 w-40 rounded-full bg-primary-glow opacity-25 blur-3xl"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                aria-hidden
                className="absolute top-1/3 right-10 h-20 w-20 rounded-3xl gradient-primary opacity-20 blur-xl"
                animate={{ rotate: [0, 12, 0], y: [0, -10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="absolute inset-0 gradient-primary rounded-[3rem] blur-3xl opacity-20" />
                <img
                  src={heroIllustration}
                  alt="Diverse Filipinos celebrating gender equality on a balanced scale"
                  className="relative w-full h-auto max-h-[1125px] scale-150 object-contain drop-shadow-2xl translate-y-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="blob animate-blob bg-primary/30 h-[360px] w-[360px] -top-24 -left-20" />
        <div
          className="blob animate-blob bg-primary-glow/30 h-[320px] w-[320px] top-20 -right-24"
          style={{ animationDelay: "-6s" }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary mb-5">
              <BookOpen className="h-3.5 w-3.5" />
              Introduction
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight">
              Understanding <span className="gradient-text">Gender</span> in the Philippines
            </h2>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the history, development, and realities of gender in Philippine society.
            </p>
            <div className="mt-6 space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
              <p>
                The Philippines has a long and evolving history of gender shaped by culture, tradition, colonization, and modern social change. From early societies where roles were more fluid to present-day efforts toward{" "}
                <span className="gradient-text font-semibold">equality</span>{" "}
                and protection, gender continues to influence how people live, work, and interact in everyday Filipino life.
              </p>
              <p>
                Today, issues surrounding{" "}
                <span className="gradient-text font-semibold">identity</span>,{" "}
                <span className="gradient-text font-semibold">rights</span>, representation, and safety remain important topics in{" "}
                <span className="gradient-text font-semibold">Philippine society</span>. Laws, education, media, and community movements all play a role in shaping a more inclusive and equitable environment for everyone.
              </p>
              <p>
                This website is an interactive learning space that explores gender in the Philippine context — its history, development, and current realities — helping users better understand identity, equality, and the lived experiences of Filipinos in society.
              </p>
            </div>
            <a
              href="#featured-topics"
              className="mt-8 inline-flex items-center gap-2 gradient-primary text-white rounded-full px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
            >
              Start Learning <ChevronDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="featured-topics" className="relative pt-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12 md:mb-14">
            <span className="inline-block glass rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary mb-4">
              Explore the chapters
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Focused chapters of the <span className="gradient-text">Filipino gender story</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED.map((f, i) => (
              <motion.div
                key={f.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={f.to}
                  className={`group relative block rounded-3xl p-6 min-h-[200px] bg-gradient-to-br ${f.tone} border border-white/70 backdrop-blur-xl hover:-translate-y-1.5 hover:shadow-glow transition overflow-hidden`}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/40 blur-2xl" />
                  <div className="relative">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-white shadow-glow mb-4">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">{f.label}</h3>
                    <p className="mt-1.5 text-sm text-foreground/70 leading-relaxed">{f.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Open page <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block glass rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase text-primary mb-4">
                Interactive Learning
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Learn by <span className="gradient-text">swiping, sparking, scoring</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground">
                Our gamified Interactive Center turns Philippine gender knowledge into bite-sized,
                playful experiences — built for short attention spans.
              </p>
              <Link
                to="/interactive"
                className="mt-7 inline-flex items-center gap-2 gradient-primary text-white rounded-full px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
              >
                Try the Interactive Center <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {INTERACTIVE_PREVIEW.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-strong rounded-3xl p-5 flex items-center gap-4 hover:-translate-y-1 transition"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-white shrink-0 shadow-glow">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold">{p.title}</div>
                    <div className="text-sm text-muted-foreground leading-snug">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block glass rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase text-primary mb-4">
              Artworks
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Visualizing <span className="gradient-text">equality</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              A curated set of contemporary artworks celebrating gender equality, inclusion, and solidarity.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARTWORKS.map((art, i) => (
              <motion.figure
                key={art.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-strong rounded-3xl overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={art.img}
                    alt={`${art.title} by ${art.artist}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5">
                  <h4 className="font-bold leading-snug">"{art.title}"</h4>
                  <p className="mt-1 text-sm text-muted-foreground">by {art.artist}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-white gradient-primary shadow-glow text-center">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <Globe className="h-10 w-10 mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold">Ready to explore the Filipino gender story?</h2>
              <p className="mt-4 text-white/85 max-w-xl mx-auto">
                Dive into nine focused chapters — from pre-colonial babaylan to the Magna Carta of Women
                and beyond.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link
                  to="/history"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
                >
                  Start with History <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:bg-white/25 transition"
                >
                  Browse Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
