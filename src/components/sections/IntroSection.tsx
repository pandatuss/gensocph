import { Section, SectionHeader } from "../Section";
import { motion } from "framer-motion";
import { BookOpen, Sparkles, Users, Heart } from "lucide-react";

export function IntroSection() {
  const pillars = [
    { icon: BookOpen, t: "Knowledge", d: "Foundational concepts of sex, gender, identity, and expression contextualized for the Philippines." },
    { icon: Sparkles, t: "Awareness", d: "Recognizing how culture, religion, and colonial history shape today's gender norms." },
    { icon: Users, t: "Inclusion", d: "Centering women, LGBTQ+ Filipinos, and intersectional voices long pushed to the margins." },
    { icon: Heart, t: "Action", d: "Translating insight into respectful behavior, policy advocacy, and community change." },
  ];
  return (
    <Section id="introduction">
      <SectionHeader
        eyebrow="Introduction"
        title={<>Gender, equality, and the <span className="gradient-text">Filipino story</span></>}
        desc="The Philippines holds a unique place in Asia — historically egalitarian, colonially reshaped, and today a regional leader in gender progress and active reform."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.08 }}
            className="glass-strong rounded-3xl p-6 hover:-translate-y-1.5 hover:shadow-glow transition"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-white shadow-glow mb-4">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold">{p.t}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
