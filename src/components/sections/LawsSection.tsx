import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "../Section";
import { LAWS } from "@/lib/site-data";
import { Search, ChevronDown, Shield, Heart, AlertTriangle, Globe, Briefcase } from "lucide-react";

const gbvSituations = [
  {
    icon: Heart,
    title: "Domestic Violence",
    body: "Many women experience abuse from intimate partners — physical harm, emotional manipulation, and economic control. Despite RA 9262, many cases remain unreported due to fear, financial dependence, and social stigma.",
  },
  {
    icon: AlertTriangle,
    title: "Sexual Harassment",
    body: "Occurs frequently in schools, workplaces, transportation, and public spaces. Victims face unwanted comments, advances, and coercive behavior. Enforcement and reporting remain challenges in many areas.",
  },
  {
    icon: Globe,
    title: "Online Gender-Based Violence",
    body: "A growing form of abuse involving cyberstalking, online threats, non-consensual sharing of private images, and harassment on social media. The rise of internet use has made digital safety a major gender equality concern.",
  },
  {
    icon: Briefcase,
    title: "Human Trafficking",
    body: "Women and children remain highly vulnerable to trafficking for sexual exploitation and forced labor. Despite strict laws, trafficking networks still operate due to poverty, lack of awareness, and weak enforcement.",
  },
];

const TAGS = ["All", "Rights", "Protection", "Workplace", "Family"];

export function LawsSection() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return LAWS.filter((l) => {
      const matchTag = tag === "All" || l.tag === tag;
      const matchQ =
        !q ||
        l.name.toLowerCase().includes(q.toLowerCase()) ||
        l.code.toLowerCase().includes(q.toLowerCase());
      return matchTag && matchQ;
    });
  }, [q, tag]);

  return (
    <Section id="laws">
      <SectionHeader
        eyebrow="Laws & Policies"
        title={<>The <span className="gradient-text">law explorer</span></>}
        desc="A growing legal framework safeguarding Filipinos against gender-based violence, harassment, and discrimination."
      />

      <div className="glass-strong rounded-3xl p-4 md:p-5 flex flex-col md:flex-row gap-3 items-stretch md:items-center mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search a law or RA number..."
            className="w-full rounded-full bg-white/70 border border-white/80 pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                tag === t
                  ? "gradient-primary text-white shadow-glow"
                  : "bg-white/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((l) => {
            const isOpen = open === l.code;
            return (
              <motion.button
                layout
                key={l.code}
                onClick={() => setOpen(isOpen ? null : l.code)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                className="text-left glass-strong rounded-3xl p-6 hover:shadow-glow transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-white shrink-0 shadow-glow">
                    <l.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider">
                      <span className="text-primary">{l.code}</span>
                      <span className="text-muted-foreground">· {l.year}</span>
                      <span className="ml-auto px-2 py-0.5 rounded-full bg-primary/10 text-primary">{l.tag}</span>
                    </div>
                    <h3 className="font-bold mt-1.5">{l.name}</h3>
                    <p className={`text-sm text-muted-foreground mt-2 leading-relaxed ${isOpen ? "" : "line-clamp-2"}`}>
                      {l.desc}
                    </p>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}`} />
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
        {filtered.length === 0 && (
          <div className="md:col-span-2 text-center py-12 text-muted-foreground">No laws match your search.</div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
            <Shield className="h-5 w-5" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center">
            Gender-Based Violence <span className="gradient-text">in the Philippines</span>
          </h3>
        </div>
        <p className="text-center text-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
          Despite progressive laws, gender-based violence persists in homes, workplaces, public spaces, and online.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {gbvSituations.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-strong rounded-3xl p-6 hover:-translate-y-1 hover:shadow-glow transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
                <h4 className="text-base font-bold">{s.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
