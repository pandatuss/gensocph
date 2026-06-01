import { motion } from "framer-motion";
import { Section, SectionHeader } from "../Section";
import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Wallet, Users2, Sparkles } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let s = 0;
          const step = Math.max(1, Math.floor(to / 40));
          const t = setInterval(() => {
            s += step;
            if (s >= to) {
              setVal(to);
              clearInterval(t);
            } else setVal(s);
          }, 30);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const POLICY_TIMELINE = [
  { year: "1987", title: "1987 Constitution", body: "Enshrines gender equality under the law (Art. II Sec. 14).", src: "1987 Philippine Constitution, Art. II §14" },
  { year: "1992", title: "RA 7192", body: "Women in Development and Nation Building Act passed.", src: "Republic Act 7192 (1992)" },
  { year: "1995", title: "Beijing Platform", body: "PH commits to gender mainstreaming globally.", src: "UN Women; PCW" },
  { year: "2009", title: "Magna Carta of Women", body: "RA 9710 mandates a 5% GAD budget for all agencies.", src: "Republic Act 9710 (2009)" },
  { year: "2025", title: "25th Globally", body: "PH ranks #1 in SE Asia in the WEF Gender Gap Index.", src: "UNDP HDR 2025; PCW Annual Report" },
];

const STATS = [
  { v: 5, s: "%", label: "Minimum GAD budget required of all government agencies", note: "RA 9710" },
  { v: 25, s: "th", label: "PH rank in the Global Gender Gap Report 2025", note: "WEF" },
  { v: 79, s: "/100", label: "PH Gender Gap Index score (0.79 of 1.00)", note: "WEF 2025" },
  { v: 1, s: "st", label: "In Southeast Asia for gender equality", note: "WEF 2025" },
];

const PRACTICE = [
  { title: "GAD budget", body: "Every national agency, LGU, and state university must allocate at least 5% of its total budget to GAD programs — funding gender-sensitivity training, women's safe spaces, and crisis desks." },
  { title: "GAD Focal Point System (GFPS)", body: "Every agency has a designated GAD Focal Point team responsible for planning, implementing, and monitoring GAD programs — keeping it active, not just on paper." },
  { title: "Gender mainstreaming", body: "Integrating a gender perspective into every government program — from road-building (women's safety and mobility) to agriculture (equal access to loans and training)." },
  { title: "Sex-disaggregated data", body: "The PSA is mandated to collect and publish statistics broken down by sex so policymakers can locate gender gaps and measure progress over time." },
];

const CHALLENGES = [
  { icon: Wallet, title: "GAD budget underspending", body: "Many LGUs misidentify activities as GAD-compliant or simply underspend their 5% budget. COA audits cite persistent non-compliance across local units.", src: "PCW; Commission on Audit (COA) Reports" },
  { icon: AlertTriangle, title: "SOGIE Equality Bill still pending", body: "Filed in every Congress since 2007. LGBTQ+ Filipinos remain without national anti-discrimination protection — meaning GAD does not yet fully cover gender-diverse people.", src: "Philippine Congress records; Rainbow Rights PH; SWS 2025" },
  { icon: Users2, title: "Underrepresentation in leadership", body: "Women hold only ~30% of elected local positions and 29% of Congress seats. Equal political representation remains an unfinished goal.", src: "COMELEC; PSA Women and Men in the Philippines 2025" },
];

function Source({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-xs text-muted-foreground/80 italic">Source: {children}</p>
  );
}

