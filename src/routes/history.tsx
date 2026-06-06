import { createFileRoute } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HistorySection } from "@/components/sections/HistorySection";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History of Gender in the Philippine" },
      { name: "description", content: "An interactive timeline of gender in the Philippines, from pre-colonial babaylan to the contemporary era." },
      { property: "og:title", content: "History of Gender in the Philippines" },
      { property: "og:description", content: "From egalitarian baranganic societies to today's contested but progressive landscape." },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <PageShell
      eyebrow="History"
      icon={Landmark}
      title={<>Centuries of <span className="gradient-text">change, told in moments</span></>}
      description="Trace how Filipino ideas about gender have shifted across every era — from babaylan-led communities and colonial upheavals to martial-law resistance and the modern reform movement."
    >
      <HistorySection />
    </PageShell>
  );
}
