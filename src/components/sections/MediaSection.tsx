import { motion } from "framer-motion";
import { Section, SectionHeader } from "../Section";
import {
  Tv,
  Clapperboard,
  Megaphone,
  Rainbow,
  AlertTriangle,
  Eye,
  Users,
  Radio,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

const traditionalPoints = [
  "Male characters are commonly represented as strong, dominant, financially capable, and emotionally reserved — often depicted as family providers, action heroes, or authority figures.",
  "Female characters are frequently portrayed as nurturing, emotional, submissive, or dependent, often associated with caregiving and domestic responsibilities.",
  "Television dramas and films, particularly melodramas or teleseryes, have long emphasized these stereotypes — women as self-sacrificing mothers or obedient daughters whose identities revolve around family.",
  "Although these narratives remain common, recent productions have gradually introduced stronger and more independent female characters.",
];

const advertisingPoints = [
  "Women are frequently shown promoting household products, beauty items, and caregiving-related services.",
  "Men are commonly associated with leadership, technology, automobiles, and professional success.",
  "Such portrayals suggest that certain jobs, responsibilities, and behaviors are naturally linked to specific genders.",
  "Studies of Philippine advertising have found persistent gendered patterns across media platforms, reflecting and reinforcing societal expectations.",
];

const lgbtqPoints = [
  "Gay men are commonly portrayed as flamboyant, humorous, or comic relief characters.",
  "Transgender individuals may be depicted through exaggerated or sensationalized portrayals.",
  "Lesbian and bisexual characters receive comparatively less exposure in mainstream media.",
  "Although representation has improved through independent films and advocacy-oriented programs, challenges remain in achieving balanced and authentic portrayals.",
];

const issues = [
  {
    icon: AlertTriangle,
    title: "Gender Stereotyping",
    body: "Media often reinforces rigid ideas about masculinity and femininity, limiting how people understand gender roles and identities. Stereotypes may pressure individuals to conform to socially accepted behaviors rather than express themselves freely.",
  },
  {
    icon: Eye,
    title: "Objectification & Sexualization",
    body: "Women in entertainment are frequently judged based on physical appearance and beauty standards. Some media content presents women as objects of attraction rather than complex individuals, contributing to unrealistic beauty expectations and gender inequality.",
  },
  {
    icon: Users,
    title: "Underrepresentation & Lack of Diversity",
    body: "LGBTQ+ individuals, indigenous communities, people with disabilities, and women in leadership or nontraditional professions are still less visible in major productions. This lack of diversity may contribute to social exclusion and limited public understanding of different lived experiences.",
  },
  {
    icon: Radio,
    title: "Media Influence on Social Attitudes",
    body: "Repeated exposure to gender stereotypes may influence how audiences perceive relationships, occupations, and social expectations. Research suggests that entertainment media can both reinforce harmful norms and serve as a platform for challenging discrimination and promoting equality.",
  },
];

const positiveChanges = [
  "More films, series, and online content now feature empowered women, gender-sensitive narratives, and nuanced LGBTQ+ characters.",
  "Streaming platforms and digital media have created opportunities for independent creators to challenge traditional portrayals and present more inclusive stories.",
  "This shift reflects growing public awareness of gender equality and the importance of respectful and authentic representation.",
];

export function MediaSection() {
  return (
    <Section id="media">
      <SectionHeader
        eyebrow="Media & Entertainment"
        title={<>How Philippine media <span className="gradient-text">tells gender</span></>}
        desc="From traditional stereotypes to emerging inclusive narratives — mass media both reflects and rewrites the Filipino gender script."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-3xl p-8 md:p-10 mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
            <Tv className="h-5 w-5" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold">Overview</h3>
        </div>
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
          The Philippine entertainment industry — including television, film, advertising, music, and digital media —
          plays a significant role in shaping public understanding of gender roles and identities. Mass media does not
          merely entertain; it influences social attitudes, behaviors, and cultural expectations regarding masculinity,
          femininity, and gender diversity.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
              <Clapperboard className="h-5 w-5" />
            </div>
            <h3 className="text-lg md:text-xl font-bold">Traditional Gender Portrayals</h3>
          </div>
          <ul className="space-y-3">
            {traditionalPoints.map((pt, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/70" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-strong rounded-3xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
              <Megaphone className="h-5 w-5" />
            </div>
            <h3 className="text-lg md:text-xl font-bold">Gender Representation in Advertising</h3>
          </div>
          <ul className="space-y-3">
            {advertisingPoints.map((pt, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/70" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-3xl p-6 md:p-8 mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
            <Rainbow className="h-5 w-5" />
          </div>
          <h3 className="text-lg md:text-xl font-bold">LGBTQ+ Representation in Philippine Media</h3>
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          The Philippines has relatively visible LGBTQ+ representation compared to some neighboring countries,
          particularly through comedy, television hosting, and entertainment personalities. However, representation
          often remains limited and stereotypical.
        </p>
        <ul className="space-y-3">
          {lgbtqPoints.map((pt, i) => (
            <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/70" />
              {pt}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h3 className="text-xl md:text-2xl font-bold text-center mb-2">
          Issues Surrounding <span className="gradient-text">Gender in Mass Media</span>
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
          Several gender-related issues continue to affect Philippine mass media today.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {issues.map((issue, i) => (
            <motion.div
              key={issue.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-strong rounded-3xl p-6 hover:-translate-y-1 hover:shadow-glow transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <issue.icon className="h-4 w-4" />
                </div>
                <h4 className="text-base font-bold">{issue.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{issue.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-3xl p-6 md:p-8 mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
            <TrendingUp className="h-5 w-5" />
          </div>
          <h3 className="text-lg md:text-xl font-bold">Emerging Positive Changes</h3>
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          Despite longstanding issues, Philippine entertainment is gradually changing. More films, series, and online
          content now feature empowered women, gender-sensitive narratives, and nuanced LGBTQ+ characters.
        </p>
        <ul className="space-y-3">
          {positiveChanges.map((pt, i) => (
            <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary/70" />
              {pt}
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-lavender/60 via-purple-50 to-indigo-50 border border-white/70"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-white">
            <MessageCircle className="h-5 w-5" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold">Conclusion</h3>
        </div>
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
          The Philippine entertainment industry strongly influences how society understands gender. While traditional
          media has often reinforced stereotypes and unequal portrayals, recent developments show increasing efforts
          toward inclusivity and gender sensitivity. Promoting fair and diverse representation in mass media is
          essential because entertainment not only mirrors society but also shapes attitudes and cultural values.
        </p>
      </motion.div>
    </Section>
  );
}
