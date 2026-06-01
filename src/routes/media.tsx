import { createFileRoute } from "@tanstack/react-router";
import { Tv } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { MediaSection } from "@/components/sections/MediaSection";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Gender in Media & Entertainment — Gender & Society PH" },
      { name: "description", content: "Traditional and modern Philippine media representation of gender, LGBTQ+ visibility, and advertising trends." },
      { property: "og:title", content: "Gender in Media & Entertainment" },
      { property: "og:description", content: "How Philippine media tells gender — from martyr-mothers to queer artistry going global." },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <PageShell
      eyebrow="Media & Entertainment"
      icon={Tv}
      title={<>The stories we watch, <span className="gradient-text">and the ones they shape</span></>}
      description="Teleseryes, ads, films, and viral clips quietly script how Filipinos understand gender — sometimes reinforcing old roles, sometimes daring to rewrite them."
    >
      <MediaSection />
    </PageShell>
  );
}
