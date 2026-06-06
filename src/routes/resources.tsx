import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ResourcesSection } from "@/components/sections/ResourcesSection";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "References & Further Reading" },
      { name: "description", content: "Curated government, academic, international, and advocacy sources on Philippine gender." },
      { property: "og:title", content: "References & Further Reading" },
      { property: "og:description", content: "Government, academic, international, and advocacy sources for deeper study." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageShell
      eyebrow="Resources"
      icon={BookOpen}
      title={<>Where to go <span className="gradient-text">when the page ends</span></>}
      description="A handpicked starting point for deeper study — official agencies, university centers, global organizations, and the Filipino advocates doing the work on the ground."
    >
      <ResourcesSection />
    </PageShell>
  );
}