export function GADSection() {
  return (
    <Section id="gad">
      <SectionHeader
        eyebrow="Gender & Development"
        title={<>Gender and Development <span className="gradient-text">in the Philippines</span></>}
        desc="From policy to practice — how the Philippines has worked to make development equal for women, men, and everyone in between."
      />

      <div className="max-w-4xl mx-auto mb-16 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-border rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-2xl font-bold mb-3">What is GAD?</h3>
          <p className="text-muted-foreground leading-relaxed">
            Gender and Development (GAD) is a framework that ensures development policies,
            programs, and budgets benefit women and men equally. Unlike earlier approaches that
            simply added women into existing systems, GAD examines the root causes of gender
            inequality and works to change the structures that sustain it.
          </p>
          <Source>Philippine Commission on Women (PCW); NEDA GAD Framework</Source>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-border rounded-2xl p-6 md:p-8"
        >
          <p className="text-muted-foreground leading-relaxed">
            In the Philippines, GAD is mandated by law.{" "}
            <strong className="text-foreground">Republic Act 9710 — the Magna Carta of Women (2009)</strong>{" "}
            requires all government agencies and LGUs to allocate at least{" "}
            <strong className="text-foreground">5% of their annual budget</strong> for GAD programs.
          </p>
          <Source>Republic Act 9710 (2009); PCW Implementation Report 2026</Source>
        </motion.div>
      </div>

      <div className="mb-20">
        <h3 className="text-sm font-semibold mb-6 flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Distinction between WID and GAD
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-border rounded-2xl p-6"
          >
            <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-2">Old approach</div>
            <h4 className="text-xl font-bold mb-2">Women in Development (WID)</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Added women into existing development systems without questioning power structures.
              Treated women as recipients, not agents of change.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-primary/40 rounded-2xl p-6"
          >
            <div className="text-xs font-semibold tracking-wider uppercase text-primary mb-2">Current approach</div>
            <h4 className="text-xl font-bold mb-2">Gender &amp; Development (GAD)</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforms institutions, laws, and cultural norms. Recognizes unequal power as the
              root problem. Used by the PH government, UN, and international development bodies.
            </p>
          </motion.div>
        </div>
        <div className="mt-6 max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            <Sparkles className="inline h-4 w-4 text-primary mr-1.5" />
            <strong className="text-foreground">Why it matters:</strong> The shift from WID to GAD
            meant the Philippine government stopped asking "how do we help women?" and started
            asking "why are women disadvantaged, and how do we change the system?"
          </p>
          <p className="mt-3 text-xs text-muted-foreground/80 italic">
            Source: Moser, C. (1993). Gender Planning and Development. Routledge; PCW GAD Resource Center
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-sm font-semibold mb-6 flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          How GAD became a policy — timeline
        </h3>
        <div className="grid md:grid-cols-5 gap-4">
          {POLICY_TIMELINE.map((g, i) => (
            <motion.div
              key={g.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-4 bg-white border border-border hover:-translate-y-1 transition"
            >
              <div className="text-sm font-bold text-primary">{g.year}</div>
              <div className="text-base font-semibold mt-1">{g.title}</div>
              <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{g.body}</div>
              <div className="text-[10px] text-muted-foreground/70 mt-2 italic">{g.src}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="text-sm font-semibold mb-6 flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Key statistics
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((c) => (
            <div key={c.label} className="bg-white border border-border rounded-2xl p-6">
              <div className="text-4xl font-bold gradient-text">
                <Counter to={c.v} suffix={c.s} />
              </div>
              <div className="text-xs text-muted-foreground mt-2 leading-snug">{c.label}</div>
              <div className="text-[10px] text-muted-foreground/70 mt-2 italic">{c.note}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground/80 italic text-center">
          Sources: World Economic Forum Global Gender Gap Report 2025; RA 9710
        </p>
      </div>

      <div className="mb-20">
        <h3 className="text-sm font-semibold mb-6 flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          How GAD works in practice
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {PRACTICE.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white border border-border rounded-2xl p-6"
            >
              <h4 className="text-lg font-bold mb-2">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-sm font-semibold mb-6 flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Persistent challenges in GAD implementation
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {CHALLENGES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-border rounded-2xl p-6"
            >
              <c.icon className="h-5 w-5 text-primary mb-3" />
              <h4 className="text-base font-bold mb-2">{c.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <Source>{c.src}</Source>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Where the Philippines <span className="gradient-text">stands today</span>
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          The Philippines is a regional leader in gender equality — ranking 25th globally and first
          in Southeast Asia in the 2025 WEF Gender Gap Index. Strong educational parity and women's
          workforce participation drive this ranking. Yet persistent gaps in political
          representation, LGBTQ+ protections, and GAD budget compliance remind us that a high
          ranking does not mean the work is done. <strong className="text-foreground">GAD is an
          ongoing commitment, not a checklist.</strong>
        </p>
      </motion.div>
    </Section>
  );
}
