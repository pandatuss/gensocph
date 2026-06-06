import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { FamilySection } from "@/components/sections/FamilySection";

export const Route = createFileRoute("/family")({
  head: () => ({
    meta: [
      { title: "Gender in the Filipino Family" },
      { name: "description", content: "Traditional vs modern Filipino family roles, OFW dynamics, and LGBTQ+ acceptance." },
      { property: "og:title", content: "Gender in the Filipino Family" },
      { property: "og:description", content: "From tradition to a household of equals — how the Filipino family is renegotiating gender." },
    ],
  }),
  component: FamilyPage,
});

function FamilyPage() {
  return (
    <PageShell
      eyebrow="Filipino Family"
      icon={Heart}
      title={<>The first place we learn <span className="gradient-text">who gets to be who</span></>}
      description="Behind every Filipino household is a quiet negotiation of roles, expectations, and love — one that is changing faster than the textbooks can catch up."
    >
      <FamilySection />
    </PageShell>
  );
}
