import { motion } from "framer-motion";
import { Section, SectionHeader } from "../Section";
import { TrendingUp, Banknote, Users2, Building2, ArrowUpRight, AlertTriangle, Scale, BookOpen } from "lucide-react";

const bars = [
  { label: "Labor Force Participation (2025)", male: 72.5, female: 50.5 },
  { label: "Tertiary Education Completion", male: 28, female: 36 },
  { label: "Managerial Positions", male: 49, female: 51 },
  { label: "Unpaid Care Work (hours/wk)", male: 12, female: 28 },
];

export function LaborSection() {
  return (
    <Section id="labor">
      <SectionHeader
        eyebrow="Labor Market"
        title={<>Work, <span className="gradient-text">wages, and the gender gap</span></>}
        desc="Filipino women out-earn men in formal employment — yet lower workforce participation and unequal conditions reveal a more complex story."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-3xl p-8 mb-10"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Labor Force Participation Rate (2025)</h3>
            <p className="text-sm text-muted-foreground">
              The proportion of the population ages 15 and older that is economically active.
              Since 1990, female labor force participation has increased, and the gap between men
              and women in the Philippines is lower than in the lower-middle-income group average.
            </p>
            <p className="text-xs text-muted-foreground mt-3">Source: World Bank Gender Data</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-primary/10 p-5 text-center">
              <div className="text-3xl font-bold text-primary">72.5%</div>
              <div className="text-xs font-medium mt-1">Male LFPR</div>
            </div>
            <div className="rounded-2xl bg-lilac/40 p-5 text-center">
              <div className="text-3xl font-bold text-primary">50.5%</div>
              <div className="text-xs font-medium mt-1">Female LFPR</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-strong rounded-3xl p-7"
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-bold">Gender comparison dashboard</h3>
              <p className="text-xs text-muted-foreground">Indicative figures — PSA, ILO 2023–2025</p>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-primary" /> Female</span>
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-primary-glow/70" /> Male</span>
            </div>
          </div>
          <div className="space-y-5">
            {bars.map((b, i) => (
              <div key={b.label}>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span>{b.label}</span>
                  <span className="text-muted-foreground">F {b.female} · M {b.male}</span>
                </div>
                <div className="space-y-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.female}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-2.5 rounded-full gradient-primary"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.male}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.1 }}
                    className="h-2.5 rounded-full bg-primary-glow/60"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 content-start">
          {[
            { icon: Users2, label: "Female Workforce", v: "50.5%", note: "Participation rate, 2025 (World Bank)" },
            { icon: Banknote, label: "Gender Pay Gap", v: "~14%", note: "Median earnings difference" },
            { icon: TrendingUp, label: "Women Managers", v: "51%", note: "Highest in ASEAN" },
            { icon: Building2, label: "Women-led MSMEs", v: "62%", note: "Of micro-enterprises" },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-white shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-bold leading-none">{c.v}</div>
                <div className="text-xs font-medium mt-1">{c.label}</div>
                <div className="text-[10px] text-muted-foreground">{c.note}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 grid lg:grid-cols-2 gap-6"
      >
        <div className="glass-strong rounded-3xl p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <ArrowUpRight className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold">The Wage Paradox</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Filipino women out-earn men in formal, full-time employment — but fewer are in the workforce overall.
            As of August 2024, women receive an average monthly wage of{" "}
            <strong className="text-foreground">₱22,236</strong> compared to{" "}
            <strong className="text-foreground">₱21,009</strong> for men, a{" "}
            <strong className="text-foreground">5.8% difference</strong> in favor of women.
          </p>
          <div className="rounded-2xl bg-lavender/60 p-5 border border-primary/10">
            <BookOpen className="h-4 w-4 text-primary mb-2" />
            <p className="text-sm italic text-foreground/90">
              "Is there a gender wage gap in the Philippines? The short answer is yes, but it does not look quite like the conventional picture."
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              — Dr. Rogelio Alicor Panao, UP Diliman & INQUIRER data scientist
            </p>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Source: INQUIRER — Filipino Women Out-Earn Men, but Fewer Are in the Workplace
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/10 text-destructive">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold">The Hidden Disadvantage</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            The skewed average masks harsh realities for many women. While high-earning, college-educated women in
            executive, professional, and technical roles pull up the statistical average, women trapped in low-skill
            agriculture, manufacturing, or domestic labor suffer intense wage deficits and worse working conditions
            than their male counterparts.
          </p>
          <div className="space-y-3">
            {[
              "Low-skill agriculture & manufacturing pay women far less",
              "Domestic workers face minimal labor protections",
              "Unpaid care work falls disproportionately on women",
              "Workforce entry barriers remain higher for women",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <Scale className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-5">Source: World Bank Blogs</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-5">
          Closing <span className="gradient-text">the gap</span>
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          The Philippine labor market shows both progress and persistent inequality. While women lead in education
          and managerial parity, low female labor force participation — about 50% for women versus 71% for men —
          remains a key driver of income disparity. <strong className="text-foreground">True gender equity requires addressing not just wages, but also workforce access, working conditions, and the unequal burden of unpaid care.</strong>
        </p>
      </motion.div>
    </Section>
  );
}
