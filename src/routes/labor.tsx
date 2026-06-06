import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { LaborSection } from "@/components/sections/LaborSection";

export const Route = createFileRoute("/labor")({
  head: () => ({
    meta: [
      { title: "Gender in the Philippine Labor Market" },
      { name: "description", content: "Workforce participation, wages, and the gender gap across the Philippine labor market." },
      { property: "og:title", content: "Gender in the Philippine Labor Market" },
      { property: "og:description", content: "Work, wages, and the gender gap — interactive dashboards from PSA and ILO data." },
    ],
  }),
  component: LaborPage,
});

function LaborPage() {
  return (
    <PageShell
      eyebrow="Labor Market"
      icon={Briefcase}
      title={<>The Filipino workforce, <span className="gradient-text">seen through a gender lens</span></>}
      description="Beyond the headlines about parity sit harder truths — invisible care work, uneven participation, and the slow climb toward an economy that values everyone equally."
    >
      <LaborSection />
    </PageShell>
  );
}
