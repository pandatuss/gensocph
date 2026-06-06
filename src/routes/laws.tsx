import { createFileRoute } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { LawsSection } from "@/components/sections/LawsSection";

export const Route = createFileRoute("/laws")({
  head: () => ({
    meta: [
      { title: "Laws, Bills & Policies on Gender" },
      { name: "description", content: "Searchable explorer of Philippine laws on gender — RA 9710, RA 9262, RA 11313, RA 7877, and more." },
      { property: "og:title", content: "Laws & Policies on Gender in the Philippines" },
      { property: "og:description", content: "A growing legal framework safeguarding Filipinos against gender-based violence, harassment, and discrimination." },
    ],
  }),
  component: LawsPage,
});

function LawsPage() {
  return (
    <PageShell
      eyebrow="Laws & Policies"
      icon={Scale}
      title={<>Every Filipino's <span className="gradient-text">rights, in one place</span></>}
      description="Browse the Republic Acts and pending bills shaping protection, equality, and dignity — from landmark legislation to the proposals still fighting for passage."
    >
      <LawsSection />
    </PageShell>
  );
}
