import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, Facebook, Instagram, Linkedin, Github, Twitter, Mail, ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";
import { PageShell } from "@/components/PageShell";
import { MEMBERS, type MemberSocial } from "@/lib/site-data";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "Members" },
      { name: "description", content: "Meet the team behind Gender & Development Philippines — researchers, designers, and developers building a modern learning platform." },
      { property: "og:title", content: "Members — Gender & Development PH" },
      { property: "og:description", content: "The people building a modern, inclusive learning platform for gender and developent in the Philippines." },
    ],
  }),
  component: MembersPage,
});

const SOCIAL_ICON: Record<MemberSocial["platform"], ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  email: Mail,
};

function MembersPage() {
  return (
    <PageShell
      eyebrow="Members"
      icon={Users}
      title={<>The people behind <span className="gradient-text">Gender & Development PH</span></>}
      description="Get to know the researchers, designers, and developers who brought this educational platform on gender and development in the Philippines to life."
    >

      <section className="relative py-16 md:py-24">

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-indigo-300/30 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.map((m, i) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative overflow-hidden rounded-3xl glass-strong p-6 shadow-soft transition-shadow hover:shadow-glow"
              >

                <div className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${m.accent} opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-50`} />

                <div className="relative mb-5 flex items-center gap-4">
                  <div className={`relative grid shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br ${m.accent} text-white text-xl font-bold shadow-glow ${
                    m.name === "Catherine Ellisha Lois T. Bucud" ? "h-[68px] w-[68px]" : "h-16 w-16"
                  }`}>
                    {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={
                        m.name === "Sam Symon S. Gonzales" || m.name === "Catherine Ellisha Lois T. Bucud"
                          ? { objectPosition: "center 25%" }
                          : undefined
                      }
                    />
                    ) : (
                      m.initials
                    )}
                    <span className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground break-words">{m.name}</h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-primary">{m.role}</p>
                  </div>
                </div>

                <p className="relative text-sm leading-relaxed text-muted-foreground">{m.bio}</p>

                <div className="relative mt-6 flex items-center justify-between gap-3">
                  <ul className="flex items-center gap-2">
                    {m.socials.map((s) => {
                      const Icon = SOCIAL_ICON[s.platform];
                      return (
                        <li key={s.platform} className="group/social relative">
                          <a
                            href={s.href}
                            target={s.platform === "email" ? undefined : "_blank"}
                            rel={s.platform === "email" ? undefined : "noopener noreferrer"}
                            aria-label={s.label}
                            className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110 hover:shadow-glow opacity-80 group-hover:opacity-100"
                          >
                            <Icon className="h-4 w-4" />
                          </a>
                          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full glass-strong px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground opacity-0 transition-opacity duration-200 group-hover/social:opacity-100">
                            {s.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <a
                    href={`mailto:${m.email}`}
                    className="inline-flex items-center gap-1.5 rounded-full gradient-primary px-3.5 py-1.5 text-xs font-semibold text-white shadow-glow transition-transform hover:scale-105"
                  >
                    Contact
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-3xl glass-strong p-10 text-center shadow-soft"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Want to <span className="gradient-text">collaborate</span> with us?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm md:text-base text-muted-foreground">
              We're always open to researchers, educators, and advocates who care about gender equity in the Philippines.
            </p>
            <a
              href="mailto:team@gendersociety.ph"
              className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-2.5 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
