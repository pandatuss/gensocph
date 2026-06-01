import { motion } from "framer-motion";
import { Section, SectionHeader } from "../Section";
import { Plane, Rainbow, Users, Globe2, Heart, Sparkles } from "lucide-react";

export function FamilySection() {
  const compare = [
    {
      side: "Traditional",
      color: "from-rose-100 to-purple-100",
      points: [
        "Father as sole breadwinner",
        "Mother as ilaw ng tahanan (light of the home)",
        "Strict gender roles for children",
        "Extended family central",
        "Sons historically preferred, especially as firstborn",
        "Women defined by mahinhin (modesty) and domesticity",
        "Grandparents (lola/lolo) live with the family",
        "Daughters expected to do household chores",
      ],
    },
    {
      side: "Modern",
      color: "from-purple-100 to-indigo-100",
      points: [
        "Dual-income partnerships",
        "Shared parenting & chores",
        "Flexible identities accepted",
        "Nuclear, blended, chosen families",
        "Women as household financial leaders",
        "Men more involved in childcare",
        "Gen Z & Millennials openly challenging gender norms",
        "LGBTQ+ members increasingly welcomed in families",
      ],
    },
  ];

  const stats = [
    { figure: "2.16M", label: "OFWs abroad", source: "PSA 2024" },
    { figure: "55.6%", label: "Female OFWs", source: "PSA 2023" },
    { figure: "65%", label: "Support same-sex unions", source: "SWS 2025" },
    { figure: "3.9", label: "Avg. household size", source: "PSA 2024" },
    { figure: "$38.34B", label: "OFW remittances (2024)", source: "PSA 2024" },
    { figure: "12%", label: "Households with OFW member", source: "PSA 2024" },
  ];

  const values = [
    { t: "Utang na loob", d: "Children, especially daughters, feel obligated to repay parents through lifelong care." },
    { t: "Hiya", d: "Shame drives conformity to expected gender behavior." },
    { t: "Pakikisama", d: "Group harmony discourages openly challenging traditional roles." },
  ];

  const timeline = [
    { era: "Pre-colonial PH", d: "Women as babaylans, respected spiritual leaders." },
    { era: "Spanish Era (1565–1898)", d: "Catholicism introduces the Maria Clara ideal; women confined to home and virtue." },
    { era: "American Era (1900s)", d: "Public education opens for women; workforce entry begins." },
    { era: "1970s", d: "OFW program launched; women begin migrating for work." },
    { era: "1986", d: "Corazon Aquino becomes first female president." },
    { era: "1988", d: "OFWs named Bagong Bayani — most are women." },
    { era: "2000s", d: "Women outnumber men in Philippine universities." },
    { era: "2025", d: "65% of Filipinos support same-sex unions; gender roles increasingly shared." },
  ];

  return (
    <Section id="family">
      <SectionHeader
        eyebrow="The Filipino Family"
        title={<>Gender in a <span className="gradient-text">Filipino Family</span></>}
        desc="The family remains the most powerful site where gender is taught, performed, and — increasingly — renegotiated."
      />

      <div className="grid lg:grid-cols-2 gap-6 mb-16">
        {compare.map((c, i) => (
          <motion.div
            key={c.side}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`rounded-3xl p-7 bg-gradient-to-br ${c.color} border border-white/70 backdrop-blur-xl`}
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-primary/80 mb-2">
              {i === 0 ? "Then" : "Now"}
            </span>
            <h3 className="text-2xl font-bold mb-4">{c.side}</h3>
            <ul className="space-y-2.5">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-1.5 h-2 w-2 rounded-full gradient-primary shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
          The Filipino family <span className="gradient-text">by the numbers</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong rounded-2xl p-5 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{s.figure}</div>
              <div className="text-sm font-medium text-foreground/80">{s.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.source}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-3xl p-7 md:p-10 mb-10"
      >
        <div className="flex items-center gap-3 mb-5">
          <Users className="h-7 w-7 text-primary" />
          <h3 className="text-2xl md:text-3xl font-bold">Roles of Women & Men Today</h3>
        </div>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            Traditionally, the Filipino home was divided clearly: the father worked outside while the mother
            was the <em>ilaw ng tahanan</em>. She cooked, cleaned, raised children, and managed the
            household. The father was the unquestioned authority figure.
          </p>
          <p>
            Today, that is shifting. Filipino women now pursue higher education at higher rates than men and
            in many households have become the primary financial providers. Filipino fathers are increasingly
            expected to share domestic duties — cooking, childcare, and emotional support — roles once seen
            as exclusively feminine.
          </p>
          <p>
            Research shows that mothers in the Philippines tend to hold more modern gender attitudes than
            fathers, who often still lean toward traditional, authoritarian parenting. However, both strongly
            agree on one thing: respect and obedience from children — a deeply rooted Filipino value.
          </p>
        </div>

        <div className="mt-7">
          <h4 className="text-sm font-bold tracking-wider uppercase text-primary mb-4">
            Key cultural values shaping these roles
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-white/50 border border-white/70 p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h5 className="font-bold italic">{v.t}</h5>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl p-7 md:p-10 mb-10 bg-gradient-to-br from-sky-100 via-indigo-50 to-purple-100 border border-white/70"
      >
        <div className="flex items-center gap-3 mb-5">
          <Plane className="h-7 w-7 text-primary" />
          <h3 className="text-2xl md:text-3xl font-bold">OFW Family Setup</h3>
        </div>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            One of the most dramatic reshapings of gender in the Filipino family comes not from within the
            home — but from leaving it.
          </p>
          <p>
            Since the 1970s, millions of Filipinos have gone abroad for work. What makes this uniquely
            gendered is who is leaving: women now make up about <strong>55.6%</strong> of OFWs, mostly working
            as domestic workers, caregivers, and nurses in Saudi Arabia, UAE, Kuwait, and Hong Kong.
          </p>
          <p className="font-medium">When a mother leaves to work abroad, the entire family reorganizes:</p>
          <ul className="space-y-2 pl-1">
            {[
              "Fathers take on caregiving roles traditionally held by mothers",
              "Grandmothers and aunts become primary caregivers for children",
              "Non-migrant mothers (when the father is the OFW) become the sole decision-makers and emotional anchors at home",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-2 w-2 rounded-full gradient-primary shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <p>
            Despite being apart, Filipino families maintain strong bonds through video calls, remittances,
            and balikbayan boxes. Former President Corazon Aquino called OFWs{" "}
            <strong>"Bagong Bayani"</strong> — New Heroes — in 1988. OFW remittances reached{" "}
            <strong>$38.34 billion</strong> in 2024, making up nearly 9% of the national GDP.
          </p>
          <p>
            However, the "hero" label also masks a harder truth: many women OFWs face exploitation,
            loneliness, and the emotional cost of raising children from thousands of miles away.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl p-7 md:p-10 mb-16 bg-gradient-to-br from-pink-100 via-rose-50 to-amber-100 border border-white/70"
      >
        <div className="flex items-center gap-3 mb-5">
          <Rainbow className="h-7 w-7 text-primary" />
          <h3 className="text-2xl md:text-3xl font-bold">LGBTQ+ Family Acceptance</h3>
        </div>
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            The Filipino family's relationship with LGBTQ+ members is shaped by two very different forces:
            Catholic tradition and a uniquely Filipino cultural openness.
          </p>
          <p className="font-medium">Uniquely Filipino terms exist for gender-diverse identities:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/60 border border-white/70 p-5">
              <h5 className="font-bold italic mb-1">Bakla</h5>
              <p className="text-sm text-muted-foreground">
                Derived from <em>babae</em> (woman) + <em>lalaki</em> (man); the most recognized term for gay
                men in the Philippines.
              </p>
            </div>
            <div className="rounded-2xl bg-white/60 border border-white/70 p-5">
              <h5 className="font-bold italic mb-1">Tomboy</h5>
              <p className="text-sm text-muted-foreground">
                A term used for lesbian women, reflecting masculine gender expression.
              </p>
            </div>
          </div>
          <p>
            In many families, LGBTQ+ members — particularly bakla — often quietly take on the role of{" "}
            <em>tagasalo</em>: the family member who absorbs everyone's emotional and financial burdens,
            becoming the silent provider and caregiver.
          </p>
          <p>
            A 2025 SWS survey found <strong>65% of Filipinos</strong> now support same-sex unions — a major
            shift in a predominantly Catholic nation. Yet the Philippines still lacks legal recognition of
            same-sex partnerships, and many LGBTQ+ Filipinos still face rejection in conservative or rural
            families.
          </p>
          <p>
            The tension between <em>hiya</em>, religious values, and genuine family love creates a unique
            dynamic — where a family may privately accept an LGBTQ+ member but stay publicly silent to
            preserve social harmony (<em>pakikisama</em>).
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <Globe2 className="h-6 w-6 text-primary" />
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            Then vs. Now — A <span className="gradient-text">Visual Timeline</span>
          </h3>
        </div>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Key shifts in Filipino family gender roles across the centuries.
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-px" />
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <motion.div
                key={t.era}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  i % 2 === 0 ? "" : "md:[&>div]:col-start-2"
                }`}
              >
                <span className="absolute left-4 md:left-1/2 top-5 h-3 w-3 -translate-x-1/2 rounded-full gradient-primary ring-4 ring-background" />
                <div
                  className={`ml-12 md:ml-0 glass-strong rounded-2xl p-5 ${
                    i % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5" style={{ justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                    <Heart className="h-4 w-4 text-primary md:hidden" />
                    <h4 className="font-bold text-primary">{t.era}</h4>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{t.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
