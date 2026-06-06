import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { GADSection } from "@/components/sections/GADSection";

export const Route = createFileRoute("/gad")({
  head: () => ({
    meta: [
      { title: "Gender & Development" },
      { name: "description", content: "The GAD framework in action: WID vs GAD, timeline, statistics, and current status in the Philippines." },
      { property: "og:title", content: "Gender & Development" },
      { property: "og:description", content: "How the Philippines mainstreams gender across every sector and budget line." },
    ],
  }),
  component: GADPage,
});

function GADPage() {
  return (
    <PageShell
      eyebrow="Gender & Development"
      icon={Sparkles}
      title={<>Equality, <span className="gradient-text">written into every budget line</span></>}
      description="See how a decades-old framework quietly reshaped Philippine governance — turning gender from an afterthought into a measurable commitment across agencies."
    >
      <GADSection />
    </PageShell>
  );
}
