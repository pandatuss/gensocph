import { motion } from "framer-motion";
import { Section, SectionHeader } from "../Section";
import {
  GraduationCap,
  BookOpen,
  Users,
  Lightbulb,
  Layers,
  Globe,
  ArrowRight,
  Scale,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

const challenges = [
  {
    icon: Globe,
    title: "Colonial Legacies",
    desc: "Barriers largely beyond the control of individual institutions — shaped by colonial gender values that continue to promote a hierarchy of genders with men rated higher than women.",
  },
  {
    icon: Layers,
    title: "Institutional Structure",
    desc: "Arising from the way institutions are structured and managed — addressable through more inclusive approaches and better systems and practices.",
  },
  {
    icon: Scale,
    title: "Systemic Factors",
    desc: "Linked to structural or institutional factors that need to be tackled by higher education as a system, not by individual HEIs alone.",
  },
];

const findings = [
  {
    icon: BookOpen,
    title: "Policy vs. Practice Gap",
    body: "Although many higher education institutions (HEIs) in the Philippines have GAD policies in place, there are huge variations as to how the said policies are institutionalized. These policies are frequently tainted by discriminatory practices brought about by deeply-seated social norms.",
    cite: "Perez et al., 2025",
  },
  {
    icon: Users,
    title: "Gendered Barriers to Research",
    body: "Academic women in teaching-intensive higher education institutions confront the intersection of several structural barriers to full participation as equal human beings in the academy. They are thwarted in their career aspirations by a variety of gendered barriers.",
    cite: "Rosario et al., 2025",
  },
  {
    icon: Lightbulb,
    title: "Colonial Gender Regime",
    body: "The gender regime in higher education is shaped by colonial gender values which continue to promote a hierarchy of genders with men rated higher than women. Incorporating GAD approaches is a strategic imperative to create conditions that promote gender equity.",
    cite: "Rodriguez, 2025; Hernandez et al., 2021",
  },
  {
    icon: ShieldCheck,
    title: "Inclusivity Beyond Gender",
    body: "Inclusivity extends to socioeconomic status, ethnicity, and sexual orientation — impacting access to resources and enabling students and faculty alike to engage in inclusive higher education environments that value diversity and foster positive experiences.",
    cite: "Raton-Hibanada et al., 2025",
  },
  {
    icon: GraduationCap,
    title: "Pedagogical Reforms Needed",
    body: "Current pedagogical practices may need to be revisited in order to incorporate contemporary gender perspectives that can enhance effective teaching for inclusion. Gender and cultural teachings must be woven into teaching and learning in the Philippines.",
    cite: "Tagaza & Manalansan, 2025",
  },
];

export function AcademeSection() {
  return (
    <Section id="academe">
      <SectionHeader
        eyebrow="In the Academe"
        title={<>Schools as <span className="gradient-text">battlegrounds and bridges</span></>}
        desc="Equity, career advancement, and inclusiveness for both faculty and students have become focal issues in Philippine higher education."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-3xl p-8 md:p-10 mb-10"
      >
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
          A growing body of research highlights the impact of gender policies in educational settings —
          exposing both progress and challenges in higher education toward promoting gender equality
          and incorporating gender into higher education policies and practices. Closing the gap
          between what is written in GAD policies and actual practices in HEIs remains a huge challenge,
          especially in promoting the career advancement of women in academia.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h3 className="text-xl md:text-2xl font-bold text-center mb-2">
          Three Core <span className="gradient-text">Challenge Themes</span>
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
          Higher education institutions and their managers must address challenges broadly grouped under three main themes.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-3xl p-6 hover:-translate-y-1 hover:shadow-glow transition"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-white shadow-glow mb-4">
                <c.icon className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold mb-2">{c.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h3 className="text-xl md:text-2xl font-bold text-center mb-2">
          Key <span className="gradient-text">Research Findings</span>
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
          Insights drawn from recent Philippine academic literature on gender in higher education.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {findings.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-strong rounded-3xl p-6 hover:-translate-y-1 hover:shadow-glow transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <f.icon className="h-4 w-4" />
                </div>
                <h4 className="text-base font-bold">{f.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{f.body}</p>
              <div className="flex items-center gap-1.5 text-xs text-primary/80 font-medium">
                <ArrowRight className="h-3 w-3" />
                <span>{f.cite}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-lavender/60 via-purple-50 to-indigo-50 border border-white/70"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold">The Path Forward</h3>
        </div>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            Implementation of gender policies in higher education has recently become an important area of discourse
            among different stakeholders in Philippine higher education. However, a number of emerging issues must be
            tackled by institutions as they continue to implement gender policies.
          </p>
          <p>
            More importantly, these institutions must not only critique and evaluate existing programs for gender and
            development but also work at reforming these in order to cope with changing circumstances encountered by
            society today. Creating an inclusive learning environment benefits not only women but the entire academic
            community.
          </p>
          <p className="font-medium">
            There is a need for increased discourse on how to develop higher education institutions that are inclusive
            to different learning styles of various individuals, regardless of sex, cultural background, socioeconomic
            status, among other factors.
          </p>
        </div>
        <div className="mt-6 rounded-2xl bg-white/60 border border-white/70 p-5">
          <p className="text-sm text-foreground/80 leading-relaxed">
            The challenge now for all of us who are involved and committed to these issues in higher education is to
            work together in making sure that the commitments that are already in place translate into reality, and that
            all the practices and actions in higher education will promote and support the values of diversity and
            equality — bringing about improvements and positive changes for all faculty and students, particularly for
            women in higher education.
          </p>
          <p className="text-xs text-muted-foreground mt-3 italic">
            — Synthesized from Raton-Hibanada et al., 2025
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
